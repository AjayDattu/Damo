import { useState, useEffect, useRef } from "react";

const MouseFollower = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const followerRef = useRef(null);
  const dotRef = useRef(null);
  let mouseX = useRef(0);
  let mouseY = useRef(0);
  let followerX = useRef(0);
  let followerY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${event.clientX}px`;
        dotRef.current.style.top = `${event.clientY}px`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleClick = () => {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 400);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [role='button'], [data-magnetic]"))
        setIsHovering(true);
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, [role='button'], [data-magnetic]"))
        setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  useEffect(() => {
    const animate = () => {
      followerX.current += (mouseX.current - followerX.current) * 0.08;
      followerY.current += (mouseY.current - followerY.current) * 0.08;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerX.current}px`;
        followerRef.current.style.top = `${followerY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)
    return null;

  return (
    <>
      {/* Slow-following ring */}
      <div
        ref={followerRef}
        style={{
          position: "fixed",
          width: isHovering ? "48px" : isActive ? "56px" : "32px",
          height: isHovering ? "48px" : isActive ? "56px" : "32px",
          border: isActive
            ? "1.5px solid rgba(255,87,34,0.6)"
            : "1.5px solid rgba(150,150,150,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
      {/* Fast dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: isHovering ? "6px" : "5px",
          height: isHovering ? "6px" : "5px",
          background: isActive ? "rgba(255,87,34,0.9)" : "rgba(150,150,150,0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "width 0.15s ease, height 0.15s ease, background 0.2s ease, opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
          zIndex: 10000,
        }}
      />
    </>
  );
};

export default MouseFollower;

import { useState, useEffect, useRef } from "react";

const MouseFollower = () => {
  const [isActive, setIsActive] = useState(false);
  const followerRef = useRef(null);
  let mouseX = useRef(0);
  let mouseY = useRef(0);
  let followerX = useRef(0);
  let followerY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    const handleClick = () => {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 300);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      // Smoothly move the follower towards the mouse position
      followerX.current += (mouseX.current - followerX.current) * 0.1;
      followerY.current += (mouseY.current - followerY.current) * 0.1;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerX.current}px`;
        followerRef.current.style.top = `${followerY.current}px`;
      }

      requestAnimationFrame(animate); // Repeat animation
    };

    animate();
  }, []);

  return (
    <div
      ref={followerRef}
      className={`follower ${isActive ? "active" : ""}`}
      style={{
        position: "fixed",
        width: isActive ? "50px" : "20px",
        height: isActive ? "50px" : "20px",
        background: isActive
          ? "rgba(255, 87, 34, 0.3)"
          : "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        backdropFilter: isActive ? "blur(15px)" : "blur(10px)",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        transition:
          "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, backdrop-filter 0.2s ease",
      }}
    />
  );
};

export default MouseFollower;

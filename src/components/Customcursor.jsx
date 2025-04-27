import { useRef, useEffect, useState } from 'react';

const MouseFollower = () => {
  const canvasRef = useRef(null);
  const followerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  let mouseX = useRef(0);
  let mouseY = useRef(0);
  let followerX = useRef(0);
  let followerY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleClick = () => {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 400);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      followerX.current += (mouseX.current - followerX.current) * 0.2;
      followerY.current += (mouseY.current - followerY.current) * 0.2;

      if (followerRef.current && canvasRef.current) {
        followerRef.current.style.left = `${followerX.current}px`;
        followerRef.current.style.top = `${followerY.current}px`;

        const ctx = canvasRef.current.getContext('2d');
        const w = canvasRef.current.width = 140;
        const h = canvasRef.current.height = 140;
        ctx.clearRect(0, 0, w, h);

        const centerX = w / 2;
        const centerY = h / 2;

        const boltCount = isActive ? 40 : 12;
        for (let i = 0; i < boltCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          drawLightning(ctx, centerX, centerY, angle, isActive);
        }

        if (isActive) {
          drawEnergyRing(ctx, centerX, centerY);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [isActive]);

  const drawLightning = (ctx, x, y, angle, blast) => {
    const segments = 5;
    const length = blast ? 28 : 20;
    const amplitude = blast ? 6 : 3;
    const thickness = blast ? 2.5 : 1;
    const hue = blast ? 45 : 270;

    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < segments; i++) {
      const progress = i / segments;
      const dx = Math.cos(angle) * (length * progress) + (Math.random() - 0.5) * amplitude;
      const dy = Math.sin(angle) * (length * progress) + (Math.random() - 0.5) * amplitude;
      ctx.lineTo(x + dx, y + dy);
    }

    ctx.strokeStyle = `hsl(${hue + Math.random() * 40}, 100%, 65%)`;
    ctx.lineWidth = thickness;
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = blast ? 30 : 15;
    ctx.stroke();
  };

  const drawEnergyRing = (ctx, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 30 + Math.random() * 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 150, 0, 0.4)';
    ctx.lineWidth = 2 + Math.random() * 2;
    ctx.shadowColor = 'orange';
    ctx.shadowBlur = 25;
    ctx.stroke();
  };

  return (
    <div
      ref={followerRef}
      style={{
        position: 'fixed',
        width: '140px',
        height: '140px',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <canvas
        ref={canvasRef}
        width={140}
        height={140}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: isActive ? '38px' : '24px',
          height: isActive ? '38px' : '24px',
          transform: 'translate(-50%, -50%)',
          background: isActive
            ? 'radial-gradient(circle, #000 40%, #ff3300 90%)'
            : 'radial-gradient(circle, #000 50%, #111 100%)',
          borderRadius: '50%',
          boxShadow: isActive
            ? '0 0 60px #6600cc, 0 0 100px #ff3300'
            : '0 0 10px #6600cc, 0 0 20px #330066',
          transition: 'all 0.2s ease',
        }}
      />
    </div>
  );
};

export default MouseFollower;

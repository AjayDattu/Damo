// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';

const SimpleMouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (followerRef.current) {
        followerRef.current.style.left = `${e.clientX}px`;
        followerRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        backgroundColor: '#00f', // Blue color
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        transition: 'left 0.1s ease, top 0.1s ease', // Smooth movement
      }}
    />
  );
};

export default SimpleMouseFollower;

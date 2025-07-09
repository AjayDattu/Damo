import "./page.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import useMousePosition from "../utils/useMousePosition";
import { useNavigate } from "react-router";
export default function Entry() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/MainPage");
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <div className="main" data-aos="fade-in">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="pa"
        >
          <img
            className="w-[100%] h-[50%]"
            src="https://res.cloudinary.com/dxxics5nv/image/upload/v1740746143/1709402884622_zuzvzh.jpg"
          />
        </p>
      </motion.div>

      <div className="body p-10">
        <p className="text-white  text-center">
          Welcome! If you’re here to know more{" "}
          <span className="spa">about me </span> you’re in the right place.
        </p>
      </div>
    </div>
  );
}

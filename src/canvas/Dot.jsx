import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";


const Dot = () => {
  const cursorRef = useRef(null); 

  useEffect(() => {
    const cursorElement = cursorRef.current;

    const handleMouseMove = (event) => {
      gsap.to(cursorElement, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2, 
        ease: "power4.in.out",
        delay:0.1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div ref={cursorRef} className="cursor"></div>
    </div>
  );
};

export default Dot;

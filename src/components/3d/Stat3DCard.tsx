
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface Stat3DCardProps {
  value: string;
  label: string;
  color: "blue" | "gold";
}

const Stat3DCard = ({ value, label, color }: Stat3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [springs, api] = useSpring(() => ({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    config: { mass: 2, tension: 500, friction: 40 },
  }));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const angleX = (mouseY - centerY) / 20;
    const angleY = (mouseX - centerX) / 20;
    
    api.start({
      transform: `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    api.start({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
  };

  const bgClass = color === "blue" 
    ? "bg-blue-600/20 shadow-[0_0_15px_rgba(30,144,255,0.3)]" 
    : "bg-[#daa520]/20 shadow-[0_0_15px_rgba(218,165,32,0.3)]";
    
  const valueClass = color === "blue" ? "text-blue-400" : "text-[#daa520]";

  return (
    <animated.div
      ref={cardRef}
      className={`${bgClass} p-6 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:shadow-lg`}
      style={springs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${valueClass} text-4xl font-bold mb-2`}>{value}</div>
      <div className="text-gray-300">{label}</div>
    </animated.div>
  );
};

export default Stat3DCard;

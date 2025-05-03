
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

interface Product3DCardProps {
  title: string;
  image: string;
  description: string;
}

const Product3DCard = ({ title, image, description }: Product3DCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate the 3D transform based on mouse position
  const [{ xys }, api] = useSpring(() => ({ 
    xys: [0, 0, 1],
    config: { mass: 1, tension: 350, friction: 40 } 
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    api.start({ xys: [y * 20, x * 20, 1.05] });
  };

  const handleMouseLeave = () => {
    api.start({ xys: [0, 0, 1] });
    setIsHovered(false);
  };

  // Convert the x,y,scale values into a CSS transform
  const transform = xys.to(
    (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  );

  return (
    <animated.div
      ref={ref}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-6 h-full shadow-xl transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        boxShadow: isHovered ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="absolute -right-5 -top-5 w-24 h-24 rounded-full bg-unnati-primary/20 blur-2xl" />
        <div className="absolute -left-5 -bottom-5 w-32 h-32 rounded-full bg-unnati-secondary/20 blur-2xl" />
        
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl p-3 mb-4 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{description}</p>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="h-1 w-12 bg-unnati-primary rounded-full" />
          <div className="text-xs text-unnati-secondary">Unnati Quality</div>
        </div>
      </div>
    </animated.div>
  );
};

export default Product3DCard;

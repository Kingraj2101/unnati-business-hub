
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-unnati-primary to-unnati-primary/80 text-white">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bS0yMyA0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTEgMWg0djFoLTR2LTF6bTE2LTloNHYxaC00di0xem0wLTJoMXY1aC0xdi01em02IDBoMXY1aC0xdi01em0tMSAxaDR2MWgtNHYtMXptLTIzIDRoNHYxaC00di0xem0wLTJoMXY1aC0xdi01em02IDBoMXY1aC0xdi01em0tMSAxaDR2MWgtNHYtMXptMTYtOWg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xem0tMjMgNGg0djFoLTR2LTF6bTAtMmgxdjVoLTF2LTV6bTYgMGgxdjVoLTF2LTV6bS0xIDFoNHYxaC00di0xeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Unnati Traders
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-light max-w-3xl">
            Leading manufacturers and suppliers of wires and electric hardware with integrated business management solutions
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button 
              asChild
              size="lg"
              className="bg-unnati-secondary hover:bg-unnati-secondary/90 text-white"
            >
              <Link to="/products">
                Explore Products & Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              <Link to="/login">
                Login / Register
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

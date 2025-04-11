
import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarHeaderProps {
  dashboardTitle: string;
  basePath: string;
  toggleSidebar: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ 
  dashboardTitle, 
  basePath, 
  toggleSidebar 
}) => {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-unnati-dark">
      <NavLink to={basePath} className="flex items-center">
        <span className="font-bold text-xl">{dashboardTitle}</span>
      </NavLink>
      
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white/70 hover:text-white"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default SidebarHeader;

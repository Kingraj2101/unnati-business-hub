
import React from "react";

const SidebarFooter: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-full p-4 border-t border-unnati-dark">
      <div className="flex items-center text-sm text-white/50">
        <span>© {new Date().getFullYear()} Unnati Traders</span>
      </div>
    </div>
  );
};

export default SidebarFooter;

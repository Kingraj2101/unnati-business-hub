
import React from "react";
import { cn } from "@/lib/utils";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import { 
  SidebarMenu, 
  adminMenuItems, 
  storeMenuItems, 
  vendorMenuItems, 
  factoryMenuItems 
} from "./SidebarMenuItems";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const userType = localStorage.getItem("userType") || "admin";

  let menuItems = adminMenuItems;
  let dashboardTitle = "Shree Unnati Traders";
  let basePath = "/dashboard";
  
  if (userType === "store") {
    menuItems = storeMenuItems;
    dashboardTitle = "Unnati Retail Store";
    basePath = "/store-dashboard";
  } else if (userType === "vendor") {
    menuItems = vendorMenuItems;
    dashboardTitle = "Unnati Vendor Portal";
    basePath = "/vendor-dashboard";
  } else if (userType === "factory") {
    menuItems = factoryMenuItems;
    dashboardTitle = "Unnati Factory";
    basePath = "/factory-dashboard";
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-sidebar text-sidebar-foreground shadow-lg transition-transform md:relative md:translate-x-0 md:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center px-4 border-b border-sidebar-border bg-unnati-dark">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-unnati-primary to-unnati-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="font-bold text-white text-lg">{dashboardTitle}</span>
          </div>
          
          <button
            onClick={toggleSidebar}
            className="ml-auto md:hidden text-white/70 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
          <SidebarMenu menuItems={menuItems} toggleSidebar={toggleSidebar} />
        </div>

        <SidebarFooter />
      </aside>
    </>
  );
};

export default Sidebar;


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
    dashboardTitle = "Retail Store";
    basePath = "/store-dashboard";
  } else if (userType === "vendor") {
    menuItems = vendorMenuItems;
    dashboardTitle = "Vendor Portal";
    basePath = "/vendor-dashboard";
  } else if (userType === "factory") {
    menuItems = factoryMenuItems;
    dashboardTitle = "Factory Management";
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
          "fixed top-0 left-0 z-50 h-full w-64 bg-unnati-dark text-white shadow-lg transition-transform md:relative md:translate-x-0 md:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarHeader 
          dashboardTitle={dashboardTitle} 
          basePath={basePath} 
          toggleSidebar={toggleSidebar} 
        />

        <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
          <SidebarMenu menuItems={menuItems} toggleSidebar={toggleSidebar} />
        </div>

        <SidebarFooter />
      </aside>
    </>
  );
};

export default Sidebar;

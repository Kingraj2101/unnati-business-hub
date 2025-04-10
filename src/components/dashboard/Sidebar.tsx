
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Package,
  ShoppingCart,
  FileText,
  BarChart3,
  Users,
  Settings,
  TrendingUp,
  Truck,
  ChevronRight,
  LayoutDashboard,
  DollarSign,
  LifeBuoy,
  Factory,
  Store,
  ShoppingBag,
  Box,
  CreditCard,
  Wrench,
  CircleDollarSign,
  CheckCircle2,
  Receipt,
  ClipboardList
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const userType = localStorage.getItem("userType") || "admin";

  const adminMenuItems = [
    {
      title: "Main Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Billing Desk",
      icon: <FileText size={20} />,
      path: "/dashboard/billing",
    },
    {
      title: "Accounting",
      icon: <DollarSign size={20} />,
      path: "/dashboard/accounting",
    },
    {
      title: "Inventory",
      icon: <Package size={20} />,
      path: "/dashboard/inventory",
    },
    {
      title: "Expenses",
      icon: <TrendingUp size={20} />,
      path: "/dashboard/expenses",
    },
    {
      title: "Factory Stock",
      icon: <Factory size={20} />,
      path: "/dashboard/factory-stock",
    },
    {
      title: "Retail Store",
      icon: <Store size={20} />,
      path: "/dashboard/retail",
    },
    {
      title: "After-Sales Service",
      icon: <LifeBuoy size={20} />,
      path: "/dashboard/service",
    },
    {
      title: "Suppliers",
      icon: <Truck size={20} />,
      path: "/dashboard/suppliers",
    },
    {
      title: "Reports",
      icon: <BarChart3 size={20} />,
      path: "/dashboard/reports",
    },
    {
      title: "User Management",
      icon: <Users size={20} />,
      path: "/dashboard/users",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
  ];

  const storeMenuItems = [
    {
      title: "Store Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/store-dashboard",
    },
    {
      title: "Sales & Billing",
      icon: <ShoppingCart size={20} />,
      path: "/store-dashboard/sales",
    },
    {
      title: "Billing System",
      icon: <Receipt size={20} />,
      path: "/store-dashboard/billing",
    },
    {
      title: "Supply Management",
      icon: <Truck size={20} />,
      path: "/store-dashboard/supply",
    },
    {
      title: "Inventory",
      icon: <Package size={20} />,
      path: "/store-dashboard/inventory",
    },
    {
      title: "Customers",
      icon: <Users size={20} />,
      path: "/store-dashboard/customers",
    },
    {
      title: "Order Management",
      icon: <ShoppingBag size={20} />,
      path: "/store-dashboard/orders",
    },
    {
      title: "Payments",
      icon: <CreditCard size={20} />,
      path: "/store-dashboard/payments",
    },
    {
      title: "After-Sales Service",
      icon: <LifeBuoy size={20} />,
      path: "/store-dashboard/service",
    },
    {
      title: "Reports",
      icon: <BarChart3 size={20} />,
      path: "/store-dashboard/reports",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/store-dashboard/settings",
    },
  ];

  const vendorMenuItems = [
    {
      title: "Vendor Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/vendor-dashboard",
    },
    {
      title: "Orders",
      icon: <ShoppingBag size={20} />,
      path: "/vendor-dashboard/orders",
    },
    {
      title: "Deliveries",
      icon: <Truck size={20} />,
      path: "/vendor-dashboard/deliveries",
    },
    {
      title: "Products",
      icon: <Package size={20} />,
      path: "/vendor-dashboard/products",
    },
    {
      title: "Payments",
      icon: <CreditCard size={20} />,
      path: "/vendor-dashboard/payments",
    },
    {
      title: "Invoices",
      icon: <FileText size={20} />,
      path: "/vendor-dashboard/invoices",
    },
    {
      title: "Reports",
      icon: <BarChart3 size={20} />,
      path: "/vendor-dashboard/reports",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/vendor-dashboard/settings",
    },
  ];

  const factoryMenuItems = [
    {
      title: "Factory Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/factory-dashboard",
    },
    {
      title: "Production",
      icon: <Factory size={20} />,
      path: "/factory-dashboard/production",
    },
    {
      title: "Billing System",
      icon: <Receipt size={20} />,
      path: "/factory-dashboard/billing",
    },
    {
      title: "Supply Management",
      icon: <ClipboardList size={20} />,
      path: "/factory-dashboard/supply",
    },
    {
      title: "Raw Materials",
      icon: <Box size={20} />,
      path: "/factory-dashboard/materials",
    },
    {
      title: "Inventory",
      icon: <Package size={20} />,
      path: "/factory-dashboard/inventory",
    },
    {
      title: "Workers",
      icon: <Users size={20} />,
      path: "/factory-dashboard/workers",
    },
    {
      title: "Maintenance",
      icon: <Wrench size={20} />,
      path: "/factory-dashboard/maintenance",
    },
    {
      title: "Expenses",
      icon: <CircleDollarSign size={20} />,
      path: "/factory-dashboard/expenses",
    },
    {
      title: "Quality Control",
      icon: <CheckCircle2 size={20} />,
      path: "/factory-dashboard/quality",
    },
    {
      title: "Reports",
      icon: <BarChart3 size={20} />,
      path: "/factory-dashboard/reports",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/factory-dashboard/settings",
    },
  ];

  let menuItems = adminMenuItems;
  let dashboardTitle = "Shree Unnati Traders";
  
  if (userType === "store") {
    menuItems = storeMenuItems;
    dashboardTitle = "Retail Store";
  } else if (userType === "vendor") {
    menuItems = vendorMenuItems;
    dashboardTitle = "Vendor Portal";
  } else if (userType === "factory") {
    menuItems = factoryMenuItems;
    dashboardTitle = "Factory Management";
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
        <div className="flex items-center justify-between h-16 px-4 border-b border-unnati-dark">
          <NavLink to={userType === "admin" ? "/dashboard" : `/${userType}-dashboard`} className="flex items-center">
            <span className="font-bold text-xl">{dashboardTitle}</span>
          </NavLink>
          
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white/70 hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-3 py-2 rounded-md transition-colors group",
                    isActive
                      ? "bg-unnati-primary/20 text-white"
                      : "text-white/70 hover:bg-unnati-primary/10 hover:text-white"
                  )
                }
                onClick={() => {
                  if (window.innerWidth < 768) {
                    toggleSidebar();
                  }
                }}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t border-unnati-dark">
          <div className="flex items-center text-sm text-white/50">
            <span>© {new Date().getFullYear()} Unnati Traders</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

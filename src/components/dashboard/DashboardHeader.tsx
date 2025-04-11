
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlobalSearch from "./GlobalSearch";

interface DashboardHeaderProps {
  toggleSidebar: () => void;
}

const DashboardHeader = ({ toggleSidebar }: DashboardHeaderProps) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || '{"name": "User"}');

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="relative w-64 hidden md:block">
            <GlobalSearch />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-unnati-secondary rounded-full"></span>
          </Button>

          <div className="flex items-center">
            <div className="mr-4 text-right hidden sm:block">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role || "Admin"}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-unnati-primary/80 flex items-center justify-center text-white font-medium">
              {user.name.charAt(0)}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-gray-700 hover:text-red-600 hidden sm:flex"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;


import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import BillingWorkflow from "@/components/dashboard/workflows/BillingWorkflow";
import InventoryWorkflow from "@/components/dashboard/workflows/InventoryWorkflow";
import FactoryWorkflow from "@/components/dashboard/workflows/FactoryWorkflow";
import RetailWorkflow from "@/components/dashboard/workflows/RetailWorkflow";
import { 
  ArrowUpRight, 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Truck,
  AlertCircle,
  CheckCircle2,
  Package,
  LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <LayoutDashboard className="h-6 w-6 text-unnati-primary" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Welcome back to your business management dashboard</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Sales"
              value="₹4,35,600"
              icon={<DollarSign size={20} className="text-blue-500" />}
              change={{ value: "12.5%", positive: true }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Inventory Value"
              value="₹12,45,230"
              icon={<Package size={20} className="text-green-500" />}
              change={{ value: "3.2%", positive: true }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="BNPL Outstanding"
              value="₹85,450"
              icon={<ShoppingCart size={20} className="text-amber-500" />}
              change={{ value: "5.7%", positive: false }}
              className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Active Suppliers"
              value="34"
              icon={<Truck size={20} className="text-purple-500" />}
              className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
          
          {/* Alerts */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-5 flex items-start shadow-sm">
              <div className="mr-4 bg-amber-100 dark:bg-amber-800 p-3 rounded-full text-amber-600 dark:text-amber-300">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-300 text-lg mb-1">Low Stock Alert</h3>
                <p className="text-amber-700 dark:text-amber-400 text-sm">5 products are below minimum stock levels. Review inventory soon.</p>
                <Button variant="link" className="p-0 h-auto text-amber-600 dark:text-amber-300 text-sm mt-2 font-medium">
                  View Inventory →
                </Button>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5 flex items-start shadow-sm">
              <div className="mr-4 bg-green-100 dark:bg-green-800 p-3 rounded-full text-green-600 dark:text-green-300">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-300 text-lg mb-1">Payment Received</h3>
                <p className="text-green-700 dark:text-green-400 text-sm">3 customer payments were received today totaling ₹28,450.</p>
                <Button variant="link" className="p-0 h-auto text-green-600 dark:text-green-300 text-sm mt-2 font-medium">
                  View Transactions →
                </Button>
              </div>
            </div>
          </div>
          
          {/* Workflows */}
          <div className="space-y-8">
            <BillingWorkflow />
            <InventoryWorkflow />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FactoryWorkflow />
              <RetailWorkflow />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

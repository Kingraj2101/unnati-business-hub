
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  ArrowUpRight, 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Truck,
  AlertCircle,
  CheckCircle2,
  Package
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

  // Sample data for charts
  const salesData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 4500 },
    { name: "May", value: 6000 },
    { name: "Jun", value: 5500 },
  ];

  const inventoryData = [
    { name: "Wires", value: 1200 },
    { name: "Cables", value: 900 },
    { name: "Switches", value: 1700 },
    { name: "Breakers", value: 1400 },
    { name: "Accessories", value: 2000 },
    { name: "Lights", value: 1600 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Dashboard</h1>
            <p className="text-gray-500">Welcome back to your business management dashboard</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Total Sales"
              value="₹4,35,600"
              icon={<DollarSign size={20} />}
              change={{ value: "12.5%", positive: true }}
            />
            <StatCard
              title="Inventory Value"
              value="₹12,45,230"
              icon={<Package size={20} />}
              change={{ value: "3.2%", positive: true }}
            />
            <StatCard
              title="BNPL Outstanding"
              value="₹85,450"
              icon={<ShoppingCart size={20} />}
              change={{ value: "5.7%", positive: false }}
            />
            <StatCard
              title="Active Suppliers"
              value="34"
              icon={<Truck size={20} />}
            />
          </div>
          
          {/* Alerts */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
              <div className="mr-3 text-amber-500">
                <AlertCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-amber-800">Low Stock Alert</h3>
                <p className="text-amber-700 text-sm">5 products are below minimum stock levels. Review inventory soon.</p>
                <Button variant="link" className="p-0 h-auto text-amber-600 text-sm mt-1">
                  View Inventory
                </Button>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
              <div className="mr-3 text-green-500">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">Payment Received</h3>
                <p className="text-green-700 text-sm">3 customer payments were received today totaling ₹28,450.</p>
                <Button variant="link" className="p-0 h-auto text-green-600 text-sm mt-1">
                  View Transactions
                </Button>
              </div>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Sales Overview (Last 6 months)" type="bar" data={salesData} />
            <ChartCard title="Inventory by Category" type="bar" data={inventoryData} />
          </div>
          
          {/* Recent Activity & Quick Access */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentActivityCard />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-left">
                  <Package className="mr-2 h-4 w-4" />
                  Add New Stock
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Customers
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Create Invoice
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <Truck className="mr-2 h-4 w-4" />
                  Supplier Orders
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Generate Reports
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

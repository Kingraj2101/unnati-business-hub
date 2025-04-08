
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import { 
  ShoppingCart,
  Package, 
  Users,
  Receipt, 
  Truck,
  DollarSign,
  BarChart3,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const StoreDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");

  // Redirect to login if not authenticated or not a store user
  if (!isAuthenticated || userType !== "store") {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Retail Store Dashboard</h1>
            <p className="text-gray-500">Manage your retail store operations</p>
          </div>
          
          {/* Search and Quick Actions */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search products, invoices, customers..." className="pl-9" />
            </div>
            <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
              <ShoppingCart className="mr-2 h-4 w-4" />
              New Sale
            </Button>
            <Button variant="outline">
              <Package className="mr-2 h-4 w-4" />
              Inventory
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Sales"
              value="₹24,500"
              icon={<ShoppingCart size={20} />}
              change={{ value: "15%", positive: true }}
            />
            <StatCard
              title="Store Inventory"
              value="1,245 items"
              icon={<Package size={20} />}
              change={{ value: "3.2%", positive: true }}
            />
            <StatCard
              title="Active Customers"
              value="156"
              icon={<Users size={20} />}
              change={{ value: "7.8%", positive: true }}
            />
            <StatCard
              title="Pending Orders"
              value="12"
              icon={<Truck size={20} />}
            />
          </div>
          
          {/* Recent Activities and Quick Access */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between p-3 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">Invoice #INV-{1000 + item}</p>
                      <p className="text-sm text-gray-500">Customer: {["Rahul Sharma", "Priya Patel", "Amit Singh", "Sneha Verma", "Vikram Malhotra"][item - 1]}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{Math.floor(Math.random() * 10000) + 1000}</p>
                      <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-2 p-0">
                View All Transactions
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-left">
                  <Receipt className="mr-2 h-4 w-4" />
                  Generate Invoice
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <Users className="mr-2 h-4 w-4" />
                  Add Customer
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <Package className="mr-2 h-4 w-4" />
                  Update Inventory
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Check Payments
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Sales Report
                </Button>
              </div>
            </div>
          </div>
          
          {/* Store Performance */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-semibold mb-4">Store Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-1">Top Selling Products</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
                  <li>House Wiring Cable (2.5mm)</li>
                  <li>LED Bulbs (9W)</li>
                  <li>MCB Switch (16A)</li>
                  <li>Extension Board (4 Socket)</li>
                  <li>Ceiling Fan Regulator</li>
                </ol>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-1">Low Stock Items</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex justify-between">
                    <span>PVC Conduit Pipes</span>
                    <span className="text-red-500">3 left</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Junction Boxes</span>
                    <span className="text-red-500">5 left</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wall Switches</span>
                    <span className="text-amber-500">12 left</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cable Ties</span>
                    <span className="text-amber-500">15 left</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-1">Outstanding Payments</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Total:</span> ₹36,450</p>
                  <p><span className="font-medium">Overdue:</span> ₹12,800</p>
                  <p><span className="font-medium">Due this week:</span> ₹8,400</p>
                  <Button size="sm" variant="outline" className="mt-2 w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreDashboard;

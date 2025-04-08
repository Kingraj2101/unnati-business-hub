
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  Factory,
  Package, 
  Truck,
  Users,
  AlertTriangle,
  CheckCircle2,
  Box,
  BarChart3,
  CircleDollarSign,
  Store
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const FactoryDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");

  // Redirect to login if not authenticated or not a factory user
  if (!isAuthenticated || userType !== "factory") {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data for charts
  const productionData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3500 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 4500 },
    { name: "May", value: 6000 },
    { name: "Jun", value: 5500 },
  ];

  const rawMaterialData = [
    { name: "Copper", value: 35 },
    { name: "PVC", value: 45 },
    { name: "Aluminum", value: 15 },
    { name: "Rubber", value: 5 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Factory Dashboard</h1>
            <p className="text-gray-500">Monitor production, inventory and operations</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Production"
              value="1,450 units"
              icon={<Factory size={20} />}
              change={{ value: "8.5%", positive: true }}
            />
            <StatCard
              title="Raw Material Stock"
              value="24.5 tons"
              icon={<Box size={20} />}
              change={{ value: "3.2%", positive: false }}
            />
            <StatCard
              title="Production Queue"
              value="8 orders"
              icon={<Package size={20} />}
            />
            <StatCard
              title="Factory Workers"
              value="32 active"
              icon={<Users size={20} />}
            />
          </div>

          {/* Production Status */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-semibold mb-4">Production Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-md p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium">Wire Production Line</h3>
                    <p className="text-sm text-green-600">Active • 85% Efficiency</p>
                  </div>
                  <CheckCircle2 className="text-green-500" size={20} />
                </div>
                <div className="mb-1 flex justify-between text-xs">
                  <span>Daily Target: 800 units</span>
                  <span>650/800</span>
                </div>
                <Progress value={81} className="h-2" />
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium">Cable Assembly</h3>
                    <p className="text-sm text-amber-600">Maintenance • 45% Efficiency</p>
                  </div>
                  <AlertTriangle className="text-amber-500" size={20} />
                </div>
                <div className="mb-1 flex justify-between text-xs">
                  <span>Daily Target: 600 units</span>
                  <span>270/600</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium">Quality Control</h3>
                    <p className="text-sm text-green-600">Active • 92% Pass Rate</p>
                  </div>
                  <CheckCircle2 className="text-green-500" size={20} />
                </div>
                <div className="mb-1 flex justify-between text-xs">
                  <span>Inspected: 580 units</span>
                  <span>92% Pass</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Production Output (Last 6 months)" type="line" data={productionData} />
            <ChartCard title="Raw Material Usage" type="pie" data={rawMaterialData} />
          </div>
          
          {/* Pending Orders and Delivery Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Pending Production Orders</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: "PO-7845", product: "1.5mm House Wire", quantity: "2,500 m", date: "12 Apr 2025", status: "In Progress" },
                      { id: "PO-7842", product: "2.5mm Industrial Cable", quantity: "1,800 m", date: "14 Apr 2025", status: "Queued" },
                      { id: "PO-7839", product: "4mm Armored Cable", quantity: "950 m", date: "15 Apr 2025", status: "Queued" },
                      { id: "PO-7835", product: "6mm Power Cable", quantity: "750 m", date: "18 Apr 2025", status: "Scheduled" },
                      { id: "PO-7830", product: "1mm Flexible Wire", quantity: "3,200 m", date: "20 Apr 2025", status: "Scheduled" }
                    ].map((order) => (
                      <tr key={order.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === "In Progress" 
                              ? "bg-blue-100 text-blue-800" 
                              : order.status === "Queued" 
                              ? "bg-amber-100 text-amber-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Raw Material Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Copper Wire</span>
                    <span className="text-sm text-gray-500">12.4 tons / 20 tons</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">PVC Compound</span>
                    <span className="text-sm text-gray-500">8.2 tons / 15 tons</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Aluminum Wire</span>
                    <span className="text-sm text-red-500">1.8 tons / 10 tons</span>
                  </div>
                  <Progress value={18} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Rubber Insulation</span>
                    <span className="text-sm text-amber-500">2.1 tons / 5 tons</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Pending Orders</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Copper Wire (5mm)</span>
                      <span>10 tons • Due in 2 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Aluminum Wire (2mm)</span>
                      <span>8 tons • Due in 5 days</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-2 bg-unnati-primary hover:bg-unnati-primary/90">
                  <Truck className="mr-2 h-4 w-4" />
                  Order Raw Materials
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <Package className="h-6 w-6 mb-2" />
                <span>Production Schedule</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <Box className="h-6 w-6 mb-2" />
                <span>Inventory</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <Users className="h-6 w-6 mb-2" />
                <span>Worker Management</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <BarChart3 className="h-6 w-6 mb-2" />
                <span>Production Reports</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <CircleDollarSign className="h-6 w-6 mb-2" />
                <span>Cost Analysis</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FactoryDashboard;


import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  Factory,
  Truck,
  PlusCircle,
  FileBarChart,
  ClipboardList
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FactoryStockDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample stock data
  const stockItems = [
    { id: "PRD001", name: "Copper Wire 1.5mm", category: "Raw Materials", quantity: "450 kg", value: "₹1,15,200", status: "In Stock" },
    { id: "PRD002", name: "PVC Conduit Pipes", category: "Components", quantity: "325 units", value: "₹45,500", status: "Low Stock" },
    { id: "PRD003", name: "Circuit Breakers 16A", category: "Finished Goods", quantity: "280 units", value: "₹98,000", status: "In Stock" },
    { id: "PRD004", name: "LED Bulbs 9W", category: "Finished Goods", quantity: "620 units", value: "₹62,000", status: "In Stock" },
    { id: "PRD005", name: "Terminal Blocks", category: "Components", quantity: "85 units", value: "₹8,500", status: "Out of Stock" },
  ];

  // Sample data for charts
  const stockCategoryData = [
    { name: "Raw Materials", value: 235000 },
    { name: "Components", value: 128000 },
    { name: "Finished Goods", value: 345000 },
    { name: "Packaging", value: 42000 },
    { name: "Spare Parts", value: 28000 },
  ];

  const stockTrendData = [
    { name: "Jan", value: 620000 },
    { name: "Feb", value: 680000 },
    { name: "Mar", value: 740000 },
    { name: "Apr", value: 780000 },
    { name: "May", value: 820000 },
    { name: "Jun", value: 778000 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Factory Stock Dashboard</h1>
            <p className="text-gray-500">Monitor and manage production inventory</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Total Stock Value"
              value="₹7,78,000"
              icon={<Package size={20} />}
              change={{ value: "5.2%", positive: true }}
            />
            <StatCard
              title="Low Stock Items"
              value="12"
              icon={<AlertTriangle size={20} />}
              change={{ value: "3", positive: false }}
            />
            <StatCard
              title="Monthly Production"
              value="1,250 units"
              icon={<Factory size={20} />}
              change={{ value: "8.5%", positive: true }}
            />
            <StatCard
              title="Pending Orders"
              value="18"
              icon={<Truck size={20} />}
            />
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <PlusCircle size={20} />
              <span>Add Stock Entry</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <TrendingUp size={20} />
              <span>Stock Transfer</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <FileBarChart size={20} />
              <span>Stock Report</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <ClipboardList size={20} />
              <span>Stock Count</span>
            </Button>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Stock Value by Category" type="pie" data={stockCategoryData} />
            <ChartCard title="Stock Value Trend (Last 6 months)" type="line" data={stockTrendData} />
          </div>
          
          {/* Low Stock Alerts */}
          <div className="mb-6">
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 text-lg flex items-center gap-2">
                  <AlertTriangle size={18} />
                  Low Stock Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 mb-3">5 items are below minimum stock levels and require immediate attention</p>
                <Button variant="outline" className="bg-white border-amber-300 text-amber-800">
                  View Low Stock Items
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Stock Items */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Current Stock</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === 'In Stock' 
                            ? 'bg-green-100 text-green-800'
                            : item.status === 'Low Stock'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {item.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default FactoryStockDashboard;

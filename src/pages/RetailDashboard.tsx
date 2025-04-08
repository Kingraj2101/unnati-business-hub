
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  ShoppingCart, 
  Users, 
  DollarSign, 
  Package,
  Store,
  FileText,
  ShoppingBag,
  BadgePercent
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RetailDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample sales data
  const recentSales = [
    { id: "INV-2025-001", customer: "Raj Kumar", date: "08 Apr, 2025", items: "3", amount: "₹5,850", payment: "Cash" },
    { id: "INV-2025-002", customer: "Sanjay Mehta", date: "08 Apr, 2025", items: "5", amount: "₹12,400", payment: "BNPL" },
    { id: "INV-2025-003", customer: "Neha Singh", date: "07 Apr, 2025", items: "2", amount: "₹3,200", payment: "UPI" },
    { id: "INV-2025-004", customer: "Alok Sharma", date: "07 Apr, 2025", items: "8", amount: "₹18,750", payment: "Card" },
    { id: "INV-2025-005", customer: "Priya Patel", date: "06 Apr, 2025", items: "4", amount: "₹7,500", payment: "Cash" },
  ];

  // Sample data for charts
  const salesCategoryData = [
    { name: "Wires & Cables", value: 35000 },
    { name: "Switches & Sockets", value: 28000 },
    { name: "Lighting", value: 42000 },
    { name: "Fans", value: 32000 },
    { name: "MCBs & DBs", value: 18000 },
    { name: "Accessories", value: 15000 },
  ];

  const dailySalesData = [
    { name: "Mon", value: 12500 },
    { name: "Tue", value: 9800 },
    { name: "Wed", value: 15200 },
    { name: "Thu", value: 11300 },
    { name: "Fri", value: 18400 },
    { name: "Sat", value: 25600 },
    { name: "Sun", value: 16800 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Retail Store Dashboard</h1>
            <p className="text-gray-500">Monitor retail store performance and sales</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Sales"
              value="₹28,450"
              icon={<DollarSign size={20} />}
              change={{ value: "12.5%", positive: true }}
            />
            <StatCard
              title="Customers Today"
              value="32"
              icon={<Users size={20} />}
              change={{ value: "8.2%", positive: true }}
            />
            <StatCard
              title="Items Sold"
              value="85"
              icon={<ShoppingBag size={20} />}
              change={{ value: "15.3%", positive: true }}
            />
            <StatCard
              title="Average Bill"
              value="₹1,750"
              icon={<FileText size={20} />}
              change={{ value: "3.5%", positive: false }}
            />
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              <span>New Sale</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Package size={20} />
              <span>Check Inventory</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <BadgePercent size={20} />
              <span>Discounts</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Store size={20} />
              <span>Daily Report</span>
            </Button>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Daily Sales (Last Week)" type="bar" data={dailySalesData} />
            <ChartCard title="Sales by Category" type="pie" data={salesCategoryData} />
          </div>
          
          {/* Popular Products */}
          <div className="mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-blue-800 font-medium">Havells Wire</p>
                      <p className="text-blue-600 text-sm">₹65 per meter</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Package className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-purple-800 font-medium">LED Bulb 9W</p>
                      <p className="text-purple-600 text-sm">₹120 per unit</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Package className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-800 font-medium">Switch Board</p>
                      <p className="text-green-600 text-sm">₹350 per unit</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Sales */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Recent Sales</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSales.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.id}</TableCell>
                      <TableCell>{sale.customer}</TableCell>
                      <TableCell>{sale.date}</TableCell>
                      <TableCell>{sale.items}</TableCell>
                      <TableCell className="font-medium text-green-600">{sale.amount}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          sale.payment === 'Cash' 
                            ? 'bg-green-100 text-green-800'
                            : sale.payment === 'BNPL'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                        }`}>
                          {sale.payment}
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

export default RetailDashboard;

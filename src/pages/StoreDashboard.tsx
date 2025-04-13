
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  ShoppingCart, 
  Users, 
  CreditCard, 
  Package, 
  Truck, 
  Calendar,
  Store,
  Receipt,
  FileText,
  AlertCircle,
  Bell,
  CheckCircle2,
  CircleDollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SearchBar from "@/components/dashboard/SearchBar";
import { useToast } from "@/hooks/use-toast";

const StoreDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");
  const { toast } = useToast();

  // Redirect if not authenticated or not store user
  if (!isAuthenticated || userType !== "store") {
    localStorage.setItem("userType", "store"); // For demo purposes
    // return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleQuickAction = (action: string) => {
    toast({
      title: `${action} Started`,
      description: `You've initiated the ${action.toLowerCase()} process.`,
    });
  };

  // Sample data for charts
  const dailySalesData = [
    { name: "Mon", value: 28500 },
    { name: "Tue", value: 22000 },
    { name: "Wed", value: 31000 },
    { name: "Thu", value: 26000 },
    { name: "Fri", value: 34000 },
    { name: "Sat", value: 42000 },
    { name: "Sun", value: 31500 },
  ];

  const salesByProductData = [
    { name: "Wires", value: 35 },
    { name: "Switches", value: 25 },
    { name: "Lights", value: 20 },
    { name: "Fans", value: 15 },
    { name: "Others", value: 5 },
  ];

  const paymentMethodData = [
    { name: "Cash", value: 45 },
    { name: "UPI", value: 35 },
    { name: "Card", value: 15 },
    { name: "Credit", value: 5 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Store className="h-6 w-6 text-unnati-primary" />
              Retail Store Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Manage store operations, sales, and inventory</p>
          </div>
          
          {/* Search and Quick Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search store dashboard..." dashboardType="store" />
            
            <div className="flex gap-2">
              <Button 
                className="gap-2 bg-unnati-primary" 
                onClick={() => handleQuickAction("New Sale")}
              >
                <ShoppingCart className="h-4 w-4" />
                New Sale
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleQuickAction("Customer Lookup")}
              >
                <Users className="h-4 w-4" />
                Customer Lookup
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Sales"
              value="₹42,500"
              icon={<ShoppingCart size={20} className="text-blue-500" />}
              change={{ value: "12.5%", positive: true }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Store Visitors"
              value="85"
              icon={<Users size={20} className="text-green-500" />}
              change={{ value: "5.2%", positive: true }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Pending Orders"
              value="12"
              icon={<Package size={20} className="text-amber-500" />}
              change={{ value: "3", positive: false }}
              className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Average Basket"
              value="₹2,450"
              icon={<CircleDollarSign size={20} className="text-purple-500" />}
              change={{ value: "8.3%", positive: true }}
              className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
          
          {/* Sales Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Sales Performance (Last 7 Days)</CardTitle>
                  <CardDescription>Daily revenue breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartCard title="" type="bar" data={dailySalesData} />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                <CardHeader>
                  <CardTitle>Alerts & Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-800 dark:text-amber-300">Low Stock Alert</p>
                      <p className="text-sm text-amber-700 dark:text-amber-400">5 products below reorder level</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-amber-600 dark:text-amber-300">View Items</Button>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-300">Supply Arrival</p>
                      <p className="text-sm text-green-700 dark:text-green-400">New inventory arriving today</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-green-600 dark:text-green-300">Track Delivery</Button>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-3">
                    <Bell className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800 dark:text-blue-300">Customer Feedback</p>
                      <p className="text-sm text-blue-700 dark:text-blue-400">3 new customer reviews received</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-blue-600 dark:text-blue-300">View Reviews</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Sales Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Sales by Product Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="pie" data={salesByProductData} />
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="pie" data={paymentMethodData} />
              </CardContent>
            </Card>
          </div>
          
          {/* Inventory Status */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Inventory Status</span>
                <Button variant="outline" size="sm" className="gap-1">
                  <Package className="h-4 w-4" />
                  <span>View All</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Havells Wires (1.5 mm)</span>
                    <span className="text-sm text-red-500 font-medium">Low Stock (12 units)</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">LED Panels (18W)</span>
                    <span className="text-sm text-amber-500 font-medium">Medium Stock (28 units)</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Ceiling Fans (Standard)</span>
                    <span className="text-sm text-green-500 font-medium">Good Stock (65 units)</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Switches (Modular)</span>
                    <span className="text-sm text-green-500 font-medium">Good Stock (150 units)</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Access Workflows */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Create Invoice")}
              >
                <Receipt className="h-6 w-6 text-unnati-primary" />
                <span>Create Invoice</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Check Inventory")}
              >
                <Package className="h-6 w-6 text-unnati-primary" />
                <span>Check Inventory</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Process Returns")}
              >
                <Truck className="h-6 w-6 text-unnati-primary" />
                <span>Process Returns</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Add Customer")}
              >
                <Users className="h-6 w-6 text-unnati-primary" />
                <span>Add Customer</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("View Reports")}
              >
                <FileText className="h-6 w-6 text-unnati-primary" />
                <span>View Reports</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Process Payment")}
              >
                <CreditCard className="h-6 w-6 text-unnati-primary" />
                <span>Process Payment</span>
              </Button>
            </div>
          </div>
          
          {/* Recent Activity */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Transactions</span>
                <Button variant="outline" size="sm" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>View All</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Invoice</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Payment</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { id: "INV-2025-845", customer: "Raj Kumar", time: "10:45 AM", amount: "₹4,250", method: "UPI" },
                      { id: "INV-2025-844", customer: "Priya Singh", time: "10:15 AM", amount: "₹1,850", method: "Cash" },
                      { id: "INV-2025-843", customer: "Vikram Patel", time: "09:30 AM", amount: "₹6,750", method: "Card" },
                      { id: "INV-2025-842", customer: "Anita Sharma", time: "Yesterday", amount: "₹3,250", method: "UPI" },
                      { id: "INV-2025-841", customer: "Sanjay Mehta", time: "Yesterday", amount: "₹8,450", method: "Cash" }
                    ].map((tx) => (
                      <tr key={tx.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">{tx.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{tx.customer}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{tx.time}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{tx.amount}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            tx.method === "UPI" 
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" 
                              : tx.method === "Cash" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300" 
                              : "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
                          }`}>
                            {tx.method}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StoreDashboard;

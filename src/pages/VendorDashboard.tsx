import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  ShoppingCart, 
  Package, 
  Truck, 
  CreditCard, 
  FileText, 
  CircleDollarSign,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Bell,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Clock,
  BarChart3,
  BoxesIcon,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import SearchBar from "@/components/dashboard/SearchBar";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const VendorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");
  const { toast } = useToast();

  // Redirect if not authenticated or not vendor user
  if (!isAuthenticated || userType !== "vendor") {
    localStorage.setItem("userType", "vendor"); // For demo purposes
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Initiated",
      description: `Searching for "${searchQuery}"`,
    });
  };

  // Sample data for charts
  const orderTrendData = [
    { name: "Jan", value: 24 },
    { name: "Feb", value: 18 },
    { name: "Mar", value: 32 },
    { name: "Apr", value: 28 },
    { name: "May", value: 35 },
    { name: "Jun", value: 30 },
  ];

  const productCategoryData = [
    { name: "Wires", value: 40 },
    { name: "Lights", value: 25 },
    { name: "Switches", value: 20 },
    { name: "Others", value: 15 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <BoxesIcon className="h-6 w-6 text-unnati-primary" />
              Vendor Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Manage orders, deliveries, and payment status</p>
          </div>
          
          {/* Enhanced Search and Quick Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <div className="w-full md:w-auto flex-1">
              <form onSubmit={handleSearch} className="flex w-full max-w-lg items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search orders, products, or invoices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" className="gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </form>
            </div>
            
            <div className="flex gap-2">
              <Button 
                className="gap-2 bg-unnati-primary" 
                onClick={() => handleQuickAction("Update Product Catalog")}
              >
                <Package className="h-4 w-4" />
                Update Products
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleQuickAction("Track Orders")}
              >
                <Truck className="h-4 w-4" />
                Track Orders
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Active Orders"
              value="16"
              icon={<ShoppingCart size={20} className="text-blue-500" />}
              change={{ value: "3", positive: true }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Pending Deliveries"
              value="8"
              icon={<Truck size={20} className="text-amber-500" />}
              change={{ value: "2", positive: false }}
              className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Pending Payments"
              value="₹2,85,450"
              icon={<CreditCard size={20} className="text-red-500" />}
              change={{ value: "12.5%", positive: false }}
              className="border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="This Month Revenue"
              value="₹4,35,250"
              icon={<CircleDollarSign size={20} className="text-green-500" />}
              change={{ value: "8.7%", positive: true }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
          
          {/* Order Trends & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Order Trends (Last 6 Months)</CardTitle>
                  <CardDescription>Monthly order count</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartCard title="" type="bar" data={orderTrendData} />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                <CardHeader>
                  <CardTitle>Alerts & Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-3">
                    <Bell className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800 dark:text-blue-300">New Order Received</p>
                      <p className="text-sm text-blue-700 dark:text-blue-400">Order #ORD-2854 for ₹24,500</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-blue-600 dark:text-blue-300">View Order</Button>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-800 dark:text-amber-300">Order Deadline</p>
                      <p className="text-sm text-amber-700 dark:text-amber-400">Order #ORD-2845 due in 2 days</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-amber-600 dark:text-amber-300">Process Now</Button>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-300">Payment Received</p>
                      <p className="text-sm text-green-700 dark:text-green-400">₹38,500 for invoice #INV-3845</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-green-600 dark:text-green-300">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Product Categories & Payment Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Products by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="pie" data={productCategoryData} />
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Payment Status</span>
                  <Button variant="outline" size="sm" className="gap-1" onClick={() => handleQuickAction("View All Payments")}>
                    <CreditCard className="h-4 w-4" />
                    <span>View All</span>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Payments Received</p>
                      <p className="text-2xl font-bold">₹4,35,250</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <ArrowDown className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Pending Payments</p>
                      <p className="text-2xl font-bold">₹2,85,450</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t dark:border-gray-800">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Overall Payment Status</span>
                      <span>60% Received</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick Access Workflows */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Manage Orders")}
              >
                <ShoppingCart className="h-6 w-6 text-unnati-primary" />
                <span>Manage Orders</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Schedule Deliveries")}
              >
                <Truck className="h-6 w-6 text-unnati-primary" />
                <span>Deliveries</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Update Products")}
              >
                <Package className="h-6 w-6 text-unnati-primary" />
                <span>Products</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Payment Status")}
              >
                <CreditCard className="h-6 w-6 text-unnati-primary" />
                <span>Payments</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("View Invoices")}
              >
                <FileText className="h-6 w-6 text-unnati-primary" />
                <span>Invoices</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("View Reports")}
              >
                <BarChart3 className="h-6 w-6 text-unnati-primary" />
                <span>Reports</span>
              </Button>
            </div>
          </div>
          
          {/* Recent Orders */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="outline" size="sm" className="gap-1" onClick={() => handleQuickAction("View All Orders")}>
                <ClipboardList className="h-4 w-4" />
                <span>View All</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { id: "ORD-2854", customer: "Unnati Traders", date: "12 Apr 2025", amount: "₹24,500", status: "New" },
                      { id: "ORD-2853", customer: "Modern Electricals", date: "10 Apr 2025", amount: "₹18,750", status: "Processing" },
                      { id: "ORD-2852", customer: "City Lights", date: "08 Apr 2025", amount: "₹32,250", status: "Shipped" },
                      { id: "ORD-2851", customer: "Sharma Electronics", date: "05 Apr 2025", amount: "₹15,800", status: "Delivered" },
                      { id: "ORD-2850", customer: "Premium Switches", date: "03 Apr 2025", amount: "₹22,450", status: "Delivered" }
                    ].map((order) => (
                      <tr key={order.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">{order.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{order.customer}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{order.date}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{order.amount}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <Badge
                            className={`${
                              order.status === "New" 
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" 
                                : order.status === "Processing" 
                                ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                                : order.status === "Shipped"
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                            }`}
                          >
                            {order.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Deliveries */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Deliveries</CardTitle>
              <Button variant="outline" size="sm" className="gap-1" onClick={() => handleQuickAction("View All Deliveries")}>
                <Truck className="h-4 w-4" />
                <span>View All</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Delivery ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order Ref.</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Delivery Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { id: "DEL-485", order: "ORD-2845", customer: "Modern Electricals", date: "14 Apr 2025", status: "Scheduled" },
                      { id: "DEL-484", order: "ORD-2842", customer: "City Lights", date: "13 Apr 2025", status: "Scheduled" },
                      { id: "DEL-483", order: "ORD-2840", customer: "Sharma Electronics", date: "13 Apr 2025", status: "In Transit" },
                      { id: "DEL-482", order: "ORD-2838", customer: "Premium Switches", date: "12 Apr 2025", status: "In Transit" }
                    ].map((delivery) => (
                      <tr key={delivery.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">{delivery.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{delivery.order}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{delivery.customer}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{delivery.date}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <Badge
                            className={`${
                              delivery.status === "Scheduled" 
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" 
                                : delivery.status === "In Transit" 
                                ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                            }`}
                          >
                            {delivery.status}
                          </Badge>
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

export default VendorDashboard;

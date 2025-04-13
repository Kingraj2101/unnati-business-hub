
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
  BadgePercent,
  Truck,
  CreditCard,
  Calendar,
  ArrowUpDown,
  Clock,
  Search,
  BarChart3,
  Filter,
  Printer,
  Download,
  CheckCircle2,
  AlertCircle,
  IndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import RetailWorkflow from "@/components/dashboard/workflows/RetailWorkflow";
import SearchBar from "@/components/dashboard/SearchBar";

const RetailDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample sales data
  const recentSales = [
    { id: "INV-2025-001", customer: "Raj Kumar", date: "13 Apr, 2025", items: "3", amount: "₹5,850", payment: "Cash", status: "Completed" },
    { id: "INV-2025-002", customer: "Sanjay Mehta", date: "13 Apr, 2025", items: "5", amount: "₹12,400", payment: "BNPL", status: "Pending" },
    { id: "INV-2025-003", customer: "Neha Singh", date: "12 Apr, 2025", items: "2", amount: "₹3,200", payment: "UPI", status: "Completed" },
    { id: "INV-2025-004", customer: "Alok Sharma", date: "12 Apr, 2025", items: "8", amount: "₹18,750", payment: "Card", status: "Completed" },
    { id: "INV-2025-005", customer: "Priya Patel", date: "11 Apr, 2025", items: "4", amount: "₹7,500", payment: "Cash", status: "Completed" },
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

  const handleQuickAction = (action: string) => {
    toast({
      title: `${action} Started`,
      description: `You've initiated the ${action.toLowerCase()} process.`,
    });
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Store className="h-6 w-6 text-unnati-primary" />
              Retail Store Dashboard
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Monitor retail store performance and sales</p>
          </div>
          
          {/* Search and Quick Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search store dashboard..." dashboardType="store" />
            
            <div className="flex gap-2">
              <Button 
                className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90" 
                onClick={() => handleQuickAction("New Sale")}
              >
                <ShoppingCart className="h-4 w-4" />
                New Sale
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 text-unnati-primary border-unnati-primary hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Billing")}
              >
                <FileText className="h-4 w-4" />
                Billing
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Sales"
              value="₹28,450"
              icon={<IndianRupee size={20} className="text-blue-500" />}
              change={{ value: "12.5%", positive: true }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Customers Today"
              value="32"
              icon={<Users size={20} className="text-green-500" />}
              change={{ value: "8.2%", positive: true }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Items Sold"
              value="85"
              icon={<ShoppingBag size={20} className="text-amber-500" />}
              change={{ value: "15.3%", positive: true }}
              className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Average Bill"
              value="₹1,750"
              icon={<FileText size={20} className="text-purple-500" />}
              change={{ value: "3.5%", positive: false }}
              className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Button 
              className="bg-unnati-primary hover:bg-unnati-primary/90 text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
              onClick={() => handleQuickAction("New Sale")}
            >
              <ShoppingCart size={20} />
              <span>New Sale</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-unnati-primary text-unnati-primary hover:bg-unnati-primary/10 h-auto py-4 flex flex-col items-center justify-center gap-2"
              onClick={() => handleQuickAction("Check Inventory")}
            >
              <Package size={20} />
              <span>Check Inventory</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-unnati-primary text-unnati-primary hover:bg-unnati-primary/10 h-auto py-4 flex flex-col items-center justify-center gap-2"
              onClick={() => handleQuickAction("Manage Discounts")}
            >
              <BadgePercent size={20} />
              <span>Discounts</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-unnati-primary text-unnati-primary hover:bg-unnati-primary/10 h-auto py-4 flex flex-col items-center justify-center gap-2"
              onClick={() => handleQuickAction("Generate Report")}
            >
              <FileText size={20} />
              <span>Daily Report</span>
            </Button>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Daily Sales (Last Week)</CardTitle>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="bar" data={dailySalesData} />
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Sales by Category</CardTitle>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="pie" data={salesCategoryData} />
              </CardContent>
            </Card>
          </div>
          
          {/* Popular Products */}
          <div className="mb-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Popular Products</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-unnati-primary p-3 rounded-full">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-800 dark:text-blue-300 font-medium">Havells Wire</p>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">₹65 per meter</p>
                      <p className="text-blue-500 dark:text-blue-500 text-xs mt-1">580 units sold this month</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-purple-800 dark:text-purple-300 font-medium">LED Bulb 9W</p>
                      <p className="text-purple-600 dark:text-purple-400 text-sm">₹120 per unit</p>
                      <p className="text-purple-500 dark:text-purple-500 text-xs mt-1">425 units sold this month</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-amber-600 p-3 rounded-full">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-800 dark:text-amber-300 font-medium">Switch Board</p>
                      <p className="text-amber-600 dark:text-amber-400 text-sm">₹350 per unit</p>
                      <p className="text-amber-500 dark:text-amber-500 text-xs mt-1">320 units sold this month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Low Stock Alerts */}
          <div className="mb-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    Low Stock Alerts
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleQuickAction("Order Stock")}
                  >
                    Request Stock
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Havells Wires (1.5 mm)</span>
                      <span className="text-sm text-red-500 font-medium">12 units left</span>
                    </div>
                    <Progress value={15} className="h-2 bg-red-100" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">MCB Switches (32A)</span>
                      <span className="text-sm text-amber-500 font-medium">24 units left</span>
                    </div>
                    <Progress value={30} className="h-2 bg-amber-100" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Ceiling Fan (48 inch)</span>
                      <span className="text-sm text-amber-500 font-medium">18 units left</span>
                    </div>
                    <Progress value={25} className="h-2 bg-amber-100" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Sales */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 mb-6">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Recent Sales</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Printer className="h-4 w-4" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search invoices..."
                  className="pl-10 w-full md:max-w-xs"
                />
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSales.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.id}</TableCell>
                        <TableCell>{sale.customer}</TableCell>
                        <TableCell>{sale.date}</TableCell>
                        <TableCell>{sale.items}</TableCell>
                        <TableCell className="font-medium text-green-600 dark:text-green-400">{sale.amount}</TableCell>
                        <TableCell>
                          <Badge variant={
                            sale.payment === 'Cash' 
                              ? 'default'
                              : sale.payment === 'BNPL'
                                ? 'outline'
                                : 'secondary'
                          }>
                            {sale.payment}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {sale.status === "Completed" ? (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                {sale.status}
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800">
                                <Clock className="mr-1 h-3 w-3" />
                                {sale.status}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Search className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Printer className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          {/* Retail Workflow Management */}
          <RetailWorkflow />
        </main>
      </div>
    </div>
  );
};

export default RetailDashboard;

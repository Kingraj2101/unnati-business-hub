
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  BarChart3, 
  FileText, 
  Download, 
  FileSpreadsheet,
  Calendar,
  Filter,
  PieChart,
  LineChart,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Share2,
  Printer,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ChartCard from "@/components/dashboard/ChartCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const ReportsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("last6months");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExportReport = (reportType: string) => {
    toast({
      title: "Report Export Started",
      description: `Your ${reportType} report is being generated.`,
    });
  };

  // Sample data for charts
  const revenueData = [
    { name: "Jan", value: 425000 },
    { name: "Feb", value: 465000 },
    { name: "Mar", value: 480000 },
    { name: "Apr", value: 435600 },
    { name: "May", value: 450000 },
    { name: "Jun", value: 480000 },
  ];

  const expenseData = [
    { name: "Jan", value: 380000 },
    { name: "Feb", value: 390000 },
    { name: "Mar", value: 410000 },
    { name: "Apr", value: 385000 },
    { name: "May", value: 395000 },
    { name: "Jun", value: 425000 },
  ];

  const salesByCategoryData = [
    { name: "Wires & Cables", value: 180000 },
    { name: "Lighting", value: 120000 },
    { name: "Switches", value: 85000 },
    { name: "Fans", value: 65000 },
    { name: "MCBs & DBs", value: 45000 },
    { name: "Others", value: 25000 },
  ];

  const topSellingProductsData = [
    { name: "Havells Wire", value: 85000 },
    { name: "Orient Fan", value: 65000 },
    { name: "LED Panel", value: 52000 },
    { name: "MCB Switch", value: 48000 },
    { name: "Socket", value: 32000 },
  ];

  const salesByChannelData = [
    { name: "Direct", value: 280000 },
    { name: "Retail Store", value: 175000 },
    { name: "Distributor", value: 120000 },
    { name: "Online", value: 45000 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Reports Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Analyze business performance with detailed reports</p>
          </div>
          
          {/* Report Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thismonth">This Month</SelectItem>
                  <SelectItem value="lastmonth">Last Month</SelectItem>
                  <SelectItem value="last3months">Last 3 Months</SelectItem>
                  <SelectItem value="last6months">Last 6 Months</SelectItem>
                  <SelectItem value="thisyear">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Calendar className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Export Format</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleExportReport("PDF")}>
                    <FileText className="mr-2 h-4 w-4" />
                    PDF
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleExportReport("Excel")}>
                    <FileSpreadsheet className="mr-2 h-4 w-4" />
                    Excel
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleExportReport("CSV")}>
                    <FileText className="mr-2 h-4 w-4" />
                    CSV
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Share Report</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button className="gap-2 bg-unnati-primary">
                <BarChart3 className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    Revenue
                  </div>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Last 6 Months</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">₹27.35L</h3>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="font-medium">8.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    Expenses
                  </div>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Last 6 Months</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">₹23.85L</h3>
                  <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="font-medium">5.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    Net Profit
                  </div>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Last 6 Months</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">₹3.5L</h3>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="font-medium">12.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Report Tabs */}
          <Tabs defaultValue="financial" className="mb-6">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="custom">Custom Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="financial">
              <div className="space-y-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Revenue vs Expenses</CardTitle>
                    <CardDescription>Monthly comparison for the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      {/* This would be a multi-line chart component */}
                      <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                        <p>Revenue vs Expenses Chart</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ChartCard title="Revenue Trend" type="line" data={revenueData} />
                  <ChartCard title="Expense Trend" type="line" data={expenseData} />
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Gross Margin</p>
                          <p className="text-xl font-semibold mt-1">32.5%</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Operating Margin</p>
                          <p className="text-xl font-semibold mt-1">18.2%</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Net Profit Margin</p>
                          <p className="text-xl font-semibold mt-1">12.8%</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <p className="text-sm text-gray-500 dark:text-gray-400">ROI</p>
                          <p className="text-xl font-semibold mt-1">24.5%</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sales">
              <div className="space-y-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Sales Performance</CardTitle>
                    <CardDescription>Monthly sales data for the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      {/* This would be a bar chart component */}
                      <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                        <p>Monthly Sales Chart</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ChartCard title="Sales by Category" type="pie" data={salesByCategoryData} />
                  <ChartCard title="Sales Channels" type="pie" data={salesByChannelData} />
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Top Selling Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartCard title="Top 5 Products by Revenue" type="bar" data={topSellingProductsData} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="inventory">
              <Card>
                <CardContent className="py-10">
                  <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400">Inventory reports content would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="custom">
              <Card>
                <CardContent className="py-10">
                  <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400">Custom reports builder would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ReportsDashboard;

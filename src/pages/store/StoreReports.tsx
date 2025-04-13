
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import {
  BarChart3,
  FileText,
  Download,
  Calendar,
  PieChart,
  TrendingUp,
  Users,
  ShoppingCart,
  Package,
  CircleDollarSign,
  ArrowUpDown,
  Printer,
  Share,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import ChartCard from "@/components/dashboard/ChartCard";
import SearchBar from "@/components/dashboard/SearchBar";

const StoreReports = () => {
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

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} operation initiated successfully.`,
    });
  };

  // Sample data for charts
  const salesData = [
    { name: "Jan", value: 30000 },
    { name: "Feb", value: 25000 },
    { name: "Mar", value: 35000 },
    { name: "Apr", value: 40000 },
    { name: "May", value: 45000 },
    { name: "Jun", value: 47000 },
  ];

  const categoryData = [
    { name: "Wires", value: 30 },
    { name: "Switches", value: 25 },
    { name: "Lighting", value: 20 },
    { name: "Fans", value: 15 },
    { name: "Panels", value: 10 },
  ];

  const paymentMethodData = [
    { name: "Cash", value: 40 },
    { name: "UPI", value: 35 },
    { name: "Card", value: 25 },
  ];

  // List of available reports
  const reports = [
    {
      id: "REP001",
      name: "Monthly Sales Summary",
      description: "Summary of sales for the current month",
      category: "Sales",
      lastGenerated: "13 Apr, 2025",
    },
    {
      id: "REP002",
      name: "Inventory Status",
      description: "Current inventory levels and valuation",
      category: "Inventory",
      lastGenerated: "12 Apr, 2025",
    },
    {
      id: "REP003",
      name: "Customer Analysis",
      description: "Customer purchase patterns and demographics",
      category: "Customers",
      lastGenerated: "10 Apr, 2025",
    },
    {
      id: "REP004",
      name: "Payment Methods Analysis",
      description: "Breakdown of payment methods used",
      category: "Payments",
      lastGenerated: "08 Apr, 2025",
    },
    {
      id: "REP005",
      name: "Top Selling Products",
      description: "Products with highest sales volumes",
      category: "Products",
      lastGenerated: "05 Apr, 2025",
    },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-unnati-primary" />
              Store Reports
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Generate and view analytical reports for your store</p>
          </div>
          
          {/* Search and Date Range */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search reports..." dashboardType="store" />
            
            <div className="flex flex-wrap gap-2">
              <Select defaultValue="This Month">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Today">Today</SelectItem>
                  <SelectItem value="This Week">This Week</SelectItem>
                  <SelectItem value="This Month">This Month</SelectItem>
                  <SelectItem value="Last 3 Months">Last 3 Months</SelectItem>
                  <SelectItem value="This Year">This Year</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                className="gap-2"
              >
                <Calendar className="h-4 w-4" />
                Custom Range
              </Button>
            </div>
          </div>
          
          {/* Report Summaries */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Sales Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ChartCard title="" type="bar" data={salesData} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Sales by Category</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ChartCard title="" type="pie" data={categoryData} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ChartCard title="" type="pie" data={paymentMethodData} />
              </CardContent>
            </Card>
          </div>
          
          {/* Report Types */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Reports</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report) => (
                  <Card key={report.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base">{report.name}</CardTitle>
                          <CardDescription>{report.description}</CardDescription>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md">
                          {report.category === "Sales" && <TrendingUp className="h-5 w-5 text-unnati-primary" />}
                          {report.category === "Inventory" && <Package className="h-5 w-5 text-amber-500" />}
                          {report.category === "Customers" && <Users className="h-5 w-5 text-green-500" />}
                          {report.category === "Payments" && <CircleDollarSign className="h-5 w-5 text-purple-500" />}
                          {report.category === "Products" && <ShoppingCart className="h-5 w-5 text-blue-500" />}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span>Last generated: {report.lastGenerated}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleAction(`View ${report.name}`)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                        onClick={() => handleAction(`Generate ${report.name}`)}
                      >
                        <FileText className="h-3 w-3 mr-1" />
                        Generate
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                        onClick={() => handleAction(`Download ${report.name}`)}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sales" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports
                  .filter(report => report.category === "Sales" || report.category === "Payments")
                  .map((report) => (
                    <Card key={report.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{report.name}</CardTitle>
                            <CardDescription>{report.description}</CardDescription>
                          </div>
                          <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md">
                            {report.category === "Sales" && <TrendingUp className="h-5 w-5 text-unnati-primary" />}
                            {report.category === "Payments" && <CircleDollarSign className="h-5 w-5 text-purple-500" />}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" />
                          <span>Last generated: {report.lastGenerated}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleAction(`View ${report.name}`)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAction(`Generate ${report.name}`)}
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          Generate
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAction(`Download ${report.name}`)}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="inventory" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports
                  .filter(report => report.category === "Inventory" || report.category === "Products")
                  .map((report) => (
                    <Card key={report.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{report.name}</CardTitle>
                            <CardDescription>{report.description}</CardDescription>
                          </div>
                          <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md">
                            {report.category === "Inventory" && <Package className="h-5 w-5 text-amber-500" />}
                            {report.category === "Products" && <ShoppingCart className="h-5 w-5 text-blue-500" />}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" />
                          <span>Last generated: {report.lastGenerated}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleAction(`View ${report.name}`)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAction(`Generate ${report.name}`)}
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          Generate
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAction(`Download ${report.name}`)}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="customers" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports
                  .filter(report => report.category === "Customers")
                  .map((report) => (
                    <Card key={report.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{report.name}</CardTitle>
                            <CardDescription>{report.description}</CardDescription>
                          </div>
                          <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md">
                            <Users className="h-5 w-5 text-green-500" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" />
                          <span>Last generated: {report.lastGenerated}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleAction(`View ${report.name}`)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAction(`Generate ${report.name}`)}
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          Generate
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAction(`Download ${report.name}`)}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Generate Custom Report */}
          <Card>
            <CardHeader>
              <CardTitle>Generate Custom Report</CardTitle>
              <CardDescription>Create a new report with specific parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="report-type" className="text-sm font-medium">Report Type</label>
                  <Select>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Report</SelectItem>
                      <SelectItem value="inventory">Inventory Report</SelectItem>
                      <SelectItem value="customers">Customer Report</SelectItem>
                      <SelectItem value="payments">Payment Report</SelectItem>
                      <SelectItem value="products">Product Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="report-period" className="text-sm font-medium">Time Period</label>
                  <Select>
                    <SelectTrigger id="report-period">
                      <SelectValue placeholder="Select time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="this-month">This Month</SelectItem>
                      <SelectItem value="last-quarter">Last Quarter</SelectItem>
                      <SelectItem value="this-year">This Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="report-format" className="text-sm font-medium">Format</label>
                  <Select>
                    <SelectTrigger id="report-format">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      <SelectItem value="csv">CSV File</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Include Sections</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="summary" className="rounded border-gray-300" />
                      <label htmlFor="summary" className="text-sm">Summary</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="charts" className="rounded border-gray-300" />
                      <label htmlFor="charts" className="text-sm">Charts</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="detailed-data" className="rounded border-gray-300" />
                      <label htmlFor="detailed-data" className="text-sm">Detailed Data</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="comparisons" className="rounded border-gray-300" />
                      <label htmlFor="comparisons" className="text-sm">Comparisons</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Report Actions</label>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="auto-email" className="rounded border-gray-300" />
                      <label htmlFor="auto-email" className="text-sm">Email report when generated</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="save-template" className="rounded border-gray-300" />
                      <label htmlFor="save-template" className="text-sm">Save as report template</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Button className="gap-2" onClick={() => handleAction("Generate Report")}>
                <FileText className="h-4 w-4" />
                Generate Report
              </Button>
              <Button variant="outline" className="gap-2" onClick={() => handleAction("Print Report")}>
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" className="gap-2" onClick={() => handleAction("Share Report")}>
                <Share className="h-4 w-4" />
                Share
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StoreReports;

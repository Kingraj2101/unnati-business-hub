
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
  Mail,
  Plus,
  CreditCard,
  Package,
  Receipt,
  FilePlus2,
  FileDown,
  ListFilter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ChartCard from "@/components/dashboard/ChartCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
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
import ReportsList from "@/components/reports/ReportsList";
import BillingReportCreator from "@/components/dashboard/billing/BillingReportCreator";
import ReportViewer from "@/components/reports/ReportViewer";
import ReportCard from "@/components/reports/ReportCard";
import GlobalSearch from "@/components/dashboard/GlobalSearch";

const ReportsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("last6months");
  const [activeTab, setActiveTab] = useState("financial");
  const [showReportCreator, setShowReportCreator] = useState(false);
  const [showReportViewer, setShowReportViewer] = useState(false);
  const [reportViewerName, setReportViewerName] = useState("Report");
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

  const handleCreateReport = () => {
    setShowReportCreator(true);
  };

  const handleCloseReportCreator = () => {
    setShowReportCreator(false);
  };

  const handleGenerateReport = (reportConfig: any) => {
    setShowReportCreator(false);
    
    // Simulate report generation completion
    setTimeout(() => {
      setReportViewerName(reportConfig.type === "billProfit" ? "Bill-wise Profit Report" : 
                          reportConfig.type === "salesSummary" ? "Sales Summary Report" :
                          "Generated Report");
      setShowReportViewer(true);
    }, 500);
  };

  const handleViewSampleReport = (reportName: string) => {
    setReportViewerName(reportName);
    setShowReportViewer(true);
  };

  const handleCloseReportViewer = () => {
    setShowReportViewer(false);
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

  // Sample report types
  const reportTypes = [
    { name: "Bill-wise Profit", icon: <Receipt className="h-5 w-5 text-indigo-600" />, description: "Analyze profit margins per bill/invoice" },
    { name: "Sales Summary", icon: <BarChart3 className="h-5 w-5 text-blue-600" />, description: "Overview of sales performance" },
    { name: "Daybook", icon: <Calendar className="h-5 w-5 text-green-600" />, description: "Daily transaction record" },
    { name: "Profit and Loss", icon: <TrendingUp className="h-5 w-5 text-amber-600" />, description: "Financial performance analysis" },
    { name: "Party Statement", icon: <FileText className="h-5 w-5 text-orange-600" />, description: "Customer/vendor transaction history" },
    { name: "Stock Summary", icon: <Package className="h-5 w-5 text-cyan-600" />, description: "Inventory levels overview" },
    { name: "GST Reports", icon: <FileSpreadsheet className="h-5 w-5 text-violet-600" />, description: "Tax compliance reports" },
    { name: "Balance Sheet", icon: <LineChart className="h-5 w-5 text-rose-600" />, description: "Assets and liabilities summary" },
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
              <GlobalSearch />
              
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
              
              <Button className="gap-2 bg-unnati-primary" onClick={handleCreateReport}>
                <FilePlus2 className="h-4 w-4" />
                Create Report
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
          
          {/* Quick Access Report Types */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Access Reports</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {reportTypes.slice(0, 4).map((report) => (
                <Card 
                  key={report.name} 
                  className="cursor-pointer hover:shadow-md transition-shadow duration-200"
                  onClick={() => handleViewSampleReport(report.name)}
                >
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                      {report.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{report.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Report Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="tax">Tax & GST</TabsTrigger>
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
                
                {/* Financial Reports List */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Recent Financial Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ReportsList />
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
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Total Inventory Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-3xl font-bold">₹18.45L</h3>
                        <div className="flex items-center gap-1 text-green-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="font-medium">3.2%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Low Stock Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-3xl font-bold">24</h3>
                        <div className="flex items-center gap-1 text-amber-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="font-medium">+8</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Stock Turnover Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-3xl font-bold">3.8x</h3>
                        <div className="flex items-center gap-1 text-green-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="font-medium">0.2x</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Inventory Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { name: "Stock Summary", icon: <Package className="h-5 w-5 text-blue-500" /> },
                        { name: "Price & Stock Summary", icon: <CreditCard className="h-5 w-5 text-green-500" /> },
                        { name: "Inventory Valuation", icon: <DollarSign className="h-5 w-5 text-amber-500" /> },
                        { name: "Slow Moving Items", icon: <TrendingUp className="h-5 w-5 text-red-500" /> },
                        { name: "Stock Transfer Report", icon: <FileText className="h-5 w-5 text-purple-500" /> },
                        { name: "Batch Wise Stock", icon: <ListFilter className="h-5 w-5 text-indigo-500" /> },
                      ].map(report => (
                        <Card 
                          key={report.name} 
                          className="cursor-pointer hover:shadow-md transition-shadow duration-200 border"
                          onClick={() => handleViewSampleReport(report.name)}
                        >
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-gray-100">
                                {report.icon}
                              </div>
                              <h3 className="font-medium">{report.name}</h3>
                            </div>
                            <FileDown className="h-4 w-4 text-gray-400" />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tax">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">GST Payable</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-3xl font-bold">₹2.84L</h3>
                        <div className="flex items-center gap-1 text-amber-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="font-medium">12%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">GST Receivable</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-3xl font-bold">₹1.45L</h3>
                        <div className="flex items-center gap-1 text-green-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="font-medium">5%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Net GST</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-3xl font-bold">₹1.39L</h3>
                        <div className="flex items-center gap-1 text-red-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="font-medium">18%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tax Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { name: "GSTR-1 Summary", icon: <FileText className="h-5 w-5 text-blue-500" /> },
                        { name: "GSTR-2 Summary", icon: <FileText className="h-5 w-5 text-green-500" /> },
                        { name: "GSTR-3B Summary", icon: <FileText className="h-5 w-5 text-amber-500" /> },
                        { name: "HSN Summary", icon: <FileSpreadsheet className="h-5 w-5 text-red-500" /> },
                        { name: "E-way Bill Register", icon: <FileText className="h-5 w-5 text-purple-500" /> },
                        { name: "Tax Liability Report", icon: <CreditCard className="h-5 w-5 text-indigo-500" /> },
                      ].map(report => (
                        <Card 
                          key={report.name} 
                          className="cursor-pointer hover:shadow-md transition-shadow duration-200 border"
                          onClick={() => handleViewSampleReport(report.name)}
                        >
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-gray-100">
                                {report.icon}
                              </div>
                              <h3 className="font-medium">{report.name}</h3>
                            </div>
                            <FileDown className="h-4 w-4 text-gray-400" />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="custom">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Custom Reports</CardTitle>
                    <Button className="gap-2 bg-unnati-primary" onClick={handleCreateReport}>
                      <Plus className="h-4 w-4" />
                      Create New Report
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative mb-4">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input placeholder="Search saved reports..." className="pl-8" />
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {[
                          { name: "Monthly Customer Retention", date: "Created on 10 Apr, 2025", type: "Custom" },
                          { name: "Product Line Performance", date: "Created on 05 Apr, 2025", type: "Custom" },
                          { name: "Vendor Performance Analysis", date: "Created on 01 Apr, 2025", type: "Custom" },
                          { name: "Marketing Campaign ROI", date: "Created on 25 Mar, 2025", type: "Custom" },
                        ].map(report => (
                          <Card key={report.name} className="border hover:shadow-md cursor-pointer transition-shadow duration-200">
                            <CardContent className="p-4 flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{report.name}</h3>
                                <p className="text-sm text-gray-500">{report.date}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                      <FileDown className="h-4 w-4 mr-2 text-green-600" />
                                      Excel Format
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <FileDown className="h-4 w-4 mr-2 text-red-600" />
                                      PDF Format
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Report Creator Dialog */}
          {showReportCreator && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <BillingReportCreator 
                  onClose={handleCloseReportCreator}
                  onGenerate={handleGenerateReport}
                />
              </div>
            </div>
          )}
          
          {/* Report Viewer Dialog */}
          {showReportViewer && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                <ReportViewer 
                  reportName={reportViewerName}
                  onClose={handleCloseReportViewer}
                  onDownloadExcel={() => handleExportReport("Excel")}
                  onDownloadPdf={() => handleExportReport("PDF")}
                  onPrint={() => handleExportReport("Print")}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ReportsDashboard;

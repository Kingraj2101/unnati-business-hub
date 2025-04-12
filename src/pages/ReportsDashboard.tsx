
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import ReportCard from "@/components/reports/ReportCard";
import ReportViewer from "@/components/reports/ReportViewer";
import FactoryPerformanceReport from "@/components/reports/FactoryPerformanceReport";
import StorePerformanceReport from "@/components/reports/StorePerformanceReport";
import VendorPerformanceReport from "@/components/reports/VendorPerformanceReport";
import FileMinus from "@/components/reports/FileMinus";
import { useToast } from "@/hooks/use-toast";
import { 
  Box, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Package,
  BarChart,
  Calendar,
  Users,
  DollarSign,
  Truck,
  Factory,
  Store,
  CircleDollarSign,
  Filter,
  ShoppingBag
} from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const ReportsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeReport, setActiveReport] = useState<string | null>(null);
  const [reportViewerOpen, setReportViewerOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Filter states
  const [dateRange, setDateRange] = useState("last30days");
  const [reportCategory, setReportCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleViewReport = (reportName: string) => {
    setActiveReport(reportName);
    setReportViewerOpen(true);
    // In a real application, you would fetch the report data here
    toast({
      title: "Opening Report",
      description: `Loading ${reportName} report data...`,
    });
  };

  const handleDownloadExcel = (reportName: string) => {
    toast({
      title: "Downloading Excel",
      description: `${reportName} is being downloaded as Excel file.`,
    });
  };

  const handleDownloadPdf = (reportName: string) => {
    toast({
      title: "Downloading PDF",
      description: `${reportName} is being downloaded as PDF file.`,
    });
  };

  const handleCloseReportViewer = () => {
    setReportViewerOpen(false);
    setActiveReport(null);
  };

  // Filter reports based on search query and category
  const filterReports = (reports: any[]) => {
    return reports.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = reportCategory === "all" || report.category === reportCategory;
      return matchesSearch && matchesCategory;
    });
  };

  // Define reports by category
  const salesReports = [
    {
      title: "Sales Performance",
      description: "Daily, weekly, and monthly sales performance metrics",
      icon: <BarChart3 size={18} className="text-blue-600" />,
      category: "sales"
    },
    {
      title: "Product Sales Analysis",
      description: "Sales breakdown by product, category, and trends",
      icon: <Box size={18} className="text-green-600" />,
      category: "sales"
    },
    {
      title: "Customer Purchase Patterns",
      description: "Analysis of customer buying habits and preferences",
      icon: <Package size={18} className="text-purple-600" />,
      category: "sales"
    },
    {
      title: "Invoice Summary",
      description: "Summary of all invoices generated in the selected period",
      icon: <FileMinus size={18} className="text-red-600" />,
      category: "sales"
    }
  ];

  const inventoryReports = [
    {
      title: "Inventory Valuation",
      description: "Current value of inventory by location and category",
      icon: <DollarSign size={18} className="text-green-600" />,
      category: "inventory"
    },
    {
      title: "Stock Movement Analysis",
      description: "Trends in inventory movement and turnover rates",
      icon: <TrendingUp size={18} className="text-blue-600" />,
      category: "inventory"
    },
    {
      title: "Low Stock Alert Report",
      description: "Items that are below minimum stock threshold",
      icon: <ShoppingBag size={18} className="text-amber-600" />,
      category: "inventory"
    },
    {
      title: "Inventory Aging Report",
      description: "Analysis of slow-moving and stagnant inventory",
      icon: <Calendar size={18} className="text-purple-600" />,
      category: "inventory"
    }
  ];

  const financeReports = [
    {
      title: "Profit & Loss Statement",
      description: "Comprehensive P&L statement for the selected period",
      icon: <CircleDollarSign size={18} className="text-green-600" />,
      category: "finance"
    },
    {
      title: "Expense Analysis",
      description: "Breakdown of expenses by category and comparison",
      icon: <TrendingUp size={18} className="text-red-600" />,
      category: "finance"
    },
    {
      title: "Cash Flow Report",
      description: "Cash inflow and outflow analysis with projections",
      icon: <DollarSign size={18} className="text-blue-600" />,
      category: "finance"
    },
    {
      title: "Accounts Receivable Aging",
      description: "Outstanding receivables categorized by age",
      icon: <FileText size={18} className="text-amber-600" />,
      category: "finance"
    }
  ];

  const operationsReports = [
    {
      title: "Factory Performance",
      description: "Production metrics and efficiency analysis",
      icon: <Factory size={18} className="text-orange-600" />,
      category: "operations"
    },
    {
      title: "Store Performance",
      description: "Retail store metrics and performance analysis",
      icon: <Store size={18} className="text-blue-600" />,
      category: "operations"
    },
    {
      title: "Vendor Performance",
      description: "Supplier reliability, quality, and delivery metrics",
      icon: <Truck size={18} className="text-purple-600" />,
      category: "operations"
    },
    {
      title: "Staff Productivity",
      description: "Employee performance and productivity metrics",
      icon: <Users size={18} className="text-green-600" />,
      category: "operations"
    }
  ];

  // Filter reports based on current filter settings
  const filteredSalesReports = filterReports(salesReports);
  const filteredInventoryReports = filterReports(inventoryReports);
  const filteredFinanceReports = filterReports(financeReports);
  const filteredOperationsReports = filterReports(operationsReports);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-unnati-dark">Reports Dashboard</h1>
              <p className="text-gray-500">Generate and analyze business reports</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="last7days">Last 7 Days</SelectItem>
                  <SelectItem value="last30days">Last 30 Days</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                  <SelectItem value="lastMonth">Last Month</SelectItem>
                  <SelectItem value="thisYear">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search reports..." 
                  className="pl-9 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Report Viewer - Shows when a report is selected */}
          {reportViewerOpen && activeReport && (
            <Card className="mb-6">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle>{activeReport}</CardTitle>
                <Button variant="outline" size="sm" onClick={handleCloseReportViewer}>
                  Close
                </Button>
              </CardHeader>
              <CardContent>
                <ReportViewer reportName={activeReport} />
              </CardContent>
            </Card>
          )}

          {/* Report Categories */}
          <Tabs defaultValue="all" onValueChange={setReportCategory} className="mb-6">
            <TabsList className="w-full sm:w-auto grid grid-cols-5 mb-4">
              <TabsTrigger value="all">All Reports</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {/* Sales Reports Section */}
              {filteredSalesReports.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-3 text-unnati-dark">Sales Reports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredSalesReports.map((report, index) => (
                      <ReportCard
                        key={`sales-${index}`}
                        title={report.title}
                        icon={report.icon}
                        description={report.description}
                        onView={() => handleViewReport(report.title)}
                        onDownloadExcel={() => handleDownloadExcel(report.title)}
                        onDownloadPdf={() => handleDownloadPdf(report.title)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Inventory Reports Section */}
              {filteredInventoryReports.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-3 text-unnati-dark">Inventory Reports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredInventoryReports.map((report, index) => (
                      <ReportCard
                        key={`inventory-${index}`}
                        title={report.title}
                        icon={report.icon}
                        description={report.description}
                        onView={() => handleViewReport(report.title)}
                        onDownloadExcel={() => handleDownloadExcel(report.title)}
                        onDownloadPdf={() => handleDownloadPdf(report.title)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Finance Reports Section */}
              {filteredFinanceReports.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-3 text-unnati-dark">Finance Reports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredFinanceReports.map((report, index) => (
                      <ReportCard
                        key={`finance-${index}`}
                        title={report.title}
                        icon={report.icon}
                        description={report.description}
                        onView={() => handleViewReport(report.title)}
                        onDownloadExcel={() => handleDownloadExcel(report.title)}
                        onDownloadPdf={() => handleDownloadPdf(report.title)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Operations Reports Section */}
              {filteredOperationsReports.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold mb-3 text-unnati-dark">Operations Reports</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredOperationsReports.map((report, index) => (
                      <ReportCard
                        key={`operations-${index}`}
                        title={report.title}
                        icon={report.icon}
                        description={report.description}
                        onView={() => handleViewReport(report.title)}
                        onDownloadExcel={() => handleDownloadExcel(report.title)}
                        onDownloadPdf={() => handleDownloadPdf(report.title)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* No reports found */}
              {filteredSalesReports.length === 0 && 
               filteredInventoryReports.length === 0 && 
               filteredFinanceReports.length === 0 && 
               filteredOperationsReports.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No reports found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="sales" className="space-y-6">
              {filteredSalesReports.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredSalesReports.map((report, index) => (
                    <ReportCard
                      key={`sales-tab-${index}`}
                      title={report.title}
                      icon={report.icon}
                      description={report.description}
                      onView={() => handleViewReport(report.title)}
                      onDownloadExcel={() => handleDownloadExcel(report.title)}
                      onDownloadPdf={() => handleDownloadPdf(report.title)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No sales reports found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="inventory" className="space-y-6">
              {filteredInventoryReports.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredInventoryReports.map((report, index) => (
                    <ReportCard
                      key={`inventory-tab-${index}`}
                      title={report.title}
                      icon={report.icon}
                      description={report.description}
                      onView={() => handleViewReport(report.title)}
                      onDownloadExcel={() => handleDownloadExcel(report.title)}
                      onDownloadPdf={() => handleDownloadPdf(report.title)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No inventory reports found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="finance" className="space-y-6">
              {filteredFinanceReports.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredFinanceReports.map((report, index) => (
                    <ReportCard
                      key={`finance-tab-${index}`}
                      title={report.title}
                      icon={report.icon}
                      description={report.description}
                      onView={() => handleViewReport(report.title)}
                      onDownloadExcel={() => handleDownloadExcel(report.title)}
                      onDownloadPdf={() => handleDownloadPdf(report.title)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <DollarSign className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No finance reports found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="operations" className="space-y-6">
              {filteredOperationsReports.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredOperationsReports.map((report, index) => (
                    <ReportCard
                      key={`operations-tab-${index}`}
                      title={report.title}
                      icon={report.icon}
                      description={report.description}
                      onView={() => handleViewReport(report.title)}
                      onDownloadExcel={() => handleDownloadExcel(report.title)}
                      onDownloadPdf={() => handleDownloadPdf(report.title)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Factory className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No operations reports found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Performance Overview */}
          <h2 className="text-lg font-semibold mb-3 text-unnati-dark">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FactoryPerformanceReport />
            <StorePerformanceReport />
            <VendorPerformanceReport />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportsDashboard;


import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  FileBarChart, 
  FileText, 
  FilePieChart, 
  FileSpreadsheet,
  Download,
  Share2,
  Calendar,
  Filter,
  FilePlus2,
  FileDown,
  FileUp,
  Receipt,
  Wallet,
  Building,
  Factory,
  Store,
  Truck,
  DollarSign,
  TrendingUp,
  Users,
  ShoppingBag,
  Eye,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChartCard from "@/components/dashboard/ChartCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReportCard from "@/components/reports/ReportCard";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReportViewer from "@/components/reports/ReportViewer";
import StorePerformanceReport from "@/components/reports/StorePerformanceReport";
import FactoryPerformanceReport from "@/components/reports/FactoryPerformanceReport";
import VendorPerformanceReport from "@/components/reports/VendorPerformanceReport";
import { toast } from "@/hooks/use-toast";

const ReportsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDownloadReport = (reportName: string, format: 'excel' | 'pdf') => {
    toast({
      title: "Download Started",
      description: `${reportName} is being downloaded in ${format.toUpperCase()} format.`,
    });
  };

  const handleViewReport = (reportName: string) => {
    setSelectedReport(reportName);
    
    // If you want to scroll to the report viewer
    setTimeout(() => {
      document.getElementById('report-viewer')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Sample data for charts
  const salesVsExpensesData = [
    { name: "Jan", income: 95000, expense: 62000 },
    { name: "Feb", income: 85000, expense: 58000 },
    { name: "Mar", income: 110000, expense: 71000 },
    { name: "Apr", income: 98000, expense: 63000 },
    { name: "May", income: 115000, expense: 68000 },
    { name: "Jun", income: 105000, expense: 64000 },
  ];
  
  const profitMarginData = [
    { name: "Jan", value: 32 },
    { name: "Feb", value: 28 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 30 },
    { name: "May", value: 38 },
    { name: "Jun", value: 33 },
  ];

  const inventoryValueData = [
    { name: "Raw Materials", value: 345000 },
    { name: "Finished Goods", value: 480000 },
    { name: "Work in Progress", value: 120000 },
    { name: "Packaging", value: 45000 },
    { name: "Spare Parts", value: 65000 },
  ];

  // Financial Report Types
  const financialReports = [
    { name: "Bill Wise Profit", icon: <TrendingUp size={16} className="text-emerald-600" /> },
    { name: "Sales Summary", icon: <ShoppingBag size={16} className="text-blue-600" /> },
    { name: "Daybook", icon: <Calendar size={16} className="text-indigo-600" /> },
    { name: "Profit and Loss", icon: <FileBarChart size={16} className="text-red-600" /> },
    { name: "Party Statement (Ledger)", icon: <FileText size={16} className="text-amber-600" /> },
    { name: "Balance Sheet", icon: <FileSpreadsheet size={16} className="text-green-600" /> },
    { name: "Cash and Bank (All Payments)", icon: <Wallet size={16} className="text-purple-600" /> },
  ];

  // Inventory Report Types
  const inventoryReports = [
    { name: "Stock Summary", icon: <Box size={16} className="text-blue-600" /> },
    { name: "Price & Stock Summary", icon: <FileText size={16} className="text-emerald-600" /> },
  ];

  // Entity Report Types
  const entityReports = [
    { name: "Party Reports", icon: <Users size={16} className="text-blue-600" /> },
    { name: "Item Reports", icon: <Package size={16} className="text-green-600" /> },
  ];

  // Transaction Report Types
  const transactionReports = [
    { name: "GST Reports", icon: <Receipt size={16} className="text-purple-600" /> },
    { name: "Transaction Reports", icon: <FileText size={16} className="text-indigo-600" /> },
    { name: "Expense Reports", icon: <FileMinus size={16} className="text-red-600" /> },
    { name: "Purchase Reports", icon: <FileUp size={16} className="text-amber-600" /> },
    { name: "BNPL Reports", icon: <FileText size={16} className="text-pink-600" /> },
  ];

  // Performance Report Types
  const performanceReports = [
    { name: "Store Performance", icon: <Store size={16} className="text-blue-600" /> },
    { name: "Factory Performance", icon: <Factory size={16} className="text-orange-600" /> },
    { name: "Vendor Performance", icon: <Truck size={16} className="text-green-600" /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Reports Dashboard</h1>
            <p className="text-gray-500">Generate and analyze business reports</p>
          </div>
          
          {/* Filter Controls */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <select className="rounded-md border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>This year</option>
                <option>Custom range</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <Filter className="mr-2 h-4 w-4 text-gray-500" />
              <select className="rounded-md border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500">
                <option>All Categories</option>
                <option>Sales</option>
                <option>Inventory</option>
                <option>Expenses</option>
                <option>Profits</option>
              </select>
            </div>
            
            <Button variant="outline" size="sm" className="ml-auto">
              <Download className="mr-2 h-4 w-4" />
              Export All
            </Button>
            
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
          
          {/* Reports Tabs */}
          <Tabs defaultValue="financial" className="w-full mb-6">
            <TabsList className="mb-4 grid grid-cols-2 md:grid-cols-6 gap-2">
              <TabsTrigger value="financial" className="flex items-center gap-1">
                <DollarSign size={14} />
                <span>Financial</span>
              </TabsTrigger>
              <TabsTrigger value="inventory" className="flex items-center gap-1">
                <Package size={14} />
                <span>Inventory</span>
              </TabsTrigger>
              <TabsTrigger value="entity" className="flex items-center gap-1">
                <Users size={14} />
                <span>Entity</span>
              </TabsTrigger>
              <TabsTrigger value="transaction" className="flex items-center gap-1">
                <Receipt size={14} />
                <span>Transaction</span>
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center gap-1">
                <TrendingUp size={14} />
                <span>Performance</span>
              </TabsTrigger>
              <TabsTrigger value="all" className="flex items-center gap-1">
                <FileText size={14} />
                <span>All Reports</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Financial Reports Tab */}
            <TabsContent value="financial" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {financialReports.map((report) => (
                  <ReportCard
                    key={report.name}
                    title={report.name}
                    icon={report.icon}
                    onView={() => handleViewReport(report.name)}
                    onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                    onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Inventory Reports Tab */}
            <TabsContent value="inventory" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inventoryReports.map((report) => (
                  <ReportCard
                    key={report.name}
                    title={report.name}
                    icon={report.icon}
                    onView={() => handleViewReport(report.name)}
                    onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                    onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Entity Reports Tab */}
            <TabsContent value="entity" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {entityReports.map((report) => (
                  <ReportCard
                    key={report.name}
                    title={report.name}
                    icon={report.icon}
                    onView={() => handleViewReport(report.name)}
                    onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                    onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Transaction Reports Tab */}
            <TabsContent value="transaction" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {transactionReports.map((report) => (
                  <ReportCard
                    key={report.name}
                    title={report.name}
                    icon={report.icon}
                    onView={() => handleViewReport(report.name)}
                    onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                    onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Performance Reports Tab */}
            <TabsContent value="performance" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {performanceReports.map((report) => (
                  <ReportCard
                    key={report.name}
                    title={report.name}
                    icon={report.icon}
                    onView={() => handleViewReport(report.name)}
                    onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                    onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* All Reports Tab */}
            <TabsContent value="all" className="space-y-6">
              <Accordion type="single" collapsible defaultValue="financial" className="w-full">
                <AccordionItem value="financial">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} className="text-blue-600" />
                      Financial Reports
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                      {financialReports.map((report) => (
                        <ReportCard
                          key={report.name}
                          title={report.name}
                          icon={report.icon}
                          onView={() => handleViewReport(report.name)}
                          onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                          onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="inventory">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Package size={18} className="text-green-600" />
                      Inventory Reports
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                      {inventoryReports.map((report) => (
                        <ReportCard
                          key={report.name}
                          title={report.name}
                          icon={report.icon}
                          onView={() => handleViewReport(report.name)}
                          onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                          onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="entity">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-purple-600" />
                      Entity Reports
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                      {entityReports.map((report) => (
                        <ReportCard
                          key={report.name}
                          title={report.name}
                          icon={report.icon}
                          onView={() => handleViewReport(report.name)}
                          onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                          onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="transaction">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Receipt size={18} className="text-amber-600" />
                      Transaction Reports
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                      {transactionReports.map((report) => (
                        <ReportCard
                          key={report.name}
                          title={report.name}
                          icon={report.icon}
                          onView={() => handleViewReport(report.name)}
                          onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                          onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="performance">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-red-600" />
                      Performance Reports
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                      {performanceReports.map((report) => (
                        <ReportCard
                          key={report.name}
                          title={report.name}
                          icon={report.icon}
                          onView={() => handleViewReport(report.name)}
                          onDownloadExcel={() => handleDownloadReport(report.name, 'excel')}
                          onDownloadPdf={() => handleDownloadReport(report.name, 'pdf')}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
          
          {/* Report Viewer Section */}
          {selectedReport && (
            <div id="report-viewer" className="mb-6">
              <ReportViewer 
                reportName={selectedReport}
                onDownloadExcel={() => handleDownloadReport(selectedReport, 'excel')}
                onDownloadPdf={() => handleDownloadReport(selectedReport, 'pdf')}
                onPrint={() => toast({
                  title: "Print Started",
                  description: `${selectedReport} is being prepared for printing.`,
                })}
              />
            </div>
          )}
          
          {/* Data Visualization */}
          {!selectedReport && (
            <>
              <h2 className="text-xl font-bold mb-4 text-unnati-dark">Data Visualization</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <ChartCard 
                  title="Sales vs Expenses (Last 6 months)" 
                  type="bar" 
                  data={salesVsExpensesData} 
                />
                <ChartCard 
                  title="Profit Margin %" 
                  type="line" 
                  data={profitMarginData}
                />
              </div>
            
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <ChartCard 
                  title="Inventory Value by Category" 
                  type="pie" 
                  data={inventoryValueData}
                />
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recently Generated Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileBarChart className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Monthly Sales Report</p>
                            <p className="text-xs text-gray-500">Generated on 08 Apr, 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" onClick={() => handleViewReport("Monthly Sales Report")}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadReport("Monthly Sales Report", 'excel')}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="font-medium">Q1 Financial Summary</p>
                            <p className="text-xs text-gray-500">Generated on 05 Apr, 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" onClick={() => handleViewReport("Q1 Financial Summary")}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadReport("Q1 Financial Summary", 'excel')}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FilePieChart className="h-5 w-5 text-purple-600 mr-3" />
                          <div>
                            <p className="font-medium">Inventory Valuation Report</p>
                            <p className="text-xs text-gray-500">Generated on 03 Apr, 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" onClick={() => handleViewReport("Inventory Valuation Report")}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadReport("Inventory Valuation Report", 'excel')}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileSpreadsheet className="h-5 w-5 text-amber-600 mr-3" />
                          <div>
                            <p className="font-medium">March Expense Analysis</p>
                            <p className="text-xs text-gray-500">Generated on 01 Apr, 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" onClick={() => handleViewReport("March Expense Analysis")}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadReport("March Expense Analysis", 'excel')}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
          
          {/* Performance Analysis Sections */}
          <h2 className="text-xl font-bold mb-4 text-unnati-dark">Performance Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <StorePerformanceReport />
            <FactoryPerformanceReport />
            <VendorPerformanceReport />
          </div>
          
          {/* Report Schedules */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Scheduled Reports</CardTitle>
                <Button variant="outline" size="sm">Add Schedule</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Daily Sales Summary</p>
                    <p className="text-sm text-gray-500">Every day at 9:00 PM</p>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-3">
                      Active
                    </span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Weekly Expense Report</p>
                    <p className="text-sm text-gray-500">Every Sunday at 10:00 AM</p>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-3">
                      Active
                    </span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Monthly Financial Statement</p>
                    <p className="text-sm text-gray-500">1st of every month at 8:00 AM</p>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-3">
                      Active
                    </span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ReportsDashboard;

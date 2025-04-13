
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
  LineChart,
  ShoppingBag,
  Package,
  Users,
  CreditCard,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import SearchBar from "@/components/dashboard/SearchBar";
import ChartCard from "@/components/dashboard/ChartCard";

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

  // Sample report data
  const reports = [
    {
      id: "RPT-2025-001",
      name: "Monthly Sales Report",
      date: "Apr 2025",
      type: "Sales",
      status: "Generated"
    },
    {
      id: "RPT-2025-002",
      name: "Inventory Status Report",
      date: "Apr 2025",
      type: "Inventory",
      status: "Generated"
    },
    {
      id: "RPT-2025-003",
      name: "Customer Analysis Report",
      date: "Q1 2025",
      type: "Customer",
      status: "Generated"
    },
    {
      id: "RPT-2025-004",
      name: "Payment Methods Report",
      date: "Apr 2025",
      type: "Payment",
      status: "Pending"
    },
    {
      id: "RPT-2025-005",
      name: "Product Performance Report",
      date: "Q1 2025",
      type: "Product",
      status: "Generated"
    }
  ];

  // Sample data for charts
  const monthlySalesData = [
    { name: "Jan", value: 152000 },
    { name: "Feb", value: 165000 },
    { name: "Mar", value: 178000 },
    { name: "Apr", value: 182000 },
    { name: "May", value: 190000 },
    { name: "Jun", value: 205000 },
  ];

  const productCategoryData = [
    { name: "Wires", value: 35 },
    { name: "Switches", value: 25 },
    { name: "Lighting", value: 20 },
    { name: "Fans", value: 15 },
    { name: "Others", value: 5 },
  ];

  const paymentMethodData = [
    { name: "UPI", value: 45 },
    { name: "Cash", value: 35 },
    { name: "Card", value: 15 },
    { name: "Credit", value: 5 },
  ];

  const customerVisitData = [
    { name: "Mon", value: 25 },
    { name: "Tue", value: 18 },
    { name: "Wed", value: 32 },
    { name: "Thu", value: 28 },
    { name: "Fri", value: 35 },
    { name: "Sat", value: 45 },
    { name: "Sun", value: 30 },
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
            <p className="text-slate-500 dark:text-slate-400">Generate and view comprehensive store reports</p>
          </div>
          
          {/* Report Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <div className="flex items-center gap-2">
              <Select defaultValue="apr2025">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apr2025">April 2025</SelectItem>
                  <SelectItem value="mar2025">March 2025</SelectItem>
                  <SelectItem value="feb2025">February 2025</SelectItem>
                  <SelectItem value="jan2025">January 2025</SelectItem>
                  <SelectItem value="q12025">Q1 2025</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Filter Reports")}
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90" 
                onClick={() => handleAction("Generate New Report")}
              >
                <FileText className="h-4 w-4" />
                Generate Report
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Schedule Reports")}
              >
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
            </div>
          </div>
          
          {/* Available Reports */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>Recently generated store reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Report ID</TableHead>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.id}</TableCell>
                        <TableCell>{report.name}</TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-slate-100">
                            {report.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={report.status === "Generated" ? "outline" : "secondary"}
                            className={report.status === "Generated" ? "bg-green-50 text-green-700" : ""}
                          >
                            {report.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleAction(`View ${report.id}`)}
                            >
                              View
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleAction(`Download ${report.id}`)}
                            >
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
          
          {/* Charts and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-unnati-primary" />
                  Monthly Sales Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="bar" data={monthlySalesData} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-unnati-primary" />
                  Sales by Product Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="pie" data={productCategoryData} />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-unnati-primary" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="pie" data={paymentMethodData} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-unnati-primary" />
                  Customer Visits (Last 7 Days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="line" data={customerVisitData} />
              </CardContent>
            </Card>
          </div>
          
          {/* Report Templates */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Report Templates</CardTitle>
              <CardDescription>Quick access to common report types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Generate Sales Report")}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <ShoppingBag className="h-10 w-10 text-unnati-primary mb-3" />
                    <h3 className="font-medium">Sales Report</h3>
                    <p className="text-sm text-slate-500 mt-1">Comprehensive sales analytics</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Generate Inventory Report")}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Package className="h-10 w-10 text-unnati-primary mb-3" />
                    <h3 className="font-medium">Inventory Report</h3>
                    <p className="text-sm text-slate-500 mt-1">Stock levels and movements</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Generate Customer Report")}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Users className="h-10 w-10 text-unnati-primary mb-3" />
                    <h3 className="font-medium">Customer Report</h3>
                    <p className="text-sm text-slate-500 mt-1">Customer demographics and behavior</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Generate Financial Report")}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <CreditCard className="h-10 w-10 text-unnati-primary mb-3" />
                    <h3 className="font-medium">Financial Report</h3>
                    <p className="text-sm text-slate-500 mt-1">Revenue, expenses and profits</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StoreReports;

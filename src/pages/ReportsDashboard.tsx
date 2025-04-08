
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
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChartCard from "@/components/dashboard/ChartCard";

const ReportsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
              Export
            </Button>
            
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
          
          {/* Report Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-blue-50 border-blue-200 transition-colors hover:bg-blue-100 cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <FileBarChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Sales Reports</h3>
                <p className="text-blue-600 text-sm mt-1">Daily, weekly and monthly sales analysis</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 transition-colors hover:bg-green-100 cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-800">Financial Reports</h3>
                <p className="text-green-600 text-sm mt-1">P&L, balance sheet and cash flow</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200 transition-colors hover:bg-purple-100 cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-3 rounded-full mb-4">
                  <FilePieChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-purple-800">Inventory Reports</h3>
                <p className="text-purple-600 text-sm mt-1">Stock levels, valuation and movement</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200 transition-colors hover:bg-amber-100 cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <FileSpreadsheet className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-amber-800">Expense Reports</h3>
                <p className="text-amber-600 text-sm mt-1">Categorized expenses and trends</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts for Reports */}
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
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium">Q1 Financial Summary</p>
                        <p className="text-xs text-gray-500">Generated on 05 Apr, 2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FilePieChart className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-medium">Inventory Valuation Report</p>
                        <p className="text-xs text-gray-500">Generated on 03 Apr, 2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileSpreadsheet className="h-5 w-5 text-amber-600 mr-3" />
                      <div>
                        <p className="font-medium">March Expense Analysis</p>
                        <p className="text-xs text-gray-500">Generated on 01 Apr, 2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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

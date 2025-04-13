
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import BillingDeskTabs from "@/components/dashboard/billing/BillingDeskTabs";
import { 
  FileText, 
  Receipt, 
  CreditCard, 
  ArrowDown, 
  FileOutput,
  Clock,
  ClipboardList
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ChartCard from "@/components/dashboard/ChartCard";

const BillingDashboard = () => {
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

  // Sample data for charts
  const billingTrendData = [
    { name: "Jan", value: 15 },
    { name: "Feb", value: 18 },
    { name: "Mar", value: 25 },
    { name: "Apr", value: 22 },
    { name: "May", value: 28 },
    { name: "Jun", value: 32 },
  ];

  const paymentMethodData = [
    { name: "Cash", value: 45 },
    { name: "UPI", value: 30 },
    { name: "Card", value: 15 },
    { name: "BNPL", value: 10 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Billing Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Complete billing desk for invoices, bills, and payments</p>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Invoices</p>
                    <h3 className="text-2xl font-bold mt-1">₹86,450</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">12 invoices pending</p>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Month's Revenue</p>
                    <h3 className="text-2xl font-bold mt-1">₹2,47,850</h3>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12.5% from last month</p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                    <Receipt className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Purchase Orders</p>
                    <h3 className="text-2xl font-bold mt-1">₹1,35,250</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">8 orders this month</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Returns & Credit</p>
                    <h3 className="text-2xl font-bold mt-1">₹18,250</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 returns processed</p>
                  </div>
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-3 rounded-full">
                    <ArrowDown className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              className="bg-unnati-primary text-white h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <FileText size={20} />
              <span>Create Invoice</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <FileOutput size={20} />
              <span>Issue Credit Note</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              <span>Record Payment</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <ClipboardList size={20} />
              <span>Generate Report</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Monthly Billing Count" type="bar" data={billingTrendData} />
            <ChartCard title="Payment Methods" type="pie" data={paymentMethodData} />
          </div>
          
          {/* Billing Desk Tabs */}
          <div className="mb-6">
            <BillingDeskTabs />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BillingDashboard;

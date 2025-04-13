
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import QuickBillForm from "@/components/dashboard/billing/QuickBillForm";
import { 
  FileText, 
  Receipt, 
  CreditCard, 
  Clock,
  ClipboardList,
  Search,
  Filter,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
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

  const handleQuickBillSubmit = (data: any) => {
    console.log("Bill submitted:", data);
    toast({
      title: "Bill Generated Successfully",
      description: `Bill for ${data.customerName} has been created for ₹${data.total.toFixed(2)}`,
    });
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
            <p className="text-gray-500 dark:text-gray-400">Manage invoices, bills and payments</p>
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
              <Receipt size={20} />
              <span>View Bills</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              <span>Process Payment</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <Clock size={20} />
              <span>Due Payments</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Monthly Billing Count" type="bar" data={billingTrendData} />
            <ChartCard title="Payment Methods" type="pie" data={paymentMethodData} />
          </div>
          
          <Tabs defaultValue="quick-bill" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="quick-bill">Quick Bill</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quick-bill">
              <QuickBillForm onSubmit={handleQuickBillSubmit} />
            </TabsContent>
            
            <TabsContent value="invoices">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <CardTitle>Recent Invoices</CardTitle>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input placeholder="Search invoices..." className="pl-10" />
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="icon" className="h-10 w-10">
                          <Filter className="h-4 w-4" />
                        </Button>
                        <Button className="gap-2 whitespace-nowrap">
                          <PlusCircle className="h-4 w-4" />
                          New Invoice
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                    <ClipboardList className="mx-auto h-12 w-12 mb-3 text-gray-400 dark:text-gray-500" />
                    <p>No invoices to display.</p>
                    <p className="text-sm mt-1">When you create invoices, they will appear here.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                    <CreditCard className="mx-auto h-12 w-12 mb-3 text-gray-400 dark:text-gray-500" />
                    <p>No payment records to display.</p>
                    <p className="text-sm mt-1">Payment history will appear here when available.</p>
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

export default BillingDashboard;

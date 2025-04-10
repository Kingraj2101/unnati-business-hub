
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  FileText, 
  Receipt, 
  Printer, 
  CheckCircle2,
  AlertCircle,
  Download,
  Search,
  Filter,
  ArrowUpDown,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FactoryBillingSystem = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");
  const { toast } = useToast();

  // Redirect if not authenticated or not a factory user
  if (!isAuthenticated || userType !== "factory") {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample billing data
  const billingData = [
    { id: "FB-2025-001", customer: "Metro Electric Corp", date: "08 Apr, 2025", amount: "₹1,24,500", status: "Paid", type: "Production" },
    { id: "FB-2025-002", customer: "Power Electrical Solutions", date: "07 Apr, 2025", amount: "₹89,750", status: "Pending", type: "Raw Materials" },
    { id: "FB-2025-003", customer: "Bajaj Electricals", date: "06 Apr, 2025", amount: "₹2,35,200", status: "Paid", type: "Production" },
    { id: "FB-2025-004", customer: "Capital Electrical", date: "05 Apr, 2025", amount: "₹1,12,400", status: "Overdue", type: "Maintenance" },
    { id: "FB-2025-005", customer: "Surya Electrical", date: "04 Apr, 2025", amount: "₹78,900", status: "Paid", type: "Production" },
  ];

  const handleCreateInvoice = () => {
    toast({
      title: "New invoice",
      description: "Creating new factory invoice...",
    });
  };

  const handlePrintInvoice = (id: string) => {
    toast({
      title: "Print requested",
      description: `Printing factory invoice ${id}`,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Factory Billing System</h1>
            <p className="text-gray-500">Manage all factory-related invoices, receipts and payments</p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search invoices by ID, customer, or amount..." className="pl-9" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <Calendar size={16} />
              Date Range
            </Button>
            <Button className="bg-unnati-primary hover:bg-unnati-primary/90 gap-2">
              <FileText size={16} />
              Create Invoice
            </Button>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              onClick={handleCreateInvoice}
              className="bg-unnati-primary text-white h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <FileText size={24} />
              <span>Create Factory Invoice</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <Receipt size={24} />
              <span>Generate Receipt</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <Download size={24} />
              <span>Export Records</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <CheckCircle2 size={24} />
              <span>Reconcile Payments</span>
            </Button>
          </div>
          
          {/* Invoice Section */}
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Factory Invoices</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <ArrowUpDown size={14} />
                      Sort
                    </Button>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billingData.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>{invoice.type}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            invoice.status === 'Paid' 
                              ? 'bg-green-100 text-green-800'
                              : invoice.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                          }`}>
                            {invoice.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="h-8 w-8 p-0 mr-2"
                            onClick={() => handlePrintInvoice(invoice.id)}
                          >
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          {/* Alerts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 text-lg flex items-center gap-2">
                  <AlertCircle size={18} />
                  Payment Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 mb-3">2 factory invoices are overdue and require immediate attention</p>
                <Button variant="outline" className="bg-white border-amber-300 text-amber-800">
                  Send Reminders
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  This Month's Production Billing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-3">₹18,42,850 billed this month for production services</p>
                <Button variant="outline" className="bg-white border-blue-300 text-blue-800">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FactoryBillingSystem;

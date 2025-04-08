
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  FileText, 
  Receipt, 
  ShoppingBag, 
  Printer, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

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

  // Sample invoice data
  const recentInvoices = [
    { id: "INV-2025-001", customer: "Raj Electric Supplies", date: "08 Apr, 2025", amount: "₹24,500", status: "Paid" },
    { id: "INV-2025-002", customer: "Modern Lights", date: "07 Apr, 2025", amount: "₹18,750", status: "Pending" },
    { id: "INV-2025-003", customer: "City Electricals", date: "06 Apr, 2025", amount: "₹35,200", status: "Paid" },
    { id: "INV-2025-004", customer: "Sharma Hardware", date: "05 Apr, 2025", amount: "₹12,400", status: "Overdue" },
    { id: "INV-2025-005", customer: "Quality Electronics", date: "04 Apr, 2025", amount: "₹8,900", status: "Paid" },
  ];

  const handleCreateInvoice = () => {
    toast({
      title: "New invoice",
      description: "Creating new invoice...",
    });
  };

  const handlePrintInvoice = (id: string) => {
    toast({
      title: "Print requested",
      description: `Printing invoice ${id}`,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Billing Dashboard</h1>
            <p className="text-gray-500">Manage invoices, receipts and payments</p>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              onClick={handleCreateInvoice}
              className="bg-unnati-primary text-white h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <FileText size={24} />
              <span>Create New Invoice</span>
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
              <ShoppingBag size={24} />
              <span>Quick Sale</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-6 flex flex-col items-center justify-center gap-2"
            >
              <CheckCircle2 size={24} />
              <span>Record Payment</span>
            </Button>
          </div>
          
          {/* Invoice Section */}
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Invoices</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
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
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
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
                <p className="text-amber-700 mb-3">3 invoices are overdue and require immediate attention</p>
                <Button variant="outline" className="bg-white border-amber-300 text-amber-800">
                  Send Reminders
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Today's Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-3">₹42,850 collected today from 5 customers</p>
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

export default BillingDashboard;

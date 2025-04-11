
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import InvoiceSearch from "@/components/dashboard/billing/InvoiceSearch";
import InvoiceCreator from "@/components/dashboard/billing/InvoiceCreator";
import PaymentProcessor from "@/components/dashboard/billing/PaymentProcessor";
import { 
  FileText, 
  Receipt, 
  ShoppingBag, 
  Printer, 
  CheckCircle2,
  AlertCircle,
  PlusCircle,
  Download,
  Eye,
  CreditCard,
  FileBarChart,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";

const BillingDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilters, setSearchFilters] = useState({});
  const [showInvoiceCreator, setShowInvoiceCreator] = useState(false);
  const [showPaymentProcessor, setShowPaymentProcessor] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
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

  // Sample payment data
  const recentPayments = [
    { id: "PMT-2025-001", invoiceId: "INV-2025-001", customer: "Raj Electric Supplies", date: "08 Apr, 2025", amount: "₹24,500", method: "Bank Transfer" },
    { id: "PMT-2025-002", invoiceId: "INV-2025-003", customer: "City Electricals", date: "06 Apr, 2025", amount: "₹35,200", method: "Cheque" },
    { id: "PMT-2025-003", invoiceId: "INV-2025-005", customer: "Quality Electronics", date: "04 Apr, 2025", amount: "₹8,900", method: "UPI" },
  ];

  const handleCreateInvoice = () => {
    setShowInvoiceCreator(true);
  };

  const handleInvoiceCreated = (invoice: any) => {
    // In a real app, this would add the invoice to the database
    toast({
      title: "Invoice created",
      description: `Invoice ${invoice.id} has been created successfully.`,
    });
  };

  const handleRecordPayment = (invoice: any) => {
    setSelectedInvoice(invoice);
    setShowPaymentProcessor(true);
  };

  const handleSearch = (query: string, filters: any) => {
    setSearchQuery(query);
    setSearchFilters(filters);
    // In a real app, this would filter the invoices
  };

  const handlePrintInvoice = (id: string) => {
    toast({
      title: "Print requested",
      description: `Printing invoice ${id}`,
    });
  };

  const handleViewInvoice = (id: string) => {
    toast({
      title: "View invoice",
      description: `Viewing invoice ${id}`,
    });
  };

  const handleViewPayment = (id: string) => {
    toast({
      title: "View payment",
      description: `Viewing payment ${id}`,
    });
  };

  const handleDownloadInvoice = (id: string) => {
    toast({
      title: "Download requested",
      description: `Downloading invoice ${id} as PDF`,
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
          
          {/* Search and Billing Tabs */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle>Billing Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <InvoiceSearch onSearch={handleSearch} />
              </div>
              
              <Tabs defaultValue="invoices" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="invoices">Invoices</TabsTrigger>
                  <TabsTrigger value="payments">Payments</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                
                <TabsContent value="invoices">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        All
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                        Paid
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <AlertCircle className="mr-1 h-4 w-4 text-amber-500" />
                        Pending
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <AlertCircle className="mr-1 h-4 w-4 text-red-500" />
                        Overdue
                      </Button>
                    </div>
                    <Button 
                      onClick={handleCreateInvoice}
                      className="bg-unnati-primary hover:bg-unnati-primary/90"
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      New Invoice
                    </Button>
                  </div>
                  
                  <div className="rounded-md border overflow-hidden">
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
                            <TableCell className="text-right space-x-1">
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleViewInvoice(invoice.id)}
                                title="View"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleDownloadInvoice(invoice.id)}
                                title="Download"
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                              
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handlePrintInvoice(invoice.id)}
                                title="Print"
                              >
                                <Printer className="h-4 w-4" />
                              </Button>
                              
                              {invoice.status !== 'Paid' && (
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleRecordPayment(invoice)}
                                  title="Record Payment"
                                >
                                  <CreditCard className="h-4 w-4" />
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <Button variant="outline" className="text-sm">
                      View All Invoices
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="payments">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        All Payments
                      </Button>
                      <Button variant="outline" size="sm">
                        This Month
                      </Button>
                      <Button variant="outline" size="sm">
                        Last Month
                      </Button>
                    </div>
                  </div>
                  
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Payment ID</TableHead>
                          <TableHead>Invoice</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentPayments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.invoiceId}</TableCell>
                            <TableCell>{payment.customer}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>{payment.method}</TableCell>
                            <TableCell className="text-right space-x-1">
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleViewPayment(payment.id)}
                                title="View"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handlePrintInvoice(payment.invoiceId)}
                                title="Print Receipt"
                              >
                                <Printer className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <Button variant="outline" className="text-sm">
                      View All Payments
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="reports">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Monthly Reports</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Sales Summary
                            </Button>
                          </li>
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Tax Collection
                            </Button>
                          </li>
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Outstanding Payments
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Customer Reports</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Customer Statements
                            </Button>
                          </li>
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Payment History
                            </Button>
                          </li>
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Customer Aging
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Financial Reports</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Income Statement
                            </Button>
                          </li>
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Cash Flow
                            </Button>
                          </li>
                          <li>
                            <Button variant="ghost" className="w-full justify-start">
                              <FileBarChart className="mr-2 h-4 w-4" />
                              Expense Report
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                      Generate Custom Report
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
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
      
      {/* Dialogs */}
      <InvoiceCreator 
        isOpen={showInvoiceCreator} 
        onClose={() => setShowInvoiceCreator(false)} 
        onInvoiceCreated={handleInvoiceCreated}
      />
      
      {selectedInvoice && (
        <PaymentProcessor
          isOpen={showPaymentProcessor}
          onClose={() => setShowPaymentProcessor(false)}
          onPaymentComplete={() => {
            // In a real app, this would update the invoice status
            toast({
              title: "Payment recorded",
              description: `Payment for invoice ${selectedInvoice.id} has been recorded.`,
            });
          }}
          invoiceId={selectedInvoice.id}
          customerName={selectedInvoice.customer}
          amount={selectedInvoice.amount}
        />
      )}
    </div>
  );
};

export default BillingDashboard;

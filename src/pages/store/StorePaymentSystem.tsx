
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  CreditCard, 
  Filter, 
  Search, 
  Plus, 
  Download,
  Check,
  AlertCircle,
  X,
  Calendar,
  FileText,
  CircleDollarSign,
  ArrowDownUp,
  BanknoteIcon,
  SmartphoneIcon,
  CreditCardIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/dashboard/SearchBar";
import { useToast } from "@/components/ui/use-toast";

const StorePaymentSystem = () => {
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

  // Sample payment data
  const payments = [
    {
      id: "PAY-2025-001",
      orderId: "ORD-2025-001",
      customer: "Rajesh Kumar",
      date: "13 Apr, 2025",
      amount: "₹4,250",
      method: "UPI",
      status: "Successful",
    },
    {
      id: "PAY-2025-002",
      orderId: "ORD-2025-002",
      customer: "Anjali Singh",
      date: "13 Apr, 2025",
      amount: "₹2,800",
      method: "Cash",
      status: "Successful",
    },
    {
      id: "PAY-2025-003",
      orderId: "ORD-2025-003",
      customer: "Vikram Patel",
      date: "12 Apr, 2025",
      amount: "₹7,500",
      method: "Card",
      status: "Successful",
    },
    {
      id: "PAY-2025-004",
      orderId: "ORD-2025-004",
      customer: "Aisha Khan",
      date: "12 Apr, 2025",
      amount: "₹1,200",
      method: "UPI",
      status: "Failed",
    },
    {
      id: "PAY-2025-005",
      orderId: "ORD-2025-005",
      customer: "Suresh Mehta",
      date: "11 Apr, 2025",
      amount: "₹3,800",
      method: "Cash",
      status: "Successful",
    },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-unnati-primary" />
              Payment Management
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Process and track payments for store orders</p>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search payments..." dashboardType="store" />
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Export Payments")}
              >
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button 
                className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90"
                onClick={() => handleAction("Process New Payment")}
              >
                <Plus className="h-4 w-4" />
                New Payment
              </Button>
            </div>
          </div>
          
          {/* Payment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Today's Revenue</p>
                    <p className="text-2xl font-bold">₹15,350</p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <CircleDollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-green-600 flex items-center">
                    <span className="flex items-center">
                      <ArrowDownUp className="h-3 w-3 mr-1" />
                      <span>+12.5% from yesterday</span>
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Cash Payments</p>
                    <p className="text-2xl font-bold">₹6,600</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <BanknoteIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-slate-500">43% of daily revenue</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">UPI Payments</p>
                    <p className="text-2xl font-bold">₹5,450</p>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                    <SmartphoneIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-slate-500">36% of daily revenue</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Card Payments</p>
                    <p className="text-2xl font-bold">₹3,300</p>
                  </div>
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                    <CreditCardIcon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-slate-500">21% of daily revenue</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <TabsList>
                <TabsTrigger value="all">All Payments</TabsTrigger>
                <TabsTrigger value="successful">Successful</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="failed">Failed</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <Select defaultValue="All Methods">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Payment Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Methods">All Methods</SelectItem>
                    <SelectItem value="Cash">Cash</SelectItem>
                    <SelectItem value="UPI">UPI</SelectItem>
                    <SelectItem value="Card">Card</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="Last 7 Days">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Today">Today</SelectItem>
                    <SelectItem value="Yesterday">Yesterday</SelectItem>
                    <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
                    <SelectItem value="This Month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>All Payments</CardTitle>
                  <CardDescription>Complete payment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Payment ID</TableHead>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.orderId}</TableCell>
                            <TableCell>{payment.customer}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>
                              <Badge 
                                variant="outline"
                                className={
                                  payment.method === "UPI" ? "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300" :
                                  payment.method === "Cash" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" :
                                  "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                                }
                              >
                                {payment.method}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={payment.status === "Successful" ? "outline" : "destructive"}
                              >
                                {payment.status === "Successful" ? (
                                  <Check className="h-3 w-3 mr-1" />
                                ) : (
                                  <X className="h-3 w-3 mr-1" />
                                )}
                                {payment.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleAction(`View receipt for ${payment.id}`)}
                              >
                                <FileText className="h-3 w-3 mr-1" />
                                Receipt
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="successful">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Successful Payments</CardTitle>
                  <CardDescription>All successfully processed payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Payment ID</TableHead>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments
                          .filter(payment => payment.status === "Successful")
                          .map((payment) => (
                            <TableRow key={payment.id}>
                              <TableCell className="font-medium">{payment.id}</TableCell>
                              <TableCell>{payment.orderId}</TableCell>
                              <TableCell>{payment.customer}</TableCell>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>{payment.amount}</TableCell>
                              <TableCell>
                                <Badge 
                                  variant="outline"
                                  className={
                                    payment.method === "UPI" ? "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300" :
                                    payment.method === "Cash" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" :
                                    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                                  }
                                >
                                  {payment.method}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`View receipt for ${payment.id}`)}
                                >
                                  <FileText className="h-3 w-3 mr-1" />
                                  Receipt
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="failed">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Failed Payments</CardTitle>
                  <CardDescription>Payments that couldn't be processed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Payment ID</TableHead>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments
                          .filter(payment => payment.status === "Failed")
                          .map((payment) => (
                            <TableRow key={payment.id}>
                              <TableCell className="font-medium">{payment.id}</TableCell>
                              <TableCell>{payment.orderId}</TableCell>
                              <TableCell>{payment.customer}</TableCell>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>{payment.amount}</TableCell>
                              <TableCell>
                                <Badge 
                                  variant="outline"
                                  className={
                                    payment.method === "UPI" ? "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300" :
                                    payment.method === "Cash" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" :
                                    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                                  }
                                >
                                  {payment.method}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`Retry payment ${payment.id}`)}
                                >
                                  Retry
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                
                {payments.filter(payment => payment.status === "Failed").length === 0 && (
                  <CardFooter className="pb-6">
                    <div className="w-full flex items-center justify-center p-6 border-t border-dashed">
                      <div className="text-center">
                        <Check className="mx-auto h-8 w-8 text-green-500 mb-2" />
                        <p className="text-sm font-medium">No failed payments</p>
                        <p className="text-xs text-muted-foreground mt-1">All payments have been processed successfully</p>
                      </div>
                    </div>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>
            
            <TabsContent value="pending">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pending Payments</CardTitle>
                  <CardDescription>Payments awaiting processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full flex items-center justify-center p-6">
                    <div className="text-center">
                      <AlertCircle className="mx-auto h-8 w-8 text-amber-500 mb-2" />
                      <p className="text-sm font-medium">No pending payments</p>
                      <p className="text-xs text-muted-foreground mt-1">All payments have been processed</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => handleAction("Process New Payment")}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        New Payment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Payment Processing Form */}
          <Card>
            <CardHeader>
              <CardTitle>Process New Payment</CardTitle>
              <CardDescription>Complete a new payment transaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="order-id" className="text-sm font-medium">Order ID</label>
                    <Input id="order-id" placeholder="Enter order ID" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="customer" className="text-sm font-medium">Customer</label>
                    <Input id="customer" placeholder="Customer name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="amount" className="text-sm font-medium">Amount</label>
                    <Input id="amount" placeholder="Enter amount" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="payment-method" className="text-sm font-medium">Payment Method</label>
                    <Select>
                      <SelectTrigger id="payment-method">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="card">Card</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">Date</label>
                    <div className="flex">
                      <Input id="date" type="date" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium">Payment Notes</label>
                  <Input id="notes" placeholder="Add any additional notes" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto" onClick={() => handleAction("Process Payment")}>
                Process Payment
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StorePaymentSystem;

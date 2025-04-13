
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  CreditCard, 
  Search, 
  Download, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  FileText,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import SearchBar from "@/components/dashboard/SearchBar";

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
      id: "TXN-2025-001",
      customer: "Rajesh Kumar",
      date: "13 Apr, 2025",
      amount: "₹4,250",
      method: "UPI",
      status: "Completed",
      invoice: "INV-2025-001"
    },
    {
      id: "TXN-2025-002",
      customer: "Anjali Singh",
      date: "13 Apr, 2025",
      amount: "₹2,800",
      method: "Cash",
      status: "Completed",
      invoice: "INV-2025-002"
    },
    {
      id: "TXN-2025-003",
      customer: "Vikram Patel",
      date: "12 Apr, 2025",
      amount: "₹7,500",
      method: "Card",
      status: "Processing",
      invoice: "INV-2025-003"
    },
    {
      id: "TXN-2025-004",
      customer: "Aisha Khan",
      date: "12 Apr, 2025",
      amount: "₹1,200",
      method: "UPI",
      status: "Failed",
      invoice: "INV-2025-004"
    },
    {
      id: "TXN-2025-005",
      customer: "Suresh Mehta",
      date: "11 Apr, 2025",
      amount: "₹3,800",
      method: "Cash",
      status: "Completed",
      invoice: "INV-2025-005"
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
            <p className="text-slate-500 dark:text-slate-400">Track and manage store payments</p>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search transactions..." dashboardType="store" />
            
            <div className="flex flex-wrap gap-2">
              <Button 
                className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90" 
                onClick={() => handleAction("New Payment")}
              >
                <Plus className="h-4 w-4" />
                Record Payment
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Export Transactions")}
              >
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>View all payment transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Transaction ID</TableHead>
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
                            <TableCell>{payment.customer}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-slate-100">
                                {payment.method}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={
                                  payment.status === "Completed" ? "outline" : 
                                  payment.status === "Processing" ? "secondary" : 
                                  "destructive"
                                }
                              >
                                {payment.status === "Completed" && (
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                )}
                                {payment.status === "Processing" && (
                                  <Clock className="h-3 w-3 mr-1" />
                                )}
                                {payment.status === "Failed" && (
                                  <AlertCircle className="h-3 w-3 mr-1" />
                                )}
                                {payment.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleAction(`View details of ${payment.id}`)}
                              >
                                View
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
            
            <TabsContent value="completed">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Completed Transactions</CardTitle>
                  <CardDescription>Successfully processed payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Transaction ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead>Invoice</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments
                          .filter(payment => payment.status === "Completed")
                          .map((payment) => (
                            <TableRow key={payment.id}>
                              <TableCell className="font-medium">{payment.id}</TableCell>
                              <TableCell>{payment.customer}</TableCell>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>{payment.amount}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-slate-100">
                                  {payment.method}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <span className="text-blue-600 hover:underline cursor-pointer"
                                  onClick={() => handleAction(`View invoice ${payment.invoice}`)}
                                >
                                  {payment.invoice}
                                </span>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`Generate receipt for ${payment.id}`)}
                                >
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
            
            <TabsContent value="pending">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pending Transactions</CardTitle>
                  <CardDescription>Payments being processed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Transaction ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments
                          .filter(payment => payment.status === "Processing")
                          .map((payment) => (
                            <TableRow key={payment.id}>
                              <TableCell className="font-medium">{payment.id}</TableCell>
                              <TableCell>{payment.customer}</TableCell>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>{payment.amount}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-slate-100">
                                  {payment.method}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="secondary">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {payment.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleAction(`Complete ${payment.id}`)}
                                  >
                                    Complete
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleAction(`Cancel ${payment.id}`)}
                                  >
                                    Cancel
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
            </TabsContent>
            
            <TabsContent value="failed">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Failed Transactions</CardTitle>
                  <CardDescription>Payments that were not processed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Transaction ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments
                          .filter(payment => payment.status === "Failed")
                          .map((payment) => (
                            <TableRow key={payment.id}>
                              <TableCell className="font-medium">{payment.id}</TableCell>
                              <TableCell>{payment.customer}</TableCell>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>{payment.amount}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-slate-100">
                                  {payment.method}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-red-600">Payment Gateway Error</TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`Retry ${payment.id}`)}
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
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Payment Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Today's Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Total Payments</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">₹18,550</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        8.5%
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Transactions</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">12</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        4.2%
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Average Transaction</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">₹1,545</p>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700">
                        <ArrowDownLeft className="h-3 w-3 mr-1" />
                        2.1%
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">UPI</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Cash</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Card</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Credit</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Payment Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-700 dark:text-green-400">Completed</span>
                    </div>
                    <p className="text-2xl font-bold">28</p>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-1">₹65,750 Total</p>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-5 w-5 text-amber-600" />
                      <span className="font-medium text-amber-700 dark:text-amber-400">Pending</span>
                    </div>
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">₹12,800 Total</p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="font-medium text-red-700 dark:text-red-400">Failed</span>
                    </div>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-1">₹8,200 Total</p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-700 dark:text-blue-400">Scheduled</span>
                    </div>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">₹7,500 Total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>Recent Payment Activity</span>
                <Button variant="outline" size="sm" className="gap-1" onClick={() => handleAction("View All Activities")}>
                  <FileText className="h-4 w-4" />
                  <span>View All</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Payment Received</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">₹4,250 payment received from Rajesh Kumar via UPI</p>
                    <p className="text-xs text-slate-400 mt-1">Today, 10:23 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium">Payment Processing</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">₹7,500 payment from Vikram Patel is being processed</p>
                    <p className="text-xs text-slate-400 mt-1">Today, 09:45 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">Payment Failed</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">₹1,200 payment from Aisha Khan failed due to gateway error</p>
                    <p className="text-xs text-slate-400 mt-1">Today, 09:15 AM</p>
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

export default StorePaymentSystem;

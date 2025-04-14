
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  CreditCard, 
  Search, 
  Plus, 
  ArrowUpDown, 
  FileText, 
  CircleDollarSign,
  Calendar,
  MoreHorizontal,
  Printer,
  Mail,
  AlertCircle,
  Check,
  BanknoteIcon,
  QrCode,
  Smartphone,
  RefreshCw,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import ChartCard from "@/components/dashboard/ChartCard";
import { useToast } from "@/components/ui/use-toast";

const StorePaymentSystem = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMethod, setFilterMethod] = useState("all");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAction = (action: string, paymentId?: string) => {
    toast({
      title: action,
      description: paymentId 
        ? `${action} for payment #${paymentId}` 
        : `${action} operation initiated.`,
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching Payments",
      description: `Searching for "${searchQuery}"`,
    });
  };

  // Sample payments data
  const payments = [
    {
      id: "PAY-2854",
      customer: "Raj Kumar",
      date: "12 Apr 2025",
      amount: "₹24,500",
      method: "upi",
      status: "completed",
      orderId: "ORD-3421"
    },
    {
      id: "PAY-2853",
      customer: "Priya Singh",
      date: "10 Apr 2025",
      amount: "₹18,750",
      method: "cash",
      status: "completed",
      orderId: "ORD-3420"
    },
    {
      id: "PAY-2852",
      customer: "Vikram Patel",
      date: "08 Apr 2025",
      amount: "₹32,250",
      method: "card",
      status: "completed",
      orderId: "ORD-3418"
    },
    {
      id: "PAY-2851",
      customer: "Anita Sharma",
      date: "05 Apr 2025",
      amount: "₹15,800",
      method: "upi",
      status: "pending",
      orderId: "ORD-3415"
    },
    {
      id: "PAY-2850",
      customer: "Sanjay Mehta",
      date: "03 Apr 2025",
      amount: "₹22,450",
      method: "cash",
      status: "completed",
      orderId: "ORD-3410"
    },
    {
      id: "PAY-2849",
      customer: "Divya Gupta",
      date: "01 Apr 2025",
      amount: "₹28,900",
      method: "card",
      status: "failed",
      orderId: "ORD-3408"
    }
  ];

  // Filter payments based on method
  const filteredPayments = filterMethod === "all" 
    ? payments 
    : payments.filter(payment => payment.method === filterMethod);

  // Sample data for charts
  const paymentMethodData = [
    { name: "UPI", value: 45 },
    { name: "Cash", value: 30 },
    { name: "Card", value: 20 },
    { name: "Credit", value: 5 },
  ];

  const dailyRevenueData = [
    { name: "Mon", value: 28500 },
    { name: "Tue", value: 22000 },
    { name: "Wed", value: 31000 },
    { name: "Thu", value: 26000 },
    { name: "Fri", value: 34000 },
    { name: "Sat", value: 42000 },
    { name: "Sun", value: 31500 },
  ];

  // Method badge renderer
  const getMethodBadge = (method: string) => {
    const methodConfig: Record<string, { color: string, label: string, icon: React.ReactNode }> = {
      upi: { 
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300", 
        label: "UPI",
        icon: <Smartphone className="h-3 w-3 mr-1" />
      },
      cash: { 
        color: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300", 
        label: "Cash",
        icon: <BanknoteIcon className="h-3 w-3 mr-1" />
      },
      card: { 
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300", 
        label: "Card",
        icon: <CreditCard className="h-3 w-3 mr-1" />
      },
      credit: { 
        color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", 
        label: "Credit",
        icon: <CircleDollarSign className="h-3 w-3 mr-1" />
      }
    };

    const config = methodConfig[method] || methodConfig.cash;
    
    return (
      <Badge className={config.color}>
        <span className="flex items-center">
          {config.icon}
          {config.label}
        </span>
      </Badge>
    );
  };

  // Status badge renderer
  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string, label: string, icon: React.ReactNode }> = {
      completed: { 
        color: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300", 
        label: "Completed",
        icon: <Check className="h-3 w-3 mr-1" />
      },
      pending: { 
        color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", 
        label: "Pending",
        icon: <RefreshCw className="h-3 w-3 mr-1" />
      },
      failed: { 
        color: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300", 
        label: "Failed",
        icon: <AlertCircle className="h-3 w-3 mr-1" />
      }
    };

    const config = statusConfig[status] || statusConfig.pending;
    
    return (
      <Badge variant="outline" className={config.color}>
        <span className="flex items-center">
          {config.icon}
          {config.label}
        </span>
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-unnati-primary" />
              Payment System
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Process payments and manage transactions</p>
          </div>
          
          {/* Payment Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Today's Transactions</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <ArrowUpDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Today's Revenue</p>
                  <p className="text-2xl font-bold">₹42,500</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CircleDollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pending Payments</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Failed Transactions</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="transactions" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="methods">Payment Methods</TabsTrigger>
            </TabsList>
            
            <TabsContent value="transactions">
              {/* Payment Actions */}
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
                <div className="w-full md:w-auto flex-1">
                  <form onSubmit={handleSearch} className="flex w-full max-w-lg items-center space-x-2">
                    <Input
                      type="text"
                      placeholder="Search payments by ID, customer, or amount..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" className="gap-2">
                      <Search className="h-4 w-4" />
                      Search
                    </Button>
                  </form>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90" 
                    onClick={() => handleAction("Process New Payment")}
                  >
                    <Plus className="h-4 w-4" />
                    New Payment
                  </Button>
                  <Select 
                    value={filterMethod} 
                    onValueChange={setFilterMethod}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Methods</SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="card">Card</SelectItem>
                      <SelectItem value="credit">Credit</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => handleAction("Generate Payment Report")}
                  >
                    <FileText className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
              
              {/* Payments Table */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Process and manage payment transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Payment ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Order Ref.</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPayments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.customer}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>{getMethodBadge(payment.method)}</TableCell>
                            <TableCell>{getStatusBadge(payment.status)}</TableCell>
                            <TableCell>{payment.orderId}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem onClick={() => handleAction("View Details", payment.id)}>
                                    <Search className="mr-2 h-4 w-4" />
                                    <span>View Details</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleAction("Print Receipt", payment.id)}>
                                    <Printer className="mr-2 h-4 w-4" />
                                    <span>Print Receipt</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleAction("Send Receipt", payment.id)}>
                                    <Mail className="mr-2 h-4 w-4" />
                                    <span>Email Receipt</span>
                                  </DropdownMenuItem>
                                  {payment.status === "pending" && (
                                    <>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem 
                                        onClick={() => handleAction("Mark as Completed", payment.id)}
                                        className="text-green-600 dark:text-green-400"
                                      >
                                        <Check className="mr-2 h-4 w-4" />
                                        <span>Mark Completed</span>
                                      </DropdownMenuItem>
                                    </>
                                  )}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Revenue (Last 7 Days)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartCard title="" type="bar" data={dailyRevenueData} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartCard title="" type="pie" data={paymentMethodData} />
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Payment Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>UPI Transactions</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Cash Transactions</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Card Transactions</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Credit Transactions</span>
                      <span>5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="methods">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 hover:border-blue-400 transition-all cursor-pointer" onClick={() => handleAction("Configure UPI Payments")}>
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">UPI Payments</h3>
                    <p className="text-sm text-slate-500 mb-4">Accept payments via UPI apps</p>
                    <Badge className="mb-2 bg-green-100 text-green-800">Active</Badge>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6 flex justify-center">
                    <Button variant="outline" size="sm" className="w-full">Configure</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-2 hover:border-green-400 transition-all cursor-pointer" onClick={() => handleAction("Configure Cash Payments")}>
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <BanknoteIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Cash Payments</h3>
                    <p className="text-sm text-slate-500 mb-4">Collect and manage cash payments</p>
                    <Badge className="mb-2 bg-green-100 text-green-800">Active</Badge>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6 flex justify-center">
                    <Button variant="outline" size="sm" className="w-full">Configure</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-2 hover:border-purple-400 transition-all cursor-pointer" onClick={() => handleAction("Configure Card Payments")}>
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                      <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Card Payments</h3>
                    <p className="text-sm text-slate-500 mb-4">Accept debit and credit cards</p>
                    <Badge className="mb-2 bg-green-100 text-green-800">Active</Badge>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6 flex justify-center">
                    <Button variant="outline" size="sm" className="w-full">Configure</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-2 hover:border-amber-400 transition-all cursor-pointer" onClick={() => handleAction("Configure QR Code Payments")}>
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                      <QrCode className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">QR Code Payments</h3>
                    <p className="text-sm text-slate-500 mb-4">Generate QR codes for payments</p>
                    <Badge className="mb-2 bg-green-100 text-green-800">Active</Badge>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6 flex justify-center">
                    <Button variant="outline" size="sm" className="w-full">Configure</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Quick Actions */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Process Payment")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Plus className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Process Payment</h3>
                  <p className="text-sm text-slate-500 mt-1">Create a new transaction</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Check Payment Status")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Search className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Check Status</h3>
                  <p className="text-sm text-slate-500 mt-1">Verify payment status</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Generate Payment Reports")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <BarChart3 className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Payment Reports</h3>
                  <p className="text-sm text-slate-500 mt-1">Generate payment reports</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Reconcile Payments")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <ArrowUpDown className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Reconciliation</h3>
                  <p className="text-sm text-slate-500 mt-1">Reconcile payment records</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StorePaymentSystem;

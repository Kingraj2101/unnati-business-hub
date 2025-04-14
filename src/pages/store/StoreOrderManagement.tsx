
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  ShoppingBag, 
  Package, 
  Truck, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Filter,
  Plus,
  Search,
  ArrowUpDown,
  Calendar,
  MoreHorizontal,
  FileText,
  Printer,
  Mail,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import SearchBar from "@/components/dashboard/SearchBar";
import { useToast } from "@/components/ui/use-toast";

const StoreOrderManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAction = (action: string, orderId?: string) => {
    toast({
      title: action,
      description: orderId 
        ? `${action} for order #${orderId}` 
        : `${action} operation initiated.`,
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching Orders",
      description: `Searching for "${searchQuery}"`,
    });
  };

  // Sample orders data
  const orders = [
    {
      id: "ORD-2854",
      customer: "Raj Kumar",
      date: "12 Apr 2025",
      items: 5,
      amount: "₹24,500",
      status: "new",
      paymentStatus: "pending"
    },
    {
      id: "ORD-2853",
      customer: "Priya Singh",
      date: "10 Apr 2025",
      items: 3,
      amount: "₹18,750",
      status: "processing",
      paymentStatus: "paid"
    },
    {
      id: "ORD-2852",
      customer: "Vikram Patel",
      date: "08 Apr 2025",
      items: 7,
      amount: "₹32,250",
      status: "ready",
      paymentStatus: "paid"
    },
    {
      id: "ORD-2851",
      customer: "Anita Sharma",
      date: "05 Apr 2025",
      items: 2,
      amount: "₹15,800",
      status: "delivered",
      paymentStatus: "paid"
    },
    {
      id: "ORD-2850",
      customer: "Sanjay Mehta",
      date: "03 Apr 2025",
      items: 4,
      amount: "₹22,450",
      status: "delivered",
      paymentStatus: "paid"
    },
    {
      id: "ORD-2849",
      customer: "Divya Gupta",
      date: "01 Apr 2025",
      items: 6,
      amount: "₹28,900",
      status: "cancelled",
      paymentStatus: "refunded"
    }
  ];

  // Filter orders based on status
  const filteredOrders = filterStatus === "all" 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  // Status badge renderer
  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string, label: string }> = {
      new: { color: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300", label: "New" },
      processing: { color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", label: "Processing" },
      ready: { color: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300", label: "Ready for Pickup" },
      delivered: { color: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300", label: "Delivered" },
      cancelled: { color: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300", label: "Cancelled" }
    };

    const config = statusConfig[status] || statusConfig.new;
    
    return (
      <Badge className={config.color}>
        {config.label}
      </Badge>
    );
  };

  // Payment status badge renderer
  const getPaymentBadge = (status: string) => {
    const statusConfig: Record<string, { color: string, label: string }> = {
      paid: { color: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300", label: "Paid" },
      pending: { color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", label: "Pending" },
      refunded: { color: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300", label: "Refunded" }
    };

    const config = statusConfig[status] || statusConfig.pending;
    
    return (
      <Badge variant="outline" className={config.color}>
        {config.label}
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
              <ShoppingBag className="h-6 w-6 text-unnati-primary" />
              Order Management
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Track, process, and manage customer orders</p>
          </div>
          
          {/* Order Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <div className="w-full md:w-auto flex-1">
              <form onSubmit={handleSearch} className="flex w-full max-w-lg items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search orders by ID, customer, or amount..."
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
                onClick={() => handleAction("Create New Order")}
              >
                <Plus className="h-4 w-4" />
                New Order
              </Button>
              <Select 
                value={filterStatus} 
                onValueChange={setFilterStatus}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="ready">Ready for Pickup</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Export Orders")}
              >
                <FileText className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          {/* Order Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">New Orders</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Processing</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ready for Pickup</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Package className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Delivered Today</p>
                  <p className="text-2xl font-bold">14</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Orders Table */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Manage and process customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>{getPaymentBadge(order.paymentStatus)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => handleAction("View Details", order.id)}>
                                <Search className="mr-2 h-4 w-4" />
                                <span>View Details</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("Print Invoice", order.id)}>
                                <Printer className="mr-2 h-4 w-4" />
                                <span>Print Invoice</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("Send to Customer", order.id)}>
                                <Mail className="mr-2 h-4 w-4" />
                                <span>Email Customer</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {order.status !== "cancelled" && (
                                <DropdownMenuItem 
                                  onClick={() => handleAction("Cancel Order", order.id)}
                                  className="text-red-600 dark:text-red-400"
                                >
                                  <X className="mr-2 h-4 w-4" />
                                  <span>Cancel Order</span>
                                </DropdownMenuItem>
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
          
          {/* Quick Actions */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Process Pending Orders")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Clock className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Process Pending</h3>
                  <p className="text-sm text-slate-500 mt-1">Process pending orders</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Update Order Status")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <ArrowUpDown className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Update Status</h3>
                  <p className="text-sm text-slate-500 mt-1">Change order status</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("Manage Shipping")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Truck className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Manage Shipping</h3>
                  <p className="text-sm text-slate-500 mt-1">Handle delivery logistics</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-dashed hover:border-unnati-primary hover:bg-unnati-primary/5 transition-all cursor-pointer" onClick={() => handleAction("View Order Calendar")}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Calendar className="h-10 w-10 text-unnati-primary mb-3" />
                  <h3 className="font-medium">Order Calendar</h3>
                  <p className="text-sm text-slate-500 mt-1">View delivery schedule</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreOrderManagement;

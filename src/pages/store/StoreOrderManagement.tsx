
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { ShoppingBag, Clock, CheckCircle2, AlertCircle, Filter, Search, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import SearchBar from "@/components/dashboard/SearchBar";
import { useToast } from "@/components/ui/use-toast";

const StoreOrderManagement = () => {
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

  // Sample order data
  const orders = [
    {
      id: "ORD-2025-001",
      customer: "Rajesh Kumar",
      date: "13 Apr, 2025",
      items: 5,
      total: "₹4,250",
      status: "Completed",
    },
    {
      id: "ORD-2025-002",
      customer: "Anjali Singh",
      date: "13 Apr, 2025",
      items: 3,
      total: "₹2,800",
      status: "Processing",
    },
    {
      id: "ORD-2025-003",
      customer: "Vikram Patel",
      date: "12 Apr, 2025",
      items: 8,
      total: "₹7,500",
      status: "Processing",
    },
    {
      id: "ORD-2025-004",
      customer: "Aisha Khan",
      date: "12 Apr, 2025",
      items: 2,
      total: "₹1,200",
      status: "Pending Payment",
    },
    {
      id: "ORD-2025-005",
      customer: "Suresh Mehta",
      date: "11 Apr, 2025",
      items: 4,
      total: "₹3,800",
      status: "Completed",
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
              <ShoppingBag className="h-6 w-6 text-unnati-primary" />
              Order Management
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Manage and track customer orders</p>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search orders..." dashboardType="store" />
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Filter Orders")}
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button 
                className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90"
                onClick={() => handleAction("Create New Order")}
              >
                <ShoppingBag className="h-4 w-4" />
                New Order
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>All Orders</CardTitle>
                  <CardDescription>Manage all customer orders</CardDescription>
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
                          <TableHead>Total</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.items}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={
                                  order.status === "Completed" ? "outline" : 
                                  order.status === "Processing" ? "secondary" : 
                                  "destructive"
                                }
                              >
                                {order.status === "Completed" && (
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                )}
                                {order.status === "Processing" && (
                                  <Clock className="h-3 w-3 mr-1" />
                                )}
                                {order.status === "Pending Payment" && (
                                  <AlertCircle className="h-3 w-3 mr-1" />
                                )}
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleAction(`View order ${order.id}`)}
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
            
            <TabsContent value="processing">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Processing Orders</CardTitle>
                  <CardDescription>Orders currently being processed</CardDescription>
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
                          <TableHead>Total</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders
                          .filter(order => order.status === "Processing")
                          .map((order) => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.id}</TableCell>
                              <TableCell>{order.customer}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>{order.items}</TableCell>
                              <TableCell>{order.total}</TableCell>
                              <TableCell>
                                <Badge variant="secondary">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleAction(`View order ${order.id}`)}
                                  >
                                    View
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleAction(`Mark order ${order.id} as complete`)}
                                  >
                                    Complete
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
            
            <TabsContent value="completed">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Completed Orders</CardTitle>
                  <CardDescription>Successfully completed orders</CardDescription>
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
                          <TableHead>Total</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders
                          .filter(order => order.status === "Completed")
                          .map((order) => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.id}</TableCell>
                              <TableCell>{order.customer}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>{order.items}</TableCell>
                              <TableCell>{order.total}</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`View order ${order.id}`)}
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
            
            <TabsContent value="pending">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pending Orders</CardTitle>
                  <CardDescription>Orders awaiting payment or confirmation</CardDescription>
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
                          <TableHead>Total</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders
                          .filter(order => order.status === "Pending Payment")
                          .map((order) => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.id}</TableCell>
                              <TableCell>{order.customer}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>{order.items}</TableCell>
                              <TableCell>{order.total}</TableCell>
                              <TableCell>
                                <Badge variant="destructive">
                                  <AlertCircle className="h-3 w-3 mr-1" />
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleAction(`Process payment for ${order.id}`)}
                                  >
                                    Process Payment
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleAction(`Cancel order ${order.id}`)}
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
          </Tabs>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Delivery Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-unnati-primary" />
                      <span>Orders to Pack</span>
                    </div>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-unnati-purple" />
                      <span>Ready for Delivery</span>
                    </div>
                    <Badge variant="secondary">5</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span>Delivered Today</span>
                    </div>
                    <Badge variant="secondary">3</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" onClick={() => handleAction("View All Deliveries")}>
                  View All Deliveries
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Order Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span>Payment Failed</span>
                    </div>
                    <Badge variant="destructive">2</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <span>Delayed Orders</span>
                    </div>
                    <Badge variant="secondary">1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <span>Requires Attention</span>
                    </div>
                    <Badge variant="secondary">3</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" onClick={() => handleAction("Resolve Issues")}>
                  Resolve Issues
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Today's Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-4xl font-bold text-unnati-primary">12</p>
                  <p className="text-sm text-slate-500 mt-1">Orders Received Today</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600">7</p>
                      <p className="text-xs text-slate-500">Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-amber-500">3</p>
                      <p className="text-xs text-slate-500">Processing</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-red-500">2</p>
                      <p className="text-xs text-slate-500">Pending</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="outline" onClick={() => handleAction("View Today's Orders")}>
                  View Today's Orders
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreOrderManagement;

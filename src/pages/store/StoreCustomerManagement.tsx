
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Users, 
  Search, 
  UserPlus, 
  Filter, 
  Download,
  Mail,
  Phone,
  ShoppingBag,
  Edit,
  Trash,
  Eye,
  Clock,
  Calendar,
  ChevronDown,
  IndianRupee,
  UserCog,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import SearchBar from "@/components/dashboard/SearchBar";

const StoreCustomerManagement = () => {
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

  // Sample customers data
  const customers = [
    {
      id: "CUST-001",
      name: "Raj Kumar",
      type: "Retail",
      phone: "9876543210",
      email: "raj.kumar@example.com",
      totalSpent: "₹23,450",
      lastPurchase: "13 Apr, 2025",
      status: "Active"
    },
    {
      id: "CUST-002",
      name: "Sanjay Mehta",
      type: "Wholesale",
      phone: "9012345678",
      email: "sanjay.m@example.com",
      totalSpent: "₹1,05,780",
      lastPurchase: "12 Apr, 2025",
      status: "Active"
    },
    {
      id: "CUST-003",
      name: "Neha Singh",
      type: "Retail",
      phone: "8765432109",
      email: "neha.s@example.com",
      totalSpent: "₹12,800",
      lastPurchase: "10 Apr, 2025",
      status: "Active"
    },
    {
      id: "CUST-004",
      name: "Alok Sharma",
      type: "Contractor",
      phone: "7890123456",
      email: "alok.sharma@example.com",
      totalSpent: "₹1,82,650",
      lastPurchase: "08 Apr, 2025",
      status: "Active"
    },
    {
      id: "CUST-005",
      name: "Priya Patel",
      type: "Retail",
      phone: "9876543211",
      email: "priya.p@example.com",
      totalSpent: "₹7,500",
      lastPurchase: "05 Apr, 2025",
      status: "Inactive"
    },
    {
      id: "CUST-006",
      name: "Vikram Singh",
      type: "Wholesale",
      phone: "9876543212",
      email: "vikram.s@example.com",
      totalSpent: "₹92,750",
      lastPurchase: "01 Apr, 2025",
      status: "Active"
    },
    {
      id: "CUST-007",
      name: "Ritu Desai",
      type: "Retail",
      phone: "9876543213",
      email: "ritu.d@example.com",
      totalSpent: "₹5,280",
      lastPurchase: "28 Mar, 2025",
      status: "Inactive"
    }
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Users className="h-6 w-6 text-unnati-primary" />
              Customer Management
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Manage and track your store customers</p>
          </div>
          
          {/* Search and Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search customers..." dashboardType="store" />
            
            <div className="flex flex-wrap gap-2">
              <Button 
                className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90" 
                onClick={() => handleAction("Add New Customer")}
              >
                <UserPlus className="h-4 w-4" />
                Add Customer
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Export Customer Data")}
              >
                <Download className="h-4 w-4" />
                Export
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleAction("Filter by Type")}>
                    By Customer Type
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAction("Filter by Status")}>
                    By Status
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAction("Filter by Purchase Date")}>
                    By Purchase Date
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAction("Filter by Spend")}>
                    By Spend Amount
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Customer Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Customers</p>
                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-200">432</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500 opacity-70" />
                </div>
                <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-2">+12% from previous month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">New This Month</p>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-200">28</p>
                  </div>
                  <UserPlus className="h-8 w-8 text-green-500 opacity-70" />
                </div>
                <p className="text-xs text-green-600/70 dark:text-green-400/70 mt-2">+5% from previous month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Avg. Purchase</p>
                    <p className="text-2xl font-bold text-purple-900 dark:text-purple-200">₹4,250</p>
                  </div>
                  <IndianRupee className="h-8 w-8 text-purple-500 opacity-70" />
                </div>
                <p className="text-xs text-purple-600/70 dark:text-purple-400/70 mt-2">+3.2% from previous month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600 dark:text-amber-400">Repeat Rate</p>
                    <p className="text-2xl font-bold text-amber-900 dark:text-amber-200">65%</p>
                  </div>
                  <Clock className="h-8 w-8 text-amber-500 opacity-70" />
                </div>
                <p className="text-xs text-amber-600/70 dark:text-amber-400/70 mt-2">+8% from previous month</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Customers</TabsTrigger>
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="wholesale">Wholesale</TabsTrigger>
              <TabsTrigger value="contractors">Contractors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Customer Database</CardTitle>
                  <CardDescription>View and manage all your customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Total Spent</TableHead>
                          <TableHead>Last Purchase</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {customers.map((customer) => (
                          <TableRow key={customer.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarFallback className="bg-unnati-primary/20 text-unnati-primary">
                                    {customer.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{customer.name}</p>
                                  <p className="text-xs text-slate-500">{customer.id}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={
                                customer.type === 'Wholesale' 
                                  ? 'outline'
                                  : customer.type === 'Contractor'
                                    ? 'secondary'
                                    : 'default'
                              }>
                                {customer.type}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center text-xs text-slate-500 gap-1">
                                  <Phone className="h-3 w-3" /> {customer.phone}
                                </div>
                                <div className="flex items-center text-xs text-slate-500 gap-1">
                                  <Mail className="h-3 w-3" /> {customer.email}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{customer.totalSpent}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 text-slate-500">
                                <Calendar className="h-3 w-3" />
                                <span>{customer.lastPurchase}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={customer.status === "Active" ? "outline" : "secondary"} className={
                                customer.status === "Active" 
                                  ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                  : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                              }>
                                {customer.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={() => handleAction(`View ${customer.name}`)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleAction(`Edit ${customer.name}`)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleAction(`New Sale for ${customer.name}`)}
                                >
                                  <ShoppingBag className="h-4 w-4" />
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
            
            <TabsContent value="retail">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Retail Customers</CardTitle>
                  <CardDescription>Manage retail customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Total Spent</TableHead>
                          <TableHead>Last Purchase</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {customers
                          .filter(customer => customer.type === "Retail")
                          .map((customer) => (
                            <TableRow key={customer.id}>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Avatar>
                                    <AvatarFallback className="bg-unnati-primary/20 text-unnati-primary">
                                      {customer.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{customer.name}</p>
                                    <p className="text-xs text-slate-500">{customer.id}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  <div className="flex items-center text-xs text-slate-500 gap-1">
                                    <Phone className="h-3 w-3" /> {customer.phone}
                                  </div>
                                  <div className="flex items-center text-xs text-slate-500 gap-1">
                                    <Mail className="h-3 w-3" /> {customer.email}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="font-medium">{customer.totalSpent}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1 text-slate-500">
                                  <Calendar className="h-3 w-3" />
                                  <span>{customer.lastPurchase}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant={customer.status === "Active" ? "outline" : "secondary"} className={
                                  customer.status === "Active" 
                                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                                }>
                                  {customer.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`New Sale for ${customer.name}`)}
                                >
                                  <ShoppingBag className="h-3 w-3 mr-1" />
                                  New Sale
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
            
            <TabsContent value="wholesale">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Wholesale Customers</CardTitle>
                  <CardDescription>Manage wholesale customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Total Spent</TableHead>
                          <TableHead>Last Purchase</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {customers
                          .filter(customer => customer.type === "Wholesale")
                          .map((customer) => (
                            <TableRow key={customer.id}>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Avatar>
                                    <AvatarFallback className="bg-unnati-primary/20 text-unnati-primary">
                                      {customer.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{customer.name}</p>
                                    <p className="text-xs text-slate-500">{customer.id}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  <div className="flex items-center text-xs text-slate-500 gap-1">
                                    <Phone className="h-3 w-3" /> {customer.phone}
                                  </div>
                                  <div className="flex items-center text-xs text-slate-500 gap-1">
                                    <Mail className="h-3 w-3" /> {customer.email}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="font-medium">{customer.totalSpent}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1 text-slate-500">
                                  <Calendar className="h-3 w-3" />
                                  <span>{customer.lastPurchase}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant={customer.status === "Active" ? "outline" : "secondary"} className={
                                  customer.status === "Active" 
                                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                                }>
                                  {customer.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`New Sale for ${customer.name}`)}
                                >
                                  <ShoppingBag className="h-3 w-3 mr-1" />
                                  New Sale
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
            
            <TabsContent value="contractors">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Contractor Customers</CardTitle>
                  <CardDescription>Manage contractor accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Total Spent</TableHead>
                          <TableHead>Last Purchase</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {customers
                          .filter(customer => customer.type === "Contractor")
                          .map((customer) => (
                            <TableRow key={customer.id}>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Avatar>
                                    <AvatarFallback className="bg-unnati-primary/20 text-unnati-primary">
                                      {customer.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{customer.name}</p>
                                    <p className="text-xs text-slate-500">{customer.id}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  <div className="flex items-center text-xs text-slate-500 gap-1">
                                    <Phone className="h-3 w-3" /> {customer.phone}
                                  </div>
                                  <div className="flex items-center text-xs text-slate-500 gap-1">
                                    <Mail className="h-3 w-3" /> {customer.email}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="font-medium">{customer.totalSpent}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1 text-slate-500">
                                  <Calendar className="h-3 w-3" />
                                  <span>{customer.lastPurchase}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant={customer.status === "Active" ? "outline" : "secondary"} className={
                                  customer.status === "Active" 
                                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                                }>
                                  {customer.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleAction(`New Sale for ${customer.name}`)}
                                >
                                  <ShoppingBag className="h-3 w-3 mr-1" />
                                  New Sale
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
          
          {/* Customer Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Customer Segmentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-md">
                  <div className="flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-slate-400 mr-2" />
                    <span className="text-slate-500">Customer Segmentation Chart</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500">Customer Types</span>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Retail</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Wholesale</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Contractor</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500">Top Spending Categories</span>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Wires & Cables</span>
                        <span className="text-sm font-medium">32%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Lighting</span>
                        <span className="text-sm font-medium">24%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Switchgear</span>
                        <span className="text-sm font-medium">18%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Top Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers
                    .sort((a, b) => parseFloat(b.totalSpent.replace(/[^\d.]/g, '')) - parseFloat(a.totalSpent.replace(/[^\d.]/g, '')))
                    .slice(0, 5)
                    .map((customer, index) => (
                      <div key={customer.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-unnati-primary text-white font-medium">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-xs text-slate-500">{customer.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{customer.totalSpent}</p>
                          <p className="text-xs text-slate-500">Lifetime Value</p>
                        </div>
                      </div>
                    ))}
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Recent Activity</span>
                    <Button variant="link" size="sm" className="text-unnati-primary" onClick={() => handleAction("View All Activity")}>
                      View All
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs p-2 border-l-2 border-green-500">
                      <span className="text-slate-500">Today, 10:45 AM</span>
                      <p className="font-medium">Raj Kumar made a purchase of ₹5,850</p>
                    </div>
                    <div className="text-xs p-2 border-l-2 border-blue-500">
                      <span className="text-slate-500">Today, 09:30 AM</span>
                      <p className="font-medium">Sanjay Mehta registered as new wholesale customer</p>
                    </div>
                    <div className="text-xs p-2 border-l-2 border-amber-500">
                      <span className="text-slate-500">Yesterday, 04:15 PM</span>
                      <p className="font-medium">Neha Singh updated contact information</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreCustomerManagement;

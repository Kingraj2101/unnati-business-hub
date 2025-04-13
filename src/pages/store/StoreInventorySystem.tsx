
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Package, 
  Search, 
  Filter, 
  PlusCircle, 
  Truck, 
  Download,
  FileText,
  ArrowDownUp,
  Edit,
  Trash,
  BarChart3,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import SearchBar from "@/components/dashboard/SearchBar";

const StoreInventorySystem = () => {
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

  // Sample inventory data
  const inventoryItems = [
    {
      id: "ITEM-001",
      name: "Havells Wire (1.5mm)",
      category: "Wires & Cables",
      stock: 12,
      price: "₹65/m",
      lastUpdated: "13 Apr, 2025",
      status: "Low Stock"
    },
    {
      id: "ITEM-002",
      name: "LED Bulb (9W)",
      category: "Lighting",
      stock: 85,
      price: "₹120/unit",
      lastUpdated: "12 Apr, 2025",
      status: "In Stock"
    },
    {
      id: "ITEM-003",
      name: "Ceiling Fan (48 inch)",
      category: "Fans",
      stock: 18,
      price: "₹1,450/unit",
      lastUpdated: "11 Apr, 2025",
      status: "Low Stock"
    },
    {
      id: "ITEM-004",
      name: "MCB Switch (32A)",
      category: "Switches",
      stock: 24,
      price: "₹320/unit",
      lastUpdated: "10 Apr, 2025",
      status: "Low Stock"
    },
    {
      id: "ITEM-005",
      name: "PVC Conduit Pipe (20mm)",
      category: "Pipes & Fittings",
      stock: 120,
      price: "₹45/piece",
      lastUpdated: "09 Apr, 2025",
      status: "In Stock"
    },
    {
      id: "ITEM-006",
      name: "Distribution Box (8 Way)",
      category: "Electrical Panels",
      stock: 30,
      price: "₹850/unit",
      lastUpdated: "08 Apr, 2025",
      status: "In Stock"
    },
    {
      id: "ITEM-007",
      name: "LED Panel Light (18W)",
      category: "Lighting",
      stock: 42,
      price: "₹550/unit",
      lastUpdated: "07 Apr, 2025",
      status: "In Stock"
    }
  ];

  // Sample categories for filter
  const categories = [
    "All Categories",
    "Wires & Cables",
    "Lighting",
    "Fans",
    "Switches",
    "Pipes & Fittings",
    "Electrical Panels"
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Package className="h-6 w-6 text-unnati-primary" />
              Store Inventory Management
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Manage and track your retail store inventory</p>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search inventory..." dashboardType="store" />
            
            <div className="flex flex-wrap gap-2">
              <Button 
                className="gap-2 bg-unnati-primary hover:bg-unnati-primary/90" 
                onClick={() => handleAction("Add New Item")}
              >
                <PlusCircle className="h-4 w-4" />
                Add New Item
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Request Stock")}
              >
                <Truck className="h-4 w-4" />
                Request Stock
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleAction("Export Inventory")}
              >
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <TabsList>
                <TabsTrigger value="all">All Items</TabsTrigger>
                <TabsTrigger value="low">Low Stock</TabsTrigger>
                <TabsTrigger value="out">Out of Stock</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <Select defaultValue="All Categories">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Inventory Items</CardTitle>
                  <CardDescription>Manage all your store inventory items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Item Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>
                            <div className="flex items-center gap-1">
                              Stock 
                              <ArrowDownUp className="h-3 w-3" />
                            </div>
                          </TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Last Updated</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inventoryItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.stock}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.lastUpdated}</TableCell>
                            <TableCell>
                              <Badge variant={item.status === "In Stock" ? "outline" : "destructive"}>
                                {item.status === "In Stock" ? (
                                  item.status
                                ) : (
                                  <div className="flex items-center gap-1">
                                    <AlertCircle className="h-3 w-3" />
                                    {item.status}
                                  </div>
                                )}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={() => handleAction("Update Item")}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleAction("Generate Report")}
                                >
                                  <FileText className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleAction("Delete Item")}
                                >
                                  <Trash className="h-4 w-4" />
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
            
            <TabsContent value="low">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Low Stock Items</CardTitle>
                  <CardDescription>Items that need to be restocked soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Item Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Current Stock</TableHead>
                          <TableHead>Reorder Point</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inventoryItems
                          .filter(item => item.status === "Low Stock")
                          .map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.id}</TableCell>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.category}</TableCell>
                              <TableCell className="text-red-600 font-medium">{item.stock}</TableCell>
                              <TableCell>25</TableCell>
                              <TableCell>{item.price}</TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="outline"
                                  className="text-xs" 
                                  onClick={() => handleAction(`Order ${item.name}`)}
                                >
                                  <Truck className="h-3 w-3 mr-1" />
                                  Order Now
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
            
            <TabsContent value="out">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Out of Stock Items</CardTitle>
                  <CardDescription>Items that need immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8 bg-muted/20 rounded-md">
                    <div className="text-center">
                      <Package className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Out of Stock Items</h3>
                      <p className="text-muted-foreground mb-4">All products currently have some inventory.</p>
                      <Button variant="outline" onClick={() => handleAction("View Low Stock")}>
                        View Low Stock Items
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Stock Level Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Stock Level Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Wires & Cables", stock: 25, percent: 25 },
                  { name: "Lighting", stock: 85, percent: 85 },
                  { name: "Fans", stock: 18, percent: 18 },
                  { name: "Switches", stock: 24, percent: 24 },
                  { name: "Pipes & Fittings", stock: 120, percent: 100 }
                ].map((category) => (
                  <div key={category.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className={`text-sm font-medium ${
                        category.percent < 25 ? "text-red-600" : 
                        category.percent < 50 ? "text-amber-600" : 
                        "text-green-600"
                      }`}>
                        {category.stock} units
                      </span>
                    </div>
                    <Progress 
                      value={category.percent} 
                      className="h-2" 
                      indicatorClassName={
                        category.percent < 25 ? "bg-red-500" : 
                        category.percent < 50 ? "bg-amber-500" : 
                        "bg-green-500"
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inventory Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-unnati-primary/10 p-4 rounded-lg">
                    <h3 className="text-unnati-primary text-sm font-medium mb-1">Total Items</h3>
                    <p className="text-2xl font-bold">254</p>
                    <p className="text-xs text-slate-500 mt-1">Across 7 categories</p>
                  </div>
                  
                  <div className="bg-amber-500/10 p-4 rounded-lg">
                    <h3 className="text-amber-600 text-sm font-medium mb-1">Low Stock Items</h3>
                    <p className="text-2xl font-bold">18</p>
                    <p className="text-xs text-slate-500 mt-1">Need reordering soon</p>
                  </div>
                  
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h3 className="text-green-600 text-sm font-medium mb-1">Items in Transit</h3>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-slate-500 mt-1">Arriving this week</p>
                  </div>
                  
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h3 className="text-purple-600 text-sm font-medium mb-1">Inventory Value</h3>
                    <p className="text-2xl font-bold">₹4.35L</p>
                    <p className="text-xs text-slate-500 mt-1">At retail prices</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <h3 className="text-sm font-medium mb-3">Inventory Movements (Last 7 Days)</h3>
                  <div className="h-48 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-md">
                    <div className="flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-slate-400 mr-2" />
                      <span className="text-slate-500">Inventory Movement Chart</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Inventory Activities */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recent Inventory Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <Truck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Stock Received</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">50 units of LED Bulb (9W) received from supplier</p>
                    <p className="text-xs text-slate-400 mt-1">13 Apr, 2025 • 10:23 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium">Low Stock Alert</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Havells Wire (1.5mm) has reached low stock threshold</p>
                    <p className="text-xs text-slate-400 mt-1">12 Apr, 2025 • 02:45 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <Edit className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Price Updated</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Updated price of MCB Switch (32A) from ₹290 to ₹320</p>
                    <p className="text-xs text-slate-400 mt-1">11 Apr, 2025 • 11:15 AM</p>
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

export default StoreInventorySystem;

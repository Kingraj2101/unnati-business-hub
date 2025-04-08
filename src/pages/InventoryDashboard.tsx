
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Package, 
  ShoppingCart, 
  Truck, 
  AlertTriangle,
  BarChart3,
  Search,
  Plus,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const InventoryDashboard = () => {
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

  // Sample inventory data
  const inventoryItems = [
    { id: "P001", name: "2.5mm Copper Wire", category: "Wire", stock: 1250, unit: "meters", status: "In Stock", supplier: "Copper India Ltd." },
    { id: "P002", name: "1.5mm Copper Wire", category: "Wire", stock: 850, unit: "meters", status: "In Stock", supplier: "Copper India Ltd." },
    { id: "P003", name: "MCB Switch 32A", category: "Switches", stock: 45, unit: "pcs", status: "In Stock", supplier: "Electric Masters" },
    { id: "P004", name: "Wall Socket Dual", category: "Sockets", stock: 12, unit: "pcs", status: "Low Stock", supplier: "Modern Electricals" },
    { id: "P005", name: "LED Bulb 9W", category: "Lighting", stock: 78, unit: "pcs", status: "In Stock", supplier: "Light Solutions" },
    { id: "P006", name: "Extension Board 6-Socket", category: "Extensions", stock: 5, unit: "pcs", status: "Low Stock", supplier: "Power Plus" },
  ];

  const handleAddStock = () => {
    toast({
      title: "Add stock",
      description: "Opening stock entry form...",
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Inventory Dashboard</h1>
            <p className="text-gray-500">Manage stock, products and suppliers</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Products</p>
                    <h3 className="text-2xl font-bold mt-1">254</h3>
                    <span className="text-xs text-gray-500 mt-1">Across 12 categories</span>
                  </div>
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Package size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Low Stock Items</p>
                    <h3 className="text-2xl font-bold mt-1">8</h3>
                    <span className="text-xs text-orange-500 mt-1">Requires attention</span>
                  </div>
                  <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                    <AlertTriangle size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Recent Sales</p>
                    <h3 className="text-2xl font-bold mt-1">₹48,560</h3>
                    <span className="text-xs text-green-500 mt-1">Last 7 days</span>
                  </div>
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <ShoppingCart size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pending Orders</p>
                    <h3 className="text-2xl font-bold mt-1">5</h3>
                    <span className="text-xs text-blue-500 mt-1">From 3 suppliers</span>
                  </div>
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <Truck size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search inventory..." 
                className="pl-9 py-2"
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleAddStock} className="bg-unnati-primary gap-1">
                <Plus size={16} />
                Add Stock
              </Button>
              <Button variant="outline" className="gap-1">
                <BarChart3 size={16} />
                Reports
              </Button>
              <Button variant="outline" className="gap-1">
                <RefreshCw size={16} />
                Refresh
              </Button>
            </div>
          </div>
          
          {/* Inventory List */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Inventory Items</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.stock} {item.unit}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === 'In Stock' 
                            ? 'bg-green-100 text-green-800'
                            : item.status === 'Low Stock'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mr-1">
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Package className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          {/* Low Stock Alerts */}
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-800 text-lg flex items-center gap-2">
                <AlertTriangle size={18} />
                Low Stock Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 mb-3">2 items are below minimum stock levels</p>
              <ul className="space-y-2 mb-4">
                <li className="flex justify-between p-2 bg-white rounded border border-amber-200">
                  <span>Wall Socket Dual</span>
                  <span className="font-semibold">12 pcs left</span>
                </li>
                <li className="flex justify-between p-2 bg-white rounded border border-amber-200">
                  <span>Extension Board 6-Socket</span>
                  <span className="font-semibold">5 pcs left</span>
                </li>
              </ul>
              <Button variant="outline" className="bg-white border-amber-300 text-amber-800">
                Order Stock
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default InventoryDashboard;

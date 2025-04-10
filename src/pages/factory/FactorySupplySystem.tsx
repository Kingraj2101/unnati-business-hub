
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Truck, 
  Package, 
  ClipboardList, 
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Search,
  Filter,
  CalendarClock,
  CirclePlus,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FactorySupplySystem = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");
  const { toast } = useToast();

  // Redirect if not authenticated or not a factory user
  if (!isAuthenticated || userType !== "factory") {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample supply data
  const supplyData = [
    { id: "SUP-2025-001", item: "Copper Wire 2.5mm", quantity: "2000 kg", supplier: "Hindalco Industries", status: "Delivered", date: "08 Apr, 2025" },
    { id: "SUP-2025-002", item: "PVC Insulation", quantity: "1500 kg", supplier: "Polycab Ltd", status: "In Transit", date: "10 Apr, 2025" },
    { id: "SUP-2025-003", item: "Aluminum Wire", quantity: "3000 kg", supplier: "Sterlite Technologies", status: "Ordered", date: "12 Apr, 2025" },
    { id: "SUP-2025-004", item: "Packaging Material", quantity: "500 units", supplier: "Packaging Solutions", status: "Delivered", date: "05 Apr, 2025" },
    { id: "SUP-2025-005", item: "Machine Parts", quantity: "24 units", supplier: "Industrial Machines Ltd", status: "In Transit", date: "11 Apr, 2025" },
  ];

  const handleCreateOrder = () => {
    toast({
      title: "New supply order",
      description: "Creating new supply order...",
    });
  };

  const handleTrackShipment = (id: string) => {
    toast({
      title: "Tracking shipment",
      description: `Tracking supply order ${id}`,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Factory Supply Management</h1>
            <p className="text-gray-500">Track and manage raw materials and supplies for production</p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search supplies by ID, item, or supplier..." className="pl-9" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <CalendarClock size={16} />
              Schedule
            </Button>
            <Button className="bg-unnati-primary hover:bg-unnati-primary/90 gap-2">
              <CirclePlus size={16} />
              New Order
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pending Orders</p>
                    <h3 className="text-2xl font-bold text-unnati-dark mt-1">12</h3>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">In Transit</p>
                    <h3 className="text-2xl font-bold text-unnati-dark mt-1">8</h3>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Delivered This Month</p>
                    <h3 className="text-2xl font-bold text-unnati-dark mt-1">34</h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Active Suppliers</p>
                    <h3 className="text-2xl font-bold text-unnati-dark mt-1">16</h3>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <ClipboardList className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Supply Orders */}
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Supply Orders</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Delivery Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {supplyData.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.item}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>{order.supplier}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800'
                              : order.status === 'In Transit'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-amber-100 text-amber-800'
                          }`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="h-8 p-0 mr-2"
                            onClick={() => handleTrackShipment(order.id)}
                          >
                            {order.status !== 'Delivered' ? 'Track' : 'View'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          {/* Supply Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle size={18} className="text-amber-500" />
                  Low Stock Alert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Copper Wire 1.5mm</span>
                    <span className="text-red-500 font-medium">Critical (120 kg left)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">PVC Insulation (Red)</span>
                    <span className="text-amber-500 font-medium">Low (450 kg left)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Aluminum Wire 2.0mm</span>
                    <span className="text-amber-500 font-medium">Low (380 kg left)</span>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    Order Low Stock Items
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 size={18} className="text-blue-500" />
                  Supply Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Monthly procurement of top 3 raw materials</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Copper Wire</span>
                      <span className="text-sm text-gray-500">8,500 kg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">PVC Insulation</span>
                      <span className="text-sm text-gray-500">6,200 kg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Aluminum Wire</span>
                      <span className="text-sm text-gray-500">4,800 kg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "48%" }}></div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FactorySupplySystem;

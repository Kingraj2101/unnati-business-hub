
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  Truck, 
  PackageCheck, 
  CircleDollarSign, 
  Calendar,
  UserPlus,
  FileSpreadsheet,
  FileCheck,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SuppliersDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample suppliers data
  const topSuppliers = [
    { id: "SUP001", name: "Havells India Ltd.", type: "Manufacturer", items: "Wires, Switches", orders: "32", spending: "₹3,45,200", rating: "4.8" },
    { id: "SUP002", name: "Polycab Wires Pvt Ltd.", type: "Manufacturer", items: "Wires, Cables", orders: "28", spending: "₹2,85,600", rating: "4.7" },
    { id: "SUP003", name: "Orient Electric", type: "Manufacturer", items: "Fans, Lights", orders: "15", spending: "₹1,25,800", rating: "4.5" },
    { id: "SUP004", name: "Bajaj Electricals", type: "Distributor", items: "Appliances", orders: "12", spending: "₹95,400", rating: "4.3" },
    { id: "SUP005", name: "Anchor Electricals", type: "Manufacturer", items: "Switches, Sockets", orders: "18", spending: "₹1,45,200", rating: "4.6" },
  ];

  // Sample data for charts
  const spendingBySupplierData = [
    { name: "Havells", value: 345200 },
    { name: "Polycab", value: 285600 },
    { name: "Orient", value: 125800 },
    { name: "Bajaj", value: 95400 },
    { name: "Anchor", value: 145200 },
    { name: "Others", value: 225000 },
  ];

  const ordersTrendData = [
    { name: "Jan", value: 38 },
    { name: "Feb", value: 32 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 52 },
    { name: "May", value: 48 },
    { name: "Jun", value: 42 },
  ];

  // Sample recent orders data
  const recentOrders = [
    { id: "PO-2025-001", supplier: "Havells India Ltd.", date: "08 Apr, 2025", items: "Copper Wires", amount: "₹45,800", status: "Received" },
    { id: "PO-2025-002", supplier: "Orient Electric", date: "07 Apr, 2025", items: "LED Panels", amount: "₹28,500", status: "In Transit" },
    { id: "PO-2025-003", supplier: "Polycab Wires", date: "06 Apr, 2025", items: "FRLSH Cables", amount: "₹65,200", status: "Ordered" },
    { id: "PO-2025-004", supplier: "Anchor Electricals", date: "05 Apr, 2025", items: "Switch Boards", amount: "₹18,400", status: "Received" },
    { id: "PO-2025-005", supplier: "Bajaj Electricals", date: "04 Apr, 2025", items: "Ceiling Fans", amount: "₹35,200", status: "In Transit" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Suppliers Dashboard</h1>
            <p className="text-gray-500">Manage supplier relationships and orders</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Active Suppliers"
              value="38"
              icon={<Truck size={20} />}
              change={{ value: "3", positive: true }}
            />
            <StatCard
              title="Open Orders"
              value="12"
              icon={<PackageCheck size={20} />}
            />
            <StatCard
              title="This Month Spending"
              value="₹2,85,400"
              icon={<CircleDollarSign size={20} />}
              change={{ value: "8.5%", positive: false }}
            />
            <StatCard
              title="Delivery Success"
              value="95.2%"
              icon={<Calendar size={20} />}
              change={{ value: "2.3%", positive: true }}
            />
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              <span>Create Purchase Order</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              <span>Add Supplier</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <FileSpreadsheet size={20} />
              <span>Supplier Report</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <FileCheck size={20} />
              <span>Order Status</span>
            </Button>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Spending by Supplier" type="pie" data={spendingBySupplierData} />
            <ChartCard title="Purchase Orders Trend" type="line" data={ordersTrendData} />
          </div>
          
          {/* Recent Orders */}
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Purchase Orders</CardTitle>
                  <Button variant="outline" size="sm">View All Orders</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.supplier}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === 'Received' 
                              ? 'bg-green-100 text-green-800'
                              : order.status === 'In Transit'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          {/* Top Suppliers */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Top Suppliers</CardTitle>
                <Button variant="outline" size="sm">Manage Suppliers</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Supplier Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Total Spending</TableHead>
                    <TableHead>Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topSuppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.id}</TableCell>
                      <TableCell>{supplier.name}</TableCell>
                      <TableCell>{supplier.type}</TableCell>
                      <TableCell>{supplier.items}</TableCell>
                      <TableCell>{supplier.orders}</TableCell>
                      <TableCell>{supplier.spending}</TableCell>
                      <TableCell className="font-medium text-green-600">{supplier.rating}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default SuppliersDashboard;

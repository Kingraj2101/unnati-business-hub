
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import PurchaseOrdersList from "@/components/dashboard/suppliers/PurchaseOrdersList";
import SuppliersList from "@/components/dashboard/suppliers/SuppliersList";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Suppliers Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage supplier relationships and orders</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Active Suppliers"
              value="38"
              icon={<Truck size={20} className="text-blue-500" />}
              change={{ value: "3", positive: true }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Open Orders"
              value="12"
              icon={<PackageCheck size={20} className="text-amber-500" />}
              className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="This Month Spending"
              value="₹2,85,400"
              icon={<CircleDollarSign size={20} className="text-green-500" />}
              change={{ value: "8.5%", positive: false }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Delivery Success"
              value="95.2%"
              icon={<Calendar size={20} className="text-purple-500" />}
              change={{ value: "2.3%", positive: true }}
              className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200"
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
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              <span>Add Supplier</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <FileSpreadsheet size={20} />
              <span>Supplier Report</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
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
          
          {/* Tabs for Orders and Suppliers */}
          <Tabs defaultValue="orders" className="mb-6">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders">
              <PurchaseOrdersList orders={recentOrders} />
            </TabsContent>
            
            <TabsContent value="suppliers">
              <SuppliersList suppliers={topSuppliers} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default SuppliersDashboard;


import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import { 
  PackageCheck, 
  Truck, 
  CreditCard,
  Calendar,
  ShoppingBag,
  FileClock,
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const VendorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");

  // Redirect to login if not authenticated or not a vendor user
  if (!isAuthenticated || userType !== "vendor") {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Vendor Dashboard</h1>
            <p className="text-gray-500">Manage your orders, payments and deliveries</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Active Orders"
              value="8"
              icon={<PackageCheck size={20} />}
              change={{ value: "2 new", positive: true }}
            />
            <StatCard
              title="Pending Deliveries"
              value="4"
              icon={<Truck size={20} />}
            />
            <StatCard
              title="Payments Due"
              value="₹56,780"
              icon={<CreditCard size={20} />}
              change={{ value: "₹12,500 overdue", positive: false }}
            />
            <StatCard
              title="Next Delivery"
              value="Tomorrow"
              icon={<Calendar size={20} />}
            />
          </div>
          
          {/* Order Status */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Order Status</h2>
              <Button variant="outline" size="sm">
                View All Orders
              </Button>
            </div>
            
            <div className="space-y-4">
              {[
                { id: "ORD-5623", status: "processing", date: "10 Apr 2025", amount: "₹23,450", progress: 35 },
                { id: "ORD-5594", status: "shipped", date: "08 Apr 2025", amount: "₹16,200", progress: 75 },
                { id: "ORD-5571", status: "delivered", date: "05 Apr 2025", amount: "₹8,900", progress: 100 },
                { id: "ORD-5562", status: "pending", date: "03 Apr 2025", amount: "₹12,340", progress: 15 }
              ].map((order) => (
                <div key={order.id} className="p-4 border rounded-md">
                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <div>
                      <span className="font-semibold">{order.id}</span>
                      <Badge 
                        className={`ml-2 ${
                          order.status === "delivered" 
                            ? "bg-green-100 text-green-800" 
                            : order.status === "shipped" 
                            ? "bg-blue-100 text-blue-800" 
                            : order.status === "processing" 
                            ? "bg-amber-100 text-amber-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">{order.date} • {order.amount}</div>
                  </div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>Order Progress</span>
                    <span>{order.progress}%</span>
                  </div>
                  <Progress value={order.progress} className="h-2" />
                  <div className="flex justify-end mt-2">
                    <Button variant="link" size="sm" className="h-auto p-0">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Notifications and Payment Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Notifications</h2>
              <div className="space-y-4">
                <div className="flex p-3 rounded-md bg-amber-50 border border-amber-200">
                  <AlertCircle className="text-amber-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-medium text-amber-800">Order #ORD-5594 Requires Attention</p>
                    <p className="text-sm text-amber-700">The delivery address has been updated. Please confirm before shipping.</p>
                  </div>
                </div>
                
                <div className="flex p-3 rounded-md bg-green-50 border border-green-200">
                  <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-medium text-green-800">Payment Received</p>
                    <p className="text-sm text-green-700">Payment of ₹18,650 has been received for invoice #INV-1042.</p>
                  </div>
                </div>
                
                <div className="flex p-3 rounded-md bg-blue-50 border border-blue-200">
                  <Truck className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-medium text-blue-800">New Order Received</p>
                    <p className="text-sm text-blue-700">You have received a new order #ORD-5623 worth ₹23,450.</p>
                  </div>
                </div>
                
                <div className="flex p-3 rounded-md bg-red-50 border border-red-200">
                  <Clock className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-medium text-red-800">Overdue Payment Reminder</p>
                    <p className="text-sm text-red-700">Payment for invoice #INV-986 (₹12,500) is overdue by 7 days.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Next Payment Due</p>
                  <p className="font-semibold">₹24,650</p>
                  <p className="text-xs text-gray-500">Due on 15 Apr 2025</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-semibold">Bank Transfer</p>
                  <p className="text-xs text-gray-500">Account ending in 4589</p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm font-medium">Recent Payments</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>05 Apr 2025</span>
                      <span className="font-medium">₹18,650</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>28 Mar 2025</span>
                      <span className="font-medium">₹23,420</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>15 Mar 2025</span>
                      <span className="font-medium">₹16,780</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-unnati-primary hover:bg-unnati-primary/90">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Make Payment
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <ShoppingBag className="h-6 w-6 mb-2" />
                <span>New Order</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <Truck className="h-6 w-6 mb-2" />
                <span>Schedule Delivery</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <FileClock className="h-6 w-6 mb-2" />
                <span>View Invoices</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <CreditCard className="h-6 w-6 mb-2" />
                <span>Payment History</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;

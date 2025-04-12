
import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import { 
  ShoppingCart,
  Package, 
  Users,
  Receipt, 
  Truck,
  DollarSign,
  BarChart3,
  Search,
  AlertCircle,
  Printer,
  Filter,
  ArrowUpRight,
  Calendar,
  Clock,
  CheckCircle2,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const StoreDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");

  // Redirect to login if not authenticated or not a store user
  if (!isAuthenticated || userType !== "store") {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data for recent sales
  const recentSales = [
    { id: "INV-2025-001", customer: "Raj Kumar", date: "08 Apr, 2025", items: "3", amount: "₹5,850", payment: "Cash", status: "Completed" },
    { id: "INV-2025-002", customer: "Sanjay Mehta", date: "08 Apr, 2025", items: "5", amount: "₹12,400", payment: "BNPL", status: "Pending" },
    { id: "INV-2025-003", customer: "Neha Singh", date: "07 Apr, 2025", items: "2", amount: "₹3,200", payment: "UPI", status: "Completed" },
    { id: "INV-2025-004", customer: "Alok Sharma", date: "07 Apr, 2025", items: "8", amount: "₹18,750", payment: "Card", status: "Completed" },
    { id: "INV-2025-005", customer: "Priya Patel", date: "06 Apr, 2025", items: "4", amount: "₹7,500", payment: "Cash", status: "Completed" },
  ];

  // Filter sales based on search query
  const filteredSales = recentSales.filter(sale => 
    sale.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sale.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sale.amount.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sample data for low stock alerts
  const lowStockItems = [
    { name: "PVC Conduit Pipes", quantity: 3, threshold: 10, category: "Wiring" },
    { name: "Junction Boxes", quantity: 5, threshold: 15, category: "Wiring" },
    { name: "Wall Switches", quantity: 12, threshold: 20, category: "Switches" },
    { name: "Cable Ties", quantity: 15, threshold: 25, category: "Accessories" },
  ];

  // Handle creating a new sale
  const handleNewSale = () => {
    toast({
      title: "New Sale",
      description: "Opening new sale form...",
    });
    // Navigate to billing page
    window.location.href = "/store-dashboard/billing";
  };

  // Handle generating receipt
  const handleGenerateReceipt = (invoiceId: string) => {
    toast({
      title: "Receipt Generated",
      description: `Receipt for invoice ${invoiceId} is being prepared for printing.`,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Retail Store Dashboard</h1>
            <p className="text-gray-500">Manage your retail store operations</p>
          </div>
          
          {/* Search and Quick Actions */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search products, invoices, customers..." 
                className="pl-9" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              className="bg-unnati-primary hover:bg-unnati-primary/90"
              onClick={handleNewSale}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              New Sale
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/store-dashboard/inventory"}
            >
              <Package className="mr-2 h-4 w-4" />
              Inventory
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Sales"
              value="₹24,500"
              icon={<ShoppingCart size={20} />}
              change={{ value: "15%", positive: true }}
            />
            <StatCard
              title="Store Inventory"
              value="1,245 items"
              icon={<Package size={20} />}
              change={{ value: "3.2%", positive: true }}
            />
            <StatCard
              title="Active Customers"
              value="156"
              icon={<Users size={20} />}
              change={{ value: "7.8%", positive: true }}
            />
            <StatCard
              title="Pending Orders"
              value="12"
              icon={<Truck size={20} />}
            />
          </div>
          
          {/* Alerts Section */}
          <div className="mb-6">
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className="mr-3 text-amber-500">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800">Low Stock Alert</h3>
                    <p className="text-amber-700 text-sm mb-2">{lowStockItems.length} products are below minimum stock levels.</p>
                    
                    <div className="mt-2 space-y-2">
                      {lowStockItems.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm bg-amber-100 p-2 rounded">
                          <span>{item.name}</span>
                          <span className="font-medium text-amber-800">{item.quantity} left</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="link" className="p-0 h-auto text-amber-600 text-sm mt-3"
                      onClick={() => window.location.href = "/store-dashboard/inventory"}>
                      View Inventory
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabs for different views */}
          <Tabs defaultValue="transactions" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
              <TabsTrigger value="inventory">Inventory Status</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            
            {/* Recent Transactions Tab */}
            <TabsContent value="transactions">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Transactions</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8">
                        <Filter className="mr-2 h-3 w-3" />
                        Filter
                      </Button>
                      <Link to="/store-dashboard/sales">
                        <Button variant="ghost" size="sm" className="h-8">
                          View All
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="hidden md:table-cell">Items</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSales.map((sale) => (
                        <TableRow key={sale.id}>
                          <TableCell className="font-medium">{sale.id}</TableCell>
                          <TableCell>{sale.customer}</TableCell>
                          <TableCell className="hidden md:table-cell">{sale.date}</TableCell>
                          <TableCell className="hidden md:table-cell">{sale.items}</TableCell>
                          <TableCell className="font-medium text-green-600">{sale.amount}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              sale.payment === 'Cash' 
                                ? 'bg-green-100 text-green-800'
                                : sale.payment === 'BNPL'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}>
                              {sale.payment}
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-horizontal"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleGenerateReceipt(sale.id)}>
                                  <Printer className="mr-2 h-4 w-4" />
                                  <span>Print Receipt</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" />
                                  <span>View Details</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Inventory Status Tab */}
            <TabsContent value="inventory">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-1">Top Selling Products</h3>
                      <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
                        <li>House Wiring Cable (2.5mm)</li>
                        <li>LED Bulbs (9W)</li>
                        <li>MCB Switch (16A)</li>
                        <li>Extension Board (4 Socket)</li>
                        <li>Ceiling Fan Regulator</li>
                      </ol>
                    </div>
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-1">Low Stock Items</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {lowStockItems.map((item, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{item.name}</span>
                            <span className={item.quantity <= 5 ? "text-red-500" : "text-amber-500"}>
                              {item.quantity} left
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-1">Inventory Statistics</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><span className="font-medium">Total Products:</span> 450</p>
                        <p><span className="font-medium">Categories:</span> 12</p>
                        <p><span className="font-medium">Total Value:</span> ₹18,35,750</p>
                        <p><span className="font-medium">Stock Turnover:</span> 3.5x/month</p>
                        <Button size="sm" variant="outline" className="mt-2 w-full">
                          Run Inventory Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Performance Tab */}
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Store Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Today's Performance</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                          <div className="p-3 bg-blue-100 rounded-full mr-4">
                            <ShoppingCart className="h-5 w-5 text-blue-700" />
                          </div>
                          <div>
                            <p className="text-sm text-blue-700">Sales</p>
                            <p className="text-xl font-bold text-blue-900">₹24,500</p>
                          </div>
                        </div>
                        <div className="flex items-center p-4 bg-green-50 rounded-lg">
                          <div className="p-3 bg-green-100 rounded-full mr-4">
                            <CheckCircle2 className="h-5 w-5 text-green-700" />
                          </div>
                          <div>
                            <p className="text-sm text-green-700">Transactions</p>
                            <p className="text-xl font-bold text-green-900">32</p>
                          </div>
                        </div>
                        <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                          <div className="p-3 bg-purple-100 rounded-full mr-4">
                            <Clock className="h-5 w-5 text-purple-700" />
                          </div>
                          <div>
                            <p className="text-sm text-purple-700">Avg. Processing Time</p>
                            <p className="text-xl font-bold text-purple-900">5.2 mins</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium mb-2">Monthly Trends</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Sales by Category</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span>Wires & Cables</span>
                              <span className="font-medium">₹3,45,000 (32%)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Lighting</span>
                              <span className="font-medium">₹2,56,000 (24%)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Switches & Sockets</span>
                              <span className="font-medium">₹1,82,000 (17%)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Other Items</span>
                              <span className="font-medium">₹2,98,000 (27%)</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Customer Statistics</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span>New Customers</span>
                              <span className="font-medium">45</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Returning Customers</span>
                              <span className="font-medium">185</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Average Order Value</span>
                              <span className="font-medium">₹2,850</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Customer Satisfaction</span>
                              <span className="font-medium">4.8/5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full md:w-auto" onClick={() => window.location.href = "/store-dashboard/reports"}>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Detailed Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Quick Actions and Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Quick Actions */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-left">
                  <Receipt className="mr-2 h-4 w-4" />
                  Generate Invoice
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <Users className="mr-2 h-4 w-4" />
                  Add Customer
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <Package className="mr-2 h-4 w-4" />
                  Update Inventory
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Check Payments
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Sales Report
                </Button>
              </div>
            </div>
            
            {/* Today's Schedule */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Today's Schedule</h3>
                <Button variant="ghost" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start border-l-4 border-blue-500 pl-4 py-1">
                  <div className="mr-4">
                    <div className="text-xs font-medium text-gray-500">9:00 AM</div>
                    <div className="font-medium">Inventory Check</div>
                    <div className="text-sm text-gray-500">Daily morning check of critical items</div>
                  </div>
                </div>
                <div className="flex items-start border-l-4 border-green-500 pl-4 py-1">
                  <div className="mr-4">
                    <div className="text-xs font-medium text-gray-500">11:30 AM</div>
                    <div className="font-medium">Supplier Meeting</div>
                    <div className="text-sm text-gray-500">Review new product catalog from Havells</div>
                  </div>
                </div>
                <div className="flex items-start border-l-4 border-amber-500 pl-4 py-1">
                  <div className="mr-4">
                    <div className="text-xs font-medium text-gray-500">2:00 PM</div>
                    <div className="font-medium">Stock Delivery</div>
                    <div className="text-sm text-gray-500">Expected delivery of lighting products</div>
                  </div>
                </div>
                <div className="flex items-start border-l-4 border-purple-500 pl-4 py-1">
                  <div className="mr-4">
                    <div className="text-xs font-medium text-gray-500">4:30 PM</div>
                    <div className="font-medium">Daily Sales Report</div>
                    <div className="text-sm text-gray-500">Review today's performance and reconcile accounts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreDashboard;

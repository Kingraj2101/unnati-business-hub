
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  Factory,
  Package, 
  Truck,
  Users,
  AlertTriangle,
  CheckCircle2,
  Box,
  BarChart3,
  CircleDollarSign,
  Store,
  Calendar,
  Wrench,
  Receipt,
  FileText,
  Clock,
  Bell,
  Clipboard,
  HardDrive
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,  
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/dashboard/SearchBar";
import { useToast } from "@/hooks/use-toast";

const FactoryDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");
  const { toast } = useToast();

  // Redirect if not authenticated or not factory user
  if (!isAuthenticated || userType !== "factory") {
    localStorage.setItem("userType", "factory"); // For demo purposes
    // return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleQuickAction = (action: string) => {
    toast({
      title: `${action} Started`,
      description: `You've initiated the ${action.toLowerCase()} process.`,
    });
  };

  const productionData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3500 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 4500 },
    { name: "May", value: 6000 },
    { name: "Jun", value: 5500 },
  ];

  const rawMaterialData = [
    { name: "Copper", value: 35 },
    { name: "PVC", value: 45 },
    { name: "Aluminum", value: 15 },
    { name: "Rubber", value: 5 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Factory className="h-6 w-6 text-unnati-primary" />
              Factory Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Monitor production, inventory and operations</p>
          </div>
          
          {/* Search and Quick Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <SearchBar placeholder="Search factory dashboard..." dashboardType="factory" />
            
            <div className="flex gap-2">
              <Button 
                className="gap-2 bg-unnati-primary" 
                onClick={() => handleQuickAction("Production Planning")}
              >
                <Factory className="h-4 w-4" />
                Schedule Production
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleQuickAction("Material Request")}
              >
                <Box className="h-4 w-4" />
                Request Materials
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Production"
              value="1,450 units"
              icon={<Factory size={20} className="text-blue-500" />}
              change={{ value: "8.5%", positive: true }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Raw Material Stock"
              value="24.5 tons"
              icon={<Box size={20} className="text-green-500" />}
              change={{ value: "3.2%", positive: false }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Production Queue"
              value="8 orders"
              icon={<Package size={20} className="text-amber-500" />}
              className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Workers Present"
              value="32 active"
              icon={<Users size={20} className="text-purple-500" />}
              className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>

          {/* Production Status */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Production Lines Status</span>
                <Badge className="bg-green-500">3/4 Active</Badge>
              </CardTitle>
              <CardDescription>Real-time status of production line operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium">Wire Production Line</h3>
                      <div className="flex items-center mt-1">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-sm text-green-600 dark:text-green-400">Active • 85% Efficiency</p>
                      </div>
                    </div>
                    <CheckCircle2 className="text-green-500" size={20} />
                  </div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>Daily Target: 800 units</span>
                    <span>650/800</span>
                  </div>
                  <Progress value={81} className="h-2" />
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Running since 7:00 AM
                  </div>
                </div>
                
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium">Cable Assembly</h3>
                      <div className="flex items-center mt-1">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                        <p className="text-sm text-amber-600 dark:text-amber-400">Maintenance • 45% Efficiency</p>
                      </div>
                    </div>
                    <AlertTriangle className="text-amber-500" size={20} />
                  </div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>Daily Target: 600 units</span>
                    <span>270/600</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Wrench className="h-4 w-4 mr-1" />
                    Scheduled maintenance until 2:00 PM
                  </div>
                </div>
                
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium">Quality Control</h3>
                      <div className="flex items-center mt-1">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-sm text-green-600 dark:text-green-400">Active • 92% Pass Rate</p>
                      </div>
                    </div>
                    <CheckCircle2 className="text-green-500" size={20} />
                  </div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>Inspected: 580 units</span>
                    <span>92% Pass</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Running since 8:00 AM
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Production Overview & Inventory */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Production Output (Last 6 months)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartCard title="" type="line" data={productionData} />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                <CardHeader>
                  <CardTitle>Alerts & Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-300">Machine Error</p>
                      <p className="text-sm text-red-700 dark:text-red-400">Extruder #2 needs maintenance</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-red-600 dark:text-red-300">Request Service</Button>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800 flex items-start gap-3">
                    <Box className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-800 dark:text-amber-300">Low Material Alert</p>
                      <p className="text-sm text-amber-700 dark:text-amber-400">Aluminum wire stock low</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-amber-600 dark:text-amber-300">Order Materials</Button>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-3">
                    <Bell className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800 dark:text-blue-300">Production Update</p>
                      <p className="text-sm text-blue-700 dark:text-blue-400">Order #PO-7845 completed</p>
                      <Button variant="link" className="p-0 h-auto text-sm text-blue-600 dark:text-blue-300">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Raw Material Usage</CardTitle>
                <Button variant="outline" size="sm" className="gap-1" onClick={() => handleQuickAction("View Inventory")}>
                  <Box className="h-4 w-4" />
                  <span>Manage Stock</span>
                </Button>
              </CardHeader>
              <CardContent>
                <ChartCard title="" type="bar" data={rawMaterialData} />
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Raw Material Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Copper Wire</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">12.4 tons / 20 tons</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">PVC Compound</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">8.2 tons / 15 tons</span>
                    </div>
                    <Progress value={55} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Aluminum Wire</span>
                      <span className="text-sm text-red-500 dark:text-red-400">1.8 tons / 10 tons</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Rubber Insulation</span>
                      <span className="text-sm text-amber-500 dark:text-amber-400">2.1 tons / 5 tons</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  
                  <div className="mt-4 pt-4 border-t dark:border-gray-800">
                    <h4 className="font-medium mb-2">Pending Orders</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Copper Wire (5mm)</span>
                        <span>10 tons • Due in 2 days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Aluminum Wire (2mm)</span>
                        <span>8 tons • Due in 5 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick Access Workflows */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Production Schedule")}
              >
                <Calendar className="h-6 w-6 text-unnati-primary" />
                <span>Production Schedule</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Check Inventory")}
              >
                <Box className="h-6 w-6 text-unnati-primary" />
                <span>Raw Materials</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Worker Management")}
              >
                <Users className="h-6 w-6 text-unnati-primary" />
                <span>Workers</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Maintenance")}
              >
                <Wrench className="h-6 w-6 text-unnati-primary" />
                <span>Maintenance</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("View Reports")}
              >
                <BarChart3 className="h-6 w-6 text-unnati-primary" />
                <span>Reports</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-unnati-primary/10"
                onClick={() => handleQuickAction("Quality Control")}
              >
                <CheckCircle2 className="h-6 w-6 text-unnati-primary" />
                <span>Quality Check</span>
              </Button>
            </div>
          </div>
          
          {/* Pending Production Orders */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pending Production Orders</CardTitle>
              <Button variant="outline" size="sm" className="gap-1" onClick={() => handleQuickAction("View All Orders")}>
                <Clipboard className="h-4 w-4" />
                <span>View All</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Quantity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Due Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { id: "PO-7845", product: "1.5mm House Wire", quantity: "2,500 m", date: "12 Apr 2025", status: "In Progress" },
                      { id: "PO-7842", product: "2.5mm Industrial Cable", quantity: "1,800 m", date: "14 Apr 2025", status: "Queued" },
                      { id: "PO-7839", product: "4mm Armored Cable", quantity: "950 m", date: "15 Apr 2025", status: "Queued" },
                      { id: "PO-7835", product: "6mm Power Cable", quantity: "750 m", date: "18 Apr 2025", status: "Scheduled" },
                      { id: "PO-7830", product: "1mm Flexible Wire", quantity: "3,200 m", date: "20 Apr 2025", status: "Scheduled" }
                    ].map((order) => (
                      <tr key={order.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">{order.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{order.product}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{order.quantity}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{order.date}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === "In Progress" 
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" 
                              : order.status === "Queued" 
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" 
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Machine Status */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Machine Status</CardTitle>
              <Button variant="outline" size="sm" className="gap-1" onClick={() => handleQuickAction("Maintenance Schedule")}>
                <Wrench className="h-4 w-4" />
                <span>Maintenance Schedule</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <HardDrive className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="font-medium">Extruder Machine</h3>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-sm text-green-600 dark:text-green-400">Operational</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Next Maintenance</p>
                    <p className="text-sm font-medium">15 Apr, 2025</p>
                  </div>
                </div>
                
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <HardDrive className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="font-medium">Winding Machine</h3>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-sm text-green-600 dark:text-green-400">Operational</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Next Maintenance</p>
                    <p className="text-sm font-medium">20 Apr, 2025</p>
                  </div>
                </div>
                
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <HardDrive className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="font-medium">Coating Unit</h3>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                        <p className="text-sm text-amber-600 dark:text-amber-400">Maintenance</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Back Online</p>
                    <p className="text-sm font-medium">Today, 14:00</p>
                  </div>
                </div>
                
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <HardDrive className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="font-medium">Testing Equipment</h3>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-sm text-green-600 dark:text-green-400">Operational</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Next Maintenance</p>
                    <p className="text-sm font-medium">25 Apr, 2025</p>
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

export default FactoryDashboard;

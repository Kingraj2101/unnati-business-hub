
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  LifeBuoy, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Wrench,
  UserPlus,
  FileText,
  Timer,
  Search,
  Filter,
  AlertCircle,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ServiceDashboard = () => {
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

  const handleCreateTicket = () => {
    toast({
      title: "Create Ticket",
      description: "Opening service ticket form...",
    });
  };

  // Sample service data
  const serviceTickets = [
    { id: "SRV-001", customer: "Raj Electronics", date: "08 Apr, 2025", issue: "Faulty LED Lights", product: "Orient LED Panel 24W", priority: "High", status: "Open" },
    { id: "SRV-002", customer: "Mehta Electricals", date: "07 Apr, 2025", issue: "Fan Motor Noise", product: "Havells Ceiling Fan", priority: "Medium", status: "In Progress" },
    { id: "SRV-003", customer: "Sharma Hardware", date: "06 Apr, 2025", issue: "Switch Malfunction", product: "Anchor Switches", priority: "Low", status: "Resolved" },
    { id: "SRV-004", customer: "Singh Stores", date: "05 Apr, 2025", issue: "Wire Insulation Issue", product: "Polycab Wires", priority: "High", status: "Open" },
    { id: "SRV-005", customer: "Gupta Enterprises", date: "04 Apr, 2025", issue: "Socket Not Working", product: "Legrand Socket", priority: "Medium", status: "Closed" },
  ];

  // Sample data for charts
  const ticketsStatusData = [
    { name: "Open", value: 12 },
    { name: "In Progress", value: 8 },
    { name: "Resolved", value: 24 },
    { name: "Closed", value: 18 },
  ];

  const resolutionTimeData = [
    { name: "Jan", value: 48 },
    { name: "Feb", value: 42 },
    { name: "Mar", value: 36 },
    { name: "Apr", value: 32 },
    { name: "May", value: 28 },
    { name: "Jun", value: 24 },
  ];

  // Priority color mapping
  const priorityColor = {
    High: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
    Medium: "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30",
    Low: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  };

  // Status color mapping
  const statusColor = {
    Open: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    "In Progress": "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30",
    Resolved: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    Closed: "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30",
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">After-Sales Service</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage customer service and support tickets</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Open Tickets"
              value="12"
              icon={<Clock size={20} className="text-blue-500" />}
              change={{ value: "2", positive: false }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Avg. Resolution Time"
              value="28 hours"
              icon={<Timer size={20} className="text-amber-500" />}
              change={{ value: "4h", positive: true }}
              className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Resolved This Week"
              value="24"
              icon={<CheckCircle2 size={20} className="text-green-500" />}
              change={{ value: "15%", positive: true }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Customer Satisfaction"
              value="92%"
              icon={<LifeBuoy size={20} className="text-purple-500" />}
              change={{ value: "3%", positive: true }}
              className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              onClick={handleCreateTicket}
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <LifeBuoy size={20} />
              <span>Create Service Ticket</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              <span>Assign Technician</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Wrench size={20} />
              <span>Manage Parts</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <FileText size={20} />
              <span>Service Reports</span>
            </Button>
          </div>
          
          {/* Priority Tickets Alert */}
          <div className="mb-6">
            <Card className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 dark:text-amber-300 text-lg flex items-center gap-2">
                  <AlertCircle size={18} />
                  High Priority Tickets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 dark:text-amber-400 mb-3">2 high priority tickets require immediate attention</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-amber-200 dark:border-amber-800">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">High</Badge>
                      <span className="font-medium">SRV-001</span>
                    </div>
                    <span>Raj Electronics - Faulty LED Lights</span>
                    <Button size="sm" variant="ghost" className="gap-1">
                      <Wrench className="h-4 w-4" />
                      Attend
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-amber-200 dark:border-amber-800">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">High</Badge>
                      <span className="font-medium">SRV-004</span>
                    </div>
                    <span>Singh Stores - Wire Insulation Issue</span>
                    <Button size="sm" variant="ghost" className="gap-1">
                      <Wrench className="h-4 w-4" />
                      Attend
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Tickets by Status" type="pie" data={ticketsStatusData} />
            <ChartCard title="Average Resolution Time (Hours)" type="line" data={resolutionTimeData} />
          </div>
          
          {/* Service Tickets */}
          <Tabs defaultValue="all" className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All Tickets</TabsTrigger>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="inprogress">In Progress</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input placeholder="Search tickets..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button className="gap-2 whitespace-nowrap">
                    <PlusCircle className="h-4 w-4" />
                    New Ticket
                  </Button>
                </div>
              </div>
            </div>
            
            <TabsContent value="all">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceTickets.map((ticket) => (
                        <TableRow key={ticket.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <TableCell className="font-medium">{ticket.id}</TableCell>
                          <TableCell>{ticket.customer}</TableCell>
                          <TableCell>{ticket.date}</TableCell>
                          <TableCell>{ticket.issue}</TableCell>
                          <TableCell>{ticket.product}</TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className={priorityColor[ticket.priority as keyof typeof priorityColor]}
                            >
                              {ticket.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className={statusColor[ticket.status as keyof typeof statusColor]}
                            >
                              {ticket.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end items-center space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Wrench className="h-4 w-4" />
                              </Button>
                              {ticket.status !== "Resolved" && ticket.status !== "Closed" ? (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="h-8 w-8 p-0 text-green-600 dark:text-green-400"
                                >
                                  <CheckCircle2 className="h-4 w-4" />
                                </Button>
                              ) : (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="h-8 w-8 p-0 text-gray-400"
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="open">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceTickets.filter(ticket => ticket.status === "Open").map((ticket) => (
                        <TableRow key={ticket.id}>
                          <TableCell className="font-medium">{ticket.id}</TableCell>
                          <TableCell>{ticket.customer}</TableCell>
                          <TableCell>{ticket.date}</TableCell>
                          <TableCell>{ticket.issue}</TableCell>
                          <TableCell>{ticket.product}</TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline" 
                              className={priorityColor[ticket.priority as keyof typeof priorityColor]}
                            >
                              {ticket.priority}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end items-center space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Wrench className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 p-0 text-green-600 dark:text-green-400"
                              >
                                <CheckCircle2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="inprogress">
              {/* Similar table for in progress tickets */}
              <Card>
                <CardContent className="py-2">
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">Displaying in progress tickets</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resolved">
              {/* Similar table for resolved tickets */}
              <Card>
                <CardContent className="py-2">
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">Displaying resolved tickets</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ServiceDashboard;

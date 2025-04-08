
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  LifeBuoy, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  ClipboardCheck,
  Calendar,
  Phone,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

  // Sample service requests data
  const serviceRequests = [
    { id: "SR-001", customer: "Raj Electric Supplies", product: "3.5mm Copper Wire", issue: "Quality concerns", status: "Pending", date: "08 Apr, 2025" },
    { id: "SR-002", customer: "Modern Lights", product: "MCB Switch 32A", issue: "Warranty replacement", status: "In Progress", date: "07 Apr, 2025" },
    { id: "SR-003", customer: "City Electricals", product: "LED Bulb 9W", issue: "Defective batch", status: "Resolved", date: "05 Apr, 2025" },
    { id: "SR-004", customer: "Sharma Hardware", product: "Wall Socket Dual", issue: "Installation support", status: "Pending", date: "04 Apr, 2025" },
    { id: "SR-005", customer: "Quality Electronics", product: "1.5mm Copper Wire", issue: "Return request", status: "Resolved", date: "02 Apr, 2025" },
  ];

  const handleNewRequest = () => {
    toast({
      title: "New service request",
      description: "Creating new service request form...",
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">After-Sales Service Dashboard</h1>
            <p className="text-gray-500">Manage warranty, returns and customer support</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Open Tickets</p>
                    <h3 className="text-2xl font-bold mt-1">12</h3>
                    <span className="text-xs text-blue-500 mt-1">4 high priority</span>
                  </div>
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <LifeBuoy size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">In Progress</p>
                    <h3 className="text-2xl font-bold mt-1">7</h3>
                    <span className="text-xs text-orange-500 mt-1">2 delayed</span>
                  </div>
                  <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                    <Clock size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Resolved Today</p>
                    <h3 className="text-2xl font-bold mt-1">5</h3>
                    <span className="text-xs text-green-500 mt-1">100% satisfaction</span>
                  </div>
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Warranty Claims</p>
                    <h3 className="text-2xl font-bold mt-1">8</h3>
                    <span className="text-xs text-purple-500 mt-1">This month</span>
                  </div>
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <ClipboardCheck size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              onClick={handleNewRequest}
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <LifeBuoy size={20} />
              <span>New Service Request</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Calendar size={20} />
              <span>Schedule Visit</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>Customer Call</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              <span>Send Update</span>
            </Button>
          </div>
          
          {/* Service Requests */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Service Requests</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.customer}</TableCell>
                      <TableCell>{request.product}</TableCell>
                      <TableCell>{request.issue}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          request.status === 'Resolved' 
                            ? 'bg-green-100 text-green-800'
                            : request.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                        }`}>
                          {request.status}
                        </span>
                      </TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 px-2 py-0">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          {/* Priority Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 text-lg flex items-center gap-2">
                  <AlertTriangle size={18} />
                  High Priority Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between p-2 bg-white rounded border border-amber-200">
                    <div>
                      <p className="font-medium">Quality concerns on 3.5mm Copper Wire</p>
                      <p className="text-sm text-gray-500">Raj Electric Supplies</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8">
                      Assign
                    </Button>
                  </li>
                  <li className="flex justify-between p-2 bg-white rounded border border-amber-200">
                    <div>
                      <p className="font-medium">Warranty replacement for MCB Switch</p>
                      <p className="text-sm text-gray-500">Modern Lights</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8">
                      Assign
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <Calendar size={18} />
                  Scheduled Service Visits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between p-2 bg-white rounded border border-blue-200">
                    <div>
                      <p className="font-medium">City Electricals</p>
                      <p className="text-sm text-gray-500">09 Apr, 2025 - 10:30 AM</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center">
                      Confirmed
                    </span>
                  </li>
                  <li className="flex justify-between p-2 bg-white rounded border border-blue-200">
                    <div>
                      <p className="font-medium">Sharma Hardware</p>
                      <p className="text-sm text-gray-500">10 Apr, 2025 - 02:00 PM</p>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded flex items-center">
                      Pending
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServiceDashboard;


import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter,
  Pencil,
  Trash2,
  Shield,
  UserCog,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
  Mail,
  UserX,
  UserCheck,
  Key
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const UserManagement = () => {
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

  const handleAddUser = () => {
    toast({
      title: "Add User",
      description: "Opening user creation form...",
    });
  };

  // Sample users data
  const users = [
    { id: 1, name: "Rajesh Kumar", email: "rajesh@example.com", role: "Admin", department: "Management", status: "Active", lastActive: "Today at 10:30 AM" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com", role: "Manager", department: "Sales", status: "Active", lastActive: "Today at 09:15 AM" },
    { id: 3, name: "Amit Singh", email: "amit@example.com", role: "Staff", department: "Inventory", status: "Active", lastActive: "Yesterday at 04:45 PM" },
    { id: 4, name: "Neha Patel", email: "neha@example.com", role: "Staff", department: "Accounts", status: "Inactive", lastActive: "3 days ago" },
    { id: 5, name: "Suresh Verma", email: "suresh@example.com", role: "Manager", department: "Factory", status: "Active", lastActive: "Today at 11:20 AM" },
  ];

  // Sample roles data
  const roles = [
    { id: 1, name: "Admin", users: 2, permissions: "Full access to all systems", description: "Administrators with complete control" },
    { id: 2, name: "Manager", users: 4, permissions: "Department management, reporting", description: "Manage staff and department operations" },
    { id: 3, name: "Staff", users: 8, permissions: "Basic operations, no settings", description: "Day-to-day operational tasks" },
    { id: 4, name: "Accountant", users: 2, permissions: "Financial records, billing", description: "Handle financial operations only" },
    { id: 5, name: "Factory Worker", users: 6, permissions: "Production tasks only", description: "Factory floor operations" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">User Management</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage system users, roles and permissions</p>
          </div>
          
          <Tabs defaultValue="users" className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
                <TabsTrigger value="activity">Activity Log</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input placeholder="Search users..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button onClick={handleAddUser} className="gap-2 whitespace-nowrap bg-unnati-primary">
                    <UserPlus className="h-4 w-4" />
                    Add User
                  </Button>
                </div>
              </div>
            </div>
            
            <TabsContent value="users">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <CardTitle>System Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={
                              user.role === 'Admin' 
                                ? 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800'
                                : user.role === 'Manager'
                                  ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800'
                                  : 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-400 dark:border-gray-800'
                            }>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <span className={`h-2 w-2 rounded-full ${
                                user.status === 'Active' 
                                  ? 'bg-green-500' 
                                  : 'bg-gray-400'
                              }`} />
                              <span className={
                                user.status === 'Active' 
                                  ? 'text-green-600 dark:text-green-400' 
                                  : 'text-gray-600 dark:text-gray-400'
                              }>
                                {user.status}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-gray-500 dark:text-gray-400 text-sm">
                            {user.lastActive}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end items-center space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 p-0 text-blue-600 dark:text-blue-400"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Shield className="mr-2 h-4 w-4" />
                                    Change Role
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Send Email
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Key className="mr-2 h-4 w-4" />
                                    Reset Password
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  {user.status === 'Active' ? (
                                    <DropdownMenuItem className="text-amber-600 dark:text-amber-400">
                                      <UserX className="mr-2 h-4 w-4" />
                                      Deactivate
                                    </DropdownMenuItem>
                                  ) : (
                                    <DropdownMenuItem className="text-green-600 dark:text-green-400">
                                      <UserCheck className="mr-2 h-4 w-4" />
                                      Activate
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="roles">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle>Roles & Permissions</CardTitle>
                    <Button className="gap-2">
                      <Shield className="h-4 w-4" />
                      Create Role
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Role Name</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead>Permissions</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roles.map((role) => (
                        <TableRow key={role.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <TableCell>
                            <div className="font-medium flex items-center gap-2">
                              <Badge variant="outline" className={
                                role.name === 'Admin' 
                                  ? 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800'
                                  : role.name === 'Manager'
                                    ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800'
                                    : 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-400 dark:border-gray-800'
                              }>
                                {role.name}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>{role.users}</TableCell>
                          <TableCell className="max-w-[200px] truncate" title={role.permissions}>
                            {role.permissions}
                          </TableCell>
                          <TableCell className="max-w-[250px] truncate" title={role.description}>
                            {role.description}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end items-center space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 p-0 text-blue-600 dark:text-blue-400"
                              >
                                <UserCog className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 p-0 text-red-600 dark:text-red-400"
                                disabled={role.name === 'Admin'}
                              >
                                <Trash2 className="h-4 w-4" />
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
            
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>User Activity Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                            <p className="font-medium">Rajesh Kumar logged in</p>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Today at 10:30 AM</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            User logged in from IP 192.168.1.105
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <Pencil className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                            <p className="font-medium">Priya Sharma updated user profile</p>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Today at 09:45 AM</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            Updated department from "Marketing" to "Sales"
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <UserPlus className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                            <p className="font-medium">Rajesh Kumar added new user</p>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Yesterday at 03:15 PM</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            Added "Vikram Malhotra" as "Staff" in "Inventory" department
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <XCircle className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                            <p className="font-medium">Suresh Verma deactivated user</p>
                            <span className="text-sm text-gray-500 dark:text-gray-400">3 days ago</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            Deactivated user account for "Neha Patel"
                          </p>
                        </div>
                      </div>
                    </div>
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

export default UserManagement;

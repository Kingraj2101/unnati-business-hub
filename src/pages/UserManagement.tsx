
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  User, 
  UserCog, 
  UserPlus, 
  Shield,
  Lock,
  MoreHorizontal,
  Search,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock data for users
const MOCK_USERS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@unnati.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@unnati.com",
    role: "Store Manager",
    status: "Active",
    lastLogin: "Yesterday",
  },
  {
    id: 3,
    name: "Rahul Singh",
    email: "rahul@unnati.com",
    role: "Factory Manager",
    status: "Active",
    lastLogin: "3 days ago",
  },
  {
    id: 4,
    name: "Anil Patel",
    email: "anil@unnati.com",
    role: "Vendor",
    status: "Inactive",
    lastLogin: "2 weeks ago",
  },
  {
    id: 5,
    name: "Meera Joshi",
    email: "meera@unnati.com",
    role: "Accountant",
    status: "Active",
    lastLogin: "Today",
  },
];

// Mock data for roles
const ROLES = [
  { id: 1, name: "Admin", description: "Full access to all systems" },
  { id: 2, name: "Store Manager", description: "Manages retail store operations" },
  { id: 3, name: "Factory Manager", description: "Manages factory operations" },
  { id: 4, name: "Vendor", description: "External supplier access" },
  { id: 5, name: "Accountant", description: "Access to financial systems" },
  { id: 6, name: "Support Staff", description: "Customer service and support" },
];

const UserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const { toast } = useToast();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Form for adding a new user
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      role: "",
      password: "",
    },
  });

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a new user
  const onSubmit = (data: any) => {
    const newUser = {
      id: users.length + 1,
      name: data.name,
      email: data.email,
      role: data.role,
      status: "Active",
      lastLogin: "Never",
    };

    setUsers([...users, newUser]);
    setIsAddUserDialogOpen(false);
    form.reset();

    toast({
      title: "Success",
      description: "User added successfully",
      variant: "default",
    });
  };

  // Handle deleting a user
  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast({
      title: "Success",
      description: "User deleted successfully",
      variant: "default",
    });
  };

  // Handle toggling user status
  const handleToggleStatus = (userId: number) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );

    toast({
      title: "Success",
      description: "User status updated successfully",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">User Management</h1>
            <p className="text-gray-500">Manage users, roles, and permissions</p>
          </div>

          <Tabs defaultValue="users" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="users" className="flex items-center gap-2">
                <User size={16} />
                <span>Users</span>
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex items-center gap-2">
                <Shield size={16} />
                <span>Roles & Permissions</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div>
                    <CardTitle>Manage Users</CardTitle>
                    <CardDescription>View and manage system users</CardDescription>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Search users..."
                        className="pl-9 w-full md:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      {searchTerm && (
                        <button
                          className="absolute right-2.5 top-2.5 text-gray-500 hover:text-gray-700"
                          onClick={() => setSearchTerm("")}
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                    
                    <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-unnati-primary flex items-center gap-2">
                          <UserPlus size={16} />
                          <span>Add User</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New User</DialogTitle>
                          <DialogDescription>
                            Create a new user account for the system.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter full name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="Enter email address" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="role"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Role</FormLabel>
                                  <FormControl>
                                    <select
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                      {...field}
                                    >
                                      <option value="">Select a role</option>
                                      {ROLES.map((role) => (
                                        <option key={role.id} value={role.name}>
                                          {role.name}
                                        </option>
                                      ))}
                                    </select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Temporary Password</FormLabel>
                                  <FormControl>
                                    <Input type="password" placeholder="Enter temporary password" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <DialogFooter>
                              <Button type="button" variant="outline" onClick={() => setIsAddUserDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button type="submit">Add User</Button>
                            </DialogFooter>
                          </form>
                        </Form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Login</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.length > 0 ? (
                          filteredUsers.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name}</TableCell>
                              <TableCell>{user.email}</TableCell>
                              <TableCell>{user.role}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={user.status === "Active" ? "default" : "outline"}
                                  className={
                                    user.status === "Active"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                                      : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                  }
                                >
                                  {user.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{user.lastLogin}</TableCell>
                              <TableCell className="text-right">
                                <TooltipProvider>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal size={16} />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>
                                        <UserCog size={16} className="mr-2" />
                                        Edit User
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleToggleStatus(user.id)}>
                                        <Shield size={16} className="mr-2" />
                                        {user.status === "Active" ? "Deactivate" : "Activate"}
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        <Lock size={16} className="mr-2" />
                                        Reset Password
                                      </DropdownMenuItem>
                                      <DropdownMenuItem 
                                        className="text-red-600" 
                                        onClick={() => handleDeleteUser(user.id)}
                                      >
                                        <X size={16} className="mr-2" />
                                        Delete User
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TooltipProvider>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                              No users found matching your search.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roles" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div>
                    <CardTitle>Roles & Permissions</CardTitle>
                    <CardDescription>Manage user roles and their access levels</CardDescription>
                  </div>
                  
                  <Button className="bg-unnati-primary flex items-center gap-2">
                    <Shield size={16} />
                    <span>Add Role</span>
                  </Button>
                </CardHeader>
                
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Role Name</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>User Count</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {ROLES.map((role) => (
                          <TableRow key={role.id}>
                            <TableCell className="font-medium">{role.name}</TableCell>
                            <TableCell>{role.description}</TableCell>
                            <TableCell>
                              {users.filter((user) => user.role === role.name).length}
                            </TableCell>
                            <TableCell className="text-right">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <Shield size={16} />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Edit Permissions</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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

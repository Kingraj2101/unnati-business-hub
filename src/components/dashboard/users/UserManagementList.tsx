import React, { useState } from "react";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal, 
  UserPlus, 
  Edit, 
  Trash2, 
  Eye, 
  ShieldAlert, 
  ShieldCheck, 
  UserCircle,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'staff' | 'accountant' | 'storekeeper';
  department: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
}

const sampleUsers: User[] = [
  { 
    id: "USR-001", 
    name: "Rajesh Kumar", 
    email: "rajesh@unnati.com", 
    role: "admin", 
    department: "Management", 
    status: "active",
    lastLogin: "Today, 9:45 AM" 
  },
  { 
    id: "USR-002", 
    name: "Priya Singh", 
    email: "priya@unnati.com", 
    role: "manager", 
    department: "Sales", 
    status: "active",
    lastLogin: "Yesterday, 5:20 PM" 
  },
  { 
    id: "USR-003", 
    name: "Vikram Patel", 
    email: "vikram@unnati.com", 
    role: "accountant", 
    department: "Finance", 
    status: "active",
    lastLogin: "11 Apr, 3:15 PM" 
  },
  { 
    id: "USR-004", 
    name: "Anita Sharma", 
    email: "anita@unnati.com", 
    role: "storekeeper", 
    department: "Inventory", 
    status: "inactive",
    lastLogin: "05 Apr, 10:30 AM" 
  },
  { 
    id: "USR-005", 
    name: "Kiran Joshi", 
    email: "kiran@unnati.com", 
    role: "staff", 
    department: "Support", 
    status: "active",
    lastLogin: "Today, 11:00 AM" 
  },
  { 
    id: "USR-006", 
    name: "Sanjay Mehta", 
    email: "sanjay@unnati.com", 
    role: "staff", 
    department: "Operations", 
    status: "pending",
    lastLogin: "Never" 
  },
  { 
    id: "USR-007", 
    name: "Deepak Gupta", 
    email: "deepak@unnati.com", 
    role: "manager", 
    department: "Factory", 
    status: "active",
    lastLogin: "Yesterday, 2:45 PM" 
  },
];

const UserManagementList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  const filteredUsers = sampleUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleAddUser = () => {
    toast({
      title: "Add User",
      description: "Open user creation form.",
    });
  };

  const handleEditUser = (user: User) => {
    toast({
      title: "Edit User",
      description: `Editing user: ${user.name}`,
    });
  };

  const handleDeleteUser = (user: User) => {
    toast({
      title: "Delete User",
      description: `Are you sure you want to delete ${user.name}?`,
      variant: "destructive",
    });
  };

  const handleViewUser = (user: User) => {
    toast({
      title: "View User Details",
      description: `Viewing details for ${user.name}`,
    });
  };

  const handleResetPassword = (user: User) => {
    toast({
      title: "Reset Password",
      description: `Password reset link has been sent to ${user.email}`,
    });
  };

  const handleChangeStatus = (user: User, newStatus: 'active' | 'inactive') => {
    toast({
      title: `User ${newStatus === 'active' ? 'Activated' : 'Deactivated'}`,
      description: `${user.name} is now ${newStatus}`,
    });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "User List Refreshed",
        description: "The user list has been updated.",
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">User Management</CardTitle>
        <Button onClick={handleAddUser} className="gap-1 bg-unnati-primary">
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search users..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Select
              value={roleFilter}
              onValueChange={setRoleFilter}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
                <SelectItem value="accountant">Accountant</SelectItem>
                <SelectItem value="storekeeper">Storekeeper</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-unnati-primary/20 text-unnati-primary">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "admin" 
                            ? "bg-purple-100 text-purple-800 hover:bg-purple-100" 
                            : user.role === "manager"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : user.role === "accountant"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : user.role === "storekeeper"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                        }
                      >
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "active" 
                            ? "default" 
                            : user.status === "inactive"
                            ? "destructive"
                            : "secondary"
                        }
                        className={
                          user.status === "active" 
                            ? "bg-green-100 text-green-800 hover:bg-green-100" 
                            : user.status === "inactive"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                        }
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewUser(user)}>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View Details</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditUser(user)}>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit User</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleResetPassword(user)}>
                            <ShieldAlert className="mr-2 h-4 w-4" />
                            <span>Reset Password</span>
                          </DropdownMenuItem>
                          {user.status === "active" ? (
                            <DropdownMenuItem onClick={() => handleChangeStatus(user, "inactive")}>
                              <ShieldCheck className="mr-2 h-4 w-4" />
                              <span>Deactivate User</span>
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem onClick={() => handleChangeStatus(user, "active")}>
                              <ShieldCheck className="mr-2 h-4 w-4" />
                              <span>Activate User</span>
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleDeleteUser(user)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete User</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserManagementList;

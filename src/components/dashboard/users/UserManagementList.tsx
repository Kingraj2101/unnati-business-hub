
import React, { useState } from "react";
import { 
  Search, 
  Plus, 
  RefreshCw, 
  MoreVertical, 
  Filter, 
  Download, 
  Trash2, 
  Edit, 
  UserPlus, 
  Mail, 
  Lock, 
  Unlock 
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "user" | "accountant" | "store";
  status: "active" | "inactive" | "pending";
  lastLogin: string;
}

const sampleUsers: User[] = [
  { 
    id: "USR-001", 
    name: "Rajesh Kumar", 
    email: "rajesh@unnatitraders.com", 
    role: "admin", 
    status: "active",
    lastLogin: "2023-04-10 09:45 AM"
  },
  { 
    id: "USR-002", 
    name: "Priya Sharma", 
    email: "priya@unnatitraders.com", 
    role: "manager", 
    status: "active",
    lastLogin: "2023-04-10 11:30 AM"
  },
  { 
    id: "USR-003", 
    name: "Amit Patel", 
    email: "amit@unnatitraders.com", 
    role: "accountant", 
    status: "active",
    lastLogin: "2023-04-09 04:15 PM"
  },
  { 
    id: "USR-004", 
    name: "Neha Singh", 
    email: "neha@unnatitraders.com", 
    role: "store", 
    status: "inactive",
    lastLogin: "2023-04-01 10:22 AM"
  },
  { 
    id: "USR-005", 
    name: "Rahul Verma", 
    email: "rahul@unnatitraders.com", 
    role: "user", 
    status: "pending",
    lastLogin: "Never logged in"
  },
  { 
    id: "USR-006", 
    name: "Sunita Joshi", 
    email: "sunita@unnatitraders.com", 
    role: "manager", 
    status: "active",
    lastLogin: "2023-04-10 02:15 PM"
  },
  { 
    id: "USR-007", 
    name: "Vikram Mehta", 
    email: "vikram@unnatitraders.com", 
    role: "user", 
    status: "active",
    lastLogin: "2023-04-09 11:05 AM"
  },
];

const UserManagementList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
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
  
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(filteredUsers.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };
  
  const handleSelectUser = (userId: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers(prev => [...prev, userId]);
    } else {
      setSelectedUsers(prev => prev.filter(id => id !== userId));
    }
  };
  
  const handleDeleteSelected = () => {
    toast({
      title: "Deletion Requested",
      description: `${selectedUsers.length} users marked for deletion`,
      variant: "destructive",
    });
    
    // In a real app, this would call an API to delete the users
    // For now, let's just clear the selection
    setSelectedUsers([]);
  };
  
  const handleAddUser = () => {
    toast({
      title: "Add User",
      description: "User creation form would open here",
    });
  };
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "User List Refreshed",
        description: "User data has been refreshed",
      });
    }, 1500);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search users..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="accountant">Accountant</SelectItem>
              <SelectItem value="store">Store</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1"
          >
            <Download className="h-4 w-4" />
            Export
          </Button>
          
          <Button 
            size="sm" 
            className="gap-1 bg-unnati-primary"
            onClick={handleAddUser}
          >
            <Plus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>
      
      {selectedUsers.length > 0 && (
        <div className="flex items-center justify-between rounded-lg bg-muted p-2">
          <span className="text-sm font-medium">
            {selectedUsers.length} users selected
          </span>
          <Button 
            variant="destructive" 
            size="sm" 
            className="gap-1"
            onClick={handleDeleteSelected}
          >
            <Trash2 className="h-4 w-4" />
            Delete Selected
          </Button>
        </div>
      )}
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage your users and their permissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">
                  <Checkbox 
                    checked={
                      filteredUsers.length > 0 && 
                      selectedUsers.length === filteredUsers.length
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>User</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="w-[60px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox 
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={(checked) => 
                        handleSelectUser(user.id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-xs text-muted-foreground">{user.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{user.id}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.role === "admin" 
                          ? "bg-purple-100 text-purple-800 hover:bg-purple-100" 
                          : user.role === "manager"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : user.role === "accountant"
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          : user.role === "store"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </TableCell>
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
                          ? "bg-green-100 text-green-800" 
                          : user.status === "inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.lastLogin}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Edit className="h-4 w-4" /> Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Mail className="h-4 w-4" /> Send Email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2">
                          {user.status === "active" ? (
                            <>
                              <Lock className="h-4 w-4" /> Disable Account
                            </>
                          ) : (
                            <>
                              <Unlock className="h-4 w-4" /> Enable Account
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive">
                          <Trash2 className="h-4 w-4" /> Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              
              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagementList;

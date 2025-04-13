
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Users, 
  UserPlus, 
  Shield, 
  KeyRound, 
  UserCog,
  BarChart,
  Activity,
  CalendarClock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagementList from "@/components/dashboard/users/UserManagementList";
import GlobalSearch from "@/components/dashboard/GlobalSearch";

const UserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">User Management</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage users, roles, and permissions</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <GlobalSearch />
            
            <Button className="gap-2 bg-unnati-primary">
              <UserPlus className="h-4 w-4" />
              Add New User
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
                    <h3 className="text-2xl font-bold">42</h3>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                  <p className="text-gray-500 dark:text-gray-400">Active Users</p>
                  <p className="font-medium">36</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">User Roles</p>
                    <h3 className="text-2xl font-bold">8</h3>
                  </div>
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                  <p className="text-gray-500 dark:text-gray-400">Custom Roles</p>
                  <p className="font-medium">3</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Recent Logins</p>
                    <h3 className="text-2xl font-bold">26</h3>
                  </div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                    <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                  <p className="text-gray-500 dark:text-gray-400">Today</p>
                  <p className="font-medium">12</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="users" className="mb-6">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
              <TabsTrigger value="activity">User Activity</TabsTrigger>
              <TabsTrigger value="access">Access Control</TabsTrigger>
            </TabsList>
            
            <TabsContent value="users">
              <UserManagementList />
            </TabsContent>
            
            <TabsContent value="roles">
              <Card>
                <CardHeader>
                  <CardTitle>Roles & Permissions Management</CardTitle>
                  <CardDescription>Define user roles and assign permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-10">
                    <Shield className="h-10 w-10 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Roles & Permissions</h3>
                    <p className="text-sm text-gray-500 text-center max-w-md mb-4">
                      Manage roles, create custom permission sets, and control access to different areas of the system.
                    </p>
                    <Button variant="outline">Manage Roles</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>User Activity Logs</CardTitle>
                  <CardDescription>Monitor user actions and system access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-10">
                    <CalendarClock className="h-10 w-10 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Activity Tracking</h3>
                    <p className="text-sm text-gray-500 text-center max-w-md mb-4">
                      View detailed logs of user actions, login history, and system changes for audit purposes.
                    </p>
                    <Button variant="outline">View Activity Logs</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="access">
              <Card>
                <CardHeader>
                  <CardTitle>Access Control</CardTitle>
                  <CardDescription>Manage system access and security settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-10">
                    <KeyRound className="h-10 w-10 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Security Settings</h3>
                    <p className="text-sm text-gray-500 text-center max-w-md mb-4">
                      Configure password policies, two-factor authentication, IP restrictions, and session timeouts.
                    </p>
                    <Button variant="outline">Security Settings</Button>
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

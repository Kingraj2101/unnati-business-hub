
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings as SettingsIcon, 
  Save, 
  Store, 
  User,
  Bell,
  Shield,
  CreditCard,
  Mail,
  Globe,
  Smartphone,
  Lock,
  LogOut,
  HelpCircle,
  FileText,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
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

  const handleSaveSettings = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `Your ${section} settings have been updated successfully.`,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage your application preferences and configurations</p>
          </div>
          
          <Tabs defaultValue="profile" className="mb-6">
            <div className="flex overflow-x-auto pb-2">
              <TabsList className="mb-6 h-auto p-1">
                <TabsTrigger value="profile" className="gap-2 data-[state=active]:bg-unnati-primary data-[state=active]:text-white">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </TabsTrigger>
                <TabsTrigger value="business" className="gap-2">
                  <Store className="h-4 w-4" />
                  <span>Business</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </TabsTrigger>
                <TabsTrigger value="billing" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Billing</span>
                </TabsTrigger>
                <TabsTrigger value="app" className="gap-2">
                  <SettingsIcon className="h-4 w-4" />
                  <span>App Settings</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="profile">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Rajesh Kumar" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" defaultValue="rajesh@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" defaultValue="Admin" disabled />
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button onClick={() => handleSaveSettings("profile")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Profile Avatar</CardTitle>
                    <CardDescription>Upload a profile picture</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="h-32 w-32 rounded-full bg-unnati-primary/80 flex items-center justify-center text-white text-3xl font-medium">
                        RK
                      </div>
                      <Button variant="outline" className="gap-2">
                        <User className="h-4 w-4" />
                        Upload Image
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Additional Information</CardTitle>
                    <CardDescription>Optional details about yourself</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" defaultValue="General Manager" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select defaultValue="management">
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="management">Management</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="accounts">Accounts</SelectItem>
                          <SelectItem value="inventory">Inventory</SelectItem>
                          <SelectItem value="factory">Factory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        placeholder="Tell us a little about yourself" 
                        className="min-h-[100px]"
                        defaultValue="General Manager with 10+ years of experience in electrical goods distribution."
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button onClick={() => handleSaveSettings("additional information")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="business">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                    <CardDescription>Update your business details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" defaultValue="Shree Unnati Traders" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select defaultValue="distributor">
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="distributor">Distributor</SelectItem>
                          <SelectItem value="manufacturer">Manufacturer</SelectItem>
                          <SelectItem value="retailer">Retailer</SelectItem>
                          <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gst">GST Number</Label>
                      <Input id="gst" defaultValue="27AABCU9603R1ZX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Number</Label>
                      <Input id="pan" defaultValue="AABCU9603R" />
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button onClick={() => handleSaveSettings("business")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Contact & Address</CardTitle>
                    <CardDescription>Update your business contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea 
                        id="address" 
                        defaultValue="123 Business Park, Industrial Area, Phase 2, New Delhi, 110001" 
                        className="min-h-[80px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Business Phone</Label>
                      <Input id="phone" defaultValue="+91 11 2345 6789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input id="email" defaultValue="info@unnatitraders.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" defaultValue="www.unnatitraders.com" />
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button onClick={() => handleSaveSettings("contact")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Business Preferences</CardTitle>
                    <CardDescription>Customize your business operations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select defaultValue="inr">
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                            <SelectItem value="usd">US Dollar ($)</SelectItem>
                            <SelectItem value="eur">Euro (€)</SelectItem>
                            <SelectItem value="gbp">British Pound (£)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxRate">Default Tax Rate</Label>
                        <Select defaultValue="18">
                          <SelectTrigger>
                            <SelectValue placeholder="Select tax rate" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5% GST</SelectItem>
                            <SelectItem value="12">12% GST</SelectItem>
                            <SelectItem value="18">18% GST</SelectItem>
                            <SelectItem value="28">28% GST</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fiscalYear">Fiscal Year Start</Label>
                        <Select defaultValue="april">
                          <SelectTrigger>
                            <SelectValue placeholder="Select month" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="january">January</SelectItem>
                            <SelectItem value="april">April</SelectItem>
                            <SelectItem value="july">July</SelectItem>
                            <SelectItem value="october">October</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="asia_kolkata">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asia_kolkata">Asia/Kolkata (IST)</SelectItem>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="america_newyork">America/New York</SelectItem>
                            <SelectItem value="europe_london">Europe/London</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="bnpl">Enable Buy Now Pay Later</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Allow customers to pay for purchases later</p>
                        </div>
                        <Switch id="bnpl" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="invoices">Automatic Invoice Generation</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Create invoices automatically for each sale</p>
                        </div>
                        <Switch id="invoices" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="inventory">Low Inventory Alerts</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when stock is running low</p>
                        </div>
                        <Switch id="inventory" defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button onClick={() => handleSaveSettings("preferences")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Configure how you want to receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Sales Alerts</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications for new sales</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Inventory Updates</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about inventory changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Payment Receipts</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive email for every payment</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">System Updates</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about system changes</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">SMS Notifications</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Order Status</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive SMS when order status changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Critical Alerts</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Get SMS for critical business alerts</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">In-App Notifications</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">All Activities</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Show notifications for all activities</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Sound Alerts</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Play sound for new notifications</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button onClick={() => handleSaveSettings("notification")} className="bg-unnati-primary gap-2">
                    <Save className="h-4 w-4" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your account password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button onClick={() => handleSaveSettings("password")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Update Password
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Enhanced security for your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Enable 2FA</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Secure your account with two-factor authentication</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="rounded-lg border p-4 mt-4">
                      <div className="space-y-3">
                        <h4 className="font-medium">Available Methods</h4>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <Smartphone className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>SMS Authentication</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>Email Authentication</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <Lock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>Authenticator App</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button variant="outline" className="gap-2">
                      Setup 2FA
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Session & Security</CardTitle>
                    <CardDescription>Manage your active sessions and security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Active Sessions</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <p className="font-medium">Current Session</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Windows 11 • Chrome • Delhi, India</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" disabled>
                            Current
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              <Smartphone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium">Mobile App</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">iPhone 13 • iOS 15 • Delhi, India</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-red-600 dark:text-red-400">
                            Logout
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t space-y-4">
                      <h3 className="text-lg font-medium">Security Settings</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Password Expiry</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Force password change every 90 days</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Account Lockout</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lock account after 5 failed login attempts</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">IP Restriction</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Allow access from specific IP addresses only</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <Button variant="outline" className="gap-2 text-red-600 dark:text-red-400">
                      <LogOut className="h-4 w-4" />
                      Logout All Devices
                    </Button>
                    <Button onClick={() => handleSaveSettings("security")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Save Settings
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="billing">
              <div className="grid gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Billing Information</CardTitle>
                    <CardDescription>Manage your payment methods and billing details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-green-800 dark:text-green-300">Current Plan: Business Pro</h3>
                          <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                            Your subscription is active and will renew on May 15, 2025
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Payment Methods</h3>
                      
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="font-medium">HDFC Credit Card</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">**** **** **** 5678 • Expires 12/25</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Default
                        </Button>
                      </div>
                      
                      <Button variant="outline" className="gap-2 w-full mt-2">
                        <CreditCard className="h-4 w-4" />
                        Add Payment Method
                      </Button>
                    </div>
                    
                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-medium">Billing Address</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="billingName">Name</Label>
                          <Input id="billingName" defaultValue="Shree Unnati Traders" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billingEmail">Email</Label>
                          <Input id="billingEmail" defaultValue="accounts@unnatitraders.com" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="billingAddress">Address</Label>
                          <Textarea 
                            id="billingAddress" 
                            defaultValue="123 Business Park, Industrial Area, Phase 2, New Delhi, 110001" 
                            className="min-h-[80px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billingGST">GST Number</Label>
                          <Input id="billingGST" defaultValue="27AABCU9603R1ZX" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billingPhone">Phone</Label>
                          <Input id="billingPhone" defaultValue="+91 11 2345 6789" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button onClick={() => handleSaveSettings("billing")} className="bg-unnati-primary gap-2">
                      <Save className="h-4 w-4" />
                      Save Billing Information
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>View your past invoices and transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <p className="font-medium">Invoice #2025-001</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Apr 01, 2025 • Business Pro Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹15,000</p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Paid
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <p className="font-medium">Invoice #2025-000</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 01, 2025 • Business Pro Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹15,000</p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Paid
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <p className="font-medium">Invoice #2024-011</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Feb 01, 2025 • Business Pro Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹15,000</p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Paid
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" className="gap-2">
                      <FileText className="h-4 w-4" />
                      View All Invoices
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="app">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Application Settings</CardTitle>
                  <CardDescription>Customize your application experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Appearance</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Dark Mode</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Enable dark theme for the application</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="theme">Color Theme</Label>
                        <Select defaultValue="unnati">
                          <SelectTrigger>
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unnati">Unnati Green</SelectItem>
                            <SelectItem value="blue">Ocean Blue</SelectItem>
                            <SelectItem value="purple">Royal Purple</SelectItem>
                            <SelectItem value="amber">Amber Gold</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fontSize">Font Size</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger>
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium (Default)</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">Language & Region</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select defaultValue="en">
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="hi">Hindi</SelectItem>
                            <SelectItem value="gu">Gujarati</SelectItem>
                            <SelectItem value="mr">Marathi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dateFormat">Date Format</Label>
                        <Select defaultValue="dd_mm_yyyy">
                          <SelectTrigger>
                            <SelectValue placeholder="Select date format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dd_mm_yyyy">DD/MM/YYYY</SelectItem>
                            <SelectItem value="mm_dd_yyyy">MM/DD/YYYY</SelectItem>
                            <SelectItem value="yyyy_mm_dd">YYYY/MM/DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">Performance & Usage</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Data Analytics</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Allow usage data collection to improve the app</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Automatic Updates</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Keep application updated automatically</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t space-y-4">
                    <h3 className="text-lg font-medium">Help & Support</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="gap-2 h-auto py-6 flex flex-col">
                        <HelpCircle className="h-6 w-6 mb-2" />
                        <span>Documentation</span>
                      </Button>
                      
                      <Button variant="outline" className="gap-2 h-auto py-6 flex flex-col">
                        <Mail className="h-6 w-6 mb-2" />
                        <span>Contact Support</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button onClick={() => handleSaveSettings("application")} className="bg-unnati-primary gap-2">
                    <Save className="h-4 w-4" />
                    Save Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Settings;

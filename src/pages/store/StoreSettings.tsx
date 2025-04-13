
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings, 
  User, 
  Bell, 
  Lock, 
  Printer, 
  Store, 
  CreditCard,
  Save,
  Check,
  CircleDollarSign,
  Languages,
  Clock,
  Bookmark,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const StoreSettings = () => {
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

  const handleSave = (settingType: string) => {
    toast({
      title: "Settings Saved",
      description: `${settingType} settings have been updated successfully.`,
    });
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Settings className="h-6 w-6 text-unnati-primary" />
              Store Settings
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Configure your store preferences and settings</p>
          </div>
          
          <Tabs defaultValue="store" className="mb-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
              <TabsTrigger value="store">Store Profile</TabsTrigger>
              <TabsTrigger value="billing">Billing & Taxes</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="store" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Store Information</CardTitle>
                  <CardDescription>Manage your store details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="store-name" className="text-sm font-medium">Store Name</label>
                        <Input id="store-name" defaultValue="Unnati Retail Store" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="store-code" className="text-sm font-medium">Store Code</label>
                        <Input id="store-code" defaultValue="UNN-RTL-001" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="store-address" className="text-sm font-medium">Store Address</label>
                      <Textarea 
                        id="store-address" 
                        rows={3}
                        defaultValue="123 Main Street, Vaishali Nagar, Jaipur, Rajasthan, 302021"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                        <Input id="phone" defaultValue="+91 9876543210" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input id="email" defaultValue="retail@unnatitraderspvtltd.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="gst" className="text-sm font-medium">GST Number</label>
                        <Input id="gst" defaultValue="29AABCU9603R1ZX" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="store-description" className="text-sm font-medium">Store Description</label>
                      <Textarea 
                        id="store-description" 
                        rows={3}
                        defaultValue="Unnati Retail Store offers a wide range of electrical products, wires, cables, switches, fans, and lighting solutions for residential and commercial customers."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Store Logo</label>
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 border rounded flex items-center justify-center bg-white">
                          <Store className="h-10 w-10 text-unnati-primary" />
                        </div>
                        <Button variant="outline">Change Logo</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Store profile")}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Working Hours</CardTitle>
                  <CardDescription>Set your store's operating hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                      <div key={day} className="flex items-center justify-between">
                        <div className="w-24 font-medium">{day}</div>
                        <div className="flex-1 flex items-center gap-2">
                          <Select defaultValue={day === "Sunday" ? "closed" : "10:00"}>
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Open" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="closed">Closed</SelectItem>
                              <SelectItem value="08:00">8:00 AM</SelectItem>
                              <SelectItem value="09:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                            </SelectContent>
                          </Select>
                          <span>to</span>
                          <Select defaultValue={day === "Sunday" ? "closed" : "20:00"}>
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Close" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="closed">Closed</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                              <SelectItem value="18:00">6:00 PM</SelectItem>
                              <SelectItem value="19:00">7:00 PM</SelectItem>
                              <SelectItem value="20:00">8:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-slate-500 mr-2">Open</span>
                          <Switch defaultChecked={day !== "Sunday"} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Working hours")}>
                    <Clock className="h-4 w-4 mr-2" />
                    Save Hours
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Settings</CardTitle>
                  <CardDescription>Configure invoicing and billing preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="bill-prefix" className="text-sm font-medium">Invoice Prefix</label>
                        <Input id="bill-prefix" defaultValue="URS-INV-" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="next-invoice" className="text-sm font-medium">Next Invoice Number</label>
                        <Input id="next-invoice" defaultValue="1054" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="currency" className="text-sm font-medium">Currency</label>
                        <Select defaultValue="INR">
                          <SelectTrigger id="currency">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                            <SelectItem value="USD">US Dollar ($)</SelectItem>
                            <SelectItem value="EUR">Euro (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="tax-calculation" className="text-sm font-medium">Tax Calculation</label>
                        <Select defaultValue="inclusive">
                          <SelectTrigger id="tax-calculation">
                            <SelectValue placeholder="Select tax mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inclusive">Tax Inclusive</SelectItem>
                            <SelectItem value="exclusive">Tax Exclusive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="rounding" className="text-sm font-medium">Amount Rounding</label>
                        <Select defaultValue="nearest">
                          <SelectTrigger id="rounding">
                            <SelectValue placeholder="Select rounding" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Rounding</SelectItem>
                            <SelectItem value="nearest">Nearest Rupee</SelectItem>
                            <SelectItem value="up">Round Up</SelectItem>
                            <SelectItem value="down">Round Down</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="invoice-notes" className="text-sm font-medium">Default Invoice Notes</label>
                      <Textarea 
                        id="invoice-notes" 
                        rows={3}
                        defaultValue="Thank you for your business! For any product-related queries, please contact our customer service at 1800-123-4567 or email at support@unnatitraderspvtltd.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Invoice Options</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="print-auto" defaultChecked />
                          <label htmlFor="print-auto" className="text-sm">Auto-print invoices</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="email-copy" defaultChecked />
                          <label htmlFor="email-copy" className="text-sm">Email copy to customer</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="save-pdf" defaultChecked />
                          <label htmlFor="save-pdf" className="text-sm">Save PDF copies</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="include-logo" defaultChecked />
                          <label htmlFor="include-logo" className="text-sm">Include store logo</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Billing settings")}>
                    <CircleDollarSign className="h-4 w-4 mr-2" />
                    Save Billing Settings
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Tax Settings</CardTitle>
                  <CardDescription>Configure GST and tax rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                      <div>
                        <p className="font-medium">GST 18%</p>
                        <p className="text-sm text-slate-500">Standard GST rate for most electrical items</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                      <div>
                        <p className="font-medium">GST 12%</p>
                        <p className="text-sm text-slate-500">Reduced rate for certain energy-efficient products</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                      <div>
                        <p className="font-medium">GST 5%</p>
                        <p className="text-sm text-slate-500">Special rate for solar-related equipment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Add New Tax Rate
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Tax settings")}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Tax Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage store staff and access permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-unnati-primary flex items-center justify-center">
                          <span className="text-white font-semibold">SS</span>
                        </div>
                        <div>
                          <p className="font-medium">Suresh Sharma</p>
                          <p className="text-xs text-slate-500">Store Manager</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-unnati-secondary flex items-center justify-center">
                          <span className="text-white font-semibold">PD</span>
                        </div>
                        <div>
                          <p className="font-medium">Priya Das</p>
                          <p className="text-xs text-slate-500">Sales Associate</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-unnati-purple flex items-center justify-center">
                          <span className="text-white font-semibold">AK</span>
                        </div>
                        <div>
                          <p className="font-medium">Amit Kumar</p>
                          <p className="text-xs text-slate-500">Inventory Supervisor</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Add New User
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("User settings")}>
                    <User className="h-4 w-4 mr-2" />
                    Save User Settings
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure password policies and security options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Password Expiry</p>
                        <p className="text-sm text-slate-500">Force password changes periodically</p>
                      </div>
                      <Select defaultValue="90days">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select expiry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">Never</SelectItem>
                          <SelectItem value="30days">30 Days</SelectItem>
                          <SelectItem value="60days">60 Days</SelectItem>
                          <SelectItem value="90days">90 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-slate-500">Require 2FA for all users</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Session Timeout</p>
                        <p className="text-sm text-slate-500">Auto logout after inactivity</p>
                      </div>
                      <Select defaultValue="30min">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select timeout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15min">15 Minutes</SelectItem>
                          <SelectItem value="30min">30 Minutes</SelectItem>
                          <SelectItem value="60min">60 Minutes</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Security settings")}>
                    <Lock className="h-4 w-4 mr-2" />
                    Save Security Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure alerts and notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-3">Store Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Low Stock Alerts</p>
                            <p className="text-sm text-slate-500">Notify when inventory falls below threshold</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">New Order Notifications</p>
                            <p className="text-sm text-slate-500">Alert when new orders are placed</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Payment Alerts</p>
                            <p className="text-sm text-slate-500">Notify on payment successes and failures</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Supply Delivery Notifications</p>
                            <p className="text-sm text-slate-500">Alert when new inventory arrives</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-medium mb-3">Notification Methods</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-slate-400" />
                            <span>In-App Notifications</span>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-slate-400" />
                            <span>Email Notifications</span>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Smartphone className="h-5 w-5 text-slate-400" />
                            <span>SMS Notifications</span>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Notification settings")}>
                    <Bell className="h-4 w-4 mr-2" />
                    Save Notification Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Preferences</CardTitle>
                  <CardDescription>Configure general application settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-3">Display Settings</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Dark Mode</p>
                            <p className="text-sm text-slate-500">Toggle between light and dark themes</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Compact View</p>
                            <p className="text-sm text-slate-500">Show more items per page</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Show Quick Actions</p>
                            <p className="text-sm text-slate-500">Display quick action buttons in dashboard</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-medium mb-3">General Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Language</p>
                            <p className="text-sm text-slate-500">Select interface language</p>
                          </div>
                          <Select defaultValue="en">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="hi">Hindi</SelectItem>
                              <SelectItem value="mr">Marathi</SelectItem>
                              <SelectItem value="gu">Gujarati</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Date Format</p>
                            <p className="text-sm text-slate-500">Choose date display format</p>
                          </div>
                          <Select defaultValue="dd-mm-yyyy">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select format" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                              <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                              <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Default Page</p>
                            <p className="text-sm text-slate-500">Select landing page</p>
                          </div>
                          <Select defaultValue="dashboard">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select page" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dashboard">Dashboard</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="inventory">Inventory</SelectItem>
                              <SelectItem value="orders">Orders</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-medium mb-3">Printer Settings</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Default Printer</p>
                            <p className="text-sm text-slate-500">Select primary printer</p>
                          </div>
                          <Select defaultValue="receipt-printer">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select printer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="receipt-printer">Receipt Printer</SelectItem>
                              <SelectItem value="invoice-printer">Invoice Printer</SelectItem>
                              <SelectItem value="label-printer">Label Printer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Receipt Paper Size</p>
                            <p className="text-sm text-slate-500">Set default paper dimensions</p>
                          </div>
                          <Select defaultValue="80mm">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="58mm">58mm</SelectItem>
                              <SelectItem value="80mm">80mm</SelectItem>
                              <SelectItem value="a4">A4</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("System preferences")}>
                    <Settings className="h-4 w-4 mr-2" />
                    Save Preferences
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

export default StoreSettings;

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

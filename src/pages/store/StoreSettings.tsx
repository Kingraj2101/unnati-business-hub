
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings, 
  UserCog, 
  Store, 
  Bell, 
  ShieldAlert, 
  Languages, 
  CreditCard,
  Palette,
  PrinterIcon,
  CloudUpload,
  Save,
  CheckCircle2,
  Users,
  Building2,
  CircleOff,
  LockIcon,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
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

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} operation initiated successfully.`,
    });
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Settings className="h-6 w-6 text-unnati-primary" />
                Store Settings
              </h1>
              <p className="text-slate-500 dark:text-slate-400">Configure your store settings and preferences</p>
            </div>
            
            <Button 
              onClick={() => handleAction("Save Settings")}
              className="bg-unnati-primary hover:bg-unnati-primary/90 gap-2"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
          
          <Tabs defaultValue="general" className="space-y-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                <span className="hidden md:inline">General</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden md:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" />
                <span className="hidden md:inline">Security</span>
              </TabsTrigger>
              <TabsTrigger value="localization" className="flex items-center gap-2">
                <Languages className="h-4 w-4" />
                <span className="hidden md:inline">Localization</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden md:inline">Billing</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden md:inline">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="printing" className="flex items-center gap-2">
                <PrinterIcon className="h-4 w-4" />
                <span className="hidden md:inline">Printing</span>
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <UserCog className="h-4 w-4" />
                <span className="hidden md:inline">Users</span>
              </TabsTrigger>
            </TabsList>
            
            {/* General Settings Tab */}
            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Store Information</CardTitle>
                  <CardDescription>Basic details about your store</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="store-name">Store Name</Label>
                      <Input id="store-name" defaultValue="Unnati Electronics Retail Store" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="store-code">Store Code</Label>
                      <Input id="store-code" defaultValue="UNN-RT-001" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="store-phone">Contact Number</Label>
                      <Input id="store-phone" defaultValue="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="store-email">Email Address</Label>
                      <Input id="store-email" defaultValue="retail@unnatitraders.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="store-address">Store Address</Label>
                      <Textarea id="store-address" defaultValue="123 Electronics Market, Business District, Mumbai - 400001" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="store-description">Store Description</Label>
                    <Textarea 
                      id="store-description" 
                      defaultValue="Premier electronics and electrical goods retail location for Unnati Traders. Specializing in wires, lighting, fans, switches and electrical fittings."
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>Set your store operating hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="monday">Monday</Label>
                        <div className="flex items-center gap-2">
                          <Input className="w-24" defaultValue="09:00" />
                          <span>to</span>
                          <Input className="w-24" defaultValue="20:00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="tuesday">Tuesday</Label>
                        <div className="flex items-center gap-2">
                          <Input className="w-24" defaultValue="09:00" />
                          <span>to</span>
                          <Input className="w-24" defaultValue="20:00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="wednesday">Wednesday</Label>
                        <div className="flex items-center gap-2">
                          <Input className="w-24" defaultValue="09:00" />
                          <span>to</span>
                          <Input className="w-24" defaultValue="20:00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="thursday">Thursday</Label>
                        <div className="flex items-center gap-2">
                          <Input className="w-24" defaultValue="09:00" />
                          <span>to</span>
                          <Input className="w-24" defaultValue="20:00" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="friday">Friday</Label>
                        <div className="flex items-center gap-2">
                          <Input className="w-24" defaultValue="09:00" />
                          <span>to</span>
                          <Input className="w-24" defaultValue="20:00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="saturday">Saturday</Label>
                        <div className="flex items-center gap-2">
                          <Input className="w-24" defaultValue="10:00" />
                          <span>to</span>
                          <Input className="w-24" defaultValue="21:00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sunday">Sunday</Label>
                        <div className="flex items-center gap-2">
                          <Input className="w-24" defaultValue="11:00" />
                          <span>to</span>
                          <Input className="w-24" defaultValue="18:00" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Store Settings</CardTitle>
                  <CardDescription>General configuration options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable GST Billing</Label>
                      <p className="text-sm text-muted-foreground">
                        Apply GST to all transactions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Apply Discounts Automatically</Label>
                      <p className="text-sm text-muted-foreground">
                        Apply eligible discounts automatically at checkout
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Send Receipt via Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Send customers their receipt via email after purchase
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-Generate Daily Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically generate end-of-day sales reports
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>Configure email alert settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sales Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive an email for each completed sale
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Inventory Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when items are running low
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Customer Returns</Label>
                      <p className="text-sm text-muted-foreground">
                        Be alerted when a customer initiates a return
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Daily Summary</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive a daily sales and operations summary
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mobile Notifications</CardTitle>
                  <CardDescription>Configure push notification settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sales Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get push notifications for completed sales
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Inventory Warnings</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for low stock items
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Customer Service</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about customer support requests
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Daily Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        End-of-day summary notifications
                      </p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>System Notifications</CardTitle>
                  <CardDescription>Configure in-app notification settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>All Transactions</Label>
                      <p className="text-sm text-muted-foreground">
                        Show notifications for all transactions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>System Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notifications about system updates
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Products</Label>
                      <p className="text-sm text-muted-foreground">
                        Be notified when new products are added
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Price Changes</Label>
                      <p className="text-sm text-muted-foreground">
                        Notify about product price changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Security Tab */}
            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Access Control</CardTitle>
                  <CardDescription>Manage user access and permissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="access-level">Default Access Level</Label>
                      <Select defaultValue="restricted">
                        <SelectTrigger>
                          <SelectValue placeholder="Select default access" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restricted">Restricted Access</SelectItem>
                          <SelectItem value="standard">Standard Access</SelectItem>
                          <SelectItem value="full">Full Access</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                      <Input id="session-timeout" type="number" defaultValue="30" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label>Enforce Strong Passwords</Label>
                      <p className="text-sm text-muted-foreground">
                        Require complex passwords for all users
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Require 2FA for all admin users
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Log All Activities</Label>
                      <p className="text-sm text-muted-foreground">
                        Keep detailed logs of all user actions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security options for your store</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Secure Transactions</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable encryption for all transactions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Login Attempt Limits</Label>
                      <p className="text-sm text-muted-foreground">
                        Lock account after 5 failed attempts
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>IP Restrictions</Label>
                      <p className="text-sm text-muted-foreground">
                        Only allow access from trusted IP addresses
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <Button 
                      variant="outline" 
                      onClick={() => handleAction("Security Audit")}
                    >
                      <ShieldAlert className="mr-2 h-4 w-4" />
                      Run Security Audit
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="ml-2"
                      onClick={() => handleAction("Reset Security Settings")}
                    >
                      <CircleOff className="mr-2 h-4 w-4" />
                      Reset to Default
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Password Policy</CardTitle>
                  <CardDescription>Configure password requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-length">Minimum Password Length</Label>
                    <Input id="min-length" type="number" defaultValue="8" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Require Uppercase Letters</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Require Numbers</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Require Special Characters</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expiry-days">Password Expiry (days)</Label>
                    <Input id="expiry-days" type="number" defaultValue="90" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* More tabs would follow a similar pattern */}
            <TabsContent value="localization" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Settings</CardTitle>
                  <CardDescription>Configure regional preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Default Language</Label>
                      <Select defaultValue="en-in">
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en-in">English (India)</SelectItem>
                          <SelectItem value="hi-in">Hindi</SelectItem>
                          <SelectItem value="mr-in">Marathi</SelectItem>
                          <SelectItem value="gu-in">Gujarati</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="inr">
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                          <SelectItem value="usd">US Dollar ($)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="asia-kolkata">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asia-kolkata">Asia/Kolkata (IST)</SelectItem>
                          <SelectItem value="utc">UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="dd-mm-yyyy">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                          <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tax Configuration</CardTitle>
                  <CardDescription>Configure tax settings for your region</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tax-type">Tax System</Label>
                      <Select defaultValue="gst">
                        <SelectTrigger>
                          <SelectValue placeholder="Select tax system" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gst">GST</SelectItem>
                          <SelectItem value="vat">VAT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                      <Input id="tax-rate" type="number" defaultValue="18" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label>Show Tax-Inclusive Prices</Label>
                      <p className="text-sm text-muted-foreground">
                        Display prices with tax included
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Apply Regional Tax Rules</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically apply correct tax based on customer location
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Configure available payment options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Cash Payments</Label>
                      <p className="text-sm text-muted-foreground">
                        Accept in-store cash payments
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Card Payments</Label>
                      <p className="text-sm text-muted-foreground">
                        Accept debit and credit cards
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>UPI Payments</Label>
                      <p className="text-sm text-muted-foreground">
                        Accept UPI-based mobile payments
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Credit Account</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow customers to make purchases on credit
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="payment-gateway">Default Payment Gateway</Label>
                      <Select defaultValue="razorpay">
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment gateway" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="razorpay">Razorpay</SelectItem>
                          <SelectItem value="paytm">Paytm</SelectItem>
                          <SelectItem value="phonepe">PhonePe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="invoice-prefix">Invoice Prefix</Label>
                      <Input id="invoice-prefix" defaultValue="UNN-INV-" />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => handleAction("Configure Payment Gateway")}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Configure Payment Gateway
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Invoice Settings</CardTitle>
                  <CardDescription>Configure invoice generation options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="invoice-numbering">Invoice Numbering</Label>
                      <Select defaultValue="sequential">
                        <SelectTrigger>
                          <SelectValue placeholder="Select numbering system" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sequential">Sequential</SelectItem>
                          <SelectItem value="date-based">Date Based</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="invoice-copies">Default Copies</Label>
                      <Input id="invoice-copies" type="number" defaultValue="2" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label>Auto-Generate Invoices</Label>
                      <p className="text-sm text-muted-foreground">
                        Create invoices automatically for all sales
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Include Logo on Invoice</Label>
                      <p className="text-sm text-muted-foreground">
                        Print company logo on all invoices
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Terms and Conditions</Label>
                      <p className="text-sm text-muted-foreground">
                        Display T&C on all invoices
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    <Label htmlFor="invoice-notes">Default Invoice Notes</Label>
                    <Textarea 
                      id="invoice-notes" 
                      placeholder="Enter default text to appear on all invoices"
                      defaultValue="Thank you for shopping at Unnati Electronics! All electronic goods carry a 1-year manufacturer warranty unless otherwise specified."
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Settings</CardTitle>
                  <CardDescription>Customize your store appearance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="color-theme">Color Theme</Label>
                      <Select defaultValue="blue">
                        <SelectTrigger>
                          <SelectValue placeholder="Select color theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue">Unnati Blue</SelectItem>
                          <SelectItem value="gold">Unnati Gold</SelectItem>
                          <SelectItem value="dark">Dark Mode</SelectItem>
                          <SelectItem value="light">Light Mode</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="font-size">Font Size</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Use dark theme for the interface
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Company Logo</Label>
                      <p className="text-sm text-muted-foreground">
                        Display logo in store interface
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="pt-4">
                    <Label>Brand Logo</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="h-16 w-16 rounded border flex items-center justify-center bg-slate-100">
                        <img 
                          src="/lovable-uploads/2f65710c-403d-4ccb-a52d-0b99adc116a8.png" 
                          alt="Store Logo" 
                          className="max-h-14 max-w-14"
                        />
                      </div>
                      <Button 
                        variant="outline"
                        onClick={() => handleAction("Change Logo")}
                      >
                        <CloudUpload className="mr-2 h-4 w-4" />
                        Change Logo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Receipt Customization</CardTitle>
                  <CardDescription>Customize your receipt appearance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Print Logo on Receipt</Label>
                      <p className="text-sm text-muted-foreground">
                        Include store logo on printed receipts
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show GST Details</Label>
                      <p className="text-sm text-muted-foreground">
                        Include GST breakdown on receipts
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Print QR Code</Label>
                      <p className="text-sm text-muted-foreground">
                        Include QR code for digital receipt
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    <Label htmlFor="receipt-footer">Receipt Footer Text</Label>
                    <Textarea 
                      id="receipt-footer" 
                      placeholder="Enter footer text for all receipts"
                      defaultValue="Thank you for shopping at Unnati Electronics! For returns, please present this receipt within 7 days. GST No: 27AABCU9603R1ZX"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="printing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Printer Settings</CardTitle>
                  <CardDescription>Configure your printing preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="default-printer">Default Printer</Label>
                      <Select defaultValue="thermal-printer">
                        <SelectTrigger>
                          <SelectValue placeholder="Select printer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="thermal-printer">Thermal Receipt Printer</SelectItem>
                          <SelectItem value="laser-printer">Laser Printer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="paper-size">Receipt Paper Size</Label>
                      <Select defaultValue="80mm">
                        <SelectTrigger>
                          <SelectValue placeholder="Select paper size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="58mm">58mm Roll</SelectItem>
                          <SelectItem value="80mm">80mm Roll</SelectItem>
                          <SelectItem value="a4">A4 Sheet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label>Auto-Print Receipts</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically print receipt after sale
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Print Duplicate Copy</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically print a duplicate copy
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant="outline"
                      onClick={() => handleAction("Test Print")}
                    >
                      <PrinterIcon className="mr-2 h-4 w-4" />
                      Print Test Receipt
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Barcode Settings</CardTitle>
                  <CardDescription>Configure barcode printing options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="barcode-type">Barcode Type</Label>
                      <Select defaultValue="code128">
                        <SelectTrigger>
                          <SelectValue placeholder="Select barcode type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="code128">Code 128</SelectItem>
                          <SelectItem value="ean13">EAN-13</SelectItem>
                          <SelectItem value="qrcode">QR Code</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="barcode-size">Barcode Size</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-0.5">
                      <Label>Include Price on Label</Label>
                      <p className="text-sm text-muted-foreground">
                        Show price on barcode labels
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Include Product Name</Label>
                      <p className="text-sm text-muted-foreground">
                        Print product name on barcode labels
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant="outline"
                      onClick={() => handleAction("Print Sample Barcode")}
                    >
                      <PrinterIcon className="mr-2 h-4 w-4" />
                      Print Sample Barcode
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Configure store user settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Allow Multi-User Login</Label>
                      <p className="text-sm text-muted-foreground">
                        Permit multiple users to log in simultaneously
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Track User Activity</Label>
                      <p className="text-sm text-muted-foreground">
                        Log all user actions in the system
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Role-Based Permissions</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable granular access control by role
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={() => handleAction("Manage Users")}
                      className="bg-unnati-primary hover:bg-unnati-primary/90 gap-2"
                    >
                      <Users className="h-4 w-4" />
                      Manage Store Staff
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="ml-2"
                      onClick={() => handleAction("Add User")}
                    >
                      <UserCog className="mr-2 h-4 w-4" />
                      Add New User
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Store Staff Users</CardTitle>
                  <CardDescription>Currently configured users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b">
                      <div>Name</div>
                      <div>Role</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div className="font-medium">Rajesh Kumar</div>
                      <div>Store Manager</div>
                      <div className="flex items-center">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        Active
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleAction("Edit User")}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div className="font-medium">Priya Sharma</div>
                      <div>Cashier</div>
                      <div className="flex items-center">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        Active
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleAction("Edit User")}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div className="font-medium">Amit Verma</div>
                      <div>Sales Associate</div>
                      <div className="flex items-center">
                        <span className="flex h-2 w-2 rounded-full bg-gray-400 mr-2"></span>
                        Inactive
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleAction("Edit User")}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Role Configuration</CardTitle>
                  <CardDescription>Manage user roles and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="font-medium">Store Manager</h3>
                        <p className="text-sm text-muted-foreground">Full access to all store functions</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleAction("Edit Role Permissions")}
                      >
                        Configure
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="font-medium">Cashier</h3>
                        <p className="text-sm text-muted-foreground">Access to billing and payments only</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleAction("Edit Role Permissions")}
                      >
                        Configure
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="font-medium">Sales Associate</h3>
                        <p className="text-sm text-muted-foreground">Limited access to sales functions</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleAction("Edit Role Permissions")}
                      >
                        Configure
                      </Button>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        variant="outline"
                        onClick={() => handleAction("Add New Role")}
                      >
                        <Building2 className="mr-2 h-4 w-4" />
                        Add New Role
                      </Button>
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

export default StoreSettings;

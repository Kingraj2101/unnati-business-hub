
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings, 
  Save, 
  Store, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Printer, 
  Truck, 
  Database,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
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

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
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
          
          <Tabs defaultValue="general" className="mb-6">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="general">
                <Store className="h-4 w-4 mr-2" />
                General
              </TabsTrigger>
              <TabsTrigger value="users">
                <User className="h-4 w-4 mr-2" />
                User Access
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="billing">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="integrations">
                <Database className="h-4 w-4 mr-2" />
                Integrations
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Manage your store information and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Store Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="store-name">Store Name</Label>
                        <Input id="store-name" defaultValue="Unnati Traders - Mumbai Branch" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="store-id">Store ID</Label>
                        <Input id="store-id" defaultValue="ST-MUM-001" readOnly className="bg-slate-100" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Commerce Street, Andheri East" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="Mumbai" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input id="pincode" defaultValue="400069" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Contact Number</Label>
                        <Input id="phone" defaultValue="+91 9876543210" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="mumbai@unnatitraders.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="manager">Store Manager</Label>
                        <Input id="manager" defaultValue="Rajesh Sharma" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="weekday-hours">Weekday Hours</Label>
                        <Input id="weekday-hours" defaultValue="9:00 AM - 8:00 PM" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="weekend-hours">Weekend Hours</Label>
                        <Input id="weekend-hours" defaultValue="10:00 AM - 6:00 PM" />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="closed-holidays" defaultChecked />
                        <Label htmlFor="closed-holidays">Closed on National Holidays</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="lunch-break" defaultChecked />
                        <Label htmlFor="lunch-break">Lunch Break (1:00 PM - 2:00 PM)</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Regional Settings</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select defaultValue="inr">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                            <SelectItem value="usd">US Dollar ($)</SelectItem>
                            <SelectItem value="eur">Euro (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                        <Input id="tax-rate" defaultValue="18" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select defaultValue="en">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="hi">Hindi</SelectItem>
                            <SelectItem value="mr">Marathi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date-format">Date Format</Label>
                        <Select defaultValue="dd-mm-yyyy">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                            <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                            <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="gap-2" onClick={() => handleSave("General")}>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Access Settings</CardTitle>
                  <CardDescription>Manage user permissions and access control</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Access Control</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Store Managers</p>
                          <p className="text-sm text-slate-500">Full access to all store functions</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Sales Staff</p>
                          <p className="text-sm text-slate-500">Access to sales and inventory only</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Inventory Staff</p>
                          <p className="text-sm text-slate-500">Access to inventory management</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Accountants</p>
                          <p className="text-sm text-slate-500">Access to financial reports and transactions</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Permission Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Staff to Issue Refunds</p>
                          <p className="text-sm text-slate-500">Enable staff to process refunds without manager approval</p>
                        </div>
                        <Switch id="allow-refunds" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Staff to Edit Prices</p>
                          <p className="text-sm text-slate-500">Enable staff to modify product prices</p>
                        </div>
                        <Switch id="edit-prices" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Staff to View Reports</p>
                          <p className="text-sm text-slate-500">Enable staff to access business reports</p>
                        </div>
                        <Switch id="view-reports" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Remote Access</p>
                          <p className="text-sm text-slate-500">Enable access to the system from outside the store network</p>
                        </div>
                        <Switch id="remote-access" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Button className="gap-2" onClick={() => handleSave("User Access")}>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure how and when you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Daily Sales Summary</p>
                          <p className="text-sm text-slate-500">Receive daily summary of sales activities</p>
                        </div>
                        <Switch id="daily-sales" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Low Stock Alerts</p>
                          <p className="text-sm text-slate-500">Notify when inventory items reach low stock levels</p>
                        </div>
                        <Switch id="low-stock" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Customer Complaints</p>
                          <p className="text-sm text-slate-500">Notify when a customer registers a complaint</p>
                        </div>
                        <Switch id="customer-complaints" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New Orders</p>
                          <p className="text-sm text-slate-500">Notify when new orders are placed</p>
                        </div>
                        <Switch id="new-orders" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Stock Updates</p>
                          <p className="text-sm text-slate-500">Show notifications for inventory changes</p>
                        </div>
                        <Switch id="stock-updates" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Payment Confirmations</p>
                          <p className="text-sm text-slate-500">Show notifications for payment events</p>
                        </div>
                        <Switch id="payment-confirmations" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">System Updates</p>
                          <p className="text-sm text-slate-500">Notify about system updates and maintenance</p>
                        </div>
                        <Switch id="system-updates" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Staff Activity</p>
                          <p className="text-sm text-slate-500">Notify about staff logins and important actions</p>
                        </div>
                        <Switch id="staff-activity" />
                      </div>
                    </div>
                  </div>
                  
                  <Button className="gap-2" onClick={() => handleSave("Notifications")}>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Settings</CardTitle>
                  <CardDescription>Configure invoice, payment, and receipt settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Invoice Settings</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="invoice-prefix">Invoice Number Prefix</Label>
                        <Input id="invoice-prefix" defaultValue="INV-" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="invoice-start">Next Invoice Number</Label>
                        <Input id="invoice-start" defaultValue="2025-0123" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="terms">Default Terms & Conditions</Label>
                        <Input id="terms" defaultValue="Payment due within 30 days" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="invoice-notes">Default Invoice Notes</Label>
                        <Input id="invoice-notes" defaultValue="Thank you for your business" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Include GSTIN on Invoice</p>
                        <p className="text-sm text-slate-500">Display your GSTIN number on all invoices</p>
                      </div>
                      <Switch id="gstin-display" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Show HSN Codes</p>
                        <p className="text-sm text-slate-500">Display HSN codes for all products on invoices</p>
                      </div>
                      <Switch id="hsn-codes" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="payment-methods">Accepted Payment Methods</Label>
                          <Select defaultValue="all">
                            <SelectTrigger>
                              <SelectValue placeholder="Select Methods" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Methods</SelectItem>
                              <SelectItem value="card-cash">Card & Cash Only</SelectItem>
                              <SelectItem value="digital">Digital Payments Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="payment-gateway">Default Payment Gateway</Label>
                          <Select defaultValue="razorpay">
                            <SelectTrigger>
                              <SelectValue placeholder="Select Gateway" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="razorpay">Razorpay</SelectItem>
                              <SelectItem value="paytm">Paytm</SelectItem>
                              <SelectItem value="gpay">Google Pay</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Partial Payments</p>
                          <p className="text-sm text-slate-500">Enable customers to make partial payments</p>
                        </div>
                        <Switch id="partial-payments" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Credit Sales</p>
                          <p className="text-sm text-slate-500">Enable sales on credit with payment terms</p>
                        </div>
                        <Switch id="credit-sales" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Receipt Settings</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="receipt-printer">Default Receipt Printer</Label>
                        <Select defaultValue="thermal">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Printer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="thermal">Thermal Printer</SelectItem>
                            <SelectItem value="laser">Laser Printer</SelectItem>
                            <SelectItem value="none">Digital Only (No Print)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="receipt-size">Receipt Paper Size</Label>
                        <Select defaultValue="80mm">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="80mm">80mm (Standard)</SelectItem>
                            <SelectItem value="58mm">58mm (Compact)</SelectItem>
                            <SelectItem value="a4">A4 Paper</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Print Receipt Automatically</p>
                        <p className="text-sm text-slate-500">Automatically print receipts after each sale</p>
                      </div>
                      <Switch id="auto-print" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Include Store Logo on Receipt</p>
                        <p className="text-sm text-slate-500">Print your store logo at the top of each receipt</p>
                      </div>
                      <Switch id="logo-receipt" defaultChecked />
                    </div>
                  </div>
                  
                  <Button className="gap-2" onClick={() => handleSave("Billing")}>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integrations">
              <Card>
                <CardHeader>
                  <CardTitle>Integration Settings</CardTitle>
                  <CardDescription>Connect with other systems and services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">API Integrations</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Factory Inventory System</p>
                          <p className="text-sm text-slate-500">Connect with central inventory management</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Accounting Software</p>
                          <p className="text-sm text-slate-500">Sync with accounting system</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">E-commerce Platform</p>
                          <p className="text-sm text-slate-500">Sync inventory with online store</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Logistics Partner API</p>
                          <p className="text-sm text-slate-500">Connect with shipping partners</p>
                        </div>
                        <Badge variant="secondary">
                          Configure
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Gateway Integrations</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Razorpay</p>
                          <p className="text-sm text-slate-500">Online payment processing</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">PayTM</p>
                          <p className="text-sm text-slate-500">Digital wallet and payments</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">UPI Integration</p>
                          <p className="text-sm text-slate-500">Direct UPI payment processing</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Hardware Integrations</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Receipt Printer</p>
                          <p className="text-sm text-slate-500">Thermal printer configuration</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Barcode Scanner</p>
                          <p className="text-sm text-slate-500">Scanner for inventory and checkout</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between py-2 border-b">
                        <div>
                          <p className="font-medium">Card Payment Terminal</p>
                          <p className="text-sm text-slate-500">POS terminal for card payments</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="gap-2" onClick={() => handleSave("Integrations")}>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
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


import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings as SettingsIcon, 
  Building, 
  User, 
  Globe, 
  FileText, 
  Bell, 
  ShieldCheck,
  Database,
  Printer,
  CreditCard,
  Clipboard,
  Send,
  Mail,
  Save,
  Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSaveSettings = () => {
    setIsSaving(true);
    
    // Simulate saving settings
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Settings Saved",
        description: "Your settings have been updated successfully.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>
            <p className="text-gray-500 dark:text-gray-400">Configure system preferences and business settings</p>
          </div>
          
          <Tabs defaultValue="general" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="general" className="flex items-center justify-center gap-2">
                  <SettingsIcon className="h-4 w-4" />
                  <span className="hidden md:inline">General</span>
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center justify-center gap-2">
                  <Building className="h-4 w-4" />
                  <span className="hidden md:inline">Company</span>
                </TabsTrigger>
                <TabsTrigger value="document" className="flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden md:inline">Document</span>
                </TabsTrigger>
                <TabsTrigger value="billing" className="flex items-center justify-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden md:inline">Billing</span>
                </TabsTrigger>
                <TabsTrigger value="advanced" className="flex items-center justify-center gap-2">
                  <Database className="h-4 w-4" />
                  <span className="hidden md:inline">Advanced</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure application preferences and default behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Application Settings</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="language" className="md:text-right">Language</Label>
                        <Select defaultValue="en-IN">
                          <SelectTrigger id="language" className="md:col-span-3">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en-IN">English (India)</SelectItem>
                            <SelectItem value="hi-IN">Hindi</SelectItem>
                            <SelectItem value="gu-IN">Gujarati</SelectItem>
                            <SelectItem value="mr-IN">Marathi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="timezone" className="md:text-right">Timezone</Label>
                        <Select defaultValue="Asia/Kolkata">
                          <SelectTrigger id="timezone" className="md:col-span-3">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                            <SelectItem value="Asia/Dubai">Asia/Dubai (GST)</SelectItem>
                            <SelectItem value="Europe/London">Europe/London (GMT)</SelectItem>
                            <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="dateformat" className="md:text-right">Date Format</Label>
                        <Select defaultValue="dd-mm-yyyy">
                          <SelectTrigger id="dateformat" className="md:col-span-3">
                            <SelectValue placeholder="Select date format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                            <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                            <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Theme</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Select defaultValue="light">
                            <SelectTrigger>
                              <SelectValue placeholder="Select theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Notifications</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="notifications" defaultChecked />
                          <Label htmlFor="notifications">Enable system notifications</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">System Performance</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Auto-save</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="autosave" defaultChecked />
                          <Label htmlFor="autosave">Enable auto-save for forms</Label>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Cache</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="cache" defaultChecked />
                          <Label htmlFor="cache">Use browser cache for faster loading</Label>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Analytics</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="analytics" defaultChecked />
                          <Label htmlFor="analytics">Enable usage analytics</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveSettings} 
                      disabled={isSaving}
                      className="gap-2 bg-unnati-primary"
                    >
                      <Save className="h-4 w-4" />
                      {isSaving ? "Saving..." : "Save Settings"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle>Company Profile</CardTitle>
                  <CardDescription>Update your company information and branding</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Business Details</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="companyName" className="md:text-right">Company Name</Label>
                        <Input id="companyName" defaultValue="Shree Unnati Traders" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
                        <Label htmlFor="address" className="md:text-right pt-2">Address</Label>
                        <Textarea id="address" defaultValue="123 Main Street, Industrial Area, Mumbai, Maharashtra" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="gst" className="md:text-right">GST Number</Label>
                        <Input id="gst" defaultValue="27AABCU9603R1ZX" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="pan" className="md:text-right">PAN Number</Label>
                        <Input id="pan" defaultValue="AABCU9603R" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="md:text-right">Phone Number</Label>
                        <Input id="phone" defaultValue="+91 98765 43210" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="md:text-right">Email Address</Label>
                        <Input id="email" defaultValue="info@unnatitraders.com" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="website" className="md:text-right">Website</Label>
                        <Input id="website" defaultValue="www.unnatitraders.com" className="md:col-span-3" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Branding</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
                        <Label className="md:text-right pt-2">Company Logo</Label>
                        <div className="md:col-span-3">
                          <div className="border rounded-md p-4 w-40 h-40 flex items-center justify-center mb-2">
                            <p className="text-gray-500 text-center">Logo Preview</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Upload Logo
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="primaryColor" className="md:text-right">Primary Color</Label>
                        <div className="md:col-span-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-unnati-primary"></div>
                          <Input id="primaryColor" defaultValue="#9b87f5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveSettings} 
                      disabled={isSaving}
                      className="gap-2 bg-unnati-primary"
                    >
                      <Save className="h-4 w-4" />
                      {isSaving ? "Saving..." : "Save Company Profile"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="document">
              <Card>
                <CardHeader>
                  <CardTitle>Document Settings</CardTitle>
                  <CardDescription>Configure document templates, numbering, and print settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Document Numbering</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="invoicePrefix" className="md:text-right">Invoice Prefix</Label>
                        <Input id="invoicePrefix" defaultValue="INV-" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="invoiceStart" className="md:text-right">Invoice Start Number</Label>
                        <Input id="invoiceStart" defaultValue="1001" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="quotePrefix" className="md:text-right">Quotation Prefix</Label>
                        <Input id="quotePrefix" defaultValue="QT-" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="purchasePrefix" className="md:text-right">Purchase Order Prefix</Label>
                        <Input id="purchasePrefix" defaultValue="PO-" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Reset Numbering</Label>
                        <div className="md:col-span-3">
                          <Select defaultValue="financial">
                            <SelectTrigger>
                              <SelectValue placeholder="Select reset period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="never">Never</SelectItem>
                              <SelectItem value="financial">Every Financial Year</SelectItem>
                              <SelectItem value="calendar">Every Calendar Year</SelectItem>
                              <SelectItem value="month">Every Month</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Print Settings</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="paperSize" className="md:text-right">Default Paper Size</Label>
                        <Select defaultValue="a4">
                          <SelectTrigger id="paperSize" className="md:col-span-3">
                            <SelectValue placeholder="Select paper size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a4">A4</SelectItem>
                            <SelectItem value="letter">Letter</SelectItem>
                            <SelectItem value="legal">Legal</SelectItem>
                            <SelectItem value="a5">A5</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="orientation" className="md:text-right">Default Orientation</Label>
                        <Select defaultValue="portrait">
                          <SelectTrigger id="orientation" className="md:col-span-3">
                            <SelectValue placeholder="Select orientation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="portrait">Portrait</SelectItem>
                            <SelectItem value="landscape">Landscape</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
                        <Label className="md:text-right pt-2">Show Footer</Label>
                        <div className="md:col-span-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="showFooter" defaultChecked />
                            <Label htmlFor="showFooter">Add footer to printed documents</Label>
                          </div>
                          <Textarea 
                            placeholder="Footer text"
                            defaultValue="Thank you for your business! For support, call +91 98765 43210 or email support@unnatitraders.com"
                            className="h-20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveSettings} 
                      disabled={isSaving}
                      className="gap-2 bg-unnati-primary"
                    >
                      <Save className="h-4 w-4" />
                      {isSaving ? "Saving..." : "Save Document Settings"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Settings</CardTitle>
                  <CardDescription>Configure payment terms, taxes, and billing preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Payment Settings</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="paymentTerms" className="md:text-right">Default Payment Terms</Label>
                        <Select defaultValue="30">
                          <SelectTrigger id="paymentTerms" className="md:col-span-3">
                            <SelectValue placeholder="Select payment terms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="7">Net 7 Days</SelectItem>
                            <SelectItem value="15">Net 15 Days</SelectItem>
                            <SelectItem value="30">Net 30 Days</SelectItem>
                            <SelectItem value="60">Net 60 Days</SelectItem>
                            <SelectItem value="0">Due on Receipt</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="currency" className="md:text-right">Default Currency</Label>
                        <Select defaultValue="inr">
                          <SelectTrigger id="currency" className="md:col-span-3">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Payment Methods</Label>
                        <div className="md:col-span-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cash" defaultChecked />
                            <Label htmlFor="cash">Cash</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cheque" defaultChecked />
                            <Label htmlFor="cheque">Cheque</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="bank" defaultChecked />
                            <Label htmlFor="bank">Bank Transfer</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="upi" defaultChecked />
                            <Label htmlFor="upi">UPI</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="card" defaultChecked />
                            <Label htmlFor="card">Card Payment</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="bnpl" />
                            <Label htmlFor="bnpl">Buy Now Pay Later</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Tax Settings</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="taxType" className="md:text-right">Default Tax Type</Label>
                        <Select defaultValue="gst">
                          <SelectTrigger id="taxType" className="md:col-span-3">
                            <SelectValue placeholder="Select tax type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gst">GST</SelectItem>
                            <SelectItem value="vat">VAT</SelectItem>
                            <SelectItem value="none">No Tax</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="gstRate" className="md:text-right">Default GST Rate</Label>
                        <Select defaultValue="18">
                          <SelectTrigger id="gstRate" className="md:col-span-3">
                            <SelectValue placeholder="Select GST rate" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0%</SelectItem>
                            <SelectItem value="5">5%</SelectItem>
                            <SelectItem value="12">12%</SelectItem>
                            <SelectItem value="18">18%</SelectItem>
                            <SelectItem value="28">28%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Tax Calculation</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="taxInclusive" />
                          <Label htmlFor="taxInclusive">Prices are tax inclusive by default</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveSettings} 
                      disabled={isSaving}
                      className="gap-2 bg-unnati-primary"
                    >
                      <Save className="h-4 w-4" />
                      {isSaving ? "Saving..." : "Save Billing Settings"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="advanced">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Configure advanced system settings and integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Backup & Data</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Auto Backup</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="autoBackup" defaultChecked />
                          <Label htmlFor="autoBackup">Enable automatic data backup</Label>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="backupFrequency" className="md:text-right">Backup Frequency</Label>
                        <Select defaultValue="daily">
                          <SelectTrigger id="backupFrequency" className="md:col-span-3">
                            <SelectValue placeholder="Select backup frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
                        <div className="md:text-right md:pt-2">
                          <Label>Manual Backup</Label>
                        </div>
                        <div className="md:col-span-3">
                          <Button variant="outline" className="gap-2">
                            <Cloud className="h-4 w-4" />
                            Backup Now
                          </Button>
                          <p className="text-sm text-gray-500 mt-2">Last backup: 12 Apr, 2025 09:45 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Integrations</h3>
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">Email Integration</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="emailIntegration" defaultChecked />
                          <Label htmlFor="emailIntegration">Enable email sending</Label>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label htmlFor="smtpServer" className="md:text-right">SMTP Server</Label>
                        <Input id="smtpServer" defaultValue="smtp.unnatitraders.com" className="md:col-span-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                        <Label className="md:text-right">SMS Integration</Label>
                        <div className="md:col-span-3 flex items-center space-x-2">
                          <Switch id="smsIntegration" defaultChecked />
                          <Label htmlFor="smsIntegration">Enable SMS notifications</Label>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
                        <Label className="md:text-right pt-2">API Access</Label>
                        <div className="md:col-span-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <Switch id="apiAccess" />
                            <Label htmlFor="apiAccess">Enable API access</Label>
                          </div>
                          <p className="text-sm text-gray-500">Allow third-party applications to access your data via API.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveSettings} 
                      disabled={isSaving}
                      className="gap-2 bg-unnati-primary"
                    >
                      <Save className="h-4 w-4" />
                      {isSaving ? "Saving..." : "Save Advanced Settings"}
                    </Button>
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

export default Settings;

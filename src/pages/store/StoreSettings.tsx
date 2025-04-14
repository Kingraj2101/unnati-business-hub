
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings, 
  User, 
  Store, 
  CreditCard, 
  Bell, 
  Shield, 
  Printer,
  Smartphone,
  Workflow,
  LayoutGrid,
  Save,
  ArrowRight,
  Check,
  QrCode,
  Terminal,
  Warehouse
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StoreSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Form states
  const [storeName, setStoreName] = useState("Unnati Electronics Store");
  const [storeAddress, setStoreAddress] = useState("123 Main Street, City Center, Delhi");
  const [storePhone, setStorePhone] = useState("+91 98765 43210");
  const [storeEmail, setStoreEmail] = useState("store@unnatitraderselectricals.com");
  const [storeGST, setStoreGST] = useState("29AABCU9603R1ZX");
  const [sendReceipts, setSendReceipts] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [stockAlerts, setStockAlerts] = useState(true);
  const [enableBarcodeScanner, setEnableBarcodeScanner] = useState(true);
  const [taxRate, setTaxRate] = useState("18");
  const [currencyFormat, setCurrencyFormat] = useState("inr");
  const [printerType, setPrinterType] = useState("thermal");
  const [receiptTemplate, setReceiptTemplate] = useState("standard");
  const [warehouseSync, setWarehouseSync] = useState(true);

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
      description: `${section} settings have been updated successfully.`,
    });
  };

  const handleResetSettings = (section: string) => {
    toast({
      title: "Settings Reset",
      description: `${section} settings have been reset to defaults.`,
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
            <TabsList className="mb-4 grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                <span className="hidden md:inline">General</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden md:inline">Billing</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden md:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="hardware" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span className="hidden md:inline">Hardware</span>
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Advanced</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>Store Information</CardTitle>
                  <CardDescription>Manage your store's basic information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="store-name">Store Name</Label>
                      <Input 
                        id="store-name" 
                        value={storeName} 
                        onChange={(e) => setStoreName(e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="store-phone">Phone Number</Label>
                      <Input 
                        id="store-phone" 
                        value={storePhone} 
                        onChange={(e) => setStorePhone(e.target.value)} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="store-address">Address</Label>
                    <Textarea 
                      id="store-address" 
                      value={storeAddress} 
                      onChange={(e) => setStoreAddress(e.target.value)} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="store-email">Email</Label>
                      <Input 
                        id="store-email" 
                        type="email" 
                        value={storeEmail} 
                        onChange={(e) => setStoreEmail(e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="store-gst">GST Number</Label>
                      <Input 
                        id="store-gst" 
                        value={storeGST} 
                        onChange={(e) => setStoreGST(e.target.value)} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="store-timezone">Timezone</Label>
                    <Select defaultValue="asia-kolkata">
                      <SelectTrigger id="store-timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia-kolkata">Asia/Kolkata (IST)</SelectItem>
                        <SelectItem value="asia-dubai">Asia/Dubai (GST)</SelectItem>
                        <SelectItem value="asia-singapore">Asia/Singapore (SGT)</SelectItem>
                        <SelectItem value="europe-london">Europe/London (GMT)</SelectItem>
                        <SelectItem value="america-new_york">America/New_York (EST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => handleResetSettings("General")}>
                    Reset
                  </Button>
                  <Button onClick={() => handleSaveSettings("General")}>
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Store Operations</CardTitle>
                  <CardDescription>Configure your store's operation settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="store-hours">Business Hours</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger id="store-hours">
                        <SelectValue placeholder="Select business hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (9:00 AM - 6:00 PM)</SelectItem>
                        <SelectItem value="extended">Extended (8:00 AM - 9:00 PM)</SelectItem>
                        <SelectItem value="weekend">Weekend (10:00 AM - 4:00 PM)</SelectItem>
                        <SelectItem value="custom">Custom Hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="warehouse-sync">Warehouse Sync</Label>
                      <p className="text-sm text-gray-500">Sync inventory with main warehouse</p>
                    </div>
                    <Switch 
                      id="warehouse-sync" 
                      checked={warehouseSync}
                      onCheckedChange={setWarehouseSync}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="stock-alerts">Stock Alerts</Label>
                      <p className="text-sm text-gray-500">Enable low stock alerts</p>
                    </div>
                    <Switch 
                      id="stock-alerts" 
                      checked={stockAlerts}
                      onCheckedChange={setStockAlerts}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => handleResetSettings("Operations")}>
                    Reset
                  </Button>
                  <Button onClick={() => handleSaveSettings("Operations")}>
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Settings</CardTitle>
                  <CardDescription>Configure billing preferences and payment options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                      <Input 
                        id="tax-rate" 
                        type="number" 
                        value={taxRate} 
                        onChange={(e) => setTaxRate(e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency-format">Currency Format</Label>
                      <Select value={currencyFormat} onValueChange={setCurrencyFormat}>
                        <SelectTrigger id="currency-format">
                          <SelectValue placeholder="Select currency format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                          <SelectItem value="usd">US Dollar ($)</SelectItem>
                          <SelectItem value="eur">Euro (€)</SelectItem>
                          <SelectItem value="gbp">British Pound (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="receipt-template">Receipt Template</Label>
                    <Select value={receiptTemplate} onValueChange={setReceiptTemplate}>
                      <SelectTrigger id="receipt-template">
                        <SelectValue placeholder="Select receipt template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="detailed">Detailed</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Available Payment Methods</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="payment-cash" className="rounded" defaultChecked />
                        <Label htmlFor="payment-cash">Cash</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="payment-card" className="rounded" defaultChecked />
                        <Label htmlFor="payment-card">Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="payment-upi" className="rounded" defaultChecked />
                        <Label htmlFor="payment-upi">UPI</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="payment-credit" className="rounded" defaultChecked />
                        <Label htmlFor="payment-credit">Store Credit</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="send-receipts">Email Receipts</Label>
                      <p className="text-sm text-gray-500">Send receipts to customers via email</p>
                    </div>
                    <Switch 
                      id="send-receipts" 
                      checked={sendReceipts}
                      onCheckedChange={setSendReceipts}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => handleResetSettings("Billing")}>
                    Reset
                  </Button>
                  <Button onClick={() => handleSaveSettings("Billing")}>
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure alerts and communication preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-500">Send email notifications for important events</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-gray-500">Send SMS alerts to customers</p>
                    </div>
                    <Switch 
                      id="sms-notifications" 
                      checked={smsNotifications}
                      onCheckedChange={setSmsNotifications}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="inventory-alerts">Inventory Alerts</Label>
                      <p className="text-sm text-gray-500">Receive alerts for low stock</p>
                    </div>
                    <Switch id="inventory-alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="order-notifications">Order Updates</Label>
                      <p className="text-sm text-gray-500">Notify customers about order status changes</p>
                    </div>
                    <Switch id="order-notifications" defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="low-stock-threshold">Low Stock Threshold</Label>
                    <Select defaultValue="10">
                      <SelectTrigger id="low-stock-threshold">
                        <SelectValue placeholder="Select threshold" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 units</SelectItem>
                        <SelectItem value="10">10 units</SelectItem>
                        <SelectItem value="15">15 units</SelectItem>
                        <SelectItem value="20">20 units</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => handleResetSettings("Notifications")}>
                    Reset
                  </Button>
                  <Button onClick={() => handleSaveSettings("Notifications")}>
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="hardware">
              <Card>
                <CardHeader>
                  <CardTitle>Hardware Settings</CardTitle>
                  <CardDescription>Configure printers, scanners, and other devices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="printer-type">Receipt Printer</Label>
                    <Select value={printerType} onValueChange={setPrinterType}>
                      <SelectTrigger id="printer-type">
                        <SelectValue placeholder="Select printer type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thermal">Thermal Printer</SelectItem>
                        <SelectItem value="dot-matrix">Dot Matrix Printer</SelectItem>
                        <SelectItem value="inkjet">Inkjet Printer</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="barcode-scanner">Barcode Scanner</Label>
                      <p className="text-sm text-gray-500">Enable barcode scanning for products</p>
                    </div>
                    <Switch 
                      id="barcode-scanner" 
                      checked={enableBarcodeScanner}
                      onCheckedChange={setEnableBarcodeScanner}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="payment-terminal">Payment Terminal</Label>
                    <Select defaultValue="pos">
                      <SelectTrigger id="payment-terminal">
                        <SelectValue placeholder="Select terminal type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pos">POS Terminal</SelectItem>
                        <SelectItem value="mobile">Mobile Payment Device</SelectItem>
                        <SelectItem value="integrated">Integrated System</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cash-drawer">Cash Drawer</Label>
                    <Select defaultValue="manual">
                      <SelectTrigger id="cash-drawer">
                        <SelectValue placeholder="Select drawer type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="automatic">Automatic (Connected)</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => handleResetSettings("Hardware")}>
                    Reset
                  </Button>
                  <Button onClick={() => handleSaveSettings("Hardware")}>
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Hardware Tools</CardTitle>
                  <CardDescription>Test and configure your hardware devices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => handleAction("Test Receipt Printer")}>
                      <Printer className="h-6 w-6" />
                      <span>Test Receipt Printer</span>
                    </Button>
                    
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => handleAction("Test Barcode Scanner")}>
                      <QrCode className="h-6 w-6" />
                      <span>Test Barcode Scanner</span>
                    </Button>
                    
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => handleAction("Test Payment Terminal")}>
                      <Terminal className="h-6 w-6" />
                      <span>Test Payment Terminal</span>
                    </Button>
                    
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => handleAction("Test Cash Drawer")}>
                      <Warehouse className="h-6 w-6" />
                      <span>Test Cash Drawer</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="advanced">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Security, backup, and advanced store configuration</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="user-management">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          <span>User Management</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 py-2">
                          <Button variant="outline" className="w-full" onClick={() => handleAction("Manage Store Users")}>
                            Manage Store Users
                          </Button>
                          <Button variant="outline" className="w-full" onClick={() => handleAction("Configure Permissions")}>
                            Configure User Permissions
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="security">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          <span>Security Settings</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 py-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label>Two-Factor Authentication</Label>
                              <p className="text-sm text-gray-500">Require 2FA for all users</p>
                            </div>
                            <Switch id="twofa" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label>Activity Logging</Label>
                              <p className="text-sm text-gray-500">Track all user activities</p>
                            </div>
                            <Switch id="activity-log" defaultChecked />
                          </div>
                          
                          <Button variant="outline" className="w-full" onClick={() => handleAction("Security Audit")}>
                            Run Security Audit
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="backup">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Save className="h-5 w-5" />
                          <span>Backup & Restore</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 py-2">
                          <Button className="w-full" onClick={() => handleAction("Create Backup")}>
                            Create Backup
                          </Button>
                          <div className="space-y-2">
                            <Label>Backup Schedule</Label>
                            <Select defaultValue="daily">
                              <SelectTrigger>
                                <SelectValue placeholder="Select backup frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="manual">Manual Only</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="workflow">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Workflow className="h-5 w-5" />
                          <span>Workflow Configuration</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 py-2">
                          <div className="space-y-2">
                            <Label>Order Processing Workflow</Label>
                            <Select defaultValue="standard">
                              <SelectTrigger>
                                <SelectValue placeholder="Select workflow" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="standard">Standard</SelectItem>
                                <SelectItem value="expedited">Expedited</SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label>Auto-approve Orders</Label>
                              <p className="text-sm text-gray-500">Automatically approve orders below ₹5,000</p>
                            </div>
                            <Switch id="auto-approve" defaultChecked />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="data">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <LayoutGrid className="h-5 w-5" />
                          <span>Data Management</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 py-2">
                          <Button variant="outline" className="w-full" onClick={() => handleAction("Export Data")}>
                            Export Store Data
                          </Button>
                          <Button variant="outline" className="w-full" onClick={() => handleAction("Import Data")}>
                            Import Data
                          </Button>
                          <Button variant="outline" className="w-full text-red-600" onClick={() => handleAction("Clear Test Data")}>
                            Clear Test Data
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => handleSaveSettings("Advanced")}>
                    Save All Settings
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

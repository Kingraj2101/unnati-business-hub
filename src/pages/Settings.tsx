
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Building, 
  PaintBucket,
  Mail,
  Smartphone,
  CreditCard,
  Save,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Profile settings state
  const [profileForm, setProfileForm] = useState({
    name: "Rajesh Kumar",
    email: "rajesh@unnati.com",
    phone: "+91 98765 43210",
    avatar: "/placeholder.svg"
  });

  // Company settings state
  const [companyForm, setCompanyForm] = useState({
    companyName: "Shree Unnati Traders",
    address: "123 Business Park, Sector 15, Noida, UP",
    gstin: "22AAAAA0000A1Z5",
    phone: "+91 1234567890",
    email: "contact@unnati.com",
    website: "www.unnati.com"
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    stockAlerts: true,
    paymentAlerts: true,
    orderUpdates: true,
    marketingEmails: false,
    dailySummary: true,
    securityAlerts: true
  });

  // Appearance settings state
  const [appearanceSettings, setAppearanceSettings] = useState({
    darkMode: false,
    compactMode: false,
    colorTheme: "blue",
    showAnimations: true,
    highContrast: false
  });

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileForm({
      ...profileForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCompanyForm({
      ...companyForm,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationToggle = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting]
    });
  };

  const handleAppearanceToggle = (setting: keyof typeof appearanceSettings) => {
    setAppearanceSettings({
      ...appearanceSettings,
      [setting]: !appearanceSettings[setting]
    });
  };

  const saveSettings = (settingType: string) => {
    toast({
      title: "Settings Saved",
      description: `Your ${settingType} settings have been updated successfully.`
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Settings</h1>
            <p className="text-gray-500">Manage your account preferences and business settings</p>
          </div>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              <TabsTrigger value="profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="company" className="flex items-center">
                <Building className="mr-2 h-4 w-4" />
                <span>Company</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center">
                <PaintBucket className="mr-2 h-4 w-4" />
                <span>Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your personal information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={profileForm.name} 
                            onChange={handleProfileChange} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={profileForm.email} 
                            onChange={handleProfileChange} 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={profileForm.phone} 
                            onChange={handleProfileChange} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Position</Label>
                          <Input 
                            id="position" 
                            name="position" 
                            placeholder="e.g. Business Owner, Manager" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          name="bio" 
                          placeholder="A brief description about yourself" 
                          className="h-24"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-1/3 flex flex-col items-center justify-start space-y-4">
                      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img 
                          src={profileForm.avatar} 
                          alt="Profile" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <Button variant="outline" size="sm">Change Avatar</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => saveSettings('profile')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Company Settings */}
            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle>Company Settings</CardTitle>
                  <CardDescription>
                    Manage your business information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input 
                        id="companyName" 
                        name="companyName" 
                        value={companyForm.companyName} 
                        onChange={handleCompanyChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gstin">GSTIN</Label>
                      <Input 
                        id="gstin" 
                        name="gstin" 
                        value={companyForm.gstin} 
                        onChange={handleCompanyChange} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Textarea 
                      id="address" 
                      name="address" 
                      value={companyForm.address} 
                      onChange={handleCompanyChange} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyPhone">Phone Number</Label>
                      <Input 
                        id="companyPhone" 
                        name="phone" 
                        value={companyForm.phone} 
                        onChange={handleCompanyChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyEmail">Email Address</Label>
                      <Input 
                        id="companyEmail" 
                        name="email" 
                        type="email" 
                        value={companyForm.email} 
                        onChange={handleCompanyChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input 
                        id="website" 
                        name="website" 
                        value={companyForm.website} 
                        onChange={handleCompanyChange} 
                      />
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Business Logo</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-32 border rounded-md flex items-center justify-center bg-gray-100">
                        <img src="/placeholder.svg" alt="Company Logo" className="max-w-full max-h-full" />
                      </div>
                      <div className="space-y-2">
                        <Button variant="outline">Upload New Logo</Button>
                        <p className="text-xs text-gray-500">Recommended size: 512x512px (Max: 2MB)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => saveSettings('company')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Appearance Settings */}
            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>
                    Customize the look and feel of your dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme Preferences</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-medium">Dark Mode</span>
                        <span className="text-sm text-gray-500">Switch to dark color scheme</span>
                      </div>
                      <Switch 
                        checked={appearanceSettings.darkMode} 
                        onCheckedChange={() => handleAppearanceToggle('darkMode')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-medium">Compact Mode</span>
                        <span className="text-sm text-gray-500">Reduce spacing between elements</span>
                      </div>
                      <Switch 
                        checked={appearanceSettings.compactMode} 
                        onCheckedChange={() => handleAppearanceToggle('compactMode')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-medium">Show Animations</span>
                        <span className="text-sm text-gray-500">Enable UI animations and transitions</span>
                      </div>
                      <Switch 
                        checked={appearanceSettings.showAnimations} 
                        onCheckedChange={() => handleAppearanceToggle('showAnimations')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-medium">High Contrast</span>
                        <span className="text-sm text-gray-500">Increase color contrast for accessibility</span>
                      </div>
                      <Switch 
                        checked={appearanceSettings.highContrast} 
                        onCheckedChange={() => handleAppearanceToggle('highContrast')} 
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Color Theme</h3>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      <div 
                        className={`h-12 rounded-md bg-blue-600 cursor-pointer transition-all ${
                          appearanceSettings.colorTheme === 'blue' ? 'ring-2 ring-offset-2 ring-blue-600' : ''
                        }`}
                        onClick={() => setAppearanceSettings({...appearanceSettings, colorTheme: 'blue'})}
                      />
                      <div 
                        className={`h-12 rounded-md bg-purple-600 cursor-pointer transition-all ${
                          appearanceSettings.colorTheme === 'purple' ? 'ring-2 ring-offset-2 ring-purple-600' : ''
                        }`}
                        onClick={() => setAppearanceSettings({...appearanceSettings, colorTheme: 'purple'})}
                      />
                      <div 
                        className={`h-12 rounded-md bg-green-600 cursor-pointer transition-all ${
                          appearanceSettings.colorTheme === 'green' ? 'ring-2 ring-offset-2 ring-green-600' : ''
                        }`}
                        onClick={() => setAppearanceSettings({...appearanceSettings, colorTheme: 'green'})}
                      />
                      <div 
                        className={`h-12 rounded-md bg-amber-600 cursor-pointer transition-all ${
                          appearanceSettings.colorTheme === 'amber' ? 'ring-2 ring-offset-2 ring-amber-600' : ''
                        }`}
                        onClick={() => setAppearanceSettings({...appearanceSettings, colorTheme: 'amber'})}
                      />
                      <div 
                        className={`h-12 rounded-md bg-red-600 cursor-pointer transition-all ${
                          appearanceSettings.colorTheme === 'red' ? 'ring-2 ring-offset-2 ring-red-600' : ''
                        }`}
                        onClick={() => setAppearanceSettings({...appearanceSettings, colorTheme: 'red'})}
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Dashboard Layout</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="border p-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col space-y-2">
                          <div className="h-2 w-full bg-gray-200 rounded-full" />
                          <div className="flex space-x-2">
                            <div className="h-12 w-1/4 bg-gray-200 rounded-md" />
                            <div className="h-12 w-3/4 bg-gray-200 rounded-md" />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-8 bg-gray-200 rounded-md" />
                            <div className="h-8 bg-gray-200 rounded-md" />
                          </div>
                        </div>
                        <p className="text-center text-sm mt-2">Default</p>
                      </div>
                      
                      <div className="border p-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col space-y-2">
                          <div className="h-2 w-full bg-gray-200 rounded-full" />
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-12 bg-gray-200 rounded-md" />
                            <div className="h-12 bg-gray-200 rounded-md" />
                            <div className="h-12 bg-gray-200 rounded-md" />
                          </div>
                          <div className="h-10 bg-gray-200 rounded-md" />
                        </div>
                        <p className="text-center text-sm mt-2">Compact</p>
                      </div>
                      
                      <div className="border p-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col space-y-2">
                          <div className="h-2 w-full bg-gray-200 rounded-full" />
                          <div className="flex space-x-2">
                            <div className="h-20 w-1/3 bg-gray-200 rounded-md" />
                            <div className="space-y-2 w-2/3">
                              <div className="h-9 bg-gray-200 rounded-md" />
                              <div className="h-9 bg-gray-200 rounded-md" />
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-sm mt-2">Expanded</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => saveSettings('appearance')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Control how you receive notifications and alerts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-blue-600" />
                      Email Notifications
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications via email
                          </p>
                        </div>
                        <Switch 
                          id="email-notifications" 
                          checked={notificationSettings.emailNotifications} 
                          onCheckedChange={() => handleNotificationToggle('emailNotifications')} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="daily-summary">Daily Summary</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive a daily summary of activities
                          </p>
                        </div>
                        <Switch 
                          id="daily-summary" 
                          checked={notificationSettings.dailySummary} 
                          onCheckedChange={() => handleNotificationToggle('dailySummary')} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketing-emails">Marketing Emails</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive promotional and marketing emails
                          </p>
                        </div>
                        <Switch 
                          id="marketing-emails" 
                          checked={notificationSettings.marketingEmails} 
                          onCheckedChange={() => handleNotificationToggle('marketingEmails')} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center">
                      <Smartphone className="h-5 w-5 mr-2 text-green-600" />
                      SMS Notifications
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms-notifications">SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via SMS
                        </p>
                      </div>
                      <Switch 
                        id="sms-notifications" 
                        checked={notificationSettings.smsNotifications} 
                        onCheckedChange={() => handleNotificationToggle('smsNotifications')} 
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center">
                      <Bell className="h-5 w-5 mr-2 text-amber-600" />
                      System Alerts
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="stock-alerts">Stock Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive alerts for low stock and inventory issues
                          </p>
                        </div>
                        <Switch 
                          id="stock-alerts" 
                          checked={notificationSettings.stockAlerts} 
                          onCheckedChange={() => handleNotificationToggle('stockAlerts')} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="payment-alerts">Payment Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive alerts for payments and transactions
                          </p>
                        </div>
                        <Switch 
                          id="payment-alerts" 
                          checked={notificationSettings.paymentAlerts} 
                          onCheckedChange={() => handleNotificationToggle('paymentAlerts')} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="order-updates">Order Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about order status changes
                          </p>
                        </div>
                        <Switch 
                          id="order-updates" 
                          checked={notificationSettings.orderUpdates} 
                          onCheckedChange={() => handleNotificationToggle('orderUpdates')} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="security-alerts">Security Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive alerts about security and account activity
                          </p>
                        </div>
                        <Switch 
                          id="security-alerts" 
                          checked={notificationSettings.securityAlerts} 
                          onCheckedChange={() => handleNotificationToggle('securityAlerts')} 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => saveSettings('notifications')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Security Settings */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your account security and privacy preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <Button variant="outline">Change Password</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch id="2fa" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Session Management</h3>
                    
                    <div className="rounded-md border">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <Shield className="h-3.5 w-3.5 mr-1 text-green-600" />
                            <span>Chrome on Windows • Delhi, India • Active now</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" disabled>This Device</Button>
                      </div>
                      
                      <Separator />
                      
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Mobile App</p>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <Shield className="h-3.5 w-3.5 mr-1 text-amber-600" />
                            <span>iPhone 13 • Delhi, India • 2 hours ago</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Log Out</Button>
                      </div>
                    </div>
                    
                    <Button variant="outline">Log Out From All Devices</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Connected Applications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-start border p-4 rounded-md">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Accounting Software</p>
                            <p className="text-sm text-gray-500">Connected on April 5, 2025</p>
                            <p className="text-xs text-gray-500 mt-1">Has access to your company data and financial information</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                      
                      <div className="flex justify-between items-start border p-4 rounded-md">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center mr-3">
                            <CreditCard className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Payment Gateway</p>
                            <p className="text-sm text-gray-500">Connected on March 15, 2025</p>
                            <p className="text-xs text-gray-500 mt-1">Has access to payment processing and transaction data</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => saveSettings('security')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
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

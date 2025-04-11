
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Lock,
  Building,
  Palette,
  Database,
  BarChart3,
  Clock,
  Save,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock company data
const COMPANY_DATA = {
  name: "Shree Unnati Traders",
  address: "123 Market Street, Ahmedabad",
  phone: "+91 9876543210",
  email: "info@unnati.com",
  website: "www.unnati.com",
  gstin: "24ABCDE1234F1Z5",
  pan: "ABCDE1234F",
  establishedYear: "2005",
};

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Profile form
  const profileForm = useForm({
    defaultValues: {
      name: "Rajesh Kumar",
      email: "rajesh@unnati.com",
      phone: "+91 9876543210",
      jobTitle: "Administrator",
    },
  });

  // Company form
  const companyForm = useForm({
    defaultValues: {
      ...COMPANY_DATA
    },
  });

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle saving profile
  const onSubmitProfile = (data: any) => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 1000);
  };

  // Handle saving company details
  const onSubmitCompany = (data: any) => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Company Updated",
        description: "Company information has been updated successfully.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Settings</h1>
            <p className="text-gray-500">Manage application preferences and configurations</p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User size={16} />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="company" className="flex items-center gap-2">
                <Building size={16} />
                <span>Company</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette size={16} />
                <span>Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell size={16} />
                <span>Notifications</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your personal information and account settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...profileForm}>
                    <form onSubmit={profileForm.handleSubmit(onSubmitProfile)} className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-6">
                          <FormField
                            control={profileForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={profileForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                          <FormField
                            control={profileForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={profileForm.control}
                            name="jobTitle"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Job Title</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Security Settings</h3>
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Change Password</h4>
                              <p className="text-sm text-gray-500">Update your account password</p>
                            </div>
                            <Button variant="outline">
                              <Lock size={16} className="mr-2" />
                              Change Password
                            </Button>
                          </div>

                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Two-Factor Authentication</h4>
                              <p className="text-sm text-gray-500">Add an extra layer of security</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="mt-6" disabled={isSaving}>
                        {isSaving ? (
                          <>
                            <Loader2 size={16} className="mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save size={16} className="mr-2" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="company" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Details</CardTitle>
                  <CardDescription>
                    Manage your company information and business details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...companyForm}>
                    <form onSubmit={companyForm.handleSubmit(onSubmitCompany)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={companyForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={companyForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Email</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={companyForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Phone</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={companyForm.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={companyForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={companyForm.control}
                          name="gstin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>GSTIN</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={companyForm.control}
                          name="pan"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>PAN</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Separator />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Business Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormItem>
                            <FormLabel>Financial Year Start</FormLabel>
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
                          </FormItem>
                          <FormItem>
                            <FormLabel>Default GST Rate</FormLabel>
                            <Select defaultValue="18">
                              <SelectTrigger>
                                <SelectValue placeholder="Select rate" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="5">5%</SelectItem>
                                <SelectItem value="12">12%</SelectItem>
                                <SelectItem value="18">18%</SelectItem>
                                <SelectItem value="28">28%</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        </div>
                      </div>

                      <Button type="submit" className="mt-6" disabled={isSaving}>
                        {isSaving ? (
                          <>
                            <Loader2 size={16} className="mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save size={16} className="mr-2" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>
                    Customize the look and feel of your dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border rounded-md p-4 cursor-pointer bg-white flex flex-col items-center space-y-2 ring-2 ring-unnati-primary">
                        <div className="h-20 w-full bg-white border rounded-sm flex flex-col overflow-hidden">
                          <div className="h-3 bg-gray-800 w-full"></div>
                          <div className="flex flex-1">
                            <div className="w-12 bg-gray-100"></div>
                            <div className="flex-1 p-2">
                              <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                              <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">Light</span>
                      </div>
                      <div className="border rounded-md p-4 cursor-pointer flex flex-col items-center space-y-2">
                        <div className="h-20 w-full bg-gray-900 border rounded-sm flex flex-col overflow-hidden">
                          <div className="h-3 bg-black w-full"></div>
                          <div className="flex flex-1">
                            <div className="w-12 bg-gray-800"></div>
                            <div className="flex-1 p-2">
                              <div className="h-2 w-3/4 bg-gray-700 rounded mb-2"></div>
                              <div className="h-2 w-1/2 bg-gray-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">Dark</span>
                      </div>
                      <div className="border rounded-md p-4 cursor-pointer flex flex-col items-center space-y-2">
                        <div className="h-20 w-full bg-white border rounded-sm flex flex-col overflow-hidden">
                          <div className="h-3 bg-unnati-primary w-full"></div>
                          <div className="flex flex-1">
                            <div className="w-12 bg-unnati-dark"></div>
                            <div className="flex-1 p-2">
                              <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                              <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">Custom</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Dashboard Layout</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Compact Sidebar</h4>
                          <p className="text-sm text-gray-500">Use a more compact sidebar layout</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Show Recent Activity</h4>
                          <p className="text-sm text-gray-500">Display recent activity on the dashboard</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Show Quick Actions</h4>
                          <p className="text-sm text-gray-500">Display quick action buttons</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">
                    <Save size={16} className="mr-2" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Manage your notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Order Updates</h4>
                          <p className="text-sm text-gray-500">Receive updates about order status changes</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Inventory Alerts</h4>
                          <p className="text-sm text-gray-500">Get notified about low stock levels</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Payment Confirmation</h4>
                          <p className="text-sm text-gray-500">Receive payment confirmations</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Marketing Updates</h4>
                          <p className="text-sm text-gray-500">Receive promotional and marketing emails</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Browser Notifications</h4>
                          <p className="text-sm text-gray-500">Show browser notifications for important updates</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">SMS Alerts</h4>
                          <p className="text-sm text-gray-500">Receive urgent notifications via SMS</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">
                    <Save size={16} className="mr-2" />
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

export default Settings;

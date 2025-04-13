
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  CreditCard,
  BarChart3,
  FileText,
  Wallet,
  CircleDollarSign,
  Download,
  Calendar,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import ChartCard from "@/components/dashboard/ChartCard";

const AccountingDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data for charts
  const revenueExpenseData = [
    { name: "Jan", revenue: 425000, expense: 380000 },
    { name: "Feb", revenue: 465000, expense: 390000 },
    { name: "Mar", revenue: 480000, expense: 410000 },
    { name: "Apr", revenue: 435600, expense: 385000 },
    { name: "May", revenue: 450000, expense: 395000 },
    { name: "Jun", revenue: 480000, expense: 425000 },
  ];

  const profitMarginData = [
    { name: "Jan", value: 10.5 },
    { name: "Feb", value: 16.1 },
    { name: "Mar", value: 14.6 },
    { name: "Apr", value: 11.6 },
    { name: "May", value: 12.2 },
    { name: "Jun", value: 11.5 },
  ];

  // Sample transactions data
  const recentTransactions = [
    { id: "TRX-001", date: "12 Apr, 2025", description: "Supplier Payment - Havells", type: "Expense", amount: "₹45,600", status: "Completed" },
    { id: "TRX-002", date: "10 Apr, 2025", description: "Store Sales - Retail", type: "Income", amount: "₹28,450", status: "Completed" },
    { id: "TRX-003", date: "08 Apr, 2025", description: "Utility Bills", type: "Expense", amount: "₹8,200", status: "Completed" },
    { id: "TRX-004", date: "05 Apr, 2025", description: "Factory Production", type: "Income", amount: "₹1,25,000", status: "Pending" },
    { id: "TRX-005", date: "02 Apr, 2025", description: "Employee Salaries", type: "Expense", amount: "₹85,000", status: "Completed" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Accounting Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Monitor financial health and transactions</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Monthly Revenue"
              value="₹4,80,000"
              icon={<TrendingUp size={20} className="text-green-500" />}
              change={{ value: "6.5%", positive: true }}
              className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Monthly Expenses"
              value="₹4,25,000"
              icon={<TrendingDown size={20} className="text-red-500" />}
              change={{ value: "3.2%", positive: false }}
              className="border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Net Profit"
              value="₹55,000"
              icon={<DollarSign size={20} className="text-blue-500" />}
              change={{ value: "12.8%", positive: true }}
              className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
            <StatCard
              title="Profit Margin"
              value="11.5%"
              icon={<BarChart3 size={20} className="text-purple-500" />}
              change={{ value: "0.7%", positive: false }}
              className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
          
          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Button 
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <FileText size={20} />
              <span>Financial Reports</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <CircleDollarSign size={20} />
              <span>Record Transaction</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Wallet size={20} />
              <span>Manage Accounts</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white dark:bg-gray-800 h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Download size={20} />
              <span>Export Data</span>
            </Button>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  {/* This would normally be a multi-line chart component */}
                  <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                    <p>Revenue vs Expenses Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <ChartCard title="Profit Margin Trend" type="line" data={profitMarginData} />
          </div>
          
          <Tabs defaultValue="transactions" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="tax">Tax Information</TabsTrigger>
            </TabsList>
            
            <TabsContent value="transactions">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <CardTitle>Recent Transactions</CardTitle>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input placeholder="Search transactions..." className="pl-10" />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="h-10 w-10">
                          <Filter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-10 w-10">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentTransactions.map((transaction) => (
                        <TableRow key={transaction.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              transaction.type === 'Income' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {transaction.type}
                            </span>
                          </TableCell>
                          <TableCell className={transaction.type === 'Income' ? 'text-green-600 dark:text-green-400 font-medium' : 'text-red-600 dark:text-red-400 font-medium'}>
                            {transaction.amount}
                          </TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              transaction.status === 'Completed' 
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            }`}>
                              {transaction.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="accounts">
              <Card>
                <CardHeader>
                  <CardTitle>Account Balances</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                          <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Main Business Account</p>
                          <p className="text-lg font-semibold">₹3,24,560</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full">
                          <Wallet className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Savings Account</p>
                          <p className="text-lg font-semibold">₹1,85,200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tax">
              <Card>
                <CardHeader>
                  <CardTitle>Tax Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">GST Information</h3>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">GSTIN</p>
                          <p className="font-medium">27AABCU9603R1ZX</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Next Filing Due</p>
                          <p className="font-medium">20 Apr, 2025</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300">TDS Information</h3>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">PAN</p>
                          <p className="font-medium">AABCU9603R</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">TDS Deducted YTD</p>
                          <p className="font-medium">₹18,450</p>
                        </div>
                      </div>
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

export default AccountingDashboard;

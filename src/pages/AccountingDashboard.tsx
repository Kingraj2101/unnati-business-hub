
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import { 
  ArrowUpRight, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  ArrowDownRight,
  FileText,
  Wallet,
  ArrowUp,
  ArrowDown,
  Plus,
  Filter,
  Search,
  Calendar,
  Download,
  FileBarChart,
  Banknote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ChartCard from "@/components/dashboard/ChartCard";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const AccountingDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactionType, setTransactionType] = useState<"income" | "expense">("income");
  const [searchQuery, setSearchQuery] = useState("");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { toast } = useToast();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data for charts
  const incomeExpenseData = [
    { name: "Jan", income: 95000, expense: 62000 },
    { name: "Feb", income: 85000, expense: 58000 },
    { name: "Mar", income: 110000, expense: 71000 },
    { name: "Apr", income: 98000, expense: 63000 },
    { name: "May", income: 115000, expense: 68000 },
    { name: "Jun", income: 105000, expense: 64000 },
  ];

  // Sample transactions
  const recentTransactions = [
    { id: "TRX25001", date: "08 Apr, 2025", type: "Income", category: "Sales", amount: "₹28,500", description: "Retail Sales" },
    { id: "TRX25002", date: "07 Apr, 2025", type: "Expense", category: "Raw Materials", amount: "₹15,800", description: "Copper Wire" },
    { id: "TRX25003", date: "07 Apr, 2025", type: "Income", category: "BNPL Payment", amount: "₹12,400", description: "Kumar Electricals" },
    { id: "TRX25004", date: "06 Apr, 2025", type: "Expense", category: "Utilities", amount: "₹5,200", description: "Electricity Bill" },
    { id: "TRX25005", date: "05 Apr, 2025", type: "Expense", category: "Salary", amount: "₹25,000", description: "Staff Payments" },
  ];

  // Income categories
  const incomeCategories = [
    "Sales", "Services", "BNPL Payments", "Interest", "Rentals", "Other"
  ];

  // Expense categories
  const expenseCategories = [
    "Raw Materials", "Utilities", "Salary", "Rent", "Transportation", 
    "Office Supplies", "Maintenance", "Taxes", "Marketing", "Other"
  ];

  // Payment methods
  const paymentMethods = [
    "Cash", "Bank Transfer", "UPI", "Cheque", "Credit Card"
  ];

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would add the transaction to the database
    toast({
      title: "Transaction Recorded",
      description: `${transactionType === "income" ? "Income" : "Expense"} has been successfully recorded.`,
    });
    setShowTransactionForm(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // In a real app, this would filter the transactions
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Accounting Dashboard</h1>
            <p className="text-gray-500">Financial Overview and Bookkeeping</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Monthly Revenue"
              value="₹4,35,600"
              icon={<DollarSign size={20} />}
              change={{ value: "12.5%", positive: true }}
            />
            <StatCard
              title="Monthly Expenses"
              value="₹2,85,450"
              icon={<ArrowDownRight size={20} />}
              change={{ value: "5.2%", positive: false }}
            />
            <StatCard
              title="Profit Margin"
              value="34.5%"
              icon={<PieChart size={20} />}
              change={{ value: "2.3%", positive: true }}
            />
            <StatCard
              title="Outstanding Bills"
              value="₹85,450"
              icon={<FileText size={20} />}
              change={{ value: "7.8%", positive: false }}
            />
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
              onClick={() => {
                setTransactionType("income");
                setShowTransactionForm(true);
              }}
            >
              <ArrowUp size={20} />
              <span>Record Income</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
              onClick={() => {
                setTransactionType("expense");
                setShowTransactionForm(true);
              }}
            >
              <ArrowDown size={20} />
              <span>Record Expense</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <BarChart3 size={20} />
              <span>Generate Report</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Wallet size={20} />
              <span>Manage Accounts</span>
            </Button>
          </div>
          
          {/* Transactions Management */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
                  <div className="relative w-full md:w-auto md:flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search transactions..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-3.5 w-3.5" />
                      <span>Filter</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Date Range</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-3.5 w-3.5" />
                      <span>Export</span>
                    </Button>
                    <Button 
                      className="bg-unnati-primary"
                      size="sm"
                      onClick={() => {
                        setTransactionType("income");
                        setShowTransactionForm(true);
                      }}
                    >
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      <span>Add Transaction</span>
                    </Button>
                  </div>
                </div>
                
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All Transactions</TabsTrigger>
                    <TabsTrigger value="income">Income</TabsTrigger>
                    <TabsTrigger value="expense">Expenses</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentTransactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="font-medium">{transaction.id}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                transaction.type === 'Income' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {transaction.type}
                              </span>
                            </TableCell>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell className={`font-medium ${
                              transaction.type === 'Income' 
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}>
                              {transaction.amount}
                            </TableCell>
                            <TableCell>{transaction.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  
                  <TabsContent value="income">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentTransactions
                          .filter(t => t.type === 'Income')
                          .map((transaction) => (
                            <TableRow key={transaction.id}>
                              <TableCell className="font-medium">{transaction.id}</TableCell>
                              <TableCell>{transaction.date}</TableCell>
                              <TableCell>{transaction.category}</TableCell>
                              <TableCell className="font-medium text-green-600">
                                {transaction.amount}
                              </TableCell>
                              <TableCell>{transaction.description}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  
                  <TabsContent value="expense">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentTransactions
                          .filter(t => t.type === 'Expense')
                          .map((transaction) => (
                            <TableRow key={transaction.id}>
                              <TableCell className="font-medium">{transaction.id}</TableCell>
                              <TableCell>{transaction.date}</TableCell>
                              <TableCell>{transaction.category}</TableCell>
                              <TableCell className="font-medium text-red-600">
                                {transaction.amount}
                              </TableCell>
                              <TableCell>{transaction.description}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  
                  <TabsContent value="pending">
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <div className="rounded-full bg-blue-50 p-3 mb-4">
                        <FileText className="h-6 w-6 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No Pending Transactions</h3>
                      <p className="text-gray-500 mb-4">All transactions have been reconciled.</p>
                      <Button size="sm" variant="outline">Refresh</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Income vs Expenses (Last 6 months)" type="bar" data={incomeExpenseData} />
            <Card>
              <CardHeader>
                <CardTitle>Balance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-green-800">Factory Account</p>
                        <p className="text-2xl font-bold text-green-900 mt-1">₹2,45,800</p>
                      </div>
                      <div className="bg-green-100 p-2 rounded-full">
                        <DollarSign className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-blue-800">Shop Account</p>
                        <p className="text-2xl font-bold text-blue-900 mt-1">₹1,85,350</p>
                      </div>
                      <div className="bg-blue-100 p-2 rounded-full">
                        <DollarSign className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-purple-800">Combined Balance</p>
                        <p className="text-2xl font-bold text-purple-900 mt-1">₹4,31,150</p>
                      </div>
                      <div className="bg-purple-100 p-2 rounded-full">
                        <DollarSign className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Financial Reports Section */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <FileBarChart size={20} />
                  <span>Income Statement</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <FileBarChart size={20} />
                  <span>Balance Sheet</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <FileBarChart size={20} />
                  <span>Cash Flow</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <FileBarChart size={20} />
                  <span>Tax Summary</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <FileBarChart size={20} />
                  <span>Expense Analysis</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <FileBarChart size={20} />
                  <span>Profit & Loss</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      
      {/* Transaction Form Dialog */}
      <Dialog open={showTransactionForm} onOpenChange={setShowTransactionForm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {transactionType === "income" ? "Record Income" : "Record Expense"}
            </DialogTitle>
            <DialogDescription>
              Enter the details of the {transactionType} transaction
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleAddTransaction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transaction-date" className="text-right">
                  Date
                </Label>
                <Input
                  id="transaction-date"
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transaction-category" className="text-right">
                  Category
                </Label>
                <Select>
                  <SelectTrigger id="transaction-category" className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {transactionType === "income" 
                      ? incomeCategories.map(category => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))
                      : expenseCategories.map(category => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))
                    }
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transaction-amount" className="text-right">
                  Amount (₹)
                </Label>
                <Input
                  id="transaction-amount"
                  type="number"
                  placeholder="0.00"
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transaction-method" className="text-right">
                  Method
                </Label>
                <Select>
                  <SelectTrigger id="transaction-method" className="col-span-3">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentMethods.map(method => (
                      <SelectItem key={method} value={method.toLowerCase()}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transaction-description" className="text-right">
                  Description
                </Label>
                <Input
                  id="transaction-description"
                  placeholder="Enter description"
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transaction-reference" className="text-right">
                  Reference
                </Label>
                <Input
                  id="transaction-reference"
                  placeholder="Invoice #, Bill #, etc."
                  className="col-span-3"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setShowTransactionForm(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-unnati-primary">
                <Banknote className="mr-2 h-4 w-4" />
                {transactionType === "income" ? "Record Income" : "Record Expense"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccountingDashboard;

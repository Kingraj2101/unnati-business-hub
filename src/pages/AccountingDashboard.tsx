
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
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
            >
              <ArrowUp size={20} />
              <span>Record Income</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
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
          
          {/* Recent Transactions */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AccountingDashboard;

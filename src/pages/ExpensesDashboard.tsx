
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { 
  CircleDollarSign, 
  CalendarClock, 
  ArrowDownRight, 
  ArrowUpRight,
  Receipt,
  FileText,
  PlusCircle,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const ExpensesDashboard = () => {
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

  // Sample expense data
  const recentExpenses = [
    { id: "EXP-2025-001", date: "08 Apr, 2025", category: "Raw Materials", amount: "₹15,800", vendor: "Copper Supplies Ltd.", status: "Approved" },
    { id: "EXP-2025-002", date: "07 Apr, 2025", category: "Utilities", amount: "₹5,200", vendor: "ElectriCity Corp.", status: "Pending" },
    { id: "EXP-2025-003", date: "06 Apr, 2025", category: "Salaries", amount: "₹42,500", vendor: "Staff Payments", status: "Approved" },
    { id: "EXP-2025-004", date: "05 Apr, 2025", category: "Transport", amount: "₹8,750", vendor: "FastTrack Logistics", status: "Approved" },
    { id: "EXP-2025-005", date: "04 Apr, 2025", category: "Office Supplies", amount: "₹3,200", vendor: "Stationery World", status: "Rejected" },
  ];

  // Sample data for charts
  const expensesByCategoryData = [
    { name: "Raw Materials", value: 38500 },
    { name: "Utilities", value: 12800 },
    { name: "Salaries", value: 42500 },
    { name: "Transport", value: 15300 },
    { name: "Office", value: 7200 },
    { name: "Others", value: 5400 },
  ];

  const monthlyExpensesData = [
    { name: "Jan", value: 72500 },
    { name: "Feb", value: 68000 },
    { name: "Mar", value: 71000 },
    { name: "Apr", value: 83000 },
    { name: "May", value: 78000 },
    { name: "Jun", value: 74000 },
  ];

  const handleAddExpense = () => {
    toast({
      title: "Add Expense",
      description: "Expense form opened",
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-unnati-dark">Expenses Dashboard</h1>
            <p className="text-gray-500">Track and manage all business expenses</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Monthly Expenses"
              value="₹1,21,700"
              icon={<CircleDollarSign size={20} />}
              change={{ value: "8.5%", positive: false }}
            />
            <StatCard
              title="YTD Expenses"
              value="₹8,45,200"
              icon={<ArrowDownRight size={20} />}
              change={{ value: "12.2%", positive: false }}
            />
            <StatCard
              title="Pending Approvals"
              value="8"
              icon={<CalendarClock size={20} />}
            />
            <StatCard
              title="Monthly Savings"
              value="₹12,500"
              icon={<ArrowUpRight size={20} />}
              change={{ value: "3.8%", positive: true }}
            />
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              onClick={handleAddExpense}
              className="bg-unnati-primary text-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <PlusCircle size={20} />
              <span>Add New Expense</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Receipt size={20} />
              <span>Scan Receipt</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <FileText size={20} />
              <span>Generate Report</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <BarChart3 size={20} />
              <span>View Analysis</span>
            </Button>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Expenses by Category" type="pie" data={expensesByCategoryData} />
            <ChartCard title="Monthly Expenses (Last 6 months)" type="bar" data={monthlyExpensesData} />
          </div>
          
          {/* Recent Expenses */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Recent Expenses</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentExpenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.id}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell className="font-medium text-red-600">{expense.amount}</TableCell>
                      <TableCell>{expense.vendor}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          expense.status === 'Approved' 
                            ? 'bg-green-100 text-green-800'
                            : expense.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {expense.status}
                        </span>
                      </TableCell>
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

export default ExpensesDashboard;

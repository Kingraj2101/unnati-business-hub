
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { 
  FileText, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ArrowRight, 
  Download, 
  Eye, 
  Edit, 
  Printer 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for invoices
const invoices = [
  {
    id: "INV-0001",
    customer: "Rajesh Electronics",
    amount: "₹24,500",
    status: "Paid",
    date: "11/04/2025",
  },
  {
    id: "INV-0002",
    customer: "Sharma Electrical",
    amount: "₹36,750",
    status: "Pending",
    date: "10/04/2025",
  },
  {
    id: "INV-0003",
    customer: "Gupta Traders",
    amount: "₹18,300",
    status: "Overdue",
    date: "05/04/2025",
  },
  {
    id: "INV-0004",
    customer: "Patel Wire Co.",
    amount: "₹42,800",
    status: "Paid",
    date: "01/04/2025",
  },
  {
    id: "INV-0005",
    customer: "Singh Distributors",
    amount: "₹15,600",
    status: "Pending",
    date: "30/03/2025",
  },
];

// Mock data for payments
const payments = [
  {
    id: "PAY-0001",
    invoice: "INV-0001",
    customer: "Rajesh Electronics",
    amount: "₹24,500",
    method: "Bank Transfer",
    date: "11/04/2025",
  },
  {
    id: "PAY-0002",
    invoice: "INV-0004",
    customer: "Patel Wire Co.",
    amount: "₹42,800",
    method: "Cheque",
    date: "01/04/2025",
  },
  {
    id: "PAY-0003",
    invoice: "INV-0006",
    customer: "Kumar Electric",
    amount: "₹33,200",
    method: "UPI",
    date: "28/03/2025",
  },
];

const BillingWorkflow = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <FileText className="mr-2 h-5 w-5 text-unnati-primary" />
          Billing & Invoice Management
        </CardTitle>
        <CardDescription>
          Create, track, and manage invoices and payments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="invoices">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="invoices">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  All
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                  Paid
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-amber-500" />
                  Pending
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <AlertCircle className="mr-1 h-4 w-4 text-red-500" />
                  Overdue
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                Create Invoice
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.customer}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            invoice.status === "Paid"
                              ? "bg-green-100 text-green-800"
                              : invoice.status === "Pending"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Printer className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-center mt-4">
              <Button variant="outline" className="text-sm">
                View All Invoices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="payments">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  All Payments
                </Button>
                <Button variant="outline" size="sm">
                  This Month
                </Button>
                <Button variant="outline" size="sm">
                  Last Month
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                Record Payment
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.invoice}</TableCell>
                      <TableCell>{payment.customer}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.method}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-center mt-4">
              <Button variant="outline" className="text-sm">
                View Payment History
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Revenue Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Payment Methods Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-sm">Outstanding Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Invoice #</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Days Overdue</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>INV-0002</TableCell>
                          <TableCell>Sharma Electrical</TableCell>
                          <TableCell>₹36,750</TableCell>
                          <TableCell>25/04/2025</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>INV-0003</TableCell>
                          <TableCell>Gupta Traders</TableCell>
                          <TableCell>₹18,300</TableCell>
                          <TableCell>20/03/2025</TableCell>
                          <TableCell className="text-red-600">15 days</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>INV-0005</TableCell>
                          <TableCell>Singh Distributors</TableCell>
                          <TableCell>₹15,600</TableCell>
                          <TableCell>15/04/2025</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BillingWorkflow;

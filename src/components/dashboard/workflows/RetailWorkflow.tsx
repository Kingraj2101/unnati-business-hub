
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { 
  Store, 
  ShoppingCart, 
  Users, 
  Package, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  ArrowUpDown,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Edit,
  Eye,
  FileText,
  Download,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for sales
const salesData = [
  {
    id: "SL-0001",
    date: "11/04/2025",
    customer: "Priya Sharma",
    items: 3,
    amount: "₹8,750",
    payment: "Cash",
    status: "Completed",
  },
  {
    id: "SL-0002",
    date: "11/04/2025",
    customer: "Vikram Mehta",
    items: 5,
    amount: "₹14,320",
    payment: "UPI",
    status: "Completed",
  },
  {
    id: "SL-0003",
    date: "10/04/2025",
    customer: "Neha Patel",
    items: 2,
    amount: "₹4,600",
    payment: "Card",
    status: "Completed",
  },
  {
    id: "SL-0004",
    date: "10/04/2025",
    customer: "Rohit Desai",
    items: 8,
    amount: "₹21,350",
    payment: "Credit (30 days)",
    status: "Pending Payment",
  },
  {
    id: "SL-0005",
    date: "09/04/2025",
    customer: "Ananya Singh",
    items: 4,
    amount: "₹9,840",
    payment: "Cheque",
    status: "Completed",
  },
];

// Mock data for inventory
const inventoryItems = [
  {
    id: "STR-001",
    name: "Copper Wire (2.5mm)",
    category: "Wires",
    stock: 680,
    price: "₹85/m",
    location: "Shelf A1",
  },
  {
    id: "STR-002",
    name: "MCB Switch (32A)",
    category: "Switches",
    stock: 45,
    price: "₹320/pc",
    location: "Shelf B3",
  },
  {
    id: "STR-003",
    name: "LED Bulb (9W)",
    category: "Lighting",
    stock: 120,
    price: "₹110/pc",
    location: "Shelf C2",
  },
  {
    id: "STR-004",
    name: "PVC Conduit (20mm)",
    category: "Conduits",
    stock: 95,
    price: "₹45/pc",
    location: "Shelf A4",
  },
  {
    id: "STR-005",
    name: "Ceiling Fan (48 inch)",
    category: "Fans",
    stock: 18,
    price: "₹1,450/pc",
    location: "Display Area",
  },
];

// Mock data for customers
const customers = [
  {
    id: "CUST-001",
    name: "Priya Sharma",
    type: "Retail",
    contact: "9876543210",
    purchases: 8,
    totalSpent: "₹23,450",
    lastVisit: "11/04/2025",
  },
  {
    id: "CUST-002",
    name: "Vikram Mehta",
    type: "Wholesale",
    contact: "9012345678",
    purchases: 15,
    totalSpent: "₹105,780",
    lastVisit: "11/04/2025",
  },
  {
    id: "CUST-003",
    name: "Neha Patel",
    type: "Retail",
    contact: "8765432109",
    purchases: 5,
    totalSpent: "₹12,800",
    lastVisit: "10/04/2025",
  },
  {
    id: "CUST-004",
    name: "Rohit Desai",
    type: "Contractor",
    contact: "7890123456",
    purchases: 22,
    totalSpent: "₹182,650",
    lastVisit: "10/04/2025",
  },
  {
    id: "CUST-005",
    name: "Ananya Singh",
    type: "Retail",
    contact: "9087654321",
    purchases: 3,
    totalSpent: "₹9,840",
    lastVisit: "09/04/2025",
  },
];

const RetailWorkflow = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Store className="mr-2 h-5 w-5 text-unnati-primary" />
          Retail Store Management
        </CardTitle>
        <CardDescription>
          Manage sales, inventory, and customers in your retail store
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sales">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sales">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search sales..."
                    className="w-full sm:w-64 pl-8"
                  />
                </div>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                <ShoppingCart className="mr-2 h-4 w-4" />
                New Sale
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sale ID</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Date
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesData.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.id}</TableCell>
                      <TableCell>{sale.date}</TableCell>
                      <TableCell>{sale.customer}</TableCell>
                      <TableCell>{sale.items}</TableCell>
                      <TableCell>{sale.amount}</TableCell>
                      <TableCell>{sale.payment}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            sale.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {sale.status === "Completed" ? (
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                          ) : (
                            <Clock className="mr-1 h-3 w-3" />
                          )}
                          {sale.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm flex items-center">
                    <CreditCard className="mr-2 h-4 w-4 text-unnati-primary" />
                    Today's Sales
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="text-2xl font-bold">₹23,070</div>
                  <p className="text-xs text-gray-500">8 transactions</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm flex items-center">
                    <Package className="mr-2 h-4 w-4 text-unnati-primary" />
                    Items Sold (Today)
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="text-2xl font-bold">25</div>
                  <p className="text-xs text-gray-500">Across 8 categories</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm flex items-center">
                    <Users className="mr-2 h-4 w-4 text-unnati-primary" />
                    New Customers
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-gray-500">Today</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">Sales Trend (Last 7 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                  <p className="text-gray-500">Sales Chart Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inventory">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full sm:w-64 pl-8"
                  />
                </div>
                <Button variant="outline" size="sm" className="flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
                  Low Stock
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Package className="mr-2 h-4 w-4" />
                  Request Stock
                </Button>
                <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className={item.stock < 30 ? "text-red-600 font-medium" : ""}>
                        {item.stock}
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Update Stock
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Category Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Category Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Top Selling Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Copper Wire (2.5mm)</p>
                        <p className="text-sm text-gray-500">520 units sold this month</p>
                      </div>
                      <BarChart3 className="h-5 w-5 text-unnati-primary" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">LED Bulb (9W)</p>
                        <p className="text-sm text-gray-500">320 units sold this month</p>
                      </div>
                      <BarChart3 className="h-5 w-5 text-unnati-primary" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">MCB Switch (32A)</p>
                        <p className="text-sm text-gray-500">280 units sold this month</p>
                      </div>
                      <BarChart3 className="h-5 w-5 text-unnati-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="customers">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search customers..."
                    className="w-full sm:w-64 pl-8"
                  />
                </div>
                <Button variant="outline" size="sm">
                  All Customers
                </Button>
                <Button variant="outline" size="sm">
                  Retail
                </Button>
                <Button variant="outline" size="sm">
                  Wholesale
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                <Users className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Purchases</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.id}</TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            customer.type === "Wholesale"
                              ? "bg-blue-100 text-blue-800"
                              : customer.type === "Contractor"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {customer.type}
                        </span>
                      </TableCell>
                      <TableCell>{customer.contact}</TableCell>
                      <TableCell>{customer.purchases}</TableCell>
                      <TableCell>{customer.totalSpent}</TableCell>
                      <TableCell>{customer.lastVisit}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Customer Segments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Customer Segments Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Customer Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Customer Activity Chart Placeholder</p>
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

export default RetailWorkflow;

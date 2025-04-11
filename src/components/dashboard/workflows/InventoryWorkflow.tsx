
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Package, ArrowUp, ArrowDown, AlertTriangle, Plus, Search, Filter, ArrowUpDown, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for inventory items
const inventoryItems = [
  {
    id: "PROD-0001",
    name: "Copper Wire (2.5mm)",
    category: "Wires",
    stock: 1560,
    minStock: 500,
    unit: "meters",
    location: "Warehouse A",
    lastUpdated: "10/04/2025",
  },
  {
    id: "PROD-0002",
    name: "Aluminum Cable (4mm)",
    category: "Cables",
    stock: 780,
    minStock: 300,
    unit: "meters",
    location: "Warehouse B",
    lastUpdated: "08/04/2025",
  },
  {
    id: "PROD-0003",
    name: "PVC Conduit (20mm)",
    category: "Conduits",
    stock: 320,
    minStock: 100,
    unit: "pieces",
    location: "Warehouse A",
    lastUpdated: "05/04/2025",
  },
  {
    id: "PROD-0004",
    name: "MCB Switch (32A)",
    category: "Switches",
    stock: 145,
    minStock: 50,
    unit: "pieces",
    location: "Warehouse C",
    lastUpdated: "01/04/2025",
  },
  {
    id: "PROD-0005",
    name: "Distribution Box (8 Way)",
    category: "Electrical Boxes",
    stock: 78,
    minStock: 30,
    unit: "pieces",
    location: "Warehouse B",
    lastUpdated: "29/03/2025",
  },
];

// Mock data for stock activity
const stockActivity = [
  {
    id: "TRX-0001",
    product: "Copper Wire (2.5mm)",
    type: "Stock In",
    quantity: 500,
    date: "10/04/2025",
    source: "Supplier Delivery",
    reference: "PO-0023",
  },
  {
    id: "TRX-0002",
    product: "MCB Switch (32A)",
    type: "Stock Out",
    quantity: 25,
    date: "09/04/2025",
    source: "Retail Sale",
    reference: "INV-0047",
  },
  {
    id: "TRX-0003",
    product: "Aluminum Cable (4mm)",
    type: "Stock In",
    quantity: 200,
    date: "08/04/2025",
    source: "Factory Production",
    reference: "PROD-0018",
  },
  {
    id: "TRX-0004",
    product: "PVC Conduit (20mm)",
    type: "Stock Out",
    quantity: 50,
    date: "07/04/2025",
    source: "Wholesale Order",
    reference: "ORD-0035",
  },
  {
    id: "TRX-0005",
    product: "Distribution Box (8 Way)",
    type: "Stock In",
    quantity: 30,
    date: "05/04/2025",
    source: "Supplier Delivery",
    reference: "PO-0021",
  },
];

// Mock data for low stock alerts
const lowStockItems = [
  {
    id: "PROD-0006",
    name: "LED Bulb (9W)",
    category: "Lighting",
    stock: 25,
    minStock: 50,
    unit: "pieces",
    location: "Warehouse C",
  },
  {
    id: "PROD-0007",
    name: "ELCB (40A)",
    category: "Circuit Breakers",
    stock: 12,
    minStock: 20,
    unit: "pieces",
    location: "Warehouse A",
  },
  {
    id: "PROD-0008",
    name: "Flexible Cable (1.5mm)",
    category: "Cables",
    stock: 120,
    minStock: 200,
    unit: "meters",
    location: "Warehouse B",
  },
];

const InventoryWorkflow = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Package className="mr-2 h-5 w-5 text-unnati-primary" />
          Inventory Management
        </CardTitle>
        <CardDescription>
          Track, monitor and manage your product inventory
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="products">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="stock-movement">Stock Movement</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
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
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product ID</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Name
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Stock
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className={item.stock < item.minStock ? "text-red-600" : ""}>
                        {item.stock}
                      </TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                Showing 5 of 24 products
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stock-movement">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <ArrowUp className="mr-2 h-4 w-4 text-green-600" />
                  Stock In
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <ArrowDown className="mr-2 h-4 w-4 text-red-600" />
                  Stock Out
                </Button>
                <Button variant="outline" size="sm">
                  All Movements
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Record Movement
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Reference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockActivity.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="font-medium">{activity.id}</TableCell>
                      <TableCell>{activity.product}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            activity.type === "Stock In"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {activity.type === "Stock In" ? (
                            <ArrowUp className="mr-1 h-3 w-3" />
                          ) : (
                            <ArrowDown className="mr-1 h-3 w-3" />
                          )}
                          {activity.type}
                        </span>
                      </TableCell>
                      <TableCell>{activity.quantity}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>{activity.source}</TableCell>
                      <TableCell>{activity.reference}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                Showing 5 of 112 transactions
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="alerts">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 flex items-start">
              <div className="mr-3 text-amber-500">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-amber-800">Low Stock Alert</h3>
                <p className="text-amber-700 text-sm">
                  3 products are below minimum stock levels. Please review and reorder as needed.
                </p>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Min Stock</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lowStockItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-red-600 font-medium">{item.stock}</TableCell>
                      <TableCell>{item.minStock}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Order Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Stock Level Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Stock Level Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Upcoming Deliveries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">PO-0027: Copper Wire</p>
                        <p className="text-sm text-gray-500">500 meters</p>
                      </div>
                      <p className="text-sm">Expected: 15/04/2025</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">PO-0028: LED Bulbs</p>
                        <p className="text-sm text-gray-500">100 pieces</p>
                      </div>
                      <p className="text-sm">Expected: 18/04/2025</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">PO-0029: Circuit Breakers</p>
                        <p className="text-sm text-gray-500">25 pieces</p>
                      </div>
                      <p className="text-sm">Expected: 20/04/2025</p>
                    </div>
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

export default InventoryWorkflow;


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { 
  Factory, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Play, 
  Pause, 
  Plus, 
  Package, 
  Users, 
  BarChart3,
  FileText,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  Box,
  Clipboard,
  Edit,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Mock data for production orders
const productionOrders = [
  {
    id: "PO-1001",
    product: "Copper Wire (2.5mm)",
    quantity: "5,000",
    unit: "meters",
    status: "In Progress",
    completion: 65,
    startDate: "08/04/2025",
    endDate: "14/04/2025",
  },
  {
    id: "PO-1002",
    product: "Aluminum Cable (4mm)",
    quantity: "3,000",
    unit: "meters",
    status: "Pending",
    completion: 0,
    startDate: "15/04/2025",
    endDate: "20/04/2025",
  },
  {
    id: "PO-1003",
    product: "PVC Conduit (20mm)",
    quantity: "2,000",
    unit: "pieces",
    status: "Completed",
    completion: 100,
    startDate: "01/04/2025",
    endDate: "06/04/2025",
  },
  {
    id: "PO-1004",
    product: "Flexible Wire (1.5mm)",
    quantity: "8,000",
    unit: "meters",
    status: "In Progress",
    completion: 30,
    startDate: "10/04/2025",
    endDate: "18/04/2025",
  },
  {
    id: "PO-1005",
    product: "Speaker Wire",
    quantity: "4,000",
    unit: "meters",
    status: "Pending",
    completion: 0,
    startDate: "20/04/2025",
    endDate: "28/04/2025",
  },
];

// Mock data for raw materials
const rawMaterials = [
  {
    id: "RM-0001",
    name: "Copper (99.9%)",
    stock: "2,500",
    unit: "kg",
    reorderLevel: "500",
    location: "Storage A",
  },
  {
    id: "RM-0002",
    name: "Aluminum (99.5%)",
    stock: "1,800",
    unit: "kg",
    reorderLevel: "400",
    location: "Storage B",
  },
  {
    id: "RM-0003",
    name: "PVC Compound",
    stock: "3,200",
    unit: "kg",
    reorderLevel: "600",
    location: "Storage C",
  },
  {
    id: "RM-0004",
    name: "XLPE Compound",
    stock: "1,100",
    unit: "kg",
    reorderLevel: "300",
    location: "Storage B",
  },
  {
    id: "RM-0005",
    name: "Insulation Material",
    stock: "950",
    unit: "kg",
    reorderLevel: "200",
    location: "Storage D",
  },
];

// Mock data for quality control
const qualityTests = [
  {
    id: "QC-0001",
    product: "Copper Wire (2.5mm)",
    batchNumber: "B20250408A",
    status: "Passed",
    conductivity: "98%",
    tensileStrength: "23.5 MPa",
    insulationTest: "Pass",
    testedBy: "Rajiv Kumar",
    date: "09/04/2025",
  },
  {
    id: "QC-0002",
    product: "Aluminum Cable (4mm)",
    batchNumber: "B20250405B",
    status: "Failed",
    conductivity: "95%",
    tensileStrength: "18.2 MPa",
    insulationTest: "Fail",
    testedBy: "Suresh Patel",
    date: "05/04/2025",
  },
  {
    id: "QC-0003",
    product: "PVC Conduit (20mm)",
    batchNumber: "B20250401C",
    status: "Passed",
    conductivity: "N/A",
    tensileStrength: "15.8 MPa",
    insulationTest: "Pass",
    testedBy: "Amit Singh",
    date: "02/04/2025",
  },
];

const FactoryWorkflow = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Factory className="mr-2 h-5 w-5 text-unnati-primary" />
          Factory Production Management
        </CardTitle>
        <CardDescription>
          Manage production orders, materials, and quality control
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="production">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="materials">Raw Materials</TabsTrigger>
            <TabsTrigger value="quality">Quality Control</TabsTrigger>
          </TabsList>
          
          <TabsContent value="production">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-amber-500" />
                  Pending
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Play className="mr-1 h-4 w-4 text-blue-500" />
                  In Progress
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                  Completed
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                New Production Order
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productionOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.quantity} {order.unit}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {order.status === "Completed" ? (
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                          ) : order.status === "In Progress" ? (
                            <Play className="mr-1 h-3 w-3" />
                          ) : (
                            <Clock className="mr-1 h-3 w-3" />
                          )}
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={order.completion} className="h-2 w-24" />
                          <span className="text-xs">{order.completion}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{order.startDate}</TableCell>
                      <TableCell>{order.endDate}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {order.status === "Pending" && (
                            <Button variant="outline" size="sm" className="flex items-center text-blue-600">
                              <Play className="mr-1 h-3 w-3" />
                              Start
                            </Button>
                          )}
                          {order.status === "In Progress" && (
                            <Button variant="outline" size="sm" className="flex items-center text-amber-600">
                              <Pause className="mr-1 h-3 w-3" />
                              Pause
                            </Button>
                          )}
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-amber-500" />
                    Pending Orders
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="text-2xl font-bold">2</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm flex items-center">
                    <Play className="mr-2 h-4 w-4 text-blue-500" />
                    In Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="text-2xl font-bold">2</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    Completed (This Week)
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="text-2xl font-bold">3</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="materials">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <AlertTriangle className="mr-1 h-4 w-4 text-amber-500" />
                  Low Stock
                </Button>
                <Button variant="outline" size="sm">
                  All Materials
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Box className="mr-2 h-4 w-4" />
                  Order Materials
                </Button>
                <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Material
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Material
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Current Stock
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Reorder Level</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rawMaterials.map((material) => (
                    <TableRow key={material.id}>
                      <TableCell className="font-medium">{material.id}</TableCell>
                      <TableCell>{material.name}</TableCell>
                      <TableCell className={Number(material.stock.replace(/,/g, "")) <= Number(material.reorderLevel.replace(/,/g, "")) ? "text-red-600 font-medium" : ""}>
                        {material.stock}
                      </TableCell>
                      <TableCell>{material.unit}</TableCell>
                      <TableCell>{material.reorderLevel}</TableCell>
                      <TableCell>{material.location}</TableCell>
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
                  <CardTitle className="text-sm">Material Consumption</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Consumption Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Upcoming Material Deliveries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Copper (99.9%)</p>
                        <p className="text-sm text-gray-500">1,500 kg</p>
                      </div>
                      <p className="text-sm">Expected: 15/04/2025</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">PVC Compound</p>
                        <p className="text-sm text-gray-500">2,000 kg</p>
                      </div>
                      <p className="text-sm">Expected: 16/04/2025</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Insulation Material</p>
                        <p className="text-sm text-gray-500">500 kg</p>
                      </div>
                      <p className="text-sm">Expected: 18/04/2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="quality">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                  Passed
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <AlertTriangle className="mr-1 h-4 w-4 text-red-500" />
                  Failed
                </Button>
                <Button variant="outline" size="sm">
                  All Tests
                </Button>
              </div>
              <Button className="bg-unnati-primary hover:bg-unnati-primary/90">
                <Clipboard className="mr-2 h-4 w-4" />
                New Quality Test
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Test ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Batch Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tested By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {qualityTests.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell className="font-medium">{test.id}</TableCell>
                      <TableCell>{test.product}</TableCell>
                      <TableCell>{test.batchNumber}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            test.status === "Passed"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {test.status === "Passed" ? (
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                          ) : (
                            <AlertTriangle className="mr-1 h-3 w-3" />
                          )}
                          {test.status}
                        </span>
                      </TableCell>
                      <TableCell>{test.testedBy}</TableCell>
                      <TableCell>{test.date}</TableCell>
                      <TableCell>
                        <Button variant="link" className="p-0 h-auto">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-sm">Quality Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium">Pass Rate</p>
                        <p className="text-sm font-medium text-green-600">92%</p>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium">First Time Pass</p>
                        <p className="text-sm font-medium text-amber-600">84%</p>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium">Defect Rate</p>
                        <p className="text-sm font-medium text-red-600">3.2%</p>
                      </div>
                      <Progress value={3.2} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-sm">Quality Trend (Last 30 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-md">
                    <p className="text-gray-500">Quality Metrics Chart Placeholder</p>
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

export default FactoryWorkflow;

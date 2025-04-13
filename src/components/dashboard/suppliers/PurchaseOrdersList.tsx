
import React from "react";
import { 
  FileText, 
  Download, 
  Search, 
  Filter,
  Calendar,
  MoreHorizontal,
  Eye,
  Edit,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

// This interface ensures status is strictly typed as one of these four values
export interface PurchaseOrder {
  id: string;
  supplier: string;
  date: string;
  items: string;
  amount: string;
  status: "Received" | "In Transit" | "Ordered" | "Cancelled";
}

interface PurchaseOrdersListProps {
  orders: PurchaseOrder[];
  title?: string;
  hideSearch?: boolean;
  hideFilter?: boolean;
  hideCalendar?: boolean;
  hideNewOrder?: boolean;
  newOrderText?: string;
  onNewOrder?: () => void;
}

const PurchaseOrdersList: React.FC<PurchaseOrdersListProps> = ({ 
  orders, 
  title = "Purchase Orders",
  hideSearch = false,
  hideFilter = false,
  hideCalendar = false,
  hideNewOrder = false,
  newOrderText = "New Order",
  onNewOrder
}) => {
  const { toast } = useToast();

  const handleDownload = (id: string) => {
    toast({
      title: "Download Started",
      description: `Purchase order ${id} is being downloaded.`,
    });
  };

  const handlePrint = (id: string) => {
    toast({
      title: "Print Job Started",
      description: `Purchase order ${id} is being sent to printer.`,
    });
  };

  const handleView = (id: string) => {
    toast({
      title: "Opening Document",
      description: `Opening purchase order ${id} for viewing.`,
    });
  };

  const handleEdit = (id: string) => {
    toast({
      title: "Edit Document",
      description: `Opening purchase order ${id} for editing.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Received":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "In Transit":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Ordered":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <CardTitle>{title}</CardTitle>
          <div className="flex flex-col sm:flex-row gap-3">
            {!hideSearch && (
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input placeholder="Search orders..." className="pl-10" />
              </div>
            )}
            <div className="flex gap-2">
              {!hideFilter && (
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Filter className="h-4 w-4" />
                </Button>
              )}
              {!hideCalendar && (
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Calendar className="h-4 w-4" />
                </Button>
              )}
              {!hideNewOrder && (
                <Button 
                  className="gap-2 whitespace-nowrap"
                  onClick={onNewOrder}
                >
                  <FileText className="h-4 w-4" />
                  {newOrderText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.supplier}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleView(order.id)}
                      className="h-8 w-8"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleEdit(order.id)}
                      className="h-8 w-8"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handlePrint(order.id)}
                      className="h-8 w-8"
                    >
                      <Printer className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDownload(order.id)}
                      className="h-8 w-8"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleView(order.id)}>View Details</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEdit(order.id)}>Edit Order</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Received</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                          Cancel Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PurchaseOrdersList;

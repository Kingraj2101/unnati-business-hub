
import React from "react";
import { 
  UserPlus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Check,
  ExternalLink,
  Star
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

interface Supplier {
  id: string;
  name: string;
  type: string;
  items: string;
  orders: string;
  spending: string;
  rating: string;
}

interface SuppliersListProps {
  suppliers: Supplier[];
}

const SuppliersList: React.FC<SuppliersListProps> = ({ suppliers }) => {
  const { toast } = useToast();

  const handleAddSupplier = () => {
    toast({
      title: "Add Supplier",
      description: "Opening supplier form...",
    });
  };

  const renderRating = (rating: string) => {
    const numRating = parseFloat(rating);
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={14} 
          className={i < Math.floor(numRating) 
            ? "fill-yellow-400 text-yellow-400" 
            : i < numRating 
              ? "fill-yellow-400/50 text-yellow-400" 
              : "text-gray-300 dark:text-gray-600"
          } 
        />
      );
    }
    
    return (
      <div className="flex items-center gap-1">
        <div className="flex">{stars}</div>
        <span className="ml-1 text-sm font-medium">{rating}</span>
      </div>
    );
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <CardTitle>Suppliers</CardTitle>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input placeholder="Search suppliers..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
              <Button onClick={handleAddSupplier} className="gap-2 whitespace-nowrap">
                <UserPlus className="h-4 w-4" />
                Add Supplier
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
              <TableHead>Supplier Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Spending</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <TableCell className="font-medium">{supplier.id}</TableCell>
                <TableCell>
                  <div className="font-medium">{supplier.name}</div>
                </TableCell>
                <TableCell>{supplier.type}</TableCell>
                <TableCell>{supplier.items}</TableCell>
                <TableCell>{supplier.orders}</TableCell>
                <TableCell className="font-medium">{supplier.spending}</TableCell>
                <TableCell>{renderRating(supplier.rating)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-amber-600 dark:text-amber-400"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Check className="mr-2 h-4 w-4" />
                          Mark as Preferred
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Orders</DropdownMenuItem>
                        <DropdownMenuItem>Create Order</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove Supplier
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

export default SuppliersList;


import React from "react";
import { 
  Eye, 
  Edit, 
  Download, 
  Printer, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export interface DocumentItem {
  id: string;
  customer: string;
  date: string;
  items?: string;
  amount: string;
  status?: string;
}

interface DocumentTableProps {
  title: string;
  documents: DocumentItem[];
  icon?: React.ReactNode;
  createButtonText?: string;
  onCreateNew?: () => void;
  emptyStateText?: string;
  customColumns?: {
    header: string;
    accessor: string;
  }[];
}

const DocumentTable: React.FC<DocumentTableProps> = ({
  title,
  documents,
  icon,
  createButtonText = "Create New",
  onCreateNew,
  emptyStateText = "No documents found",
  customColumns
}) => {
  const { toast } = useToast();

  const handleView = (id: string) => {
    toast({
      title: "View Document",
      description: `Viewing document ${id}`,
    });
  };

  const handleEdit = (id: string) => {
    toast({
      title: "Edit Document",
      description: `Editing document ${id}`,
    });
  };

  const handlePrint = (id: string) => {
    toast({
      title: "Print Document",
      description: `Printing document ${id}`,
    });
  };

  const handleDownload = (id: string) => {
    toast({
      title: "Download Document",
      description: `Downloading document ${id}`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Completed":
      case "Paid":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "Processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Draft":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  // Default columns if custom columns are not provided
  const defaultColumns = [
    { header: "ID", accessor: "id" },
    { header: "Customer", accessor: "customer" },
    { header: "Date", accessor: "date" },
    { header: "Items", accessor: "items" },
    { header: "Amount", accessor: "amount" },
    { header: "Status", accessor: "status" }
  ];

  const columns = customColumns || defaultColumns;

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <CardTitle className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </CardTitle>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input placeholder={`Search ${title.toLowerCase()}...`} className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Calendar className="h-4 w-4" />
              </Button>
              {onCreateNew && (
                <Button 
                  className="gap-2 whitespace-nowrap bg-unnati-primary hover:bg-unnati-primary/90"
                  onClick={onCreateNew}
                >
                  <Plus className="h-4 w-4" />
                  {createButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {documents.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.accessor}>{column.header}</TableHead>
                ))}
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  {columns.map((column) => {
                    if (column.accessor === "status" && doc.status) {
                      return (
                        <TableCell key={column.accessor}>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                            {doc.status}
                          </span>
                        </TableCell>
                      );
                    }
                    
                    return (
                      <TableCell key={column.accessor} className={column.accessor === "id" ? "font-medium" : ""}>
                        {/* Use optional chaining to safely access potentially undefined properties */}
                        {doc[column.accessor as keyof DocumentItem] || "-"}
                      </TableCell>
                    );
                  })}
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleView(doc.id)}
                        className="h-8 w-8"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(doc.id)}
                        className="h-8 w-8"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handlePrint(doc.id)}
                        className="h-8 w-8"
                      >
                        <Printer className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDownload(doc.id)}
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
                          <DropdownMenuItem onClick={() => handleView(doc.id)}>View Details</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(doc.id)}>Edit Document</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDownload(doc.id)}>Download PDF</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handlePrint(doc.id)}>Print Document</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600 dark:text-red-400">
                            Cancel Document
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            <p>{emptyStateText}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentTable;

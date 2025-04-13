
import React, { useState } from "react";
import { 
  Search,
  FileText,
  BarChart3,
  Calendar,
  ChevronDown,
  Download,
  Filter,
  Eye,
  RefreshCw,
  FileDown,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import ReportViewer from "./ReportViewer";

interface Report {
  id: string;
  name: string;
  type: string;
  category: 'financial' | 'sales' | 'inventory' | 'custom';
  date: string;
  status: 'ready' | 'processing' | 'error';
}

// Sample data
const sampleReports: Report[] = [
  { id: "RPT-2025-001", name: "Monthly Sales Summary", type: "Sales Summary", category: "sales", date: "12 Apr, 2025", status: "ready" },
  { id: "RPT-2025-002", name: "Quarterly P&L Statement", type: "Profit and Loss", category: "financial", date: "10 Apr, 2025", status: "ready" },
  { id: "RPT-2025-003", name: "Product Inventory Analysis", type: "Stock Summary", category: "inventory", date: "08 Apr, 2025", status: "ready" },
  { id: "RPT-2025-004", name: "Cash Flow Statement", type: "Cash and Bank", category: "financial", date: "05 Apr, 2025", status: "ready" },
  { id: "RPT-2025-005", name: "Vendor Payment Analysis", type: "Party Reports", category: "financial", date: "01 Apr, 2025", status: "ready" },
  { id: "RPT-2025-006", name: "Annual Tax Report", type: "GST Reports", category: "financial", date: "31 Mar, 2025", status: "processing" },
  { id: "RPT-2025-007", name: "Customer Payment Status", type: "BNPL Report", category: "sales", date: "28 Mar, 2025", status: "ready" },
  { id: "RPT-2025-008", name: "Employee Performance", type: "Custom Report", category: "custom", date: "25 Mar, 2025", status: "ready" },
  { id: "RPT-2025-009", name: "Marketing ROI Analysis", type: "Expense Report", category: "financial", date: "20 Mar, 2025", status: "ready" },
];

const ReportsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const { toast } = useToast();

  // Filter reports based on search query and category
  const filteredReports = sampleReports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          report.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          report.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || report.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Sort reports
  const sortedReports = [...filteredReports].sort((a, b) => {
    const dateA = new Date(a.date.split(", ")[0] + ", 2025").getTime();
    const dateB = new Date(b.date.split(", ")[0] + ", 2025").getTime();
    
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const handleRefresh = () => {
    setIsRefreshing(true);
    
    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Reports Refreshed",
        description: "The reports list has been updated.",
      });
    }, 1500);
  };

  const handleDownload = (report: Report, format: string) => {
    toast({
      title: `Downloading ${report.name}`,
      description: `Your ${format.toUpperCase()} file will be ready shortly.`,
    });
  };

  const handleViewReport = (report: Report) => {
    setSelectedReport(report);
  };

  const handleCloseViewer = () => {
    setSelectedReport(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Reports List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search reports..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Select
                value={categoryFilter}
                onValueChange={setCategoryFilter}
              >
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              
              <Select
                value={sortOrder}
                onValueChange={setSortOrder}
              >
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort by date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date Generated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedReports.length > 0 ? (
                  sortedReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.name}</TableCell>
                      <TableCell>{report.id}</TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            report.status === "ready" 
                              ? "success" 
                              : report.status === "processing"
                              ? "default"
                              : "destructive"
                          }
                          className={
                            report.status === "ready" 
                              ? "bg-green-100 text-green-800 hover:bg-green-100" 
                              : report.status === "processing"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {report.status === "ready" 
                            ? "Ready" 
                            : report.status === "processing"
                            ? "Processing"
                            : "Error"
                          }
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={report.status !== "ready"}
                            onClick={() => handleViewReport(report)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                disabled={report.status !== "ready"}
                              >
                                <Download className="h-4 w-4 mr-1" />
                                <ChevronDown className="h-3 w-3" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleDownload(report, "excel")}>
                                <FileDown className="mr-2 h-4 w-4 text-green-600" />
                                <span>Excel Format</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDownload(report, "pdf")}>
                                <FileDown className="mr-2 h-4 w-4 text-red-600" />
                                <span>PDF Format</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDownload(report, "print")}>
                                <Printer className="mr-2 h-4 w-4" />
                                <span>Print</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No reports found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      {selectedReport && (
        <ReportViewer 
          reportName={selectedReport.name}
          onClose={handleCloseViewer}
          onDownloadExcel={() => handleDownload(selectedReport, "excel")}
          onDownloadPdf={() => handleDownload(selectedReport, "pdf")}
          onPrint={() => handleDownload(selectedReport, "print")}
        />
      )}
    </div>
  );
};

export default ReportsList;

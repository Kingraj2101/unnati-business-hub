
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  FileText, 
  Eye, 
  Download, 
  Trash2, 
  MoreVertical, 
  RefreshCw, 
  FileDown,
  FileUp,
  Share2,
  Mail,
  Calendar,
  Printer,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface Report {
  id: string;
  name: string;
  type: string;
  createdBy: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
  status: "ready" | "processing" | "failed";
  size: string;
}

const reportsData: Report[] = [
  {
    id: "REP-001",
    name: "Monthly Sales Summary - March 2023",
    type: "Sales Summary",
    createdBy: {
      name: "Rajesh Kumar",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rajesh Kumar"
    },
    createdAt: "2023-04-01 14:30",
    status: "ready",
    size: "2.4 MB",
  },
  {
    id: "REP-002",
    name: "Inventory Stock Levels - Q1 2023",
    type: "Stock Summary",
    createdBy: {
      name: "Priya Sharma",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Priya Sharma"
    },
    createdAt: "2023-03-31 09:15",
    status: "ready",
    size: "3.1 MB",
  },
  {
    id: "REP-003",
    name: "Customer Payment History - March 2023",
    type: "Payment Report",
    createdBy: {
      name: "Amit Patel",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Amit Patel"
    },
    createdAt: "2023-03-30 11:45",
    status: "ready",
    size: "1.8 MB",
  },
  {
    id: "REP-004",
    name: "Profit & Loss Statement - Q1 2023",
    type: "Financial Report",
    createdBy: {
      name: "Neha Singh",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Neha Singh"
    },
    createdAt: "2023-04-10 16:20",
    status: "processing",
    size: "Calculating...",
  },
  {
    id: "REP-005",
    name: "Product Performance Analysis - March 2023",
    type: "Sales Analysis",
    createdBy: {
      name: "Vikram Mehta",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Vikram Mehta"
    },
    createdAt: "2023-03-29 13:10",
    status: "failed",
    size: "N/A",
  },
  {
    id: "REP-006",
    name: "Vendor Payment Summary - March 2023",
    type: "Payment Report",
    createdBy: {
      name: "Sunita Joshi",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sunita Joshi"
    },
    createdAt: "2023-03-28 10:40",
    status: "ready",
    size: "1.5 MB",
  },
  {
    id: "REP-007",
    name: "GST Return Data - March 2023",
    type: "Tax Report",
    createdBy: {
      name: "Rahul Verma",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rahul Verma"
    },
    createdAt: "2023-04-05 09:30",
    status: "ready",
    size: "4.2 MB",
  },
];

const ReportsList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    
    // Simulate refreshing data
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Reports List Refreshed",
        description: "Latest reports have been loaded",
      });
    }, 1500);
  };
  
  const handleDownload = (reportId: string, reportName: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${reportName}...`,
    });
    
    // Simulate download success after a delay
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: `${reportName} has been saved to your downloads`,
      });
    }, 2000);
  };
  
  const handleView = (reportId: string, reportName: string) => {
    toast({
      title: "Opening Report",
      description: `Opening ${reportName} in the viewer`,
    });
  };
  
  const handleDelete = (reportId: string, reportName: string) => {
    toast({
      title: "Report Deleted",
      description: `${reportName} has been deleted`,
      variant: "destructive",
    });
  };
  
  const handlePrint = (reportId: string, reportName: string) => {
    toast({
      title: "Printing Report",
      description: `Sending ${reportName} to printer`,
    });
  };
  
  const handleShare = (reportId: string, reportName: string) => {
    toast({
      title: "Share Options",
      description: `Share options for ${reportName} would open here`,
    });
  };
  
  const handleSendEmail = (reportId: string, reportName: string) => {
    toast({
      title: "Email Report",
      description: `Email options for ${reportName} would open here`,
    });
  };
  
  const handleSchedule = (reportId: string, reportName: string) => {
    toast({
      title: "Schedule Report",
      description: `Schedule options for ${reportName} would open here`,
    });
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Reports</CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1"
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportsData.map((report) => (
              <TableRow key={report.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div className="font-medium">{report.name}</div>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {report.type} • {report.id}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={report.createdBy.avatar} alt={report.createdBy.name} />
                      <AvatarFallback>{report.createdBy.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{report.createdBy.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{report.createdAt}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {report.status === "processing" ? (
                      <RefreshCw className="mr-1 h-3 w-3 animate-spin text-blue-500" />
                    ) : report.status === "failed" ? (
                      <AlertCircle className="mr-1 h-3 w-3 text-red-500" />
                    ) : (
                      <FileDown className="mr-1 h-3 w-3 text-green-500" />
                    )}
                    <Badge
                      variant={
                        report.status === "ready" 
                          ? "default" 
                          : report.status === "processing"
                          ? "secondary"
                          : "destructive"
                      }
                      className={
                        report.status === "ready" 
                          ? "bg-green-100 text-green-800" 
                          : report.status === "processing" 
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {report.status === "ready" 
                        ? "Ready" 
                        : report.status === "processing" 
                        ? "Processing"
                        : "Failed"}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{report.size}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleView(report.id, report.name)}
                      disabled={report.status !== "ready"}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleDownload(report.id, report.name)}
                      disabled={report.status !== "ready"}
                    >
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem 
                          className="flex items-center gap-2"
                          onClick={() => handleView(report.id, report.name)}
                          disabled={report.status !== "ready"}
                        >
                          <Eye className="h-4 w-4" /> View Report
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2"
                          onClick={() => handleDownload(report.id, report.name)}
                          disabled={report.status !== "ready"}
                        >
                          <Download className="h-4 w-4" /> Download
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2"
                          onClick={() => handlePrint(report.id, report.name)}
                          disabled={report.status !== "ready"}
                        >
                          <Printer className="h-4 w-4" /> Print
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="flex items-center gap-2"
                          onClick={() => handleSendEmail(report.id, report.name)}
                          disabled={report.status !== "ready"}
                        >
                          <Mail className="h-4 w-4" /> Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2"
                          onClick={() => handleShare(report.id, report.name)}
                          disabled={report.status !== "ready"}
                        >
                          <Share2 className="h-4 w-4" /> Share
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2"
                          onClick={() => handleSchedule(report.id, report.name)}
                        >
                          <Calendar className="h-4 w-4" /> Schedule
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-destructive focus:text-destructive"
                          onClick={() => handleDelete(report.id, report.name)}
                        >
                          <Trash2 className="h-4 w-4" /> Delete
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

export default ReportsList;

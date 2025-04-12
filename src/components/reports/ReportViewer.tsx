
import React, { useState } from "react";
import { X, Download, FileDown, Printer, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ReportViewerProps {
  reportName: string;
  onClose?: () => void;
  onDownloadExcel: () => void;
  onDownloadPdf: () => void;
  onPrint: () => void;
}

const ReportViewer: React.FC<ReportViewerProps> = ({
  reportName,
  onClose,
  onDownloadExcel,
  onDownloadPdf,
  onPrint
}) => {
  const [loading, setLoading] = useState(false);
  const [viewType, setViewType] = useState<'tabular' | 'chart'>('tabular');

  const refreshReport = () => {
    setLoading(true);
    // Simulate refresh delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  // Sample data for the report - in a real app, this would come from an API
  const reportData = [
    { id: 1, date: "2025-04-01", item: "Product A", quantity: 25, amount: 12500, profit: 3750 },
    { id: 2, date: "2025-04-02", item: "Product B", quantity: 18, amount: 9000, profit: 2700 },
    { id: 3, date: "2025-04-03", item: "Product C", quantity: 30, amount: 15000, profit: 4500 },
    { id: 4, date: "2025-04-04", item: "Product A", quantity: 15, amount: 7500, profit: 2250 },
    { id: 5, date: "2025-04-05", item: "Product D", quantity: 22, amount: 11000, profit: 3300 },
    { id: 6, date: "2025-04-06", item: "Product B", quantity: 10, amount: 5000, profit: 1500 },
    { id: 7, date: "2025-04-07", item: "Product E", quantity: 28, amount: 14000, profit: 4200 },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">{reportName}</CardTitle>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={refreshReport}
            disabled={loading}
          >
            {loading ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            <span className="ml-2">Refresh</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                <span>Download</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onDownloadExcel}>
                <FileDown className="mr-2 h-4 w-4 text-green-600" />
                <span>Excel Format</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onDownloadPdf}>
                <FileDown className="mr-2 h-4 w-4 text-red-600" />
                <span>PDF Format</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" size="sm" onClick={onPrint}>
            <Printer className="h-4 w-4 mr-2" />
            <span>Print</span>
          </Button>
          
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs value={viewType} onValueChange={(v) => setViewType(v as 'tabular' | 'chart')} className="mb-4">
          <TabsList>
            <TabsTrigger value="tabular">Tabular View</TabsTrigger>
            <TabsTrigger value="chart">Chart View</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <TabsContent value="tabular" className="mt-0">
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Amount (₹)</TableHead>
                  <TableHead>Profit (₹)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.item}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.amount.toLocaleString('en-IN')}</TableCell>
                    <TableCell>{row.profit.toLocaleString('en-IN')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
            <div>
              Showing 7 of 24 entries
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="chart" className="mt-0">
          <div className="h-80 flex items-center justify-center border rounded-md bg-gray-50">
            <p className="text-gray-500">Chart visualization would appear here</p>
          </div>
        </TabsContent>
      </CardContent>
    </Card>
  );
};

export default ReportViewer;

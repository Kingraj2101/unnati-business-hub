import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  Search, 
  RefreshCw, 
  Printer,
  FileDown,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

interface BillingReportCreatorProps {
  onClose?: () => void;
  onGenerate?: (reportConfig: any) => void;
}

const BillingReportCreator: React.FC<BillingReportCreatorProps> = ({ 
  onClose,
  onGenerate
}) => {
  const [reportType, setReportType] = useState("billProfit");
  const [dateRange, setDateRange] = useState("thisMonth");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateReport = () => {
    setIsLoading(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Report Generated",
        description: "Your report has been successfully created.",
        action: (
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1" 
            onClick={() => {
              // Trigger download functionality
              handleDownload("excel");
            }}
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        ),
      });
      
      if (onGenerate) {
        onGenerate({
          type: reportType,
          dateRange,
          // other config options
        });
      }
    }, 1500);
  };
  
  const handleDownload = (format: "excel" | "pdf") => {
    toast({
      title: `Downloading ${format.toUpperCase()} Report`,
      description: "Your download will begin shortly.",
    });
    
    // In a real app, this would initiate an actual download
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: `Your ${format.toUpperCase()} report has been downloaded.`,
      });
    }, 1000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <FileText className="mr-2 h-5 w-5 text-unnati-primary" />
          Create Report
        </CardTitle>
        <CardDescription>
          Generate detailed reports for business insights
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="report-type">Report Type</Label>
              <Select 
                defaultValue={reportType}
                onValueChange={setReportType}
              >
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="billProfit">Bill-wise Profit</SelectItem>
                  <SelectItem value="salesSummary">Sales Summary</SelectItem>
                  <SelectItem value="daybook">Daybook</SelectItem>
                  <SelectItem value="profitLoss">Profit and Loss</SelectItem>
                  <SelectItem value="partyStatement">Party Statement (Ledger)</SelectItem>
                  <SelectItem value="stockSummary">Stock Summary</SelectItem>
                  <SelectItem value="priceStock">Price & Stock Summary</SelectItem>
                  <SelectItem value="balanceSheet">Balance Sheet</SelectItem>
                  <SelectItem value="cashBank">Cash and Bank</SelectItem>
                  <SelectItem value="partyReports">Party Reports</SelectItem>
                  <SelectItem value="itemReports">Item Reports</SelectItem>
                  <SelectItem value="gstReports">GST Reports</SelectItem>
                  <SelectItem value="transactionReports">Transaction Reports</SelectItem>
                  <SelectItem value="expenseReport">Expense Report</SelectItem>
                  <SelectItem value="purchaseReport">Purchase Report</SelectItem>
                  <SelectItem value="bnplReport">BNPL Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="date-range">Date Range</Label>
              <Select 
                defaultValue={dateRange}
                onValueChange={setDateRange}
              >
                <SelectTrigger id="date-range">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="thisWeek">This Week</SelectItem>
                  <SelectItem value="lastWeek">Last Week</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                  <SelectItem value="lastMonth">Last Month</SelectItem>
                  <SelectItem value="lastThreeMonths">Last 3 Months</SelectItem>
                  <SelectItem value="lastSixMonths">Last 6 Months</SelectItem>
                  <SelectItem value="thisFinancialYear">This Financial Year</SelectItem>
                  <SelectItem value="lastFinancialYear">Last Financial Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {dateRange === "custom" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input 
                    id="start-date" 
                    type="date" 
                  />
                </div>
                <div>
                  <Label htmlFor="end-date">End Date</Label>
                  <Input 
                    id="end-date" 
                    type="date" 
                  />
                </div>
              </div>
            )}
            
            <div>
              <Label>Additional Options</Label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-tax" />
                  <Label htmlFor="include-tax" className="text-sm">Include Tax Information</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="include-cancelled" />
                  <Label htmlFor="include-cancelled" className="text-sm">Include Cancelled Transactions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="detailed-view" />
                  <Label htmlFor="detailed-view" className="text-sm">Show Detailed View</Label>
                </div>
              </div>
            </div>
            
            <div>
              <Label>Report Format</Label>
              <RadioGroup defaultValue="detailed" className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="detailed" id="r1" />
                  <Label htmlFor="r1" className="text-sm">Detailed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="summary" id="r2" />
                  <Label htmlFor="r2" className="text-sm">Summary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="consolidated" id="r3" />
                  <Label htmlFor="r3" className="text-sm">Consolidated</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            {onClose && (
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            )}
            <Button 
              onClick={handleGenerateReport}
              disabled={isLoading}
              className="gap-2 bg-unnati-primary"
            >
              {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />}
              Generate Report
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingReportCreator;

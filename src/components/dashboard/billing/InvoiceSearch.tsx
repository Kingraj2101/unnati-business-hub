
import React, { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface InvoiceSearchProps {
  onSearch: (query: string, filters: any) => void;
}

const InvoiceSearch: React.FC<InvoiceSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    status: [],
    dateRange: "all",
    minAmount: "",
    maxAmount: "",
    paymentMethod: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value, filters);
  };

  const handleFilterChange = (category: string, value: any) => {
    const newFilters = { ...filters, [category]: value };
    setFilters(newFilters);
    
    // Update active filters for display
    let newActiveFilters: string[] = [];
    
    if (newFilters.status.length) {
      newActiveFilters.push(`Status: ${newFilters.status.join(', ')}`);
    }
    
    if (newFilters.dateRange !== "all") {
      newActiveFilters.push(`Date: ${newFilters.dateRange}`);
    }
    
    if (newFilters.minAmount || newFilters.maxAmount) {
      newActiveFilters.push(`Amount: ${newFilters.minAmount || '0'} - ${newFilters.maxAmount || '∞'}`);
    }
    
    if (newFilters.paymentMethod.length) {
      newActiveFilters.push(`Payment: ${newFilters.paymentMethod.join(', ')}`);
    }
    
    setActiveFilters(newActiveFilters);
    
    onSearch(searchQuery, newFilters);
  };

  const handleCheckboxChange = (category: string, value: string) => {
    const currentValues = [...filters[category as keyof typeof filters]] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    handleFilterChange(category, newValues);
  };

  const clearFilters = () => {
    setFilters({
      status: [],
      dateRange: "all",
      minAmount: "",
      maxAmount: "",
      paymentMethod: []
    });
    setActiveFilters([]);
    onSearch(searchQuery, {});
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col space-y-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search invoices by ID, customer name, or amount..."
            className="pl-8"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filters</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium">Filter Invoices</h4>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="status">
                    <AccordionTrigger>Status</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Paid", "Pending", "Overdue", "Cancelled"].map((status) => (
                          <div key={status} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`status-${status}`} 
                              checked={filters.status.includes(status)}
                              onCheckedChange={() => handleCheckboxChange("status", status)}
                            />
                            <Label htmlFor={`status-${status}`}>{status}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="date">
                    <AccordionTrigger>Date Range</AccordionTrigger>
                    <AccordionContent>
                      <Select
                        value={filters.dateRange}
                        onValueChange={(value) => handleFilterChange("dateRange", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Time</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="yesterday">Yesterday</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="this-month">This Month</SelectItem>
                          <SelectItem value="last-month">Last Month</SelectItem>
                          <SelectItem value="this-year">This Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="amount">
                    <AccordionTrigger>Amount</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label htmlFor="min-amount">Min (₹)</Label>
                            <Input
                              id="min-amount"
                              type="number"
                              placeholder="0"
                              value={filters.minAmount}
                              onChange={(e) => handleFilterChange("minAmount", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="max-amount">Max (₹)</Label>
                            <Input
                              id="max-amount"
                              type="number"
                              placeholder="Any"
                              value={filters.maxAmount}
                              onChange={(e) => handleFilterChange("maxAmount", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="payment">
                    <AccordionTrigger>Payment Method</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Cash", "Bank Transfer", "UPI", "Cheque", "Credit"].map((method) => (
                          <div key={method} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`payment-${method}`}
                              checked={filters.paymentMethod.includes(method)}
                              onCheckedChange={() => handleCheckboxChange("paymentMethod", method)}
                            />
                            <Label htmlFor={`payment-${method}`}>{method}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                  <Button size="sm">Apply Filters</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="outline" className="flex items-center gap-1">
              {filter}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => {
                  // This is simplified - in a real app you'd need to handle removing specific filters
                  clearFilters();
                }}
              />
            </Badge>
          ))}
          
          {activeFilters.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear All
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceSearch;

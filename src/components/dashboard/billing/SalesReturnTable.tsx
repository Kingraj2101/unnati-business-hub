
import React from "react";
import { ArrowDown } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const salesReturns: DocumentItem[] = [
  { 
    id: "SR-2025-001", 
    customer: "Rajesh Electronics", 
    date: "11 Apr, 2025", 
    items: "2 items", 
    amount: "₹4,500", 
    status: "Completed" 
  },
  { 
    id: "SR-2025-002", 
    customer: "Patel Wire Co.", 
    date: "08 Apr, 2025", 
    items: "1 item", 
    amount: "₹12,800", 
    status: "Processing" 
  },
  { 
    id: "SR-2025-003", 
    customer: "Singh Distributors", 
    date: "05 Apr, 2025", 
    items: "3 items", 
    amount: "₹8,600", 
    status: "Completed" 
  },
];

const SalesReturnTable = () => {
  return (
    <DocumentTable
      title="Sales Returns"
      documents={salesReturns}
      icon={<ArrowDown className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Sales Return"
      emptyStateText="No sales returns found."
    />
  );
};

export default SalesReturnTable;

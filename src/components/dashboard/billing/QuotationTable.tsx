
import React from "react";
import { FileCheck } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const quotations: DocumentItem[] = [
  { 
    id: "QT-2025-001", 
    customer: "Modern Electricals", 
    date: "12 Apr, 2025", 
    items: "18 items", 
    amount: "₹64,500", 
    status: "Sent" 
  },
  { 
    id: "QT-2025-002", 
    customer: "City Lights", 
    date: "10 Apr, 2025", 
    items: "12 items", 
    amount: "₹32,800", 
    status: "Draft" 
  },
  { 
    id: "QT-2025-003", 
    customer: "Premium Electronics", 
    date: "08 Apr, 2025", 
    items: "25 items", 
    amount: "₹83,600", 
    status: "Accepted" 
  },
  { 
    id: "QT-2025-004", 
    customer: "Metro Traders", 
    date: "05 Apr, 2025", 
    items: "7 items", 
    amount: "₹18,900", 
    status: "Rejected" 
  },
];

const QuotationTable = () => {
  return (
    <DocumentTable
      title="Quotations / Estimates"
      documents={quotations}
      icon={<FileCheck className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Quotation"
      emptyStateText="No quotations found."
    />
  );
};

export default QuotationTable;

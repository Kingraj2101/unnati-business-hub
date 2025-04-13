
import React from "react";
import { Receipt } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const invoices: DocumentItem[] = [
  { 
    id: "INV-2025-001", 
    customer: "Rajesh Electronics", 
    date: "12 Apr, 2025", 
    items: "12 items", 
    amount: "₹24,500", 
    status: "Paid" 
  },
  { 
    id: "INV-2025-002", 
    customer: "Sharma Electrical", 
    date: "10 Apr, 2025", 
    items: "8 items", 
    amount: "₹36,750", 
    status: "Pending" 
  },
  { 
    id: "INV-2025-003", 
    customer: "Gupta Traders", 
    date: "05 Apr, 2025", 
    items: "5 items", 
    amount: "₹18,300", 
    status: "Paid" 
  },
  { 
    id: "INV-2025-004", 
    customer: "Patel Wire Co.", 
    date: "01 Apr, 2025", 
    items: "15 items", 
    amount: "₹42,800", 
    status: "Pending" 
  },
  { 
    id: "INV-2025-005", 
    customer: "Singh Distributors", 
    date: "30 Mar, 2025", 
    items: "7 items", 
    amount: "₹15,600", 
    status: "Cancelled" 
  },
];

const InvoiceTable = () => {
  return (
    <DocumentTable
      title="Invoices"
      documents={invoices}
      icon={<Receipt className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create New Invoice"
      emptyStateText="No invoices found. Create your first invoice to get started."
    />
  );
};

export default InvoiceTable;

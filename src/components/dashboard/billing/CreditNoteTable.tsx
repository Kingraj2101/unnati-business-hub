
import React from "react";
import { FileOutput } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const creditNotes: DocumentItem[] = [
  { 
    id: "CN-2025-001", 
    customer: "Rajesh Electronics", 
    date: "10 Apr, 2025", 
    items: "Credit for INV-2025-001", 
    amount: "₹4,500", 
    status: "Processed" 
  },
  { 
    id: "CN-2025-002", 
    customer: "Patel Wire Co.", 
    date: "07 Apr, 2025", 
    items: "Credit for INV-2025-004", 
    amount: "₹12,800", 
    status: "Pending" 
  },
  { 
    id: "CN-2025-003", 
    customer: "Singh Distributors", 
    date: "04 Apr, 2025", 
    items: "Credit for INV-2025-005", 
    amount: "₹3,600", 
    status: "Processed" 
  },
];

const CreditNoteTable = () => {
  return (
    <DocumentTable
      title="Credit Notes"
      documents={creditNotes}
      icon={<FileOutput className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Credit Note"
      emptyStateText="No credit notes found."
    />
  );
};

export default CreditNoteTable;

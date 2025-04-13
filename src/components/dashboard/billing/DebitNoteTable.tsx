
import React from "react";
import { FileInput } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const debitNotes: DocumentItem[] = [
  { 
    id: "DN-2025-001", 
    customer: "Havells India Ltd.", 
    date: "09 Apr, 2025", 
    items: "For PR-2025-001", 
    amount: "₹12,500", 
    status: "Processed" 
  },
  { 
    id: "DN-2025-002", 
    customer: "Orient Electric", 
    date: "07 Apr, 2025", 
    items: "For PR-2025-002", 
    amount: "₹18,200", 
    status: "Pending" 
  },
  { 
    id: "DN-2025-003", 
    customer: "Polycab Wires", 
    date: "05 Apr, 2025", 
    items: "For PR-2025-003", 
    amount: "₹24,800", 
    status: "Processed" 
  },
];

const DebitNoteTable = () => {
  return (
    <DocumentTable
      title="Debit Notes"
      documents={debitNotes}
      icon={<FileInput className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Debit Note"
      emptyStateText="No debit notes found."
      customColumns={[
        { header: "ID", accessor: "id" },
        { header: "Vendor", accessor: "customer" },
        { header: "Date", accessor: "date" },
        { header: "Reference", accessor: "items" },
        { header: "Amount", accessor: "amount" },
        { header: "Status", accessor: "status" }
      ]}
    />
  );
};

export default DebitNoteTable;

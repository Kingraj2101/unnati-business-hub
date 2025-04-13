
import React from "react";
import { ClipboardList } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const proformaInvoices: DocumentItem[] = [
  { 
    id: "PI-2025-001", 
    customer: "Modern Electricals", 
    date: "12 Apr, 2025", 
    items: "18 items", 
    amount: "₹64,500", 
    status: "Pending" 
  },
  { 
    id: "PI-2025-002", 
    customer: "City Lights", 
    date: "10 Apr, 2025", 
    items: "12 items", 
    amount: "₹32,800", 
    status: "Converted" 
  },
  { 
    id: "PI-2025-003", 
    customer: "Premium Electronics", 
    date: "08 Apr, 2025", 
    items: "25 items", 
    amount: "₹83,600", 
    status: "Pending" 
  },
];

const ProformaInvoiceTable = () => {
  return (
    <DocumentTable
      title="Proforma Invoices"
      documents={proformaInvoices}
      icon={<ClipboardList className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Proforma Invoice"
      emptyStateText="No proforma invoices found."
    />
  );
};

export default ProformaInvoiceTable;

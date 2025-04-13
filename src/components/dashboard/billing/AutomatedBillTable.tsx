
import React from "react";
import { FileText } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const automatedBills: DocumentItem[] = [
  { 
    id: "AB-2025-001", 
    customer: "Monthly Subscription", 
    date: "01 Apr, 2025", 
    items: "Electricity Subscription", 
    amount: "₹24,500", 
    status: "Generated" 
  },
  { 
    id: "AB-2025-002", 
    customer: "Quarterly Maintenance", 
    date: "01, Apr, 2025", 
    items: "Maintenance Contract", 
    amount: "₹36,750", 
    status: "Generated" 
  },
  { 
    id: "AB-2025-003", 
    customer: "Annual Service", 
    date: "01 Jan, 2025", 
    items: "Service Contract", 
    amount: "₹128,300", 
    status: "Generated" 
  },
];

const AutomatedBillTable = () => {
  return (
    <DocumentTable
      title="Automated Bills"
      documents={automatedBills}
      icon={<FileText className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Automated Bill"
      emptyStateText="No automated bills found."
      customColumns={[
        { header: "ID", accessor: "id" },
        { header: "Description", accessor: "customer" },
        { header: "Generation Date", accessor: "date" },
        { header: "Type", accessor: "items" },
        { header: "Amount", accessor: "amount" },
        { header: "Status", accessor: "status" }
      ]}
    />
  );
};

export default AutomatedBillTable;

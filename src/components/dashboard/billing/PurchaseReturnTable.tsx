
import React from "react";
import { RefreshCcw } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const purchaseReturns: DocumentItem[] = [
  { 
    id: "PR-2025-001", 
    customer: "Havells India Ltd.", 
    date: "09 Apr, 2025", 
    items: "Damaged LED Panels", 
    amount: "₹12,500", 
    status: "Processed" 
  },
  { 
    id: "PR-2025-002", 
    customer: "Orient Electric", 
    date: "07 Apr, 2025", 
    items: "Wrong Specification Fans", 
    amount: "₹18,200", 
    status: "Pending" 
  },
  { 
    id: "PR-2025-003", 
    customer: "Polycab Wires", 
    date: "05 Apr, 2025", 
    items: "Defective Cables", 
    amount: "₹24,800", 
    status: "Processed" 
  },
];

const PurchaseReturnTable = () => {
  return (
    <DocumentTable
      title="Purchase Returns"
      documents={purchaseReturns}
      icon={<RefreshCcw className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Purchase Return"
      emptyStateText="No purchase returns found."
      customColumns={[
        { header: "ID", accessor: "id" },
        { header: "Vendor", accessor: "customer" },
        { header: "Date", accessor: "date" },
        { header: "Description", accessor: "items" },
        { header: "Amount", accessor: "amount" },
        { header: "Status", accessor: "status" }
      ]}
    />
  );
};

export default PurchaseReturnTable;

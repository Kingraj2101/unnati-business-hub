
import React from "react";
import { CreditCard } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const purchaseOrders: DocumentItem[] = [
  { 
    id: "PO-2025-001", 
    customer: "Havells India Ltd.", 
    date: "08 Apr, 2025", 
    items: "Copper Wires", 
    amount: "₹45,800", 
    status: "Received" 
  },
  { 
    id: "PO-2025-002", 
    customer: "Orient Electric", 
    date: "07 Apr, 2025", 
    items: "LED Panels", 
    amount: "₹28,500", 
    status: "In Transit" 
  },
  { 
    id: "PO-2025-003", 
    customer: "Polycab Wires", 
    date: "06 Apr, 2025", 
    items: "FRLSH Cables", 
    amount: "₹65,200", 
    status: "Ordered" 
  },
  { 
    id: "PO-2025-004", 
    customer: "Anchor Electricals", 
    date: "05 Apr, 2025", 
    items: "Switch Boards", 
    amount: "₹18,400", 
    status: "Received" 
  },
  { 
    id: "PO-2025-005", 
    customer: "Bajaj Electricals", 
    date: "04 Apr, 2025", 
    items: "Ceiling Fans", 
    amount: "₹35,200", 
    status: "In Transit" 
  },
];

const PurchaseOrderTable = () => {
  return (
    <DocumentTable
      title="Purchase Orders"
      documents={purchaseOrders}
      icon={<CreditCard className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Purchase Order"
      emptyStateText="No purchase orders found."
    />
  );
};

export default PurchaseOrderTable;

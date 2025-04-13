
import React from "react";
import { DollarSign } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const paymentsOut: DocumentItem[] = [
  { 
    id: "PO-2025-001", 
    customer: "Havells India Ltd.", 
    date: "10 Apr, 2025", 
    items: "Against Invoice HVL-458", 
    amount: "₹45,800", 
    status: "Processed" 
  },
  { 
    id: "PO-2025-002", 
    customer: "Orient Electric", 
    date: "08 Apr, 2025", 
    items: "Against Invoice OE-285", 
    amount: "₹28,500", 
    status: "Processed" 
  },
  { 
    id: "PO-2025-003", 
    customer: "Polycab Wires", 
    date: "05 Apr, 2025", 
    items: "Against Invoice PCW-652", 
    amount: "₹65,200", 
    status: "Pending" 
  },
];

const PaymentOutTable = () => {
  return (
    <DocumentTable
      title="Payments Out"
      documents={paymentsOut}
      icon={<DollarSign className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Payment Out"
      emptyStateText="No payments out found."
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

export default PaymentOutTable;

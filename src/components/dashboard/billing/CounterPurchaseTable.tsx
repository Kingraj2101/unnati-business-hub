
import React from "react";
import { ShoppingCart } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const counterPurchases: DocumentItem[] = [
  { 
    id: "CP-2025-001", 
    customer: "Walk-in Customer", 
    date: "12 Apr, 2025", 
    items: "5 items", 
    amount: "₹4,500", 
    status: "Completed" 
  },
  { 
    id: "CP-2025-002", 
    customer: "Walk-in Customer", 
    date: "11 Apr, 2025", 
    items: "3 items", 
    amount: "₹2,800", 
    status: "Completed" 
  },
  { 
    id: "CP-2025-003", 
    customer: "Amit Kumar", 
    date: "11 Apr, 2025", 
    items: "7 items", 
    amount: "₹8,600", 
    status: "Completed" 
  },
  { 
    id: "CP-2025-004", 
    customer: "Suresh Patel", 
    date: "10 Apr, 2025", 
    items: "2 items", 
    amount: "₹1,900", 
    status: "Completed" 
  },
];

const CounterPurchaseTable = () => {
  return (
    <DocumentTable
      title="Counter Purchases"
      documents={counterPurchases}
      icon={<ShoppingCart className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Counter Purchase"
      emptyStateText="No counter purchases found."
    />
  );
};

export default CounterPurchaseTable;


import React from "react";
import { Truck } from "lucide-react";
import DocumentTable, { DocumentItem } from "./DocumentTable";

// Sample data
const deliveryChallans: DocumentItem[] = [
  { 
    id: "DC-2025-001", 
    customer: "Rajesh Electronics", 
    date: "12 Apr, 2025", 
    items: "12 items", 
    amount: "₹24,500", 
    status: "Delivered" 
  },
  { 
    id: "DC-2025-002", 
    customer: "Sharma Electrical", 
    date: "11 Apr, 2025", 
    items: "8 items", 
    amount: "₹36,750", 
    status: "In Transit" 
  },
  { 
    id: "DC-2025-003", 
    customer: "Gupta Traders", 
    date: "10 Apr, 2025", 
    items: "5 items", 
    amount: "₹18,300", 
    status: "Preparing" 
  },
];

const DeliveryChallanTable = () => {
  return (
    <DocumentTable
      title="Delivery Challans"
      documents={deliveryChallans}
      icon={<Truck className="h-5 w-5 text-unnati-primary" />}
      createButtonText="Create Delivery Challan"
      emptyStateText="No delivery challans found."
      customColumns={[
        { header: "ID", accessor: "id" },
        { header: "Customer", accessor: "customer" },
        { header: "Date", accessor: "date" },
        { header: "Items", accessor: "items" },
        { header: "Value", accessor: "amount" },
        { header: "Status", accessor: "status" }
      ]}
    />
  );
};

export default DeliveryChallanTable;

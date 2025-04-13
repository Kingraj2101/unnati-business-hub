
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  ArrowDown, 
  CreditCard, 
  FileCheck, 
  FileOutput, 
  FileInput, 
  Truck, 
  ClipboardList, 
  Receipt, 
  ShoppingCart, 
  RefreshCcw, 
  DollarSign,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import InvoiceTable from "./InvoiceTable";
import SalesReturnTable from "./SalesReturnTable";
import CreditNoteTable from "./CreditNoteTable";
import QuotationTable from "./QuotationTable";
import DeliveryChallanTable from "./DeliveryChallanTable";
import ProformaInvoiceTable from "./ProformaInvoiceTable";
import AutomatedBillTable from "./AutomatedBillTable";
import CounterPurchaseTable from "./CounterPurchaseTable";
import PaymentOutTable from "./PaymentOutTable";
import PurchaseReturnTable from "./PurchaseReturnTable";
import DebitNoteTable from "./DebitNoteTable";
import PurchaseOrderTable from "./PurchaseOrderTable";
import InvoiceCreator from "./InvoiceCreator";

const BillingDeskTabs = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("invoices");
  const [isInvoiceCreatorOpen, setIsInvoiceCreatorOpen] = useState(false);
  const [documentType, setDocumentType] = useState("");

  const handleCreateNew = (type: string) => {
    setDocumentType(type);
    setIsInvoiceCreatorOpen(true);
  };

  const handleDocumentCreated = (document: any) => {
    toast({
      title: `${documentType} Created`,
      description: `${documentType} has been created successfully.`,
    });
    setIsInvoiceCreatorOpen(false);
  };

  return (
    <>
      <Tabs defaultValue="invoices" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 mb-6">
          <TabsTrigger value="invoices" className="flex items-center gap-1">
            <Receipt className="h-4 w-4" />
            <span className="hidden sm:inline">Invoice</span>
          </TabsTrigger>
          <TabsTrigger value="sales-return" className="flex items-center gap-1">
            <ArrowDown className="h-4 w-4" />
            <span className="hidden sm:inline">Sales Return</span>
          </TabsTrigger>
          <TabsTrigger value="credit-note" className="flex items-center gap-1">
            <FileOutput className="h-4 w-4" />
            <span className="hidden sm:inline">Credit Note</span>
          </TabsTrigger>
          <TabsTrigger value="quotation" className="flex items-center gap-1">
            <FileCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Quotation</span>
          </TabsTrigger>
          <TabsTrigger value="delivery-challan" className="flex items-center gap-1">
            <Truck className="h-4 w-4" />
            <span className="hidden sm:inline">Delivery Challan</span>
          </TabsTrigger>
          <TabsTrigger value="proforma-invoice" className="flex items-center gap-1">
            <ClipboardList className="h-4 w-4" />
            <span className="hidden sm:inline">Proforma</span>
          </TabsTrigger>
          <TabsTrigger value="automated-bill" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Auto Bill</span>
          </TabsTrigger>
          <TabsTrigger value="counter-purchase" className="flex items-center gap-1">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Counter Purchase</span>
          </TabsTrigger>
          <TabsTrigger value="payment-out" className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span className="hidden sm:inline">Payment Out</span>
          </TabsTrigger>
          <TabsTrigger value="purchase-return" className="flex items-center gap-1">
            <RefreshCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Purchase Return</span>
          </TabsTrigger>
          <TabsTrigger value="debit-note" className="flex items-center gap-1">
            <FileInput className="h-4 w-4" />
            <span className="hidden sm:inline">Debit Note</span>
          </TabsTrigger>
          <TabsTrigger value="purchase-order" className="flex items-center gap-1">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Purchase Order</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="invoices">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Invoice")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <FileText className="mr-2 h-4 w-4" />
              Create New Invoice
            </Button>
          </div>
          <InvoiceTable />
        </TabsContent>

        <TabsContent value="sales-return">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Sales Return")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Create Sales Return
            </Button>
          </div>
          <SalesReturnTable />
        </TabsContent>

        <TabsContent value="credit-note">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Credit Note")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <FileOutput className="mr-2 h-4 w-4" />
              Create Credit Note
            </Button>
          </div>
          <CreditNoteTable />
        </TabsContent>

        <TabsContent value="quotation">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Quotation")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <FileCheck className="mr-2 h-4 w-4" />
              Create Quotation
            </Button>
          </div>
          <QuotationTable />
        </TabsContent>

        <TabsContent value="delivery-challan">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Delivery Challan")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <Truck className="mr-2 h-4 w-4" />
              Create Delivery Challan
            </Button>
          </div>
          <DeliveryChallanTable />
        </TabsContent>

        <TabsContent value="proforma-invoice">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Proforma Invoice")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              Create Proforma Invoice
            </Button>
          </div>
          <ProformaInvoiceTable />
        </TabsContent>

        <TabsContent value="automated-bill">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Automated Bill")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <FileText className="mr-2 h-4 w-4" />
              Create Automated Bill
            </Button>
          </div>
          <AutomatedBillTable />
        </TabsContent>

        <TabsContent value="counter-purchase">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Counter Purchase")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Create Counter Purchase
            </Button>
          </div>
          <CounterPurchaseTable />
        </TabsContent>

        <TabsContent value="payment-out">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Payment Out")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Create Payment Out
            </Button>
          </div>
          <PaymentOutTable />
        </TabsContent>

        <TabsContent value="purchase-return">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Purchase Return")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Create Purchase Return
            </Button>
          </div>
          <PurchaseReturnTable />
        </TabsContent>

        <TabsContent value="debit-note">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Debit Note")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <FileInput className="mr-2 h-4 w-4" />
              Create Debit Note
            </Button>
          </div>
          <DebitNoteTable />
        </TabsContent>

        <TabsContent value="purchase-order">
          <div className="mb-4">
            <Button 
              onClick={() => handleCreateNew("Purchase Order")}
              className="bg-unnati-primary hover:bg-unnati-primary/90"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Create Purchase Order
            </Button>
          </div>
          <PurchaseOrderTable />
        </TabsContent>
      </Tabs>

      <InvoiceCreator 
        isOpen={isInvoiceCreatorOpen} 
        onClose={() => setIsInvoiceCreatorOpen(false)}
        onInvoiceCreated={handleDocumentCreated}
        documentType={documentType}
      />
    </>
  );
};

export default BillingDeskTabs;

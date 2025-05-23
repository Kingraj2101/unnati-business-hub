
import React, { useState } from "react";
import { Check, CreditCard, Receipt, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PaymentProcessorProps {
  invoiceId: string;
  customerName: string;
  amount: string;
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
}

const PaymentProcessor: React.FC<PaymentProcessorProps> = ({
  invoiceId,
  customerName,
  amount,
  isOpen,
  onClose,
  onPaymentComplete
}) => {
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const [processing, setProcessing] = useState(false);
  const [invoiceType, setInvoiceType] = useState("with-gst");
  
  // Parse amount to remove currency symbol and convert to number
  const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
  
  // Calculate GST (18% by default)
  const gstRate = 0.18;
  const gstAmount = invoiceType === "with-gst" ? numericAmount * gstRate : 0;
  const baseAmount = invoiceType === "with-gst" ? numericAmount / (1 + gstRate) : numericAmount;
  const totalAmount = numericAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      
      toast({
        title: "Payment Recorded",
        description: `₹${amount} received from ${customerName} (${invoiceType === "with-gst" ? "With GST" : "Without GST"})`,
        variant: "default",
      });
      
      onPaymentComplete();
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Record Payment</DialogTitle>
          <DialogDescription>
            Record payment for invoice {invoiceId} from {customerName}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="invoice-type" className="text-right">
                Invoice Type
              </Label>
              <div className="col-span-3">
                <RadioGroup
                  value={invoiceType}
                  onValueChange={setInvoiceType}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="with-gst" id="with-gst" />
                    <Label htmlFor="with-gst" className="cursor-pointer">With GST</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="without-gst" id="without-gst" />
                    <Label htmlFor="without-gst" className="cursor-pointer">Without GST</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg border border-gray-100">
              {invoiceType === "with-gst" ? (
                <>
                  <p className="text-sm text-gray-500 mb-2">Amount Breakdown</p>
                  <div className="w-full grid grid-cols-2 gap-2 mb-2">
                    <p className="text-sm text-gray-600">Base Amount:</p>
                    <p className="text-sm text-gray-800 text-right">₹{baseAmount.toFixed(2)}</p>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-2 mb-2">
                    <p className="text-sm text-gray-600">GST (18%):</p>
                    <p className="text-sm text-gray-800 text-right">₹{gstAmount.toFixed(2)}</p>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-2 pt-2 border-t">
                    <p className="text-sm font-semibold">Total Amount:</p>
                    <p className="text-sm font-bold text-right">₹{totalAmount.toFixed(2)}</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-500">Amount Due</p>
                  <p className="text-3xl font-bold text-unnati-primary">₹{totalAmount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">No GST Applicable</p>
                </>
              )}
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="payment-date" className="text-right">
                Date
              </Label>
              <Input
                id="payment-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="payment-method" className="text-right">
                Method
              </Label>
              <Select 
                value={paymentMethod}
                onValueChange={setPaymentMethod}
              >
                <SelectTrigger id="payment-method" className="col-span-3">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="cheque">Cheque</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reference" className="text-right">
                Reference
              </Label>
              <Input
                id="reference"
                placeholder="Transaction ID, Cheque No, etc."
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <Input
                id="notes"
                placeholder="Additional information"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={processing}>
              {processing ? (
                <>Processing...</>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Record Payment
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentProcessor;

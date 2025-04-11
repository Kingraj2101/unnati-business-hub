
import React, { useState } from "react";
import { Plus, Trash2, FileText, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface InvoiceCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  onInvoiceCreated: (invoice: any) => void;
}

// Mock product list for the demo
const PRODUCTS = [
  { id: "P001", name: "MCB 6A Single Pole", price: 120 },
  { id: "P002", name: "MCB 16A Single Pole", price: 150 },
  { id: "P003", name: "MCB 32A Triple Pole", price: 450 },
  { id: "P004", name: "RCCB 25A 2P 100mA", price: 850 },
  { id: "P005", name: "Distribution Box 4 Way", price: 650 },
  { id: "P006", name: "LED Bulb 9W", price: 90 },
  { id: "P007", name: "Wire 1.5 sq mm (per meter)", price: 18 },
  { id: "P008", name: "Wire 2.5 sq mm (per meter)", price: 28 },
  { id: "P009", name: "Wire 4.0 sq mm (per meter)", price: 44 },
  { id: "P010", name: "Switch 6A", price: 22 },
];

// Mock customer list for the demo
const CUSTOMERS = [
  { id: "C001", name: "Rajesh Electronics", address: "Varanasi, UP" },
  { id: "C002", name: "Modern Lights", address: "Lucknow, UP" },
  { id: "C003", name: "City Electricals", address: "Patna, Bihar" },
  { id: "C004", name: "Sharma Hardware", address: "Kanpur, UP" },
  { id: "C005", name: "Quality Electronics", address: "Allahabad, UP" },
];

interface InvoiceItem {
  productId: string;
  description: string;
  quantity: number;
  price: number;
}

const InvoiceCreator: React.FC<InvoiceCreatorProps> = ({
  isOpen,
  onClose,
  onInvoiceCreated
}) => {
  const { toast } = useToast();
  const [customer, setCustomer] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split("T")[0]);
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([
    { productId: "", description: "", quantity: 1, price: 0 }
  ]);
  const [taxRate, setTaxRate] = useState("18");
  const [invoiceType, setInvoiceType] = useState("with-gst");
  
  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const taxAmount = invoiceType === "with-gst" ? (subtotal * parseFloat(taxRate)) / 100 : 0;
  const total = subtotal + taxAmount;

  const addItem = () => {
    setItems([...items, { productId: "", description: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: any) => {
    const newItems = [...items];
    
    if (field === 'productId' && value) {
      const product = PRODUCTS.find(p => p.id === value);
      if (product) {
        newItems[index] = {
          ...newItems[index],
          productId: value,
          description: product.name,
          price: product.price
        };
      }
    } else {
      newItems[index] = { ...newItems[index], [field]: value };
    }
    
    setItems(newItems);
  };

  const handleCustomerChange = (customerId: string) => {
    setCustomer(customerId);
    // Set due date to 30 days from invoice date
    const invoiceDateObj = new Date(invoiceDate);
    invoiceDateObj.setDate(invoiceDateObj.getDate() + 30);
    setDueDate(invoiceDateObj.toISOString().split("T")[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!customer) {
      toast({
        title: "Missing customer",
        description: "Please select a customer for this invoice",
        variant: "destructive",
      });
      return;
    }

    if (items.some(item => !item.productId || item.quantity <= 0)) {
      toast({
        title: "Invalid items",
        description: "Please ensure all items have a product and positive quantity",
        variant: "destructive",
      });
      return;
    }

    // Create invoice object
    const selectedCustomer = CUSTOMERS.find(c => c.id === customer);
    
    const invoice = {
      id: `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: selectedCustomer?.name,
      date: invoiceDate,
      dueDate: dueDate,
      items: items.map(item => ({
        ...item,
        description: item.description || PRODUCTS.find(p => p.id === item.productId)?.name || "",
        total: item.price * item.quantity
      })),
      subtotal,
      taxRate: invoiceType === "with-gst" ? parseFloat(taxRate) : 0,
      taxAmount,
      total,
      notes,
      status: "Pending",
      invoiceType: invoiceType
    };

    // Simulate saving
    setTimeout(() => {
      toast({
        title: "Invoice Created",
        description: `${invoiceType === "with-gst" ? "GST" : "Non-GST"} Invoice ${invoice.id} has been created successfully`,
      });
      
      onInvoiceCreated(invoice);
      onClose();
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Invoice</DialogTitle>
          <DialogDescription>
            Create a new invoice for your customer
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer">Customer</Label>
                <Select
                  value={customer}
                  onValueChange={handleCustomerChange}
                >
                  <SelectTrigger id="customer">
                    <SelectValue placeholder="Select customer" />
                  </SelectTrigger>
                  <SelectContent>
                    {CUSTOMERS.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-2">
                  <FileText className="h-5 w-5 text-unnati-primary" />
                  <span className="font-bold text-lg text-unnati-primary">INVOICE</span>
                </div>
                <div className="text-sm text-gray-500">
                  Shree Unnati Traders<br />
                  Varanasi, Uttar Pradesh
                </div>
              </div>
            </div>
            
            <div className="border-b pb-4">
              <Label className="mb-2 block">Invoice Type</Label>
              <RadioGroup
                value={invoiceType}
                onValueChange={setInvoiceType}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="with-gst" id="invoice-with-gst" />
                  <Label htmlFor="invoice-with-gst" className="cursor-pointer">With GST</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="without-gst" id="invoice-without-gst" />
                  <Label htmlFor="invoice-without-gst" className="cursor-pointer">Without GST</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="invoice-date">Invoice Date</Label>
                <Input
                  id="invoice-date"
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="due-date">Due Date</Label>
                <Input
                  id="due-date"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              
              {invoiceType === "with-gst" && (
                <div>
                  <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                  <Select
                    value={taxRate}
                    onValueChange={setTaxRate}
                  >
                    <SelectTrigger id="tax-rate">
                      <SelectValue placeholder="Select tax rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">GST 5%</SelectItem>
                      <SelectItem value="12">GST 12%</SelectItem>
                      <SelectItem value="18">GST 18%</SelectItem>
                      <SelectItem value="28">GST 28%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Invoice Items</Label>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={addItem}
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Item
                </Button>
              </div>
              
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead style={{ width: "30%" }}>Item</TableHead>
                      <TableHead style={{ width: "35%" }}>Description</TableHead>
                      <TableHead style={{ width: "10%" }}>Qty</TableHead>
                      <TableHead style={{ width: "15%" }}>Price (₹)</TableHead>
                      <TableHead style={{ width: "15%" }}>Total (₹)</TableHead>
                      <TableHead style={{ width: "5%" }}></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Select
                            value={item.productId}
                            onValueChange={(value) => updateItem(index, "productId", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select product" />
                            </SelectTrigger>
                            <SelectContent>
                              {PRODUCTS.map((product) => (
                                <SelectItem key={product.id} value={product.id}>
                                  {product.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            value={item.description}
                            onChange={(e) => updateItem(index, "description", e.target.value)}
                            placeholder="Description"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateItem(index, "quantity", parseInt(e.target.value) || 0)}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.price}
                            onChange={(e) => updateItem(index, "price", parseFloat(e.target.value) || 0)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(index)}
                            disabled={items.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3} rowSpan={invoiceType === "with-gst" ? 3 : 2} className="align-top">
                        <Label htmlFor="notes" className="mb-2 block">Notes</Label>
                        <Textarea
                          id="notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Additional notes, payment terms, etc."
                          rows={3}
                        />
                      </TableCell>
                      <TableCell className="text-right">Subtotal</TableCell>
                      <TableCell className="text-right font-medium">
                        ₹{subtotal.toFixed(2)}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    {invoiceType === "with-gst" && (
                      <TableRow>
                        <TableCell className="text-right">
                          GST ({parseFloat(taxRate)}%)
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ₹{taxAmount.toFixed(2)}
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell className="text-right font-bold">Total</TableCell>
                      <TableCell className="text-right font-bold text-lg">
                        ₹{total.toFixed(2)}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Create {invoiceType === "with-gst" ? "GST" : "Non-GST"} Invoice
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceCreator;


import React, { useState } from "react";
import { IndianRupee, Plus, Trash2, Calculator, Save } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface QuickBillFormProps {
  onSubmit: (data: any) => void;
}

interface BillItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

const QuickBillForm: React.FC<QuickBillFormProps> = ({ onSubmit }) => {
  const [items, setItems] = useState<BillItem[]>([
    { id: 1, name: "", quantity: 1, price: 0, total: 0 }
  ]);
  const [customerName, setCustomerName] = useState("Walk-in Customer");
  const [contactNumber, setContactNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [discount, setDiscount] = useState(0);
  const [note, setNote] = useState("");

  const form = useForm();

  const addItem = () => {
    const newItem: BillItem = {
      id: items.length ? Math.max(...items.map(item => item.id)) + 1 : 1,
      name: "",
      quantity: 1,
      price: 0,
      total: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: number) => {
    if (items.length === 1) {
      return; // Keep at least one item
    }
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: number, field: keyof BillItem, value: string | number) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        // Recalculate total if quantity or price changes
        if (field === 'quantity' || field === 'price') {
          updatedItem.total = updatedItem.quantity * updatedItem.price;
        }
        return updatedItem;
      }
      return item;
    });
    setItems(newItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.total, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * discount) / 100;
    return subtotal - discountAmount;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const billData = {
      customerName,
      contactNumber,
      items,
      subtotal: calculateSubtotal(),
      discount,
      total: calculateTotal(),
      paymentMethod,
      note,
      date: new Date().toISOString()
    };
    
    onSubmit(billData);
    
    // Reset form
    setItems([{ id: 1, name: "", quantity: 1, price: 0, total: 0 }]);
    setCustomerName("Walk-in Customer");
    setContactNumber("");
    setDiscount(0);
    setNote("");
    setPaymentMethod("cash");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-unnati-primary" />
          Quick Bill
        </CardTitle>
        <CardDescription>
          Create and print bills quickly for retail customers
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customerName">Customer Name</Label>
              <Input
                id="customerName"
                placeholder="Walk-in Customer"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number (Optional)</Label>
              <Input
                id="contactNumber"
                placeholder="Phone Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Items</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={addItem}
                className="h-8"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Item
              </Button>
            </div>
            
            <div className="border rounded-md">
              <div className="grid grid-cols-12 gap-2 p-3 bg-gray-50 border-b text-sm font-medium">
                <div className="col-span-5">Item</div>
                <div className="col-span-2">Qty</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Total</div>
                <div className="col-span-1"></div>
              </div>
              
              <div className="space-y-2 p-2">
                {items.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-5">
                      <Input
                        placeholder="Item name"
                        value={item.name}
                        onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="relative">
                        <IndianRupee className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                          type="number"
                          min="0"
                          className="pl-8"
                          value={item.price}
                          onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <span className="px-2">₹</span>
                      <span>{item.total.toFixed(2)}</span>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="h-8 w-8"
                        disabled={items.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select
                value={paymentMethod}
                onValueChange={setPaymentMethod}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="card">Card</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="cheque">Cheque</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="discount">Discount (%)</Label>
              <Input
                id="discount"
                type="number"
                min="0"
                max="100"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="note">Note (Optional)</Label>
            <Input
              id="note"
              placeholder="Additional information"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>₹{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount ({discount}%):</span>
              <span>-₹{((calculateSubtotal() * discount) / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit" className="bg-unnati-primary hover:bg-unnati-primary/90">
            <Save className="mr-2 h-4 w-4" />
            Generate Bill
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default QuickBillForm;

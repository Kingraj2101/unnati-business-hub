
import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  X, 
  FileText, 
  Package, 
  User, 
  ShoppingCart, 
  CreditCard,
  Truck,
  Settings,
  BarChart3,
  Calendar,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface SearchResult {
  id: string;
  title: string;
  type: string;
  icon: React.ReactNode;
  link: string;
  description?: string;
}

interface SearchBarProps {
  placeholder?: string;
  dashboardType: 'admin' | 'store' | 'factory' | 'vendor';
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search...",
  dashboardType
}) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const getSearchResults = (): SearchResult[] => {
    if (dashboardType === 'admin') {
      return [
        { 
          id: "1", 
          title: "Create Invoice", 
          type: "Billing", 
          icon: <FileText className="h-4 w-4 text-blue-600" />, 
          link: "/dashboard/billing",
          description: "Generate a new customer invoice" 
        },
        { 
          id: "2", 
          title: "Inventory Check", 
          type: "Inventory", 
          icon: <Package className="h-4 w-4 text-green-600" />, 
          link: "/dashboard/inventory",
          description: "Check current stock levels" 
        },
        { 
          id: "3", 
          title: "Sales Report", 
          type: "Reports", 
          icon: <BarChart3 className="h-4 w-4 text-purple-600" />, 
          link: "/dashboard/reports",
          description: "View sales performance reports" 
        },
        { 
          id: "4", 
          title: "User Management", 
          type: "Admin", 
          icon: <User className="h-4 w-4 text-orange-600" />, 
          link: "/dashboard/users",
          description: "Manage user accounts and permissions" 
        },
        { 
          id: "5", 
          title: "System Settings", 
          type: "Settings", 
          icon: <Settings className="h-4 w-4 text-gray-600" />, 
          link: "/dashboard/settings",
          description: "Configure system preferences" 
        }
      ];
    } else if (dashboardType === 'store') {
      return [
        { 
          id: "1", 
          title: "New Sale", 
          type: "Billing", 
          icon: <ShoppingCart className="h-4 w-4 text-blue-600" />, 
          link: "/store-dashboard/billing",
          description: "Process a new store sale" 
        },
        { 
          id: "2", 
          title: "Check Stock", 
          type: "Inventory", 
          icon: <Package className="h-4 w-4 text-green-600" />, 
          link: "/store-dashboard/inventory",
          description: "Check store inventory levels" 
        },
        { 
          id: "3", 
          title: "Customer Management", 
          type: "Customers", 
          icon: <User className="h-4 w-4 text-purple-600" />, 
          link: "/store-dashboard/customers",
          description: "Manage customer information" 
        },
        { 
          id: "4", 
          title: "Order Management", 
          type: "Orders", 
          icon: <ShoppingCart className="h-4 w-4 text-amber-600" />, 
          link: "/store-dashboard/orders",
          description: "Track and manage customer orders" 
        },
        { 
          id: "5", 
          title: "Process Payment", 
          type: "Payments", 
          icon: <CreditCard className="h-4 w-4 text-red-600" />, 
          link: "/store-dashboard/payments",
          description: "Process customer payments" 
        }
      ];
    } else if (dashboardType === 'factory') {
      return [
        { 
          id: "1", 
          title: "Production Status", 
          type: "Production", 
          icon: <Calendar className="h-4 w-4 text-blue-600" />, 
          link: "/factory-dashboard/production",
          description: "View current production status" 
        },
        { 
          id: "2", 
          title: "Create Factory Invoice", 
          type: "Billing", 
          icon: <FileText className="h-4 w-4 text-green-600" />, 
          link: "/factory-dashboard/billing",
          description: "Generate factory billing document" 
        },
        { 
          id: "3", 
          title: "Raw Materials", 
          type: "Inventory", 
          icon: <Package className="h-4 w-4 text-amber-600" />, 
          link: "/factory-dashboard/materials",
          description: "Check raw material inventory" 
        },
        { 
          id: "4", 
          title: "Worker Management", 
          type: "HR", 
          icon: <User className="h-4 w-4 text-purple-600" />, 
          link: "/factory-dashboard/workers",
          description: "Manage factory workers" 
        },
        { 
          id: "5", 
          title: "Quality Control", 
          type: "QC", 
          icon: <CheckCircle2 className="h-4 w-4 text-orange-600" />, 
          link: "/factory-dashboard/quality",
          description: "Quality control processes" 
        }
      ];
    } else { // vendor
      return [
        { 
          id: "1", 
          title: "Order Management", 
          type: "Orders", 
          icon: <ShoppingCart className="h-4 w-4 text-blue-600" />, 
          link: "/vendor-dashboard/orders",
          description: "View and manage orders" 
        },
        { 
          id: "2", 
          title: "Deliveries", 
          type: "Logistics", 
          icon: <Truck className="h-4 w-4 text-green-600" />, 
          link: "/vendor-dashboard/deliveries",
          description: "Track deliveries and shipments" 
        },
        { 
          id: "3", 
          title: "Payment Status", 
          type: "Finance", 
          icon: <CreditCard className="h-4 w-4 text-amber-600" />, 
          link: "/vendor-dashboard/payments",
          description: "Check payment status" 
        },
        { 
          id: "4", 
          title: "Product Catalog", 
          type: "Products", 
          icon: <Package className="h-4 w-4 text-purple-600" />, 
          link: "/vendor-dashboard/products",
          description: "Manage product listings" 
        },
        { 
          id: "5", 
          title: "Invoice History", 
          type: "Billing", 
          icon: <FileText className="h-4 w-4 text-orange-600" />, 
          link: "/vendor-dashboard/invoices",
          description: "View invoice history" 
        }
      ];
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    const allResults = getSearchResults();
    const filtered = allResults.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && 
         item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setResults(filtered);
  }, [searchQuery, dashboardType]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    
    toast({
      title: `Navigating to ${result.title}`,
      description: `Opening ${result.type} section`,
    });
    
    navigate(result.link);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setResults([]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center w-full md:w-64 h-10 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-unnati-primary dark:focus:ring-unnati-primary dark:text-gray-200"
      >
        <Search className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
        <span className="text-gray-500 dark:text-gray-400">{placeholder}</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3 dark:border-gray-700">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput
            ref={inputRef}
            placeholder={`Search ${dashboardType} dashboard...`}
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
          {searchQuery && (
            <button onClick={resetSearch} className="focus:outline-none">
              <X className="h-4 w-4 shrink-0 opacity-50" />
            </button>
          )}
        </div>
        <CommandList>
          {results.length === 0 && searchQuery !== "" ? (
            <CommandEmpty>No results found.</CommandEmpty>
          ) : (
            results.reduce<React.ReactNode[]>((acc, result, index, array) => {
              const currentType = result.type;
              const prevType = index > 0 ? array[index - 1].type : null;

              if (currentType !== prevType) {
                acc.push(
                  <CommandGroup heading={currentType} key={currentType}>
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelect(result)}
                      className="flex items-center cursor-pointer"
                    >
                      {result.icon}
                      <div className="ml-2 flex flex-col">
                        <span>{result.title}</span>
                        {result.description && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {result.description}
                          </span>
                        )}
                      </div>
                    </CommandItem>
                  </CommandGroup>
                );
              } else {
                const lastGroup = acc[acc.length - 1] as React.ReactElement;
                const newChildren = [
                  ...(lastGroup.props.children || []),
                  <CommandItem
                    key={result.id}
                    onSelect={() => handleSelect(result)}
                    className="flex items-center cursor-pointer"
                  >
                    {result.icon}
                    <div className="ml-2 flex flex-col">
                      <span>{result.title}</span>
                      {result.description && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {result.description}
                        </span>
                      )}
                    </div>
                  </CommandItem>,
                ];

                acc[acc.length - 1] = React.cloneElement(lastGroup, {}, newChildren);
              }

              return acc;
            }, [])
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;

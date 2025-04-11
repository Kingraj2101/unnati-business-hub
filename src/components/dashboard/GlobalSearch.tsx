
import React, { useState, useEffect, useRef } from "react";
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { 
  Search, 
  FileText, 
  ShoppingCart, 
  Package, 
  Users, 
  Settings,
  BarChart3,
  CreditCard,
  Store,
  Factory,
  Truck,
  ClipboardList,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  category: string;
  title: string;
  icon: React.ReactNode;
  link: string;
  description?: string;
}

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    // Billing & Finance
    {
      category: "Billing & Finance",
      title: "Billing Dashboard",
      icon: <FileText className="h-4 w-4" />,
      link: "/dashboard/billing",
      description: "Manage invoices and payments"
    },
    {
      category: "Billing & Finance",
      title: "Accounting",
      icon: <CreditCard className="h-4 w-4" />,
      link: "/dashboard/accounting",
      description: "Financial reports and ledgers"
    },
    {
      category: "Billing & Finance",
      title: "Expenses",
      icon: <CreditCard className="h-4 w-4" />,
      link: "/dashboard/expenses",
      description: "Track and manage expenses"
    },
    
    // Inventory
    {
      category: "Inventory",
      title: "Inventory Management",
      icon: <Package className="h-4 w-4" />,
      link: "/dashboard/inventory",
      description: "Manage product stock"
    },
    {
      category: "Inventory",
      title: "Factory Stock",
      icon: <Factory className="h-4 w-4" />,
      link: "/dashboard/factory-stock",
      description: "Factory inventory and materials"
    },
    
    // Retail & Sales
    {
      category: "Retail & Sales",
      title: "Retail Store",
      icon: <Store className="h-4 w-4" />,
      link: "/dashboard/retail",
      description: "Manage retail operations"
    },
    {
      category: "Retail & Sales",
      title: "Store Dashboard",
      icon: <Store className="h-4 w-4" />,
      link: "/store-dashboard",
      description: "Store operations overview"
    },
    {
      category: "Retail & Sales",
      title: "Store Billing",
      icon: <FileText className="h-4 w-4" />,
      link: "/store-dashboard/billing",
      description: "Store invoices and billing"
    },
    {
      category: "Retail & Sales",
      title: "Store Supply",
      icon: <Truck className="h-4 w-4" />,
      link: "/store-dashboard/supply",
      description: "Manage store supplies"
    },
    
    // Factory & Production
    {
      category: "Factory & Production",
      title: "Factory Dashboard",
      icon: <Factory className="h-4 w-4" />,
      link: "/factory-dashboard",
      description: "Factory operations overview"
    },
    {
      category: "Factory & Production",
      title: "Factory Billing",
      icon: <FileText className="h-4 w-4" />,
      link: "/factory-dashboard/billing",
      description: "Factory invoices and billing"
    },
    {
      category: "Factory & Production",
      title: "Factory Supply",
      icon: <ClipboardList className="h-4 w-4" />,
      link: "/factory-dashboard/supply",
      description: "Manage factory supplies"
    },
    
    // Reports & Analytics
    {
      category: "Reports & Analytics",
      title: "Reports Dashboard",
      icon: <BarChart3 className="h-4 w-4" />,
      link: "/dashboard/reports",
      description: "Business insights and analytics"
    },
    {
      category: "Reports & Analytics",
      title: "Suppliers",
      icon: <Truck className="h-4 w-4" />,
      link: "/dashboard/suppliers",
      description: "Vendor and supplier management"
    },
    
    // Services & Support
    {
      category: "Services & Support",
      title: "After-Sales Service",
      icon: <Users className="h-4 w-4" />,
      link: "/dashboard/service",
      description: "Customer service and support"
    },
    
    // Settings & Administration
    {
      category: "Settings & Administration",
      title: "Settings",
      icon: <Settings className="h-4 w-4" />,
      link: "/dashboard/settings",
      description: "System configuration"
    }
  ];

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
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && 
         item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setResults(filtered);
  }, [searchQuery]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
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
        className="flex items-center w-full md:w-64 h-10 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-unnati-primary"
      >
        <Search className="h-4 w-4 text-gray-500 mr-2" />
        <span className="text-gray-500">Search...</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput
            ref={inputRef}
            placeholder="Search across dashboards..."
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
              const currentCategory = result.category;
              const prevCategory = index > 0 ? array[index - 1].category : null;

              if (currentCategory !== prevCategory) {
                acc.push(
                  <CommandGroup heading={currentCategory} key={currentCategory}>
                    <CommandItem
                      key={result.title}
                      onSelect={() => handleSelect(result)}
                      className="flex items-center cursor-pointer"
                    >
                      {result.icon}
                      <div className="ml-2 flex flex-col">
                        <span>{result.title}</span>
                        {result.description && (
                          <span className="text-xs text-gray-500">
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
                    key={result.title}
                    onSelect={() => handleSelect(result)}
                    className="flex items-center cursor-pointer"
                  >
                    {result.icon}
                    <div className="ml-2 flex flex-col">
                      <span>{result.title}</span>
                      {result.description && (
                        <span className="text-xs text-gray-500">
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

export default GlobalSearch;

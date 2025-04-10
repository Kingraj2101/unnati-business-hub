
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BillingDashboard from "./pages/BillingDashboard";
import AccountingDashboard from "./pages/AccountingDashboard"; 
import InventoryDashboard from "./pages/InventoryDashboard";
import ServiceDashboard from "./pages/ServiceDashboard";
import StoreDashboard from "./pages/StoreDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import FactoryDashboard from "./pages/FactoryDashboard";
import ExpensesDashboard from "./pages/ExpensesDashboard";
import FactoryStockDashboard from "./pages/FactoryStockDashboard";
import RetailDashboard from "./pages/RetailDashboard";
import SuppliersDashboard from "./pages/SuppliersDashboard";
import ReportsDashboard from "./pages/ReportsDashboard";
import NotFound from "./pages/NotFound";

// Factory Pages
import FactoryBillingSystem from "./pages/factory/FactoryBillingSystem";
import FactorySupplySystem from "./pages/factory/FactorySupplySystem";

// Store Pages
import StoreBillingSystem from "./pages/store/StoreBillingSystem";
import StoreSupplySystem from "./pages/store/StoreSupplySystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/billing" element={<BillingDashboard />} />
          <Route path="/dashboard/accounting" element={<AccountingDashboard />} />
          <Route path="/dashboard/inventory" element={<InventoryDashboard />} />
          <Route path="/dashboard/service" element={<ServiceDashboard />} />
          <Route path="/dashboard/expenses" element={<ExpensesDashboard />} />
          <Route path="/dashboard/factory-stock" element={<FactoryStockDashboard />} />
          <Route path="/dashboard/retail" element={<RetailDashboard />} />
          <Route path="/dashboard/suppliers" element={<SuppliersDashboard />} />
          <Route path="/dashboard/reports" element={<ReportsDashboard />} />
          
          {/* Store Routes */}
          <Route path="/store-dashboard" element={<StoreDashboard />} />
          <Route path="/store-dashboard/billing" element={<StoreBillingSystem />} />
          <Route path="/store-dashboard/supply" element={<StoreSupplySystem />} />
          
          {/* Factory Routes */}
          <Route path="/factory-dashboard" element={<FactoryDashboard />} />
          <Route path="/factory-dashboard/billing" element={<FactoryBillingSystem />} />
          <Route path="/factory-dashboard/supply" element={<FactorySupplySystem />} />
          
          {/* Vendor Routes */}
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

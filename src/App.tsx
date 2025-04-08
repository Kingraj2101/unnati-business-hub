
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
import NotFound from "./pages/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

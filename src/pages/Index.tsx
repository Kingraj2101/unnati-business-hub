import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    // If authenticated, redirect to dashboard
    // Otherwise, redirect to login page
    const redirectPath = isAuthenticated ? "/dashboard" : "/login";
    
    const redirectTimer = setTimeout(() => {
      navigate(redirectPath);
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [navigate, isAuthenticated]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Loader2 className="h-16 w-16 text-unnati-primary animate-spin mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Welcome to Unnati Traders</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg">Redirecting to {isAuthenticated ? "dashboard" : "login"}...</p>
    </div>
  );
};

export default Index;

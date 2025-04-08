
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block">
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-unnati-dark mb-4">
                  Welcome to Unnati Traders Management System
                </h1>
                <p className="text-gray-600 mb-8">
                  Access your dashboard to manage inventory, billing, and business operations efficiently.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-4">System Features:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-unnati-secondary mr-2">✓</span>
                      <span>Comprehensive inventory management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-unnati-secondary mr-2">✓</span>
                      <span>GST & non-GST billing and invoicing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-unnati-secondary mr-2">✓</span>
                      <span>Financial tracking and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-unnati-secondary mr-2">✓</span>
                      <span>Buy Now, Pay Later management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-unnati-secondary mr-2">✓</span>
                      <span>Supplier and distributor management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-unnati-secondary mr-2">✓</span>
                      <span>Real-time business analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

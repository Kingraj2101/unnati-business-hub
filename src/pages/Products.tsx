
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Package, 
  Zap, 
  Truck, 
  ShieldCheck, 
  BarChart3, 
  Clock
} from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Copper Wires",
      category: "Wire Manufacturing",
      image: "https://images.unsplash.com/photo-1610294343352-4f8328b2a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "High-quality copper wires for residential and commercial electrical applications."
    },
    {
      id: 2,
      name: "Aluminum Wires",
      category: "Wire Manufacturing",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Durable aluminum wires ideal for industrial and utility distribution."
    },
    {
      id: 3,
      name: "Switchgear",
      category: "Electric Hardware",
      image: "https://images.unsplash.com/photo-1595759683436-87c87c7586b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Comprehensive range of switchgear for protection and isolation of electrical equipment."
    },
    {
      id: 4,
      name: "Circuit Breakers",
      category: "Electric Hardware",
      image: "https://images.unsplash.com/photo-1626193081114-b3457316d83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Safety-oriented circuit breakers for overload and short-circuit protection."
    },
    {
      id: 5,
      name: "Cable Accessories",
      category: "Electric Hardware",
      image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Complete range of cable accessories for installation and management."
    },
    {
      id: 6,
      name: "LED Lighting",
      category: "Electric Hardware",
      image: "https://images.unsplash.com/photo-1573030889348-c6b0f8b15e40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Energy-efficient LED lighting solutions for various applications."
    }
  ];

  const services = [
    {
      id: 1,
      name: "Inventory Management",
      icon: <Package />,
      description: "Track and manage stock levels across multiple locations with real-time updates and automated notifications."
    },
    {
      id: 2,
      name: "Billing & Invoicing",
      icon: <Zap />,
      description: "Generate GST and non-GST invoices, manage payments, and track outstanding balances with ease."
    },
    {
      id: 3,
      name: "Distribution Network",
      icon: <Truck />,
      description: "Streamline your distribution operations with order management, logistics tracking, and delivery scheduling."
    },
    {
      id: 4,
      name: "Buy Now, Pay Later",
      icon: <ShieldCheck />,
      description: "Offer flexible payment terms to your trusted customers with our secure BNPL management system."
    },
    {
      id: 5,
      name: "Financial Reporting",
      icon: <BarChart3 />,
      description: "Access comprehensive financial reports including profit & loss statements, sales analysis, and expense tracking."
    },
    {
      id: 6,
      name: "Real-time Analytics",
      icon: <Clock />,
      description: "Make data-driven decisions with real-time business analytics and performance dashboards."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Products Hero */}
        <section className="bg-unnati-primary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-unnati-dark mb-4">Our Products & Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of electrical products and business management services designed to empower your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Quality Electrical Products</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                We manufacture and supply a wide range of high-quality electrical products for various applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-unnati-primary bg-unnati-primary/10 rounded-full mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button
                      variant="outline"
                      className="text-unnati-primary border-unnati-primary hover:bg-unnati-primary hover:text-white transition-colors w-full"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                asChild
                className="bg-unnati-primary hover:bg-unnati-primary/90"
              >
                <Link to="/contact">
                  Request Product Catalog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Business Management Services</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive business management system streamlines your operations and boosts efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-unnati-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                asChild
                className="bg-unnati-primary hover:bg-unnati-primary/90"
              >
                <Link to="/login">
                  Try Our Management System
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* BNPL Feature Highlight */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-unnati-dark mb-6">Buy Now, Pay Later</h2>
                <p className="text-gray-600 mb-4">
                  Our innovative BNPL feature allows you to offer flexible payment terms to your trusted customers, while maintaining complete control over your finances.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Set customizable credit limits for each customer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Automated payment reminders and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Comprehensive reporting on outstanding payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Integration with billing and accounting systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Risk assessment tools for credit approvals</span>
                  </li>
                </ul>
                
                <Button 
                  asChild
                  className="bg-unnati-primary hover:bg-unnati-primary/90"
                >
                  <Link to="/contact">
                    Learn More About BNPL
                  </Link>
                </Button>
              </div>
              
              <div className="bg-unnati-primary/5 p-8 rounded-lg">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-unnati-dark">How BNPL Works</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Set Credit Terms</h4>
                        <p className="text-sm text-gray-600">Define payment terms and credit limits for each customer in the system.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Process BNPL Orders</h4>
                        <p className="text-sm text-gray-600">Create invoices with deferred payment dates through the billing system.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Track Outstanding Payments</h4>
                        <p className="text-sm text-gray-600">Monitor all pending payments and upcoming dues through the dashboard.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Automated Reminders</h4>
                        <p className="text-sm text-gray-600">System sends timely reminders to customers about upcoming payment dues.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Payment Collection</h4>
                        <p className="text-sm text-gray-600">Record payments received and reconcile accounts automatically.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-unnati-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to learn more about our products and services, or to request a personalized demo of our business management system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-white text-unnati-primary hover:bg-white/90"
              >
                <Link to="/contact">
                  Contact Sales Team
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/login">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;


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
  Wrench, 
  Certificate
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

  const specialties = [
    {
      id: 1,
      name: "Premium Materials",
      icon: <Package />,
      description: "We use only the highest quality raw materials sourced from trusted suppliers to ensure product durability and performance."
    },
    {
      id: 2,
      name: "Advanced Manufacturing",
      icon: <Zap />,
      description: "Our state-of-the-art manufacturing facilities employ the latest technologies to produce precision-engineered electrical products."
    },
    {
      id: 3,
      name: "Nationwide Distribution",
      icon: <Truck />,
      description: "With our extensive distribution network, we ensure timely delivery of products across the country."
    },
    {
      id: 4,
      name: "Quality Assurance",
      icon: <ShieldCheck />,
      description: "Every product undergoes rigorous testing and quality checks to meet international standards and specifications."
    },
    {
      id: 5,
      name: "Custom Solutions",
      icon: <Wrench />,
      description: "We offer customized products tailored to meet specific requirements of diverse industrial and commercial applications."
    },
    {
      id: 6,
      name: "Certified Products",
      icon: <Certificate />,
      description: "Our products are certified by recognized industry authorities, ensuring compliance with safety and performance standards."
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
              <h1 className="text-4xl font-bold text-unnati-dark mb-4">Our Products</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of high-quality electrical products manufactured with precision and excellence.
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

        {/* Manufacturing Specialties Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Manufacturing Excellence</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Our manufacturing specialties that set us apart in the industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty) => (
                <div key={specialty.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-unnati-primary mb-4">{specialty.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Process Highlight */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-unnati-dark mb-6">Our Manufacturing Process</h2>
                <p className="text-gray-600 mb-4">
                  At Unnati Traders, we follow a rigorous manufacturing process to ensure the highest quality products. Our state-of-the-art facilities and skilled workforce combine to create electrical products that meet international standards.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Sourcing premium quality raw materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Precision engineering and manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Multi-stage quality control checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Advanced testing under various conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-unnati-secondary mr-2">✓</span>
                    <span>Careful packaging and distribution</span>
                  </li>
                </ul>
                
                <Button 
                  asChild
                  className="bg-unnati-primary hover:bg-unnati-primary/90"
                >
                  <Link to="/about">
                    Learn More About Our Process
                  </Link>
                </Button>
              </div>
              
              <div className="bg-unnati-primary/5 p-8 rounded-lg">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-unnati-dark">Quality Assurance Process</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Material Inspection</h4>
                        <p className="text-sm text-gray-600">Thorough inspection of raw materials before entering production.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">In-Process Testing</h4>
                        <p className="text-sm text-gray-600">Continuous monitoring and testing during manufacturing.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Final Product Inspection</h4>
                        <p className="text-sm text-gray-600">Thorough examination of finished products for defects.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Performance Testing</h4>
                        <p className="text-sm text-gray-600">Rigorous testing of products under various conditions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-unnati-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-unnati-primary font-bold mr-4 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Certification</h4>
                        <p className="text-sm text-gray-600">Final certification and documentation before shipping.</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Order Our Products?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your requirements or visit our retail store to explore our full range of electrical products.
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
                <Link to="/about">
                  Find Our Retail Stores
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

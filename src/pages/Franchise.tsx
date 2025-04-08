
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  TrendingUp, 
  Award, 
  Zap, 
  Users, 
  BarChart3, 
  CreditCard 
} from "lucide-react";

const Franchise = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-unnati-primary" />,
      title: "Proven Business Model",
      description: "Join a successful business with established processes and systems."
    },
    {
      icon: <Award className="h-8 w-8 text-unnati-primary" />,
      title: "Brand Recognition",
      description: "Leverage our trusted brand name and reputation in the industry."
    },
    {
      icon: <Zap className="h-8 w-8 text-unnati-primary" />,
      title: "Technical Support",
      description: "Receive ongoing technical support for product knowledge and solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-unnati-primary" />,
      title: "Training Programs",
      description: "Comprehensive training for you and your staff on products and systems."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-unnati-primary" />,
      title: "Business Analytics",
      description: "Access to our business management system for efficient operations."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-unnati-primary" />,
      title: "Financial Assistance",
      description: "Potential financial support and favorable credit terms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Franchise Hero */}
        <section className="bg-unnati-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Franchise & Distribution Opportunities</h1>
              <p className="text-xl mb-8">
                Join the Unnati Traders network and become part of a growing business ecosystem in the electrical industry.
              </p>
              <Button 
                asChild
                className="bg-white text-unnati-primary hover:bg-white/90"
              >
                <a href="#apply">Apply Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Why Partner With Unnati Traders?</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of becoming a franchise or distributor in our network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise Models */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Our Partnership Models</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the model that best suits your business goals and resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Franchise Model */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-unnati-primary text-white p-4">
                  <h3 className="text-xl font-bold text-center">Franchise</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Open your own Unnati Traders branded store with our complete product line and management system.
                  </p>
                  
                  <h4 className="font-semibold mb-3 text-unnati-dark">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Investment: ₹20-30 Lakhs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Space: 500-800 sq. ft.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Staff: 3-5 members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Prime commercial location</span>
                    </li>
                  </ul>
                  
                  <Button 
                    asChild
                    className="w-full bg-unnati-primary hover:bg-unnati-primary/90"
                  >
                    <a href="#apply">Apply for Franchise</a>
                  </Button>
                </div>
              </div>
              
              {/* Distributor Model */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-unnati-secondary text-white p-4">
                  <h3 className="text-xl font-bold text-center">Distributor</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Become a regional distributor for our products with exclusive territory rights and attractive margins.
                  </p>
                  
                  <h4 className="font-semibold mb-3 text-unnati-dark">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Investment: ₹10-15 Lakhs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Storage space: 300+ sq. ft.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Existing distribution network</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Transportation capabilities</span>
                    </li>
                  </ul>
                  
                  <Button 
                    asChild
                    className="w-full bg-unnati-secondary hover:bg-unnati-secondary/90"
                  >
                    <a href="#apply">Apply as Distributor</a>
                  </Button>
                </div>
              </div>
              
              {/* Retailer Model */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-unnati-accent text-white p-4">
                  <h3 className="text-xl font-bold text-center">Retailer Partner</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Add our products to your existing electrical store with minimal investment and excellent support.
                  </p>
                  
                  <h4 className="font-semibold mb-3 text-unnati-dark">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Investment: ₹5-8 Lakhs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Existing electrical shop</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Customer base in electrical sector</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Basic inventory management</span>
                    </li>
                  </ul>
                  
                  <Button 
                    asChild
                    className="w-full bg-unnati-accent hover:bg-unnati-accent/90"
                  >
                    <a href="#apply">Become a Retailer Partner</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Application Process</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Simple steps to become part of the Unnati Traders network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-unnati-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-unnati-primary mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600">Fill out the inquiry form with your details and preferences</p>
              </div>
              
              <div className="text-center">
                <div className="bg-unnati-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-unnati-primary mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Initial Assessment</h3>
                <p className="text-gray-600">Our team evaluates your application and location potential</p>
              </div>
              
              <div className="text-center">
                <div className="bg-unnati-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-unnati-primary mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Business Discussion</h3>
                <p className="text-gray-600">Meeting to discuss business terms and answer your questions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-unnati-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-unnati-primary mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Agreement & Launch</h3>
                <p className="text-gray-600">Sign agreement and begin your journey with Unnati Traders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-unnati-dark mb-6 text-center">Franchise & Distribution Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City/Location of Interest*
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
                    Partnership Type*
                  </label>
                  <select
                    id="partnershipType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                    required
                  >
                    <option value="">Select Partnership Type</option>
                    <option value="franchise">Franchise</option>
                    <option value="distributor">Distributor</option>
                    <option value="retailer">Retailer Partner</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="investment" className="block text-sm font-medium text-gray-700 mb-1">
                    Investment Capability*
                  </label>
                  <select
                    id="investment"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                    required
                  >
                    <option value="">Select Investment Range</option>
                    <option value="5-10">₹5-10 Lakhs</option>
                    <option value="10-20">₹10-20 Lakhs</option>
                    <option value="20-30">₹20-30 Lakhs</option>
                    <option value="30+">Above ₹30 Lakhs</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Experience in Electrical Industry
                  </label>
                  <select
                    id="experience"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                  >
                    <option value="">Select Experience</option>
                    <option value="none">No Experience</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">More than 5 Years</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                    placeholder="Tell us more about your business interests, experience, and questions..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-unnati-primary focus:ring-unnati-primary border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-unnati-primary hover:underline">terms and conditions</a> and consent to the processing of my data for business purposes.
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-unnati-primary hover:bg-unnati-primary/90"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Frequently Asked Questions</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions about our franchise and distribution opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What is the typical ROI period?</h3>
                <p className="text-gray-600">
                  Most of our franchise and distributor partners achieve return on investment within 18-24 months, depending on location and business management.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Do you provide training?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive training on product knowledge, the business management system, sales techniques, and operational procedures.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Is there territorial exclusivity?</h3>
                <p className="text-gray-600">
                  Yes, we offer territorial exclusivity to franchisees and distributors based on population and market potential in the area.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What ongoing support do you provide?</h3>
                <p className="text-gray-600">
                  We provide ongoing marketing support, business consultancy, inventory management assistance, and access to our proprietary business management system.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What are the franchise/royalty fees?</h3>
                <p className="text-gray-600">
                  Our franchise fee structure includes a one-time fee and a small percentage of monthly sales. Detailed fee information is shared during the business discussion phase.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How long is the contract period?</h3>
                <p className="text-gray-600">
                  Standard contracts are for 5 years with options for renewal. Distributor agreements are typically for 3 years with performance-based renewal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-unnati-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unnati-dark">Partner Success Stories</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our existing franchise and distribution partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-unnati-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-4">
                  Joining Unnati Traders as a franchise partner was one of the best business decisions I've made. Their management system streamlined our operations, and their quality products have created a loyal customer base.
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-unnati-primary/20 flex items-center justify-center text-unnati-primary font-bold">
                      RS
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rajesh Shah</h4>
                    <p className="text-sm text-gray-500">Franchise Partner - Mumbai</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-unnati-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-4">
                  As a distributor, I've experienced excellent support from the Unnati team. Their BNPL system has been particularly helpful in managing my network of retailers, and the business has grown steadily year after year.
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-unnati-primary/20 flex items-center justify-center text-unnati-primary font-bold">
                      AP
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Amit Patel</h4>
                    <p className="text-sm text-gray-500">Distributor - Ahmedabad</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-unnati-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-4">
                  I started as a retailer partner three years ago and have now upgraded to a full franchise. The consistent product quality and innovative management system have given us a competitive edge in our market.
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-unnati-primary/20 flex items-center justify-center text-unnati-primary font-bold">
                      SS
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Suresh Singh</h4>
                    <p className="text-sm text-gray-500">Franchise Partner - Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Franchise;

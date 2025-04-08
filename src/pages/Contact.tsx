
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Contact Hero */}
        <section className="bg-unnati-primary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-unnati-dark mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions or want to learn more about our products and services? Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-unnati-dark mb-8">Get in Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-unnati-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-unnati-primary mr-4 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-600">123 Industrial Area, Business District</p>
                      <p className="text-gray-600">City - 123456, State, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-unnati-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-unnati-primary mr-4 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600">Sales: +91 98765 43210</p>
                      <p className="text-gray-600">Support: +91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-unnati-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-unnati-primary mr-4 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600">Sales: sales@unnatitraders.com</p>
                      <p className="text-gray-600">Support: support@unnatitraders.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-unnati-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-unnati-primary mr-4 flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                {/* Support Options */}
                <div className="bg-unnati-primary/5 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <MessageCircle className="mr-2" size={20} />
                    Additional Support Options
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Live Chat</h4>
                      <p className="text-sm text-gray-600">Available Monday - Friday, 9 AM - 5 PM</p>
                      <Button variant="link" className="p-0 h-auto text-unnati-primary">Start Chat</Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Support Portal</h4>
                      <p className="text-sm text-gray-600">Access resources, FAQs, and submit support tickets</p>
                      <Button variant="link" className="p-0 h-auto text-unnati-primary">Visit Support Portal</Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">WhatsApp Support</h4>
                      <p className="text-sm text-gray-600">For quick inquiries and updates</p>
                      <Button variant="link" className="p-0 h-auto text-unnati-primary">Connect via WhatsApp</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-unnati-dark mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                        placeholder="Your First Name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                        placeholder="Your Last Name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unnati-primary/50"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-unnati-primary hover:bg-unnati-primary/90 flex items-center justify-center"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden h-80 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.248329041569!2d72.8554154758236!3d19.180325048669392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d58a04045d%3A0xc0290485106931d0!2sIndustrial%20Area%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1649330422797!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unnati Traders Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


import React from "react";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const Testimonial = ({ quote, name, role }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="text-unnati-secondary mb-4">
        <Quote size={36} />
      </div>
      <p className="text-gray-700 italic flex-grow">{quote}</p>
      <div className="mt-6">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Unnati Traders' business management system has revolutionized how we track inventory and manage our finances. The BNPL feature has been particularly valuable for our distribution network.",
      name: "Rajesh Sharma",
      role: "Electrical Shop Owner"
    },
    {
      quote: "The integrated billing system with GST support has made our accounting process seamless. We've saved countless hours on paperwork and reduced billing errors significantly.",
      name: "Priya Patel",
      role: "Business Operations Manager"
    },
    {
      quote: "As a distributor, the inventory tracking and order management features have helped me optimize my stock levels. The system alerts me when it's time to reorder.",
      name: "Vikram Singh",
      role: "Regional Distributor"
    }
  ];

  return (
    <section className="py-16 bg-unnati-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-unnati-dark">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have enhanced their operations with our management system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

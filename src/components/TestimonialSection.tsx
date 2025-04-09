
import React from "react";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

const Testimonial = ({ quote, name, role, company }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="text-unnati-secondary mb-4">
        <Quote size={36} />
      </div>
      <p className="text-gray-700 italic flex-grow">{quote}</p>
      <div className="mt-6">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-500 text-sm">
          {role}{company ? `, ${company}` : ""}
        </p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Unnati Wires has been our trusted supplier for over a decade. Their copper wires offer exceptional conductivity and have proven to be highly reliable for our electrical installations.",
      name: "Rajesh Sharma",
      role: "Chief Procurement Officer",
      company: "Electro Solutions Ltd."
    },
    {
      quote: "The quality control at Unnati is remarkable. Every batch of wires we've received meets the exact specifications and industry standards. Their flame-retardant insulation is the best in the market.",
      name: "Priya Patel",
      role: "Production Manager",
      company: "PrimeTech Industries"
    },
    {
      quote: "As a distributor of electrical products, I can confidently say that Unnati Wires are among our best-selling items due to their consistent quality and competitive pricing.",
      name: "Vikram Singh",
      role: "Managing Director",
      company: "Singh Electrical Distributors"
    }
  ];

  return (
    <section className="py-16 bg-unnati-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-unnati-dark">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who rely on our high-quality wires for their critical electrical projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

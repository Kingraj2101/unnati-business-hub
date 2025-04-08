
import React from "react";
import { 
  Package, ShieldCheck, TrendingUp, Users, 
  BarChart3, Truck, FileText, Database
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="rounded-full bg-unnati-primary/10 w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-unnati-primary">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-unnati-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Package size={24} />,
      title: "Inventory Management",
      description: "Track stock levels, manage supplier-wise inventory, and receive low-stock alerts."
    },
    {
      icon: <FileText size={24} />,
      title: "Billing & Invoicing",
      description: "Generate GST & Non-GST invoices with customizable templates and automated calculations."
    },
    {
      icon: <Database size={24} />,
      title: "Accounting & Bookkeeping",
      description: "Maintain separate and combined accounts for your factory and shop operations."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Reports & Analytics",
      description: "Access comprehensive reports on sales, BNPL recovery, and profit/loss statements."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Business Growth",
      description: "Track performance metrics and identify growth opportunities for your business."
    },
    {
      icon: <Truck size={24} />,
      title: "Supplier Management",
      description: "Streamline relations with suppliers through organized order and payment tracking."
    },
    {
      icon: <Users size={24} />,
      title: "Multi-User Access",
      description: "Role-based access control for employees, vendors, and distributors."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure Operations",
      description: "Enterprise-level security for your business data and financial information."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-unnati-dark">
            Business Management Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated system helps you manage every aspect of your wire factory and electric hardware business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

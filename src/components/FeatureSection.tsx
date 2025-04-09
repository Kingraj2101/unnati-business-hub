
import React from "react";
import { 
  Shield, Zap, Award, Factory, 
  Gauge, Truck, CheckCircle, Scale
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
      icon: <Shield size={24} />,
      title: "Superior Insulation",
      description: "Our wires feature high-grade PVC and XLPE insulation for maximum safety and durability."
    },
    {
      icon: <Zap size={24} />,
      title: "High Conductivity",
      description: "Premium grade copper ensures excellent electrical conductivity and energy efficiency."
    },
    {
      icon: <Award size={24} />,
      title: "ISO Certified",
      description: "All our manufacturing processes and products are ISO 9001:2015 certified for quality assurance."
    },
    {
      icon: <Factory size={24} />,
      title: "Modern Manufacturing",
      description: "State-of-the-art production facilities with advanced machinery for precision wire drawing."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Quality Testing",
      description: "Rigorous testing at every production stage ensures our wires meet the highest industry standards."
    },
    {
      icon: <Truck size={24} />,
      title: "Nationwide Distribution",
      description: "Extensive distribution network ensuring timely delivery across the country."
    },
    {
      icon: <Scale size={24} />,
      title: "Customization Options",
      description: "Custom wire solutions available based on specific requirements for industrial applications."
    },
    {
      icon: <Gauge size={24} />,
      title: "Temperature Resistant",
      description: "Our wires maintain performance integrity even under extreme temperature conditions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-unnati-dark">
            Our Wire Manufacturing Excellence
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Unnati Wires the preferred choice for quality electrical wires
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

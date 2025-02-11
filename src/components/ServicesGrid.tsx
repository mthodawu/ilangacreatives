import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  price: string;
  features: Array<{ name: string; included: boolean }>;
  isPopular: boolean;
}

interface ServicesGridProps {
  services?: Service[];
  onLearnMore?: (serviceIndex: number) => void;
}

const ServicesGrid = ({
  services = [
    {
      title: "Basic Package",
      description: "Perfect for small projects and landing pages",
      price: "$999",
      features: [
        { name: "Custom React Development", included: true },
        { name: "Responsive Design", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "Performance Optimization", included: false },
        { name: "24/7 Support", included: false },
      ],
      isPopular: false,
    },
    {
      title: "Pro Package",
      description: "Ideal for medium-sized web applications",
      price: "$2,499",
      features: [
        { name: "Custom React Development", included: true },
        { name: "Responsive Design", included: true },
        { name: "Advanced SEO Setup", included: true },
        { name: "Performance Optimization", included: true },
        { name: "24/7 Support", included: false },
      ],
      isPopular: true,
    },
    {
      title: "Enterprise Package",
      description: "Full-scale web applications and platforms",
      price: "$4,999",
      features: [
        { name: "Custom React Development", included: true },
        { name: "Responsive Design", included: true },
        { name: "Advanced SEO Setup", included: true },
        { name: "Performance Optimization", included: true },
        { name: "24/7 Support", included: true },
      ],
      isPopular: false,
    },
  ],
  onLearnMore = (index: number) =>
    console.log(`Learn more about service ${index}`),
}: ServicesGridProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your project needs. Each package is
            customizable to ensure you get exactly what you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
                isPopular={service.isPopular}
                onLearnMore={() => onLearnMore(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

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
      title: "Single-Page Website Package",
      description:
        "Perfect for businesses that want a modern, straightforward web presence",
      price: "R1499",
      features: [
        {
          name: "One-Page Website Design",
          description:
            "All your important information on a single, scrollable page - perfect for modern businesses",
          included: true,
        },
        {
          name: "Custom-Built for Your Business",
          description:
            "Tailored sections that showcase your services, about info, and contact details - all on one page",
          included: true,
        },
        {
          name: "Works Perfectly on All Devices",
          description:
            "Your single-page website adapts beautifully to phones, tablets, and computers",
          included: true,
        },
        {
          name: "Help Customers Find You Online",
          description:
            "Basic setup to improve your visibility in Google searches",
          included: true,
        },
        {
          name: "Speed & Performance Package",
          description:
            "Extra optimizations to make your website lightning-fast",
          included: false,
        },
      ],
      isPopular: false,
    },
    {
      title: "Pro Package",
      description: "Ideal for medium-sized web applications",
      price: "R3,499",
      features: [
        {
          name: "Full Multi-Page Website",
          description:
            "Separate pages for your products, services, about us, and more - organized just how you want",
          included: true,
        },
        {
          name: "Built-in Blog Platform",
          description:
            "Share updates, articles, and news to keep your customers engaged and boost your online presence",
          included: true,
        },
        // {
        //   name: "Premium Search Engine Features",
        //   description: "Advanced setup to rank higher in Google searches and attract more customers",
        //   included: true
        // },
        {
          name: "Speed & Performance Package",
          description:
            "Your website loads instantly and runs smoothly, even with multiple pages and features",
          included: true,
        },
        {
          name: "Mobile-Perfect Design",
          description:
            "Your website looks and works beautifully on all devices - from phones to desktop computers",
          included: true,
        },
      ],
      isPopular: true,
    },
    {
      title: "Enterprise Package",
      description: "Full-scale web applications and platforms",
      price: ">R4,999",
      features: [
        {
          name: "Custom Business Platform",
          description:
            "A complete online system built specifically for your business operations - not just a website",
          included: true,
        },
        {
          name: "Advanced Business Features",
          description:
            "Customer accounts, online payments, booking systems, or any other features your business needs",
          included: true,
        },
        {
          name: "Data Management & Reporting",
          description:
            "Track your business data, generate reports, and manage customer information all in one place",
          included: true,
        },
        {
          name: "Maximum Performance & Security",
          description:
            "Enterprise-grade speed and security to handle your business operations smoothly",
          included: true,
        },
        {
          name: "24/7 Priority Support",
          description:
            "Round-the-clock technical assistance to keep your business running without interruption",
          included: true,
        },
        {
          name: "Training & Documentation",
          description:
            "Full training for your team and detailed guides to manage your new business platform",
          included: true,
        },
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

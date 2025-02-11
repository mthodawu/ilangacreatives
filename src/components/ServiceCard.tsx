import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceFeature {
  name: string;
  included: boolean;
}

interface ServiceCardProps {
  title?: string;
  description?: string;
  price?: string;
  features?: ServiceFeature[];
  isPopular?: boolean;
  onLearnMore?: () => void;
}

const ServiceCard = ({
  title = "Basic Package",
  description = "Perfect for small projects and landing pages",
  price = "$999",
  features = [
    { name: "Custom React Development", included: true },
    { name: "Responsive Design", included: true },
    { name: "Basic SEO Setup", included: true },
    { name: "Performance Optimization", included: false },
    { name: "24/7 Support", included: false },
  ],
  isPopular = false,
  onLearnMore = () => console.log("Learn more clicked"),
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full"
    >
      <Card className="w-full h-full bg-white border-2 hover:border-primary transition-colors duration-300">
        <CardHeader>
          {isPopular && (
            <div className="w-full text-center mb-2">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}
          <CardTitle className="text-2xl font-bold text-center">
            {title}
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            {description}
          </CardDescription>
          <div className="text-center mt-4">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground">/project</span>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center ${feature.included ? "text-foreground" : "text-muted-foreground"}`}
              >
                <Check
                  className={`h-5 w-5 mr-2 ${feature.included ? "text-primary" : "text-muted-foreground"}`}
                />
                <span>{feature.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button
            onClick={onLearnMore}
            variant={isPopular ? "default" : "outline"}
            size="lg"
            className="w-full"
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;

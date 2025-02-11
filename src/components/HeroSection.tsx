import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  services?: string[];
  onGetStarted?: () => void;
}

const HeroSection = ({
  title = "Professional Web Development Services",
  subtitle = "Building modern, performant web applications with cutting-edge technology",
  services = ["Custom Web Development", "Static Sites", "Landing Pages"],
  onGetStarted = () => console.log("Get Started clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-[800px] w-full bg-gradient-to-b from-background to-background/80 flex items-center justify-center overflow-hidden">
      {/* Animated code background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -1000 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="text-xl font-mono whitespace-pre-wrap text-primary"
        >
          {`const DeveloperServices = () => {
  const [quality, setQuality] = useState(100);
  const deliver = async (project) => {
    const result = await optimize(project);
    return result;
  };
  return <Premium code={quality} />;
};`.repeat(10)}
        </motion.div>
      </div>
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
            {subtitle}
          </p>

          {/* Services list */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-2 text-lg"
              >
                <Code2 className="w-5 h-5 text-primary" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={onGetStarted}
              className="text-lg px-8 py-6 bg-gradient-to-r from-[#b5743f]"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

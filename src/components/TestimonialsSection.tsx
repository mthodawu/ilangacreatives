import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  avatar: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection = ({
  testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc",
      companyLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechStart",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      quote:
        "Working with this developer was an absolute pleasure. The attention to detail and technical expertise exceeded our expectations.",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCo",
      companyLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=InnovateCo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      quote:
        "The development process was smooth and the final product was exactly what we envisioned. Highly recommended!",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "CEO",
      company: "DigitalFlow",
      companyLogo:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=DigitalFlow",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      quote:
        "Outstanding work! The developer delivered a high-quality solution that helped us achieve our business goals.",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-6">
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="h-8 w-auto opacity-50 hover:opacity-75 transition-opacity"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Snowflake, Flame, Wrench, Clock, Shield, Award } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

const services = [
  {
    icon: Snowflake,
    title: "Air Conditioning",
    description: "Expert AC repair, installation, and maintenance. Keep your home cool all summer long.",
    features: ["Repair & Installation", "Preventive Maintenance", "Energy Efficiency Upgrades"],
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1718548170456-c93e5c67f669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25lciUyMHVuaXQlMjBjbG9zZXxlbnwxfHx8fDE3NzA2NDMxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Flame,
    title: "Heating Services",
    description: "Reliable furnace and heating system repair and installation for the coldest months.",
    features: ["Furnace Repair", "Heat Pump Service", "Boiler Maintenance"],
    color: "from-red-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1727396560614-8ff7558bfb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF0aW5nJTIwZnVybmFjZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzA2NDI2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Wrench,
    title: "Maintenance Plans",
    description: "Preventive maintenance to keep your system running efficiently year-round.",
    features: ["Seasonal Tune-Ups", "Priority Service", "Extended Warranties"],
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1763865454676-49c131929996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodmFjJTIwbWFpbnRlbmFuY2UlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MDY0MzExMHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Clock,
    title: "Emergency Service",
    description: "24/7 emergency HVAC service when you need it most. Fast response guaranteed.",
    features: ["Available 24/7", "Same-Day Service", "Fast Response Times"],
    color: "from-red-600 to-red-700",
    image: "https://images.unsplash.com/flagged/photo-1585772311853-3c823ba89097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjBvdXRkb29yJTIwY29tcHJlc3NvcnxlbnwxfHx8fDE3NzA2NDMxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive HVAC solutions for residential and commercial properties
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Service Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="text-lg mb-2">Warranty Protection</h4>
            <p className="text-gray-600 text-sm">All work backed by our comprehensive warranty</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="text-lg mb-2">Certified Technicians</h4>
            <p className="text-gray-600 text-sm">Licensed, insured, and highly trained professionals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="text-lg mb-2">On-Time Service</h4>
            <p className="text-gray-600 text-sm">We respect your time with punctual arrivals</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
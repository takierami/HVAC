import { CheckCircle, DollarSign, Clock, Users, Award, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind and protection."
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Same-day service available. We understand HVAC emergencies can't wait."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Upfront quotes with no hidden fees. You'll know the cost before we begin."
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    description: "15+ years of combined experience. Our team has seen and fixed it all."
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "We stand behind our work with comprehensive warranties and guarantees."
  },
  {
    icon: CheckCircle,
    title: "Customer Satisfaction",
    description: "Rated 4.9/5 stars. Our reputation is built on happy customers."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another HVAC company. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1766524789958-b0ec578d7d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwdW5pZm9ybXxlbnwxfHx8fDE3NzA2MTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional HVAC Technician"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl text-gray-900 mb-1">Certified & Trusted</div>
                    <div className="text-gray-600">Licensed professionals you can count on</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">10k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Star Rating</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
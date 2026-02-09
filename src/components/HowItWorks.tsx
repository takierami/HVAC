import { Phone, Calendar, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description: "Call or submit a service request online. We'll respond within minutes.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Calendar,
    title: "Technician Dispatched",
    description: "We'll schedule a convenient time and dispatch a certified technician to your location.",
    color: "from-blue-600 to-blue-700"
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Problem Solved",
    description: "Fast diagnosis and repair. Your comfort is our priority, and we stand behind our work.",
    color: "from-green-500 to-emerald-600"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1759216853052-883040267c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdGhlcm1vc3RhdCUyMG1vZGVybnxlbnwxfHx8fDE3NzA2MDgyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Smart Thermostat"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">How It Works</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Getting your HVAC system back to perfect condition is simple
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-blue-400/30 z-0"></div>
              )}

              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="inline-block mb-4 text-6xl text-blue-300/20">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-3">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl mb-6">Ready to get started?</p>
          <a href="tel:+15555554822" className="inline-block">
            <button className="bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 rounded-lg text-lg">
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call (555) 555-4822
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
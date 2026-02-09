import { Star, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Downtown Metro",
    rating: 5,
    text: "Outstanding service! Our AC went out on the hottest day of summer, and they had a technician at our house within 2 hours. Professional, efficient, and reasonably priced.",
    service: "AC Repair"
  },
  {
    name: "Michael Rodriguez",
    location: "Riverside District",
    rating: 5,
    text: "I've used them for years for our heating system maintenance. They're always on time, thorough, and catch small issues before they become big problems. Highly recommend!",
    service: "Maintenance Plan"
  },
  {
    name: "Jennifer Lee",
    location: "Oakwood Heights",
    rating: 5,
    text: "Honest and transparent pricing. They explained everything clearly, showed me exactly what needed to be fixed, and completed the work perfectly. No surprise charges.",
    service: "Furnace Repair"
  },
  {
    name: "David Thompson",
    location: "Parkside",
    rating: 5,
    text: "Best HVAC company in the area. They installed a new system for us and the difference is incredible. Energy bills are down, and the house is so much more comfortable.",
    service: "HVAC Installation"
  },
  {
    name: "Amanda Parker",
    location: "Westside",
    rating: 5,
    text: "Professional from start to finish. The technician was knowledgeable, respectful of our home, and explained everything in terms I could understand. Will definitely use again.",
    service: "AC Maintenance"
  },
  {
    name: "Robert Chen",
    location: "Metro Center",
    rating: 5,
    text: "Emergency service on a Sunday night! They answered the phone, walked me through some troubleshooting, and had someone here within an hour. Truly 24/7 service.",
    service: "Emergency Heating"
  }
];

const serviceAreas = [
  "Downtown Metro",
  "Riverside District",
  "Oakwood Heights",
  "Parkside",
  "Westside",
  "Metro Center",
  "North Valley",
  "Southbridge",
  "Eastwood",
  "Hillcrest",
  "Lakeside",
  "Central Plaza"
];

export function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm">4.9 out of 5 stars</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>

                {/* Author Info */}
                <div className="border-t pt-4 mt-auto">
                  <div className="mb-1">{testimonial.name}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="text-sm text-blue-600 mt-2">{testimonial.service}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
        >
          <h3 className="text-2xl text-center mb-6">We Proudly Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Don't see your area? <a href="tel:+15555554822" className="text-blue-600 hover:underline">Call us</a> - we may still be able to help!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
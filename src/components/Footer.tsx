import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    "AC Repair",
    "Heating Repair",
    "Installation",
    "Maintenance Plans",
    "Emergency Service"
  ],
  company: [
    "About Us",
    "Careers",
    "Service Areas",
    "Reviews",
    "Blog"
  ],
  support: [
    "Contact Us",
    "FAQ",
    "Financing",
    "Warranties",
    "Privacy Policy"
  ]
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">HP</span>
              </div>
              <span className="text-white text-2xl">HVAC Pro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for all heating and cooling needs. Licensed, insured, and committed to your comfort.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+15555554822" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-red-500" />
                <span>(555) 555-4822</span>
              </a>
              <a href="mailto:info@hvacpro.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@hvacpro.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>4287 Industrial Blvd, Metro City, ST 85024</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 HVAC Pro. All rights reserved. Licensed & Insured.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Emergency Badge */}
            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>24/7 Emergency Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
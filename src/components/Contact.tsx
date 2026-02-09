import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Upload, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "motion/react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  urgency: string;
  address: string;
  zipCode: string;
  preferredTime: string;
  notes: string;
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    urgency: "",
    address: "",
    zipCode: "",
    preferredTime: "",
    notes: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.serviceType) newErrors.serviceType = "Please select a service";
    if (!formData.urgency) newErrors.urgency = "Please select urgency level";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "",
          urgency: "",
          address: "",
          zipCode: "",
          preferredTime: "",
          notes: ""
        });
        setSelectedFile(null);
        setSubmitStatus("idle");
      }, 3000);
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1657803778026-4809284665fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwNjQzMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Comfortable Home"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Request Service</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below or call us directly for immediate assistance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 sticky top-6">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Call Us Now</div>
                      <a href="tel:+15555554822" className="text-lg hover:text-blue-600 transition-colors">
                        (555) 555-4822
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email Us</div>
                      <a href="mailto:info@hvacpro.com" className="text-lg hover:text-blue-600 transition-colors">
                        info@hvacpro.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Visit Us</div>
                      <div className="text-lg">4287 Industrial Blvd<br />Metro City, ST 85024</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Business Hours</div>
                      <div className="text-lg">
                        Mon-Fri: 7am - 7pm<br />
                        Sat-Sun: 8am - 5pm<br />
                        <span className="text-red-600">24/7 Emergency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-blue-800">
                  <strong>Emergency?</strong> Don't wait - call us now for immediate assistance!
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Service Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl mb-4">Request Received!</h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Thank you for contacting us. We'll be in touch within 15 minutes to confirm your appointment.
                  </p>
                  <p className="text-gray-600">
                    For immediate assistance, call us at{" "}
                    <a href="tel:+15555554822" className="text-blue-600 hover:underline">
                      (555) 555-4822
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="John Smith"
                        className={`mt-1 h-12 ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="(555) 555-1234"
                        className={`mt-1 h-12 ${errors.phone ? "border-red-500" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="john@example.com"
                      className={`mt-1 h-12 ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Type & Urgency */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => updateField("serviceType", value)}>
                        <SelectTrigger className={`mt-1 h-12 ${errors.serviceType ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ac-repair">AC Repair</SelectItem>
                          <SelectItem value="ac-install">AC Installation</SelectItem>
                          <SelectItem value="heating-repair">Heating Repair</SelectItem>
                          <SelectItem value="heating-install">Heating Installation</SelectItem>
                          <SelectItem value="maintenance">Maintenance/Tune-up</SelectItem>
                          <SelectItem value="emergency">Emergency Service</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.serviceType}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="urgency">Urgency Level *</Label>
                      <Select value={formData.urgency} onValueChange={(value) => updateField("urgency", value)}>
                        <SelectTrigger className={`mt-1 h-12 ${errors.urgency ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                          <SelectItem value="urgent">Urgent (Same Day)</SelectItem>
                          <SelectItem value="soon">Soon (1-2 Days)</SelectItem>
                          <SelectItem value="flexible">Flexible (This Week)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.urgency && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.urgency}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Address & ZIP */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Service Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        placeholder="123 Main Street, City"
                        className="mt-1 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => updateField("zipCode", e.target.value)}
                        placeholder="12345"
                        className={`mt-1 h-12 ${errors.zipCode ? "border-red-500" : ""}`}
                      />
                      {errors.zipCode && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time/Date</Label>
                    <Input
                      id="preferredTime"
                      type="datetime-local"
                      value={formData.preferredTime}
                      onChange={(e) => updateField("preferredTime", e.target.value)}
                      className="mt-1 h-12"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder="Please describe the issue or any additional details..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <Label htmlFor="photo">Upload Photo (Optional)</Label>
                    <div className="mt-1">
                      <label htmlFor="photo" className="flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
                        <div className="text-center">
                          <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {selectedFile ? selectedFile.name : "Click to upload a photo of the issue"}
                          </span>
                        </div>
                      </label>
                      <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Phone className="w-5 h-5 mr-2" />
                        Submit Service Request
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by our team regarding your service request.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
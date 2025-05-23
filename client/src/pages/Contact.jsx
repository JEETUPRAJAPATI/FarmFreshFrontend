import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Contact() {
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email Support",
      description: "Get in touch with our team for any questions about products or orders.",
      contact: "hello@farmfresh.com",
      action: "Send Email",
      color: "primary",
    },
    {
      icon: "fas fa-phone",
      title: "Phone Support",
      description: "Call us during business hours for immediate assistance.",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      color: "secondary",
    },
    {
      icon: "fas fa-comments",
      title: "Live Chat",
      description: "Chat with our customer service team in real-time.",
      contact: "Available 9 AM - 6 PM PST",
      action: "Start Chat",
      color: "accent",
    },
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Farm Lane, Green Valley, CA 95020",
      phone: "+1 (555) 123-4567",
      email: "sf@farmfresh.com",
      hours: "Mon-Fri: 9 AM - 6 PM PST",
    },
    {
      city: "Portland",
      address: "456 Organic Street, Portland, OR 97201",
      phone: "+1 (555) 234-5678",
      email: "portland@farmfresh.com",
      hours: "Mon-Fri: 9 AM - 6 PM PST",
    },
  ];

  const faqItems = [
    {
      question: "How do you ensure product quality?",
      answer: "Every product undergoes rigorous quality testing and is sourced directly from verified organic farmers. We maintain strict standards throughout the supply chain.",
    },
    {
      question: "What is your shipping policy?",
      answer: "We offer free shipping on orders over $50. Most orders are delivered within 2-3 business days with temperature-controlled packaging when needed.",
    },
    {
      question: "Do you support fair trade practices?",
      answer: "Absolutely! We ensure all our partner farmers receive fair compensation and work under ethical conditions. 98% of our products are fair trade certified.",
    },
    {
      question: "Can I return products if I'm not satisfied?",
      answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact us for a full refund or exchange.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-serif opacity-90"
          >
            We'd love to hear from you. Get in touch with our team for any questions or partnership opportunities.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-earth-600 font-serif">
              Choose the best way to reach out to us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-earth-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`bg-${method.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <i className={`${method.icon} text-2xl text-${method.color}`}></i>
                </motion.div>
                <h3 className="text-xl font-semibold text-earth-800 mb-4">
                  {method.title}
                </h3>
                <p className="text-earth-600 font-serif mb-4">
                  {method.description}
                </p>
                <div className="text-lg font-medium text-earth-800 mb-4">
                  {method.contact}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-${method.color} hover:bg-${method.color}/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300`}
                >
                  {method.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactSection />

      {/* Office Locations */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-earth-600 font-serif">
              Visit us at one of our office locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officeLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-earth-800 mb-6">
                  {location.city} Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                    <div>
                      <div className="font-medium text-earth-800">Address</div>
                      <div className="text-earth-600">{location.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-phone text-primary mt-1"></i>
                    <div>
                      <div className="font-medium text-earth-800">Phone</div>
                      <div className="text-earth-600">{location.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-envelope text-primary mt-1"></i>
                    <div>
                      <div className="font-medium text-earth-800">Email</div>
                      <div className="text-earth-600">{location.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-clock text-primary mt-1"></i>
                    <div>
                      <div className="font-medium text-earth-800">Hours</div>
                      <div className="text-earth-600">{location.hours}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-earth-600 font-serif">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-earth-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-earth-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-earth-600 font-serif">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-xl font-serif opacity-90 mb-8">
              If you're a farmer or producer interested in joining our network, we'd love to hear from you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 text-earth-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn About Partnership
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

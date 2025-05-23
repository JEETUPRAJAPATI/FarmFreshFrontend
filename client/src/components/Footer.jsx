import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed! 🎉",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  const quickLinks = [
    { href: "/", label: "Home", icon: "fas fa-home" },
    { href: "/our-story", label: "Our Story", icon: "fas fa-book-open" },
    { href: "/products", label: "Products", icon: "fas fa-box" },
    { href: "/our-farmers", label: "Our Farmers", icon: "fas fa-user-friends" },
    { href: "/our-process", label: "Our Process", icon: "fas fa-cogs" },
    { href: "/contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  const categories = [
    { href: "/products?category=coffee", label: "Coffee", icon: "fas fa-coffee", color: "text-emerald-400" },
    { href: "/products?category=spices", label: "Spices", icon: "fas fa-pepper-hot", color: "text-orange-400" },
    { href: "/products?category=grains", label: "Grains", icon: "fas fa-seedling", color: "text-yellow-400" },
    { href: "/products?category=herbs", label: "Herbs", icon: "fas fa-leaf", color: "text-green-400" },
    { href: "/products?category=tea", label: "Tea", icon: "fas fa-mug-hot", color: "text-teal-400" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", color: "text-blue-400", bgColor: "bg-blue-500/20" },
    { icon: "fab fa-instagram", href: "#", color: "text-pink-400", bgColor: "bg-pink-500/20" },
    { icon: "fab fa-twitter", href: "#", color: "text-sky-400", bgColor: "bg-sky-500/20" },
    { icon: "fab fa-youtube", href: "#", color: "text-red-400", bgColor: "bg-red-500/20" },
  ];

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "123 Farm Street, Green Valley, CA 90210", color: "text-emerald-400" },
    { icon: "fas fa-phone", text: "+1 (555) 123-4567", color: "text-orange-400" },
    { icon: "fas fa-envelope", text: "hello@farmfresh.com", color: "text-yellow-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-12 h-12 gradient-emerald rounded-2xl flex items-center justify-center shadow-emerald mr-3"
              >
                <i className="fas fa-seedling text-white text-xl"></i>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Farm Fresh</h3>
                <p className="text-xs text-emerald-400 font-medium">Natural • Sustainable • Direct</p>
              </div>
            </motion.div>
            
            <p className="text-slate-300 font-medium mb-6 leading-relaxed">
              Connecting passionate farmers with conscious consumers for a more sustainable and flavorful world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <i className={`${contact.icon} ${contact.color}`}></i>
                  <span className="text-slate-300">{contact.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                  className={`w-12 h-12 ${social.bgColor} backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-300 group border border-white/10`}
                >
                  <i className={`${social.icon} ${social.color} text-lg group-hover:text-white transition-colors duration-300`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <i className="fas fa-link text-emerald-400 mr-2"></i>
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  <Link href={link.href}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer p-2 rounded-xl hover:bg-white/5"
                    >
                      <i className={`${link.icon} text-emerald-400 w-4`}></i>
                      <span className="font-medium">{link.label}</span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <i className="fas fa-th-large text-orange-400 mr-2"></i>
              Categories
            </h4>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  <Link href={category.href}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 text-slate-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer p-2 rounded-xl hover:bg-white/5"
                    >
                      <i className={`${category.icon} ${category.color} w-4`}></i>
                      <span className="font-medium">{category.label}</span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-emerald backdrop-blur-md p-6 rounded-3xl border border-white/10"
          >
            <h4 className="text-xl font-bold mb-4 flex items-center text-white">
              <i className="fas fa-envelope-open text-yellow-400 mr-2"></i>
              Stay Updated
            </h4>
            <p className="text-white/80 mb-6 font-medium text-sm leading-relaxed">
              Get fresh updates about new products, farmer stories, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 193, 7, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 py-3 px-6 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <i className="fas fa-paper-plane"></i>
                <span>Subscribe Now</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass backdrop-blur-md border-t border-white/10 mt-12 pt-8 rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="text-slate-400 text-sm flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <i className="fas fa-copyright text-emerald-400 mr-2"></i>
              2024 Farm Fresh. All rights reserved.
            </motion.div>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.05, color: "#10B981" }}
                  className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200 font-medium"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hooks/useCart";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [location] = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home", icon: "fas fa-home" },
    { href: "/our-story", label: "Our Story", icon: "fas fa-book-open" },
    { href: "/products", label: "Products", icon: "fas fa-box" },
    { href: "/our-farmers", label: "Our Farmers", icon: "fas fa-user-friends" },
    { href: "/our-process", label: "Our Process", icon: "fas fa-cogs" },
    { href: "/contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled 
            ? "glass-emerald shadow-xl-emerald backdrop-blur-md" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="relative"
                >
                  <div className="w-12 h-12 gradient-emerald rounded-2xl flex items-center justify-center shadow-emerald">
                    <i className="fas fa-seedling text-white text-xl"></i>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 gradient-emerald rounded-2xl opacity-30 blur-md"
                  ></motion.div>
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold gradient-text">Farm Fresh</h1>
                  <p className="text-xs text-emerald-600 font-medium">Natural • Sustainable • Direct</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer group ${
                        location === link.href
                          ? "text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald"
                          : "text-slate-700 hover:text-emerald-600"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <i className={`${link.icon} text-sm`}></i>
                        <span>{link.label}</span>
                      </div>
                      {location !== link.href && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                          whileHover={{ scale: 1.02 }}
                        ></motion.div>
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex w-10 h-10 bg-slate-100 dark:bg-slate-700 hover:bg-emerald-100 dark:hover:bg-emerald-800 rounded-xl items-center justify-center transition-colors duration-300 group"
              >
                <i className="fas fa-search text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"></i>
              </motion.button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Cart Button */}
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl shadow-orange hover:shadow-xl-emerald transition-all duration-300 group"
                >
                  <i className="fas fa-shopping-cart text-white text-lg"></i>
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg"
                      >
                        {cartCount}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-12 h-12 bg-slate-100 hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-slate-700 text-lg`}></i>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass backdrop-blur-md border-t border-white/20"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={link.href}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                            location === link.href
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald"
                              : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-emerald-50"
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <i className={`${link.icon} text-xl`}></i>
                            <span className="text-sm font-medium">{link.label}</span>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile Actions */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl font-medium shadow-orange"
                  >
                    <i className="fas fa-search mr-2"></i>
                    Search Products
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
}

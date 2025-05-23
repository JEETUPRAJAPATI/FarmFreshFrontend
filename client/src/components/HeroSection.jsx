import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const floatingElements = [
    { icon: "fas fa-leaf", delay: 0, duration: 3 },
    { icon: "fas fa-seedling", delay: 0.5, duration: 4 },
    { icon: "fas fa-sun", delay: 1, duration: 3.5 },
    { icon: "fas fa-apple-alt", delay: 1.5, duration: 4.5 },
    { icon: "fas fa-carrot", delay: 2, duration: 3.8 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 gradient-hero"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(52, 211, 153, 0.8), rgba(251, 146, 60, 0.7))",
            "linear-gradient(135deg, rgba(5, 150, 105, 0.9), rgba(16, 185, 129, 0.8), rgba(249, 115, 22, 0.7))",
            "linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(52, 211, 153, 0.8), rgba(251, 146, 60, 0.7))",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Dynamic Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0) scale(1.1)`,
          y: scrollY * 0.3,
        }}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 glass-dark"></div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20 text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
          }}
        >
          <i className={element.icon}></i>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(16, 185, 129, 0.5)",
                "0 0 40px rgba(249, 115, 22, 0.5)",
                "0 0 20px rgba(16, 185, 129, 0.5)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              Fresh from
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block gradient-text text-transparent bg-clip-text font-extrabold"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FF8C00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Farm to Table
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 font-light leading-relaxed max-w-4xl mx-auto"
        >
          Discover authentic, natural products directly from passionate farmers who care about 
          <span className="font-semibold text-yellow-300"> quality</span> and 
          <span className="font-semibold text-emerald-300"> sustainability</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl text-lg font-semibold shadow-xl-emerald hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 group"
            >
              <i className="fas fa-shopping-bag group-hover:animate-bounce"></i>
              <span>Shop Products</span>
              <motion.i 
                className="fas fa-arrow-right"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
            </motion.button>
          </Link>
          
          <Link href="/our-farmers">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass border-2 border-white/30 text-white rounded-2xl text-lg font-semibold backdrop-blur-md hover:backdrop-blur-lg transition-all duration-300 flex items-center space-x-3 group"
            >
              <i className="fas fa-users group-hover:animate-pulse"></i>
              <span>Meet Our Farmers</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "150+", label: "Happy Farmers", icon: "fas fa-user-friends" },
            { number: "25", label: "Countries", icon: "fas fa-globe" },
            { number: "10k+", label: "Products Sold", icon: "fas fa-box" },
            { number: "98%", label: "Satisfaction", icon: "fas fa-heart" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center glass-emerald p-6 rounded-2xl backdrop-blur-md"
            >
              <motion.i
                className={`${stat.icon} text-3xl text-yellow-300 mb-3 block`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              ></motion.i>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="glass-emerald p-4 rounded-full backdrop-blur-md cursor-pointer group"
          whileHover={{ scale: 1.1 }}
        >
          <motion.i
            className="fas fa-chevron-down text-white text-xl group-hover:text-yellow-300"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.i>
        </motion.div>
        <div className="text-white text-sm mt-2 text-center font-medium">Scroll to explore</div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
}

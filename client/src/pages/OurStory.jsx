import { motion } from "framer-motion";
import StorySection from "../components/StorySection";
import Footer from "../components/Footer";

export default function OurStory() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-serif opacity-90"
          >
            A journey of passion, sustainability, and connecting communities across the globe
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <StorySection />

      {/* Values Section */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">Our Values</h2>
            <p className="text-xl text-earth-600 font-serif max-w-3xl mx-auto">
              Everything we do is guided by our core values that shape our relationships with farmers and customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-heart",
                title: "Sustainability",
                description: "We prioritize environmental stewardship and regenerative farming practices that heal the earth.",
              },
              {
                icon: "fas fa-handshake",
                title: "Fair Trade",
                description: "We ensure farmers receive fair compensation for their hard work and dedication.",
              },
              {
                icon: "fas fa-star",
                title: "Quality",
                description: "We never compromise on quality, from seed selection to final packaging.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <i className={`${value.icon} text-2xl text-primary`}></i>
                </motion.div>
                <h3 className="text-xl font-semibold text-earth-800 mb-4">{value.title}</h3>
                <p className="text-earth-600 font-serif">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

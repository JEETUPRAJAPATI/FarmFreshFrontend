import { motion } from "framer-motion";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";

export default function OurProcess() {
  const detailedProcess = [
    {
      title: "Farmer Partnership",
      description: "We begin by identifying and partnering with farmers who share our commitment to sustainable, organic practices. Each farmer is carefully vetted for their dedication to quality and environmental stewardship.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      icon: "fas fa-handshake",
      stats: ["100+ Partner Farmers", "25 Countries", "Fair Trade Certified"],
    },
    {
      title: "Sustainable Cultivation",
      description: "Our farmers employ regenerative agricultural practices that not only produce exceptional crops but also improve soil health, conserve water, and support biodiversity.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      icon: "fas fa-seedling",
      stats: ["Zero Pesticides", "Organic Certified", "Water Conservation"],
    },
    {
      title: "Careful Harvesting",
      description: "Products are harvested at peak ripeness using traditional methods that have been refined over generations. This ensures maximum flavor, nutrition, and quality in every product.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      icon: "fas fa-leaf",
      stats: ["Hand-Picked", "Peak Ripeness", "Traditional Methods"],
    },
    {
      title: "Quality Processing",
      description: "Minimal processing using time-honored techniques preserves the natural flavors, nutrients, and authenticity of each product while ensuring food safety standards.",
      image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      icon: "fas fa-cogs",
      stats: ["Minimal Processing", "Natural Methods", "Quality Assured"],
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Products are packaged using sustainable, biodegradable materials that protect the product while minimizing environmental impact throughout the supply chain.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      icon: "fas fa-recycle",
      stats: ["100% Recyclable", "Biodegradable", "Carbon Neutral"],
    },
    {
      title: "Direct Delivery",
      description: "Products are shipped directly from our partner farms to your door, ensuring maximum freshness while supporting fair trade and eliminating unnecessary middlemen.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      icon: "fas fa-shipping-fast",
      stats: ["Farm to Door", "2-3 Day Shipping", "Temperature Controlled"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-serif opacity-90"
          >
            From seed to shelf, every step is carefully managed to ensure the highest quality and fairest prices
          </motion.p>
        </div>
      </section>

      {/* Process Overview */}
      <ProcessSection />

      {/* Detailed Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Step-by-Step Journey
            </h2>
            <p className="text-xl text-earth-600 font-serif max-w-3xl mx-auto">
              Follow the detailed journey of how our products travel from farm to your table
            </p>
          </motion.div>

          <div className="space-y-16">
            {detailedProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    >
                      <i className={`${step.icon} text-xl text-primary`}></i>
                    </motion.div>
                    <div>
                      <span className="text-sm font-semibold text-primary">
                        Step {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-earth-800">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-earth-600 font-serif text-lg mb-6">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {step.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        whileHover={{ scale: 1.05 }}
                        className="bg-earth-50 p-4 rounded-lg text-center"
                      >
                        <div className="text-sm font-semibold text-primary">
                          {stat}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
              Our Impact
            </h2>
            <p className="text-xl text-earth-600 font-serif max-w-3xl mx-auto">
              The positive effects of our process extend far beyond just great products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-users",
                number: "1,500+",
                label: "Families Supported",
                description: "Farmer families earning fair wages",
              },
              {
                icon: "fas fa-leaf",
                number: "50,000",
                label: "Acres Organic",
                description: "Converted to sustainable farming",
              },
              {
                icon: "fas fa-water",
                number: "30%",
                label: "Water Saved",
                description: "Through efficient irrigation",
              },
              {
                icon: "fas fa-heart",
                number: "98%",
                label: "Customer Satisfaction",
                description: "Love our products and mission",
              },
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <i className={`${impact.icon} text-2xl text-primary`}></i>
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {impact.number}
                </div>
                <h3 className="text-lg font-semibold text-earth-800 mb-2">
                  {impact.label}
                </h3>
                <p className="text-earth-600 font-serif text-sm">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl font-serif opacity-90 mb-8">
              Every purchase supports sustainable farming and helps build a better future for farmers and the planet.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 text-earth-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Our Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

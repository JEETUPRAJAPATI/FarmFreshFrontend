import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import FarmerCard from "../components/FarmerCard";
import Footer from "../components/Footer";

export default function OurFarmers() {
  const { data: farmers = [], isLoading } = useQuery({
    queryKey: ["/api/farmers"],
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-accent to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Farmers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-serif opacity-90"
          >
            Meet the passionate people who bring you the finest natural products from around the world
          </motion.p>
        </div>
      </section>

      {/* Farmers Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-earth-100 rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {farmers.map((farmer, index) => (
                <motion.div
                  key={farmer.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FarmerCard farmer={farmer} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              Supporting Farming Communities
            </h2>
            <p className="text-xl text-earth-600 font-serif mb-8">
              Every purchase directly supports small-scale farmers and their communities, 
              helping preserve traditional farming methods and ensure sustainable livelihoods.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  number: "150+",
                  label: "Partner Farmers",
                  icon: "fas fa-users",
                },
                {
                  number: "25",
                  label: "Countries",
                  icon: "fas fa-globe",
                },
                {
                  number: "98%",
                  label: "Fair Trade Certified",
                  icon: "fas fa-certificate",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <i className={`${stat.icon} text-2xl text-primary`}></i>
                  </motion.div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-earth-600 font-serif">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

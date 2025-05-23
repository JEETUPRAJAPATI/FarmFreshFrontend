import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import FarmerCard from "./FarmerCard";

export default function FarmersSection() {
  const { data: farmers = [], isLoading } = useQuery({
    queryKey: ["/api/farmers"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">Meet Our Farmers</h2>
            <p className="text-xl text-earth-600 font-serif">The passionate people behind every product</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-earth-100 rounded-xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">Meet Our Farmers</h2>
          <p className="text-xl text-earth-600 font-serif">The passionate people behind every product</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {farmers.map((farmer, index) => (
            <motion.div
              key={farmer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FarmerCard farmer={farmer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

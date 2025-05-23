import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  const featuredProducts = products.slice(0, 4);

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">Featured Products</h2>
            <p className="text-xl text-earth-600 font-serif">Hand-picked selections from our finest farmers</p>
          </div>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-80 h-96 bg-earth-100 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">Featured Products</h2>
          <p className="text-xl text-earth-600 font-serif">Hand-picked selections from our finest farmers</p>
        </motion.div>

        {/* Horizontal Scrolling Products */}
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

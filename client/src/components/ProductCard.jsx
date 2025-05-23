import { motion } from "framer-motion";
import { Link } from "wouter";
import { useCart } from "../hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart! 🎉",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <motion.i 
            key={i} 
            className="fas fa-star"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          ></motion.i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={i} className="far fa-star text-slate-300"></i>
        ))}
      </div>
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      Coffee: "bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 border-emerald-300",
      Spices: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border-orange-300",
      Grains: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border-yellow-300",
      Herbs: "bg-gradient-to-r from-green-100 to-green-200 text-green-700 border-green-300",
    };
    return colors[category] || "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border-slate-300";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Coffee: "fas fa-coffee",
      Spices: "fas fa-pepper-hot",
      Grains: "fas fa-seedling",
      Herbs: "fas fa-leaf",
    };
    return icons[category] || "fas fa-box";
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        rotateY: 5,
      }}
      transition={{ 
        duration: 0.4,
        ease: "easeOut"
      }}
      className="w-80 perspective-1000"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative glass backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-white/20">
          {/* Product Image */}
          <div className="relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`absolute top-4 left-4 px-3 py-2 rounded-2xl text-sm font-semibold border ${getCategoryColor(product.category)} backdrop-blur-sm`}
            >
              <i className={`${getCategoryIcon(product.category)} mr-2`}></i>
              {product.category}
            </motion.div>

            {/* Rating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-4 right-4 glass-emerald backdrop-blur-md px-3 py-2 rounded-2xl flex items-center space-x-1"
            >
              <i className="fas fa-star text-yellow-300 text-sm"></i>
              <span className="text-white font-semibold text-sm">{product.rating}</span>
            </motion.div>

            {/* Quick Action Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: isHovered ? 1 : 0, rotate: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass-emerald backdrop-blur-md p-3 rounded-full text-white hover:bg-emerald-500/50 transition-colors duration-300"
                >
                  <i className="fas fa-eye text-lg"></i>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                >
                  <i className="fas fa-heart text-lg"></i>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Product Details */}
          <div className="p-6 bg-white/80 backdrop-blur-sm">
            {/* Stars and Reviews */}
            <div className="flex items-center justify-between mb-3">
              {renderStars(parseFloat(product.rating))}
              <span className="text-sm text-slate-500 font-medium">
                ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Product Name */}
            <motion.h3 
              className="text-xl font-bold text-slate-800 mb-2 hover:text-emerald-600 transition-colors duration-300 line-clamp-2"
              whileHover={{ scale: 1.02 }}
            >
              {product.name}
            </motion.h3>
            
            {/* Description */}
            <p className="text-slate-600 mb-4 font-medium text-sm leading-relaxed line-clamp-2">
              {product.description}
            </p>
            
            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between">
              <motion.div 
                className="text-3xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                ${product.price}
              </motion.div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-emerald hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                ></motion.div>
                <div className="relative flex items-center space-x-2">
                  <motion.i 
                    className="fas fa-shopping-cart"
                    animate={{ rotate: isHovered ? [0, 15, -15, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  ></motion.i>
                  <span>Add to Cart</span>
                </div>
              </motion.button>
            </div>
            
            {/* Farmer Info */}
            <motion.div 
              className="mt-4 pt-4 border-t border-slate-200 flex items-center space-x-2 text-sm text-slate-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white text-xs"></i>
              </div>
              <span className="font-medium">From Farmer #{product.farmerId}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full ml-auto"
              ></motion.div>
            </motion.div>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

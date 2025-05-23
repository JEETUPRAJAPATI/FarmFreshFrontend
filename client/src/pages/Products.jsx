import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: selectedCategory ? ["/api/products", { category: selectedCategory }] : ["/api/products"],
    queryFn: () => {
      const url = selectedCategory 
        ? `/api/products?category=${encodeURIComponent(selectedCategory)}`
        : "/api/products";
      return fetch(url, { credentials: "include" }).then(res => res.json());
    },
  });

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return parseFloat(a.price) - parseFloat(b.price);
        case "price-high": return parseFloat(b.price) - parseFloat(a.price);
        case "rating": return parseFloat(b.rating || 0) - parseFloat(a.rating || 0);
        default: return a.name.localeCompare(b.name);
      }
    });

  const categories = [
    { value: "", label: "All Products", icon: "fas fa-th-large", color: "text-slate-600", bgColor: "bg-gradient-to-r from-slate-100 to-slate-200" },
    { value: "Coffee", label: "Coffee", icon: "fas fa-coffee", color: "text-emerald-600", bgColor: "bg-gradient-to-r from-emerald-100 to-emerald-200" },
    { value: "Spices", label: "Spices", icon: "fas fa-pepper-hot", color: "text-orange-600", bgColor: "bg-gradient-to-r from-orange-100 to-orange-200" },
    { value: "Grains", label: "Grains", icon: "fas fa-seedling", color: "text-yellow-600", bgColor: "bg-gradient-to-r from-yellow-100 to-yellow-200" },
    { value: "Herbs", label: "Herbs", icon: "fas fa-leaf", color: "text-green-600", bgColor: "bg-gradient-to-r from-green-100 to-green-200" },
  ];

  const sortOptions = [
    { value: "name", label: "Name A-Z", icon: "fas fa-sort-alpha-down" },
    { value: "price-low", label: "Price: Low to High", icon: "fas fa-sort-amount-down" },
    { value: "price-high", label: "Price: High to Low", icon: "fas fa-sort-amount-up" },
    { value: "rating", label: "Highest Rated", icon: "fas fa-star" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar Filters */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-80 flex-shrink-0"
            >
              <div className="sticky top-28">
                {/* Search Bar */}
                <div className="glass backdrop-blur-md p-6 rounded-3xl border border-white/20 mb-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <i className="fas fa-search text-emerald-500 mr-2"></i>
                    Search Products
                  </h3>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-12 glass backdrop-blur-sm rounded-2xl border border-white/30 text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    />
                    <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500"></i>
                    {searchQuery && (
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <i className="fas fa-times text-slate-600 text-xs"></i>
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Category Filters */}
                <div className="glass backdrop-blur-md p-6 rounded-3xl border border-white/20 mb-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <i className="fas fa-filter text-orange-500 mr-2"></i>
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.button
                        key={category.value}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`w-full flex items-center px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                          selectedCategory === category.value
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald"
                            : `${category.bgColor} ${category.color} hover:shadow-lg border border-white/30`
                        }`}
                      >
                        <motion.i 
                          className={`${category.icon} mr-3 text-lg`}
                          animate={{ rotate: selectedCategory === category.value ? [0, 360] : 0 }}
                          transition={{ duration: 0.5 }}
                        ></motion.i>
                        <span className="flex-1 text-left">{category.label}</span>
                        {selectedCategory === category.value && (
                          <motion.i
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="fas fa-check text-white"
                          ></motion.i>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div className="glass backdrop-blur-md p-6 rounded-3xl border border-white/20">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <i className="fas fa-sort text-yellow-500 mr-2"></i>
                    Sort By
                  </h3>
                  <div className="space-y-2">
                    {sortOptions.map((option, index) => (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSortBy(option.value)}
                        className={`w-full flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          sortBy === option.value
                            ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 shadow-lg"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <i className={`${option.icon} mr-3`}></i>
                        <span className="flex-1 text-left">{option.label}</span>
                        {sortBy === option.value && (
                          <i className="fas fa-check"></i>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content Area */}
            <div className="flex-1">
              {/* Header & Controls */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
              >
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    Our Products
                  </h1>
                  <p className="text-slate-600">
                    Discover {filteredProducts.length} premium natural products from passionate farmers
                  </p>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 glass backdrop-blur-md p-2 rounded-2xl border border-white/20">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode("grid")}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === "grid" 
                        ? "bg-emerald-500 text-white shadow-emerald" 
                        : "text-slate-600 hover:bg-white/50"
                    }`}
                  >
                    <i className="fas fa-th text-lg"></i>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode("list")}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === "list" 
                        ? "bg-emerald-500 text-white shadow-emerald" 
                        : "text-slate-600 hover:bg-white/50"
                    }`}
                  >
                    <i className="fas fa-list text-lg"></i>
                  </motion.button>
                </div>
              </motion.div>

              {/* Products Grid */}
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`grid gap-6 ${
                      viewMode === "grid" 
                        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                        : "grid-cols-1"
                    }`}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="glass backdrop-blur-md rounded-3xl h-96 border border-white/20"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                ) : filteredProducts.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-20"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-32 h-32 mx-auto mb-8 glass-emerald backdrop-blur-md rounded-full flex items-center justify-center"
                    >
                      <i className="fas fa-search text-4xl text-white"></i>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">No Products Found</h3>
                    <p className="text-slate-600 text-lg mb-8">Try adjusting your search or filters</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("");
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-emerald hover:shadow-xl transition-all duration-300"
                    >
                      Clear All Filters
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="products"
                    layout
                    className={`grid gap-6 ${
                      viewMode === "grid" 
                        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                        : "grid-cols-1"
                    }`}
                  >
                    <AnimatePresence>
                      {filteredProducts.map((product, index) => (
                        <motion.div
                          key={product.id}
                          layout
                          initial={{ opacity: 0, scale: 0.8, y: 50 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: -50 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.05,
                            layout: { duration: 0.3 }
                          }}
                        >
                          <ProductCard product={product} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

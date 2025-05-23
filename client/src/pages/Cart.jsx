import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hooks/useCart";
import { Link } from "wouter";
import Footer from "../components/Footer";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, cartCount } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    // Simple promo code logic
    if (promoCode.toLowerCase() === "farm10") {
      setDiscount(0.1);
    } else if (promoCode.toLowerCase() === "fresh20") {
      setDiscount(0.2);
    } else {
      setDiscount(0);
    }
  };

  const finalTotal = getTotalPrice() * (1 - discount);

  if (cartCount === 0) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 mx-auto mb-8 glass-emerald backdrop-blur-md rounded-full flex items-center justify-center"
            >
              <i className="fas fa-shopping-cart text-4xl text-white"></i>
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Cart is Empty</h2>
            <p className="text-slate-600 text-lg mb-8">Discover amazing products from our farmers!</p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-emerald hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-shopping-bag mr-2"></i>
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Shopping Cart</h1>
            <p className="text-slate-600">You have {cartCount} items in your cart</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass backdrop-blur-md p-6 rounded-3xl border border-white/20"
              >
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <i className="fas fa-list text-emerald-500 mr-2"></i>
                  Cart Items
                </h2>

                <div className="space-y-4">
                  <AnimatePresence>
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-white/30 hover:shadow-lg transition-all duration-300"
                      >
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-800 mb-1">{item.name}</h3>
                          <p className="text-slate-600 text-sm mb-2">{item.category}</p>
                          <div className="text-lg font-bold text-emerald-600">${item.price}</div>
                        </div>

                        <div className="flex items-center gap-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="w-8 h-8 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <i className="fas fa-minus text-slate-600 text-sm"></i>
                          </motion.button>
                          
                          <span className="w-8 text-center font-semibold text-slate-800">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <i className="fas fa-plus text-white text-sm"></i>
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-200 ml-3"
                        >
                          <i className="fas fa-trash text-red-500 text-sm"></i>
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass backdrop-blur-md p-6 rounded-3xl border border-white/20 sticky top-28"
              >
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <i className="fas fa-receipt text-orange-500 mr-2"></i>
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 glass backdrop-blur-sm rounded-xl border border-white/30 text-slate-700 focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-xl font-medium shadow-lg transition-all duration-300"
                    >
                      Apply
                    </motion.button>
                  </div>
                  {discount > 0 && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-sm mt-2 flex items-center"
                    >
                      <i className="fas fa-check-circle mr-1"></i>
                      {discount * 100}% discount applied!
                    </motion.p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({discount * 100}%)</span>
                      <span>-${(getTotalPrice() * discount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3">
                    <div className="flex justify-between text-lg font-bold text-slate-800">
                      <span>Total</span>
                      <span className="text-emerald-600">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-emerald hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <i className="fas fa-credit-card"></i>
                    <span>Proceed to Checkout</span>
                  </motion.button>
                  
                  <Link href="/products">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 glass backdrop-blur-md border border-white/30 text-slate-700 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <i className="fas fa-arrow-left"></i>
                      <span>Continue Shopping</span>
                    </motion.button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="text-xs text-slate-500">
                      <i className="fas fa-shield-alt text-emerald-500 mb-1 block"></i>
                      Secure
                    </div>
                    <div className="text-xs text-slate-500">
                      <i className="fas fa-truck text-orange-500 mb-1 block"></i>
                      Free Ship
                    </div>
                    <div className="text-xs text-slate-500">
                      <i className="fas fa-undo text-yellow-500 mb-1 block"></i>
                      30-Day Return
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
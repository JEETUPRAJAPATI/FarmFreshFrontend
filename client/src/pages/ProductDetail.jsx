import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { useCart } from "../hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";

export default function ProductDetail() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const { data: product, isLoading } = useQuery({
    queryKey: [`/api/products/${slug}`],
  });

  const { data: farmer } = useQuery({
    queryKey: product ? [`/api/farmers/${product.farmerId}`] : null,
    enabled: !!product,
  });

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      toast({
        title: "Added to cart!",
        description: `${quantity} x ${product.name} added to your cart.`,
      });
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={i} className="far fa-star"></i>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <>
        <div className="min-h-screen bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-earth-100 rounded-xl h-96 animate-pulse"></div>
              <div className="space-y-4">
                <div className="bg-earth-100 h-8 rounded animate-pulse"></div>
                <div className="bg-earth-100 h-6 rounded animate-pulse"></div>
                <div className="bg-earth-100 h-20 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-6xl text-earth-300 mb-4"></i>
            <h1 className="text-3xl font-bold text-earth-800 mb-2">Product Not Found</h1>
            <p className="text-earth-600">The product you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const whyDifferentPoints = [
    {
      icon: "fas fa-leaf",
      title: "100% Organic",
      description: "Grown without synthetic pesticides or fertilizers",
    },
    {
      icon: "fas fa-handshake",
      title: "Fair Trade",
      description: "Direct partnership ensuring fair compensation",
    },
    {
      icon: "fas fa-truck",
      title: "Fresh Direct",
      description: "Shipped directly from farm to your door",
    },
    {
      icon: "fas fa-recycle",
      title: "Sustainable",
      description: "Environmentally responsible farming practices",
    },
  ];

  return (
    <>
      <div className="bg-white">
        {/* Product Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-earth-800 mt-4 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-4 mb-4">
                    {renderStars(parseFloat(product.rating))}
                    <span className="text-earth-600">
                      ({product.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">
                    ${product.price}
                  </div>
                </div>

                <p className="text-earth-600 font-serif text-lg">
                  {product.description}
                </p>

                {/* Farmer Info */}
                {farmer && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-earth-50 p-6 rounded-xl"
                  >
                    <h3 className="font-semibold text-earth-800 mb-2">Meet the Farmer</h3>
                    <div className="flex items-center space-x-4">
                      <img
                        src={farmer.imageUrl}
                        alt={farmer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-earth-800">{farmer.name}</div>
                        <div className="text-sm text-earth-600">{farmer.location}</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="font-medium text-earth-800">Quantity:</label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="bg-earth-200 hover:bg-earth-300 text-earth-800 w-8 h-8 rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-minus text-sm"></i>
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-earth-200 hover:bg-earth-300 text-earth-800 w-8 h-8 rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-plus text-sm"></i>
                      </button>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleAddToCart}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Add to Cart - ${(parseFloat(product.price) * quantity).toFixed(2)}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It's Different */}
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
                Why It's Different
              </h2>
              <p className="text-xl text-earth-600 font-serif">
                What makes our {product.name} special
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyDifferentPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <i className={`${point.icon} text-2xl text-primary`}></i>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-earth-800 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-earth-600 font-serif">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
                Customer Reviews
              </h2>
              <div className="flex items-center justify-center space-x-4">
                {renderStars(parseFloat(product.rating))}
                <span className="text-xl text-earth-600">
                  {product.rating} out of 5 ({product.reviewCount} reviews)
                </span>
              </div>
            </motion.div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-earth-50 p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-earth-800">John Doe</div>
                    {renderStars(5)}
                  </div>
                </div>
                <p className="text-earth-700 font-serif italic">
                  "Exceptional quality! You can really taste the difference when products come directly from passionate farmers."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

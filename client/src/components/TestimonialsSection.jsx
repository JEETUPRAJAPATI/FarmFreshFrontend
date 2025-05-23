import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jessica Smith",
      location: "Portland, Oregon",
      initials: "JS",
      rating: 5,
      comment: "The coffee from Maria's farm is absolutely incredible. You can taste the care and passion in every cup. It's become our morning ritual.",
    },
    {
      name: "Michael Rodriguez",
      location: "Austin, Texas",
      initials: "MR",
      rating: 5,
      comment: "Finally found spices that actually have flavor! The quality is outstanding and knowing it comes directly from the farmers makes it even better.",
    },
    {
      name: "Anna Lee",
      location: "San Francisco, CA",
      initials: "AL",
      rating: 5,
      comment: "The ancient grains have transformed our cooking. Such rich flavors and knowing we're supporting sustainable farming practices feels great.",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={i < rating ? "fas fa-star" : "far fa-star"}></i>
        ))}
      </div>
    );
  };

  const getInitialsColor = (initials) => {
    const colors = ["bg-primary", "bg-secondary", "bg-accent"];
    const index = initials.charCodeAt(0) % colors.length;
    return colors[index];
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-earth-600 font-serif">Real stories from people who love our products</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-earth-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {renderStars(testimonial.rating)}
              
              <blockquote className="text-earth-700 font-serif mb-4 italic">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className={`w-10 h-10 ${getInitialsColor(testimonial.initials)} rounded-full flex items-center justify-center text-white font-semibold mr-3`}
                >
                  <span>{testimonial.initials}</span>
                </motion.div>
                <div>
                  <div className="font-semibold text-earth-800">{testimonial.name}</div>
                  <div className="text-sm text-earth-600">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

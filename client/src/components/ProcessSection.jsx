import { motion } from "framer-motion";

export default function ProcessSection() {
  const processSteps = [
    {
      icon: "fas fa-handshake",
      title: "Partner Selection",
      description: "We carefully select farmers based on their commitment to sustainable practices and quality standards.",
      color: "primary",
    },
    {
      icon: "fas fa-seedling",
      title: "Sustainable Farming",
      description: "Our farmers use organic and regenerative practices that protect the environment and enhance soil health.",
      color: "secondary",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing and quality checks to ensure it meets our high standards.",
      color: "accent",
    },
    {
      icon: "fas fa-shipping-fast",
      title: "Direct Delivery",
      description: "Products are shipped directly from farms to your door, maintaining freshness and supporting fair trade.",
      color: "primary",
    },
  ];

  const behindScenes = [
    {
      title: "Careful Harvesting",
      description: "Hand-picked at peak ripeness using traditional methods passed down through generations.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Natural Processing",
      description: "Minimal processing using time-honored techniques that preserve natural flavors and nutrients.",
      image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Eco Packaging",
      description: "Sustainable packaging materials that protect products while respecting the environment.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-16 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">Our Process</h2>
          <p className="text-xl text-earth-600 font-serif max-w-3xl mx-auto">
            From seed to shelf, every step is carefully managed to ensure the highest quality and fairest prices for both farmers and customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <i className={`${step.icon} text-3xl ${getColorClasses(step.color)}`}></i>
              </motion.div>
              <h3 className="text-xl font-semibold text-earth-800 mb-3">{step.title}</h3>
              <p className="text-earth-600 font-serif">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-earth-800 mb-8 text-center">Behind the Scenes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {behindScenes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
                />
                <h4 className="text-lg font-semibold text-earth-800 mb-2">{item.title}</h4>
                <p className="text-earth-600 font-serif">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

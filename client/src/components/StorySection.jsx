import { motion } from "framer-motion";

export default function StorySection() {
  const timelineItems = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Started with a simple vision: to create direct connections between farmers and consumers, ensuring fair prices and exceptional quality.",
      color: "primary",
    },
    {
      year: "2018",
      title: "Global Network",
      description: "Expanded to work with over 100 farmers across 15 countries, building a global network of sustainable agriculture partners.",
      color: "secondary",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched our digital platform, making it easier than ever for customers to discover the stories behind their food.",
      color: "accent",
    },
    {
      year: "Today",
      title: "Sustainable Future",
      description: "Continuing to grow while maintaining our commitment to farmer welfare, environmental sustainability, and product excellence.",
      color: "primary",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: "bg-primary text-primary",
      secondary: "bg-secondary text-secondary",
      accent: "bg-accent text-accent",
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">Our Story</h2>
          <p className="text-xl text-earth-600 font-serif max-w-3xl mx-auto">
            Born from a passion to connect conscious consumers with dedicated farmers who share our values of sustainability, quality, and authenticity.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${getColorClasses(item.color).split(' ')[0]} rounded-full border-4 border-white shadow-lg z-10`}
                ></motion.div>
                
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-earth-50 p-6 rounded-xl shadow-lg transition-all duration-300"
                  >
                    <span className={`${getColorClasses(item.color).split(' ')[1]} font-semibold text-sm`}>
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-earth-800 mt-2 mb-3">{item.title}</h3>
                    <p className="text-earth-600 font-serif">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary/5 p-8 rounded-2xl"
        >
          <blockquote className="text-2xl md:text-3xl font-serif text-earth-800 italic mb-6">
            "Every product tells a story of dedication, tradition, and the connection between land and table."
          </blockquote>
          <cite className="text-earth-600 font-medium">— Farm Fresh Founders</cite>
        </motion.div>
      </div>
    </section>
  );
}

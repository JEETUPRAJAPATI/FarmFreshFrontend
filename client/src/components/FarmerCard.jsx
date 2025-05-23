import { motion } from "framer-motion";

export default function FarmerCard({ farmer }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src={farmer.imageUrl}
        alt={farmer.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-earth-800 mb-2">{farmer.name}</h3>
        
        <div className="flex items-center text-earth-600 mb-3">
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>{farmer.location}</span>
        </div>
        
        <p className="text-earth-600 font-serif mb-4">{farmer.bio}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-earth-500">
            Products: <span className="font-semibold">{farmer.productCount}</span>
          </span>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-primary hover:text-primary/80 font-medium transition-all duration-200 flex items-center"
          >
            View Profile 
            <i className="fas fa-arrow-right ml-1"></i>
          </motion.button>
        </div>
        
        {farmer.yearsExperience > 0 && (
          <div className="mt-3 text-sm text-earth-500">
            <i className="fas fa-clock mr-1"></i>
            {farmer.yearsExperience} years experience
          </div>
        )}
      </div>
    </motion.div>
  );
}

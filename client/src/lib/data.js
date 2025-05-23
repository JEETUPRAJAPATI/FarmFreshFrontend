// Constants and utility data for the Farm Fresh application

export const CATEGORIES = [
  { value: "", label: "All Products", icon: "fas fa-th-large" },
  { value: "Coffee", label: "Coffee", icon: "fas fa-coffee" },
  { value: "Spices", label: "Spices", icon: "fas fa-pepper-hot" },
  { value: "Grains", label: "Grains", icon: "fas fa-seedling" },
  { value: "Herbs", label: "Herbs", icon: "fas fa-leaf" },
  { value: "Tea", label: "Tea", icon: "fas fa-mug-hot" },
];

export const CONTACT_CATEGORIES = [
  { value: "products", label: "Product Questions" },
  { value: "partnership", label: "Farmer Partnership" },
  { value: "wholesale", label: "Wholesale Inquiry" },
  { value: "support", label: "Customer Support" },
  { value: "other", label: "Other" },
];

export const SOCIAL_LINKS = [
  { icon: "fab fa-facebook-f", href: "#", platform: "Facebook" },
  { icon: "fab fa-instagram", href: "#", platform: "Instagram" },
  { icon: "fab fa-twitter", href: "#", platform: "Twitter" },
  { icon: "fab fa-youtube", href: "#", platform: "YouTube" },
];

export const COMPANY_INFO = {
  name: "Farm Fresh",
  tagline: "Fresh from Farm to Your Table",
  description: "Connecting passionate farmers with conscious consumers for a more sustainable and flavorful world.",
  email: "hello@farmfresh.com",
  phone: "+1 (555) 123-4567",
  address: "123 Farm Lane, Green Valley, CA 95020",
};

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/products", label: "Products" },
  { href: "/our-farmers", label: "Our Farmers" },
  { href: "/our-process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Our Story" },
    { href: "/products", label: "Products" },
    { href: "/our-farmers", label: "Our Farmers" },
    { href: "/our-process", label: "Our Process" },
  ],
  categories: [
    { href: "/products?category=coffee", label: "Coffee" },
    { href: "/products?category=spices", label: "Spices" },
    { href: "/products?category=grains", label: "Grains" },
    { href: "/products?category=herbs", label: "Herbs" },
    { href: "/products?category=tea", label: "Tea" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
};

export const PROCESS_STEPS = [
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

export const TIMELINE_ITEMS = [
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

export const VALUES = [
  {
    icon: "fas fa-heart",
    title: "Sustainability",
    description: "We prioritize environmental stewardship and regenerative farming practices that heal the earth.",
  },
  {
    icon: "fas fa-handshake",
    title: "Fair Trade",
    description: "We ensure farmers receive fair compensation for their hard work and dedication.",
  },
  {
    icon: "fas fa-star",
    title: "Quality",
    description: "We never compromise on quality, from seed selection to final packaging.",
  },
];

export const IMPACT_STATS = [
  {
    icon: "fas fa-users",
    number: "1,500+",
    label: "Families Supported",
    description: "Farmer families earning fair wages",
  },
  {
    icon: "fas fa-leaf",
    number: "50,000",
    label: "Acres Organic",
    description: "Converted to sustainable farming",
  },
  {
    icon: "fas fa-water",
    number: "30%",
    label: "Water Saved",
    description: "Through efficient irrigation",
  },
  {
    icon: "fas fa-heart",
    number: "98%",
    label: "Customer Satisfaction",
    description: "Love our products and mission",
  },
];

export const WHY_DIFFERENT_POINTS = [
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

// Utility functions
export const getCategoryColor = (category) => {
  const colors = {
    Coffee: "bg-primary/10 text-primary",
    Spices: "bg-secondary/10 text-secondary",
    Grains: "bg-accent/20 text-secondary",
    Herbs: "bg-green-100 text-green-700",
    Tea: "bg-blue-100 text-blue-700",
  };
  return colors[category] || "bg-earth-100 text-earth-700";
};

export const getColorClasses = (color) => {
  const colors = {
    primary: "bg-primary text-primary",
    secondary: "bg-secondary text-secondary",
    accent: "bg-accent text-accent",
  };
  return colors[color] || colors.primary;
};

export const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  const stars = [];
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push("fas fa-star");
  }
  
  // Half star
  if (hasHalfStar) {
    stars.push("fas fa-star-half-alt");
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push("far fa-star");
  }
  
  return stars;
};

export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

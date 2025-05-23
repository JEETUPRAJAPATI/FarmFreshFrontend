import { products, farmers, reviews, contacts, type Product, type Farmer, type Review, type Contact, type InsertProduct, type InsertFarmer, type InsertReview, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Farmers
  getFarmers(): Promise<Farmer[]>;
  getFarmerById(id: number): Promise<Farmer | undefined>;
  createFarmer(farmer: InsertFarmer): Promise<Farmer>;
  
  // Reviews
  getReviewsByProductId(productId: number): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private farmers: Map<number, Farmer>;
  private reviews: Map<number, Review>;
  private contacts: Map<number, Contact>;
  private currentProductId: number;
  private currentFarmerId: number;
  private currentReviewId: number;
  private currentContactId: number;

  constructor() {
    this.products = new Map();
    this.farmers = new Map();
    this.reviews = new Map();
    this.contacts = new Map();
    this.currentProductId = 1;
    this.currentFarmerId = 1;
    this.currentReviewId = 1;
    this.currentContactId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed farmers
    const sampleFarmers: InsertFarmer[] = [
      {
        name: "Maria Santos",
        location: "Colombia, Huila",
        specialty: "High-altitude coffee cultivation",
        bio: "Specializes in high-altitude coffee cultivation with 30 years of experience.",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        yearsExperience: 30,
      },
      {
        name: "Rajesh Kumar",
        location: "Kerala, India",
        specialty: "Traditional spice farming",
        bio: "Third-generation spice farmer growing cardamom, pepper, and turmeric.",
        imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        yearsExperience: 25,
      },
      {
        name: "Chen Wei",
        location: "Yunnan, China",
        specialty: "Ancient grain cultivation",
        bio: "Sustainable grain farmer focusing on ancient varieties and organic methods.",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        yearsExperience: 20,
      },
      {
        name: "Sofia Rossi",
        location: "Tuscany, Italy",
        specialty: "Mediterranean herbs",
        bio: "Herbal farmer cultivating Mediterranean herbs using traditional techniques.",
        imageUrl: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        yearsExperience: 15,
      },
    ];

    sampleFarmers.forEach(farmer => this.createFarmer(farmer));

    // Seed products
    const sampleProducts: InsertProduct[] = [
      {
        name: "Ethiopian Highland Coffee",
        description: "Rich, full-bodied coffee with notes of chocolate and citrus",
        price: "24.99",
        category: "Coffee",
        imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        farmerId: 1,
        rating: "5.0",
        reviewCount: 24,
        slug: "ethiopian-highland-coffee",
      },
      {
        name: "Himalayan Spice Mix",
        description: "Aromatic blend of traditional mountain spices",
        price: "18.50",
        category: "Spices",
        imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        farmerId: 2,
        rating: "4.5",
        reviewCount: 18,
        slug: "himalayan-spice-mix",
      },
      {
        name: "Ancient Grain Blend",
        description: "Nutritious mix of quinoa, amaranth, and millet",
        price: "32.00",
        category: "Grains",
        imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        farmerId: 3,
        rating: "5.0",
        reviewCount: 12,
        slug: "ancient-grain-blend",
      },
      {
        name: "Mediterranean Herbs",
        description: "Fresh dried herbs from sunny Mediterranean fields",
        price: "15.75",
        category: "Herbs",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        farmerId: 4,
        rating: "4.0",
        reviewCount: 8,
        slug: "mediterranean-herbs",
      },
      {
        name: "Colombian Single Origin",
        description: "Premium single-origin coffee beans from high-altitude farms",
        price: "28.99",
        category: "Coffee",
        imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        farmerId: 1,
        rating: "4.8",
        reviewCount: 32,
        slug: "colombian-single-origin",
      },
      {
        name: "Organic Turmeric Powder",
        description: "Pure, organic turmeric with vibrant color and flavor",
        price: "12.50",
        category: "Spices",
        imageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        farmerId: 2,
        rating: "4.7",
        reviewCount: 15,
        slug: "organic-turmeric-powder",
      },
    ];

    sampleProducts.forEach(product => this.createProduct(product));

    // Update farmer product counts
    this.farmers.forEach(farmer => {
      const productCount = Array.from(this.products.values())
        .filter(product => product.farmerId === farmer.id).length;
      farmer.productCount = productCount;
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values())
      .filter(product => product.category.toLowerCase() === category.toLowerCase());
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values())
      .find(product => product.slug === slug);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { 
      ...insertProduct, 
      id,
      rating: insertProduct.rating || "0",
      reviewCount: insertProduct.reviewCount || 0,
      inStock: insertProduct.inStock ?? true,
    };
    this.products.set(id, product);
    return product;
  }

  async getFarmers(): Promise<Farmer[]> {
    return Array.from(this.farmers.values());
  }

  async getFarmerById(id: number): Promise<Farmer | undefined> {
    return this.farmers.get(id);
  }

  async createFarmer(insertFarmer: InsertFarmer): Promise<Farmer> {
    const id = this.currentFarmerId++;
    const farmer: Farmer = { 
      ...insertFarmer, 
      id,
      productCount: insertFarmer.productCount || 0,
      yearsExperience: insertFarmer.yearsExperience || 0,
    };
    this.farmers.set(id, farmer);
    return farmer;
  }

  async getReviewsByProductId(productId: number): Promise<Review[]> {
    return Array.from(this.reviews.values())
      .filter(review => review.productId === productId);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = this.currentReviewId++;
    const review: Review = { 
      ...insertReview, 
      id,
      createdAt: new Date(),
    };
    this.reviews.set(id, review);
    return review;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();

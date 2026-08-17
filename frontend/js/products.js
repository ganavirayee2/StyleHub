// ============================================================
//  StyleHub – Products Data
//  Men, Women, Kids across Clothing/Dresses, Footwear & Accessories.
//  Price Ranges: Under ₹1000 | ₹1000–₹2000 | ₹2000–₹3000 | Above ₹3000
//  All images are unique, high-quality fashion Unsplash photos.
// ============================================================

const PRODUCTS = [

  // ════════════════════════════════════════════════════════════
  //  MEN'S COLLECTION
  // ════════════════════════════════════════════════════════════

  // ── Under ₹1000 ──────────────────────────────────────────
  {
    id: 1,
    name: "Casual Blue Linen Shirt",
    category: "men",
    type: "clothing",
    subcategory: "shirts",
    brand: "StyleHub Casual",
    price: 799,
    originalPrice: 1199,
    rating: 4.2,
    reviews: 67,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80"
    ],
    description: "Breathable linen shirt perfect for summer outings. Light, airy and effortlessly stylish.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "White"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-10",
    tags: ["shirt", "linen", "blue", "men", "clothing"]
  },
  {
    id: 2,
    name: "Black UV Aviator Sunglasses",
    category: "men",
    type: "accessories",
    subcategory: "sunglasses",
    brand: "StyleHub Luxe",
    price: 899,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 156,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80"
    ],
    description: "Classic black polarized aviators with metal frame and 100% UV protection.",
    sizes: ["One Size"],
    colors: ["Black", "Gold"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-09",
    tags: ["sunglasses", "accessories", "black", "men", "shades"]
  },
  {
    id: 3,
    name: "Men's Printed Graphic Tee",
    category: "men",
    type: "clothing",
    subcategory: "tshirts",
    brand: "StyleHub Casual",
    price: 599,
    originalPrice: 899,
    rating: 4.3,
    reviews: 88,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&q=80"
    ],
    description: "Comfortable cotton graphic tee with bold print. Perfect for casual everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Blue"],
    inStock: true,
    featured: false,
    newArrival: false,
    dateAdded: "2026-01-08",
    tags: ["tshirt", "graphic", "casual", "men", "clothing"]
  },
  {
    id: 36,
    name: "Italian Full-Grain Brown Leather Belt",
    category: "men",
    type: "accessories",
    subcategory: "belts",
    brand: "StyleHub Luxe",
    price: 749,
    originalPrice: 1199,
    rating: 4.6,
    reviews: 114,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80"
    ],
    description: "Hand-finished full-grain leather belt with solid brass buckle. An indispensable everyday formal accessory.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Black"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-19",
    tags: ["belt", "leather", "brown", "accessories", "men"]
  },
  {
    id: 37,
    name: "Classic Bifold Leather Wallet",
    category: "men",
    type: "accessories",
    subcategory: "wallets",
    brand: "StyleHub Luxe",
    price: 699,
    originalPrice: 999,
    rating: 4.5,
    reviews: 82,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80"
    ],
    description: "Slim RFID-protected genuine leather bifold wallet with 8 card slots and currency compartment.",
    sizes: ["One Size"],
    colors: ["Black", "Brown"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-18",
    tags: ["wallet", "leather", "black", "accessories", "men"]
  },

  // ── ₹1000–₹2000 ──────────────────────────────────────────
  {
    id: 4,
    name: "Classic White Oxford Shirt",
    category: "men",
    type: "clothing",
    subcategory: "shirts",
    brand: "StyleHub Premium",
    price: 1299,
    originalPrice: 1799,
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80"
    ],
    description: "A timeless white Oxford shirt crafted from 100% premium cotton. Perfect for both formal and casual occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-15",
    tags: ["shirt", "formal", "cotton", "white", "men", "clothing"]
  },
  {
    id: 5,
    name: "Slim Fit Black Chino Trousers",
    category: "men",
    type: "clothing",
    subcategory: "trousers",
    brand: "StyleHub Casual",
    price: 1599,
    originalPrice: 2199,
    rating: 4.3,
    reviews: 95,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"
    ],
    description: "Modern slim-fit chino trousers in a versatile dark tone. Ideal for smart-casual looks.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-02-01",
    tags: ["trousers", "chino", "black", "men", "clothing"]
  },
  {
    id: 6,
    name: "Yellow Casual Cotton Polo",
    category: "men",
    type: "clothing",
    subcategory: "polos",
    brand: "StyleHub Casual",
    price: 1199,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 142,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80"
    ],
    description: "Vibrant yellow cotton polo t-shirt with ribbed collar and comfortable fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "White", "Blue"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-14",
    tags: ["polo", "tshirt", "yellow", "men", "clothing"]
  },
  {
    id: 7,
    name: "Blue Lightweight Running Shoes",
    category: "men",
    type: "footwear",
    subcategory: "shoes",
    brand: "StyleHub Kicks",
    price: 1899,
    originalPrice: 2499,
    rating: 4.5,
    reviews: 134,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80"
    ],
    description: "Breathable navy blue canvas shoes engineered for all-day comfort and athletic performance.",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Blue", "Black"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-24",
    tags: ["shoes", "running", "blue", "footwear", "men", "sneakers"]
  },
  {
    id: 38,
    name: "Royal Silk Kurta & Pajama Ethnic Set",
    category: "men",
    type: "clothing",
    subcategory: "ethnic",
    brand: "StyleHub Ethnic",
    price: 1899,
    originalPrice: 2799,
    rating: 4.7,
    reviews: 105,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
    ],
    description: "Luxurious royal blue silk blend kurta paired with comfortable white churidar pajama for festive celebrations.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Yellow", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-12",
    tags: ["kurta", "ethnic", "dress", "traditional", "blue", "men", "clothing"]
  },
  {
    id: 39,
    name: "Floral Vacation Resort Shirt",
    category: "men",
    type: "clothing",
    subcategory: "shirts",
    brand: "StyleHub Casual",
    price: 1199,
    originalPrice: 1699,
    rating: 4.4,
    reviews: 73,
    badge: "New",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
    ],
    description: "Tropical printed rayon resort shirt with camp collar. Ideal for summer beach getaways.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Pink", "Blue"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-11",
    tags: ["shirt", "resort", "floral", "casual", "men", "clothing"]
  },
  {
    id: 40,
    name: "Suede Penny Loafers in Muted Beige",
    category: "men",
    type: "footwear",
    subcategory: "loafers",
    brand: "StyleHub Kicks",
    price: 1999,
    originalPrice: 2899,
    rating: 4.6,
    reviews: 89,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80"
    ],
    description: "Plush suede slip-on penny loafers designed with cushioned memory insoles.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Yellow", "Brown", "Black"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-13",
    tags: ["loafers", "shoes", "footwear", "suede", "men"]
  },

  // ── ₹2000–₹3000 ──────────────────────────────────────────
  {
    id: 8,
    name: "Urban Minimalist White Sneakers",
    category: "men",
    type: "footwear",
    subcategory: "sneakers",
    brand: "StyleHub Kicks",
    price: 2499,
    originalPrice: 3299,
    rating: 4.6,
    reviews: 175,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80"
    ],
    description: "Clean white leather sneakers. Versatile everyday streetwear essential.",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["White"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-20",
    tags: ["sneakers", "shoes", "white", "men", "footwear"]
  },
  {
    id: 9,
    name: "Khaki Cargo Jogger Pants",
    category: "men",
    type: "clothing",
    subcategory: "trousers",
    brand: "StyleHub Casual",
    price: 2199,
    originalPrice: 2999,
    rating: 4.4,
    reviews: 112,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=600&q=80"
    ],
    description: "Relaxed-fit cargo joggers with multiple pockets. Great for streetwear and casual outings.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Black"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-18",
    tags: ["cargo", "jogger", "khaki", "men", "clothing"]
  },
  {
    id: 41,
    name: "Classic Formal Black Oxford Shoes",
    category: "men",
    type: "footwear",
    subcategory: "formal",
    brand: "StyleHub Luxe",
    price: 2799,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 148,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80"
    ],
    description: "Handcrafted high-shine genuine leather Oxford dress shoes. The quintessence of formal elegance.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "Brown"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-16",
    tags: ["shoes", "oxford", "formal", "dress", "black", "footwear", "men"]
  },
  {
    id: 42,
    name: "Retro High-Top Basketball Sneakers",
    category: "men",
    type: "footwear",
    subcategory: "sneakers",
    brand: "StyleHub Kicks",
    price: 2899,
    originalPrice: 3799,
    rating: 4.7,
    reviews: 94,
    badge: "New",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80"
    ],
    description: "Color-blocked high-top leather sneakers with padded collar and high traction rubber outsole.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White", "Blue"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-17",
    tags: ["sneakers", "hightop", "retro", "footwear", "men"]
  },

  // ── Above ₹3000 ───────────────────────────────────────────
  {
    id: 10,
    name: "Premium Black Leather Jacket",
    category: "men",
    type: "clothing",
    subcategory: "jackets",
    brand: "StyleHub Luxe",
    price: 4999,
    originalPrice: 6499,
    rating: 4.8,
    reviews: 212,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
      "https://images.unsplash.com/photo-1520975916090-9e7107e67e49?w=600&q=80"
    ],
    description: "Genuine leather biker jacket with quilted lining. A wardrobe staple that only gets better with age.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-10",
    tags: ["jacket", "leather", "biker", "black", "men", "clothing"]
  },
  {
    id: 11,
    name: "Luxury Black Chronograph Watch",
    category: "men",
    type: "accessories",
    subcategory: "watches",
    brand: "StyleHub Luxe",
    price: 3999,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 98,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80"
    ],
    description: "Stainless steel analogue chronograph watch with scratch-resistant sapphire crystal.",
    sizes: ["One Size"],
    colors: ["Black", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-05",
    tags: ["watch", "accessories", "black", "men", "luxury"]
  },
  {
    id: 12,
    name: "Navy Blue Wool Blazer",
    category: "men",
    type: "clothing",
    subcategory: "blazers",
    brand: "StyleHub Luxe",
    price: 5499,
    originalPrice: 7499,
    rating: 4.7,
    reviews: 64,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80"
    ],
    description: "Sharply tailored navy wool blend blazer. The ultimate power dressing statement.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-05",
    tags: ["blazer", "formal", "navy", "wool", "men", "clothing"]
  },
  {
    id: 43,
    name: "Formal Charcoal Slim Suit 2-Piece",
    category: "men",
    type: "clothing",
    subcategory: "suits",
    brand: "StyleHub Luxe",
    price: 6499,
    originalPrice: 8999,
    rating: 4.9,
    reviews: 87,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
    ],
    description: "Premium bespoke 2-piece charcoal suit featuring structured shoulders, notch lapel and tapered trousers.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-15",
    tags: ["suit", "formal", "dress", "tuxedo", "charcoal", "men", "clothing"]
  },
  {
    id: 44,
    name: "Handcrafted Tan Leather Chelsea Boots",
    category: "men",
    type: "footwear",
    subcategory: "boots",
    brand: "StyleHub Luxe",
    price: 3499,
    originalPrice: 4799,
    rating: 4.8,
    reviews: 132,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80"
    ],
    description: "Genuine burnished leather Chelsea boots with elasticated side gussets and Goodyear welt construction.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Brown", "Black", "Yellow"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-14",
    tags: ["boots", "chelsea", "leather", "tan", "footwear", "men"]
  },


  // ════════════════════════════════════════════════════════════
  //  WOMEN'S COLLECTION
  // ════════════════════════════════════════════════════════════

  // ── Under ₹1000 ──────────────────────────────────────────
  {
    id: 13,
    name: "Floral Print Cotton Kurta Dress",
    category: "women",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Ethnic",
    price: 799,
    originalPrice: 1199,
    rating: 4.4,
    reviews: 201,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
      "https://images.unsplash.com/photo-1583394293214-b7f9bb5e2e17?w=600&q=80"
    ],
    description: "Elegant floral cotton kurta dress for everyday wear. Breathable and beautifully detailed.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "Yellow"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-20",
    tags: ["kurta", "floral", "ethnic", "dress", "women", "clothing"]
  },
  {
    id: 14,
    name: "White Casual Crop Tee",
    category: "women",
    type: "clothing",
    subcategory: "tops",
    brand: "StyleHub Chic",
    price: 599,
    originalPrice: 899,
    rating: 4.3,
    reviews: 145,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80"
    ],
    description: "Soft, fitted cotton crop top for casual days. Pairs effortlessly with jeans or skirts.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Pink"],
    inStock: true,
    featured: false,
    newArrival: false,
    dateAdded: "2026-01-14",
    tags: ["tshirt", "crop", "white", "women", "clothing"]
  },
  {
    id: 15,
    name: "Beige Canvas Tote Bag",
    category: "women",
    type: "accessories",
    subcategory: "bags",
    brand: "StyleHub Chic",
    price: 899,
    originalPrice: 1299,
    rating: 4.5,
    reviews: 178,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
    ],
    description: "Spacious canvas tote with interior pocket. Stylish and eco-friendly everyday carry.",
    sizes: ["One Size"],
    colors: ["Yellow", "Black", "Pink"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-16",
    tags: ["tote", "bag", "canvas", "accessories", "women"]
  },
  {
    id: 45,
    name: "Boho Floral Tiered Sundress",
    category: "women",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Chic",
    price: 949,
    originalPrice: 1499,
    rating: 4.6,
    reviews: 162,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80"
    ],
    description: "Breezy tiered floral sundress with sweetheart neckline and ruffled hemline. Perfect for sunny day strolls.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "Yellow", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-21",
    tags: ["dress", "sundress", "floral", "boho", "women", "clothing"]
  },
  {
    id: 46,
    name: "Classic Pointed-Toe Ballet Flats",
    category: "women",
    type: "footwear",
    subcategory: "flats",
    brand: "StyleHub Chic",
    price: 899,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 97,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&q=80"
    ],
    description: "Ultra-flexible faux leather pointed ballet flats with cushioned arch support for all-day office comfort.",
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Black", "Pink", "White"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-18",
    tags: ["flats", "ballet", "shoes", "footwear", "women"]
  },
  {
    id: 47,
    name: "Tortoiseshell Oversized Sunglasses",
    category: "women",
    type: "accessories",
    subcategory: "sunglasses",
    brand: "StyleHub Chic",
    price: 799,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 139,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80"
    ],
    description: "Glamorous oversized cat-eye sunglasses with gradient UV400 protective lenses.",
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Pink"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-15",
    tags: ["sunglasses", "shades", "accessories", "women"]
  },

  // ── ₹1000–₹2000 ──────────────────────────────────────────
  {
    id: 16,
    name: "Yellow Silk Satin Wrap Blouse",
    category: "women",
    type: "clothing",
    subcategory: "tops",
    brand: "StyleHub Chic",
    price: 1299,
    originalPrice: 1799,
    rating: 4.5,
    reviews: 142,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
    ],
    description: "Vibrant satin wrap blouse. Adds energy and elegance to any ensemble.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Yellow", "Pink", "White"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-25",
    tags: ["blouse", "satin", "yellow", "women", "clothing"]
  },
  {
    id: 17,
    name: "High-Waist Wide Leg Trousers",
    category: "women",
    type: "clothing",
    subcategory: "pants",
    brand: "StyleHub Chic",
    price: 1499,
    originalPrice: 1999,
    rating: 4.4,
    reviews: 116,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    description: "Sophisticated wide-leg trousers that elongate the silhouette. High-waisted and fluid.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Pink", "White"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-12",
    tags: ["trousers", "wideleg", "pants", "women", "clothing"]
  },
  {
    id: 18,
    name: "Pastel Pink Pleated Wrap Midi Dress",
    category: "women",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Chic",
    price: 1799,
    originalPrice: 2499,
    rating: 4.6,
    reviews: 188,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
    ],
    description: "Flowing pleated midi dress with wrap front and waist tie belt. Effortlessly chic for brunches and celebrations.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "White", "Blue"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-17",
    tags: ["dress", "pleated", "midi", "pink", "women", "clothing"]
  },
  {
    id: 19,
    name: "Women's White Chunky Platform Sneakers",
    category: "women",
    type: "footwear",
    subcategory: "sneakers",
    brand: "StyleHub Kicks",
    price: 1899,
    originalPrice: 2599,
    rating: 4.6,
    reviews: 215,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80"
    ],
    description: "Trendy chunky platform sneakers with breathable mesh panels and cushioned midsole.",
    sizes: ["5", "6", "7", "8", "9"],
    colors: ["White", "Pink"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-18",
    tags: ["sneakers", "chunky", "platform", "footwear", "women"]
  },
  {
    id: 48,
    name: "Quilted Chain Crossbody Shoulder Bag",
    category: "women",
    type: "accessories",
    subcategory: "bags",
    brand: "StyleHub Luxe",
    price: 1599,
    originalPrice: 2299,
    rating: 4.8,
    reviews: 172,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
    ],
    description: "Luxurious quilted vegan leather crossbody bag with polished gold-tone turn-lock and chain strap.",
    sizes: ["One Size"],
    colors: ["Black", "Pink", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-14",
    tags: ["bag", "crossbody", "handbag", "quilted", "accessories", "women"]
  },
  {
    id: 49,
    name: "Floral Chiffon Tiered Maxi Summer Dress",
    category: "women",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Chic",
    price: 1999,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 124,
    badge: "New",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80"
    ],
    description: "Ethereal lightweight chiffon maxi dress with romantic floral print, tiered skirt and ruffled cap sleeves.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "Yellow"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-19",
    tags: ["dress", "maxi", "chiffon", "floral", "summer", "women", "clothing"]
  },

  // ── ₹2000–₹3000 ──────────────────────────────────────────
  {
    id: 20,
    name: "Embroidered Silk Anarkali Festive Dress",
    category: "women",
    type: "clothing",
    subcategory: "ethnic",
    brand: "StyleHub Ethnic",
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 167,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1583394293214-b7f9bb5e2e17?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583394293214-b7f9bb5e2e17?w=600&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
    ],
    description: "Stunning Anarkali festive gown dress with zari embroidery. Traditional glamour redefined.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "Yellow"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-22",
    tags: ["anarkali", "ethnic", "dress", "silk", "pink", "women", "clothing"]
  },
  {
    id: 21,
    name: "Rose Gold Minimalist Mesh Watch",
    category: "women",
    type: "accessories",
    subcategory: "watches",
    brand: "StyleHub Luxe",
    price: 2299,
    originalPrice: 3199,
    rating: 4.7,
    reviews: 133,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
    ],
    description: "Sleek rose gold-tone mesh bracelet watch with sunray dial and water resistance.",
    sizes: ["One Size"],
    colors: ["Pink", "White"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-11",
    tags: ["watch", "rosegold", "accessories", "women", "luxury"]
  },
  {
    id: 50,
    name: "Classic Nude Pointed Stiletto Heels",
    category: "women",
    type: "footwear",
    subcategory: "heels",
    brand: "StyleHub Luxe",
    price: 2499,
    originalPrice: 3599,
    rating: 4.8,
    reviews: 154,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80"
    ],
    description: "Timeless 3.5-inch pointed stiletto pumps in lustrous nude patent finish. The ultimate evening statement.",
    sizes: ["5", "6", "7", "8", "9"],
    colors: ["Pink", "Black", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-16",
    tags: ["heels", "stiletto", "pumps", "footwear", "women", "party"]
  },
  {
    id: 51,
    name: "Strappy Block Heel Summer Sandals",
    category: "women",
    type: "footwear",
    subcategory: "heels",
    brand: "StyleHub Chic",
    price: 2199,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 118,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600&q=80"
    ],
    description: "Chic multi-strap block heel sandals with square open toe and cushioned footbed.",
    sizes: ["5", "6", "7", "8", "9"],
    colors: ["White", "Black", "Pink"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-13",
    tags: ["sandals", "heels", "blockheel", "footwear", "women"]
  },

  // ── Above ₹3000 ───────────────────────────────────────────
  {
    id: 22,
    name: "Off-Shoulder Velvet Cocktail Dress",
    category: "women",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Luxe",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 198,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
    ],
    description: "Luxe off-shoulder evening cocktail dress in premium dark velvet. The ultimate party dress.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Blue", "Pink"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-08",
    tags: ["dress", "cocktail", "velvet", "party", "black", "women", "clothing"]
  },
  {
    id: 23,
    name: "Designer Leather Handbag",
    category: "women",
    type: "accessories",
    subcategory: "bags",
    brand: "StyleHub Luxe",
    price: 4499,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 189,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=600&q=80"
    ],
    description: "Structured genuine leather handbag with gold-tone hardware. Spacious interior with multiple compartments.",
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Pink"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-08",
    tags: ["bag", "handbag", "leather", "luxury", "accessories", "women"]
  },
  {
    id: 52,
    name: "Emerald Green Silk Slip Evening Dress",
    category: "women",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Luxe",
    price: 4299,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 210,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80"
    ],
    description: "Floor-length pure Mulberry silk cowl-neck slip gown with sensual back crossover straps.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Black", "Pink"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-15",
    tags: ["dress", "evening", "gown", "silk", "slip", "women", "clothing"]
  },
  {
    id: 53,
    name: "Tailored Double-Breasted Blazer Dress",
    category: "women",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Luxe",
    price: 3799,
    originalPrice: 4999,
    rating: 4.8,
    reviews: 140,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
    ],
    description: "Power-dressing black tuxedo blazer dress with satin peak lapels and gold lion-embossed buttons.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-16",
    tags: ["dress", "blazer", "formal", "tuxedo", "women", "clothing"]
  },
  {
    id: 54,
    name: "Tan Suede Block-Heel Ankle Boots",
    category: "women",
    type: "footwear",
    subcategory: "boots",
    brand: "StyleHub Luxe",
    price: 3299,
    originalPrice: 4599,
    rating: 4.7,
    reviews: 126,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80"
    ],
    description: "Supple tan suede ankle booties with stacked wood block heel and side zip closure.",
    sizes: ["5", "6", "7", "8", "9"],
    colors: ["Yellow", "Brown", "Black"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-17",
    tags: ["boots", "ankle", "suede", "footwear", "women"]
  },


  // ════════════════════════════════════════════════════════════
  //  KIDS' COLLECTION
  // ════════════════════════════════════════════════════════════

  // ── Under ₹1000 ──────────────────────────────────────────
  {
    id: 24,
    name: "Yellow Cotton Graphic T-Shirt",
    category: "kids",
    type: "clothing",
    subcategory: "tshirts",
    brand: "StyleHub Kids",
    price: 399,
    originalPrice: 599,
    rating: 4.4,
    reviews: 98,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80"
    ],
    description: "100% organic cotton tee with fun cartoon print. Soft, breathable and gentle on skin.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Yellow", "Blue", "Pink"],
    inStock: true,
    featured: false,
    newArrival: false,
    dateAdded: "2026-01-12",
    tags: ["tshirt", "yellow", "cotton", "kids", "clothing"]
  },
  {
    id: 25,
    name: "Floral Summer Cotton Sundress",
    category: "kids",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Kids",
    price: 699,
    originalPrice: 999,
    rating: 4.6,
    reviews: 144,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80"
    ],
    description: "Cute floral sundress made of soft cotton with ruffled sleeves and bow detail.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Pink", "Yellow", "White"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-18",
    tags: ["dress", "floral", "sundress", "kids", "clothing"]
  },
  {
    id: 26,
    name: "Kids' Slip-On Canvas Shoes",
    category: "kids",
    type: "footwear",
    subcategory: "shoes",
    brand: "StyleHub Kids",
    price: 799,
    originalPrice: 1099,
    rating: 4.3,
    reviews: 87,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80"
    ],
    description: "Easy slip-on canvas shoes with flexible rubber outsole and elastic side accents.",
    sizes: ["1", "2", "3", "4", "5"],
    colors: ["Blue", "Pink", "White"],
    inStock: true,
    featured: false,
    newArrival: false,
    dateAdded: "2026-01-09",
    tags: ["shoes", "canvas", "slipon", "kids", "footwear"]
  },
  {
    id: 27,
    name: "Kids' Polarized Colorful Sunglasses",
    category: "kids",
    type: "accessories",
    subcategory: "sunglasses",
    brand: "StyleHub Kids",
    price: 499,
    originalPrice: 799,
    rating: 4.7,
    reviews: 132,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80"
    ],
    description: "Flexible, unbreakable silicone frames with polarized UV400 lenses designed specifically for children.",
    sizes: ["One Size"],
    colors: ["Pink", "Blue", "Yellow"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-14",
    tags: ["sunglasses", "shades", "kids", "accessories"]
  },
  {
    id: 55,
    name: "Girls' Glitter Ribbon Bow Hairband Set",
    category: "kids",
    type: "accessories",
    subcategory: "hairbands",
    brand: "StyleHub Kids",
    price: 349,
    originalPrice: 599,
    rating: 4.8,
    reviews: 93,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"
    ],
    description: "Set of 5 sparkle ribbon bow hairbands and clips. Soft fabric wrapping ensures non-slip pain-free hold.",
    sizes: ["One Size"],
    colors: ["Pink", "Yellow", "Blue"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-20",
    tags: ["hairband", "bow", "accessories", "kids", "girls"]
  },
  {
    id: 56,
    name: "Kids' Breathable Summer Foam Clogs",
    category: "kids",
    type: "footwear",
    subcategory: "sandals",
    brand: "StyleHub Kids",
    price: 599,
    originalPrice: 899,
    rating: 4.5,
    reviews: 110,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80"
    ],
    description: "Ultra-lightweight waterproof foam clogs with pivoting heel strap and ventilation ports.",
    sizes: ["1", "2", "3", "4", "5"],
    colors: ["Yellow", "Blue", "Pink"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-19",
    tags: ["clogs", "sandals", "shoes", "footwear", "kids"]
  },

  // ── ₹1000–₹2000 ──────────────────────────────────────────
  {
    id: 28,
    name: "Cute Denim Dungaree Set with Tee",
    category: "kids",
    type: "clothing",
    subcategory: "sets",
    brand: "StyleHub Kids",
    price: 1299,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 121,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80"
    ],
    description: "2-piece set: soft blue denim dungarees paired with a striped cotton short-sleeve tee.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Blue", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-16",
    tags: ["dungarees", "denim", "kids", "clothing", "set", "dress"]
  },
  {
    id: 29,
    name: "Girls' Rose Pink Tulle Princess Party Dress",
    category: "kids",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Kids",
    price: 1499,
    originalPrice: 2099,
    rating: 4.8,
    reviews: 167,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80"
    ],
    description: "Fairy-tale layered tulle party frock dress with satin bodice, sequin details and back bow.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Pink", "White", "Yellow"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-19",
    tags: ["dress", "frock", "princess", "party", "tulle", "pink", "kids", "clothing"]
  },
  {
    id: 30,
    name: "Kids' Blue LED Light-Up Sneakers",
    category: "kids",
    type: "footwear",
    subcategory: "shoes",
    brand: "StyleHub Kids",
    price: 1599,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 145,
    badge: "New",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80"
    ],
    description: "Comfy sport sneakers featuring colorful LED lights in the translucent outsole. Kids go crazy for these!",
    sizes: ["1", "2", "3", "4", "5"],
    colors: ["Blue", "Pink", "Black"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-15",
    tags: ["sneakers", "blue", "kids", "footwear", "led", "shoes"]
  },
  {
    id: 31,
    name: "Yellow Animal Plush Backpack",
    category: "kids",
    type: "accessories",
    subcategory: "bags",
    brand: "StyleHub Kids",
    price: 1099,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 118,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=600&q=80",
      "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=600&q=80"
    ],
    description: "Super soft yellow plush backpack designed for school and outings. Roomy, lightweight and adorable.",
    sizes: ["One Size"],
    colors: ["Yellow", "Pink", "Blue"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-04",
    tags: ["backpack", "yellow", "kids", "accessories", "bag"]
  },
  {
    id: 57,
    name: "Girls' Glitter Bow Ballerina Party Shoes",
    category: "kids",
    type: "footwear",
    subcategory: "flats",
    brand: "StyleHub Kids",
    price: 1299,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 104,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&q=80"
    ],
    description: "Shimmering glitter ballerina flat shoes with cushioned insole and secure velcro Mary Jane strap.",
    sizes: ["1", "2", "3", "4", "5"],
    colors: ["Pink", "Gold", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-18",
    tags: ["shoes", "ballerina", "flats", "party", "glitter", "kids", "footwear"]
  },
  {
    id: 58,
    name: "Boys' Classic White & Navy Velcro Trainers",
    category: "kids",
    type: "footwear",
    subcategory: "sneakers",
    brand: "StyleHub Kids",
    price: 1399,
    originalPrice: 1899,
    rating: 4.6,
    reviews: 86,
    badge: "New",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80"
    ],
    description: "Durable faux-leather trainers with double velcro strap closures and non-slip rubber sole.",
    sizes: ["1", "2", "3", "4", "5"],
    colors: ["White", "Blue", "Black"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-17",
    tags: ["trainers", "sneakers", "velcro", "kids", "footwear"]
  },
  {
    id: 59,
    name: "Kids' Colorful Silicone Digital Sports Watch",
    category: "kids",
    type: "accessories",
    subcategory: "watches",
    brand: "StyleHub Kids",
    price: 1199,
    originalPrice: 1699,
    rating: 4.7,
    reviews: 79,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80"
    ],
    description: "Waterproof shock-resistant digital LED watch with alarm, stopwatch and colorful backlight.",
    sizes: ["One Size"],
    colors: ["Blue", "Pink", "Yellow"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-16",
    tags: ["watch", "digital", "kids", "accessories"]
  },

  // ── ₹2000–₹3000 ──────────────────────────────────────────
  {
    id: 32,
    name: "Kids' Waterproof Rain Jacket",
    category: "kids",
    type: "clothing",
    subcategory: "jackets",
    brand: "StyleHub Kids",
    price: 2299,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 96,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&q=80",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80"
    ],
    description: "100% waterproof hooded rain jacket with sealed seams. Keeps kids dry in any weather.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Yellow", "Blue", "Pink"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-23",
    tags: ["jacket", "rain", "waterproof", "kids", "clothing"]
  },
  {
    id: 33,
    name: "Kids' Premium Sports Tracksuit",
    category: "kids",
    type: "clothing",
    subcategory: "sets",
    brand: "StyleHub Kids",
    price: 2699,
    originalPrice: 3499,
    rating: 4.6,
    reviews: 77,
    badge: "New",
    image: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=600&q=80",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80"
    ],
    description: "2-piece sports tracksuit with moisture-wicking fabric. Great for PE, sports and playtime.",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Black", "Pink"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-21",
    tags: ["tracksuit", "sports", "kids", "set", "clothing"]
  },
  {
    id: 60,
    name: "Boys' 3-Piece Gentleman Party Blazer Suit Set",
    category: "kids",
    type: "clothing",
    subcategory: "suits",
    brand: "StyleHub Kids",
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 112,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
    ],
    description: "Dapper 3-piece formal party outfit including navy tailored blazer jacket, matching trousers and bow-tie shirt.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Black", "White"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-19",
    tags: ["suit", "blazer", "gentleman", "formal", "dress", "party", "kids", "clothing"]
  },
  {
    id: 61,
    name: "Unicorn Sparkle Ruffle Tiered Party Frock",
    category: "kids",
    type: "clothing",
    subcategory: "dresses",
    brand: "StyleHub Kids",
    price: 2199,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 135,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80"
    ],
    description: "Pastel rainbow ombre tulle birthday party dress with unicorn embroidery and sparkling stars.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Pink", "Blue", "Yellow"],
    inStock: true,
    featured: true,
    newArrival: true,
    dateAdded: "2026-02-20",
    tags: ["dress", "frock", "unicorn", "party", "tulle", "kids", "clothing"]
  },

  // ── Above ₹3000 ───────────────────────────────────────────
  {
    id: 34,
    name: "Kids' Premium Winter Parka",
    category: "kids",
    type: "clothing",
    subcategory: "jackets",
    brand: "StyleHub Kids",
    price: 3999,
    originalPrice: 5499,
    rating: 4.8,
    reviews: 54,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&q=80"
    ],
    description: "Ultra-warm down-filled parka with faux fur trim hood. Premium winter protection for kids.",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    colors: ["Blue", "Pink", "Black"],
    inStock: true,
    featured: true,
    newArrival: false,
    dateAdded: "2026-01-06",
    tags: ["parka", "winter", "jacket", "kids", "premium", "clothing"]
  },
  {
    id: 35,
    name: "Kids' Designer Sneaker Boots",
    category: "kids",
    type: "footwear",
    subcategory: "boots",
    brand: "StyleHub Kids",
    price: 3299,
    originalPrice: 4499,
    rating: 4.7,
    reviews: 43,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80"
    ],
    description: "High-quality leather sneaker boots with padded ankle support. Durable and fashion-forward.",
    sizes: ["1", "2", "3", "4", "5"],
    colors: ["White", "Black", "Yellow"],
    inStock: true,
    featured: false,
    newArrival: true,
    dateAdded: "2026-02-17",
    tags: ["boots", "sneakers", "kids", "footwear", "premium"]
  }
];

// ─── Helper Functions ──────────────────────────────────────
function getFeaturedProducts(limit = 8) {
  return PRODUCTS.filter(p => p.featured).slice(0, limit);
}

function getNewArrivals(limit = 8) {
  return PRODUCTS.filter(p => p.newArrival).slice(0, limit);
}

function getProductsByCategory(category, limit = null) {
  const filtered = PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  return limit ? filtered.slice(0, limit) : filtered;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id)) || null;
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(p =>
    (p.name && p.name.toLowerCase().includes(q)) ||
    (p.category && p.category.toLowerCase().includes(q)) ||
    (p.type && p.type.toLowerCase().includes(q)) ||
    (p.subcategory && p.subcategory.toLowerCase().includes(q)) ||
    (p.brand && p.brand.toLowerCase().includes(q)) ||
    (Array.isArray(p.colors) && p.colors.some(c => c.toLowerCase().includes(q))) ||
    (Array.isArray(p.tags) && p.tags.some(t => typeof t === "string" && t.toLowerCase().includes(q)))
  );
}

function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function getDiscount(price, originalPrice) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

function renderStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<i class="star star-full">★</i>';
    } else if (i - rating < 1 && i - rating > 0) {
      html += '<i class="star star-half">★</i>';
    } else {
      html += '<i class="star star-empty">☆</i>';
    }
  }
  return html;
}

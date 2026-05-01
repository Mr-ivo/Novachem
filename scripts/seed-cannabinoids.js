const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  countInStock: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
  numReviews: { type: Number, required: true, default: 0 },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const cannabinoidProducts = [
  {
    name: 'AB-PINACA',
    description: 'High-purity AB-PINACA synthetic cannabinoid for research purposes. Lab-verified quality with consistent potency. Suitable for analytical studies and reference standards.',
    price: 85,
    countInStock: 50,
    category: 'cannabinoids',
    featured: false,
    images: []
  },
  {
    name: '5F-EDMB-PINACA',
    description: 'Premium-grade 5F-EDMB-PINACA synthetic cannabinoid compound. Manufactured to exacting standards for research applications. High purity guaranteed.',
    price: 95,
    countInStock: 45,
    category: 'cannabinoids',
    featured: false,
    images: []
  },
  {
    name: 'ADB-FUBINACA',
    description: 'Research-grade ADB-FUBINACA with exceptional purity. Widely used in cannabinoid receptor studies. Lab-tested and verified for consistent results.',
    price: 90,
    countInStock: 60,
    category: 'cannabinoids',
    featured: true,
    images: []
  },
  {
    name: 'AMB-FUBINACA',
    description: 'High-quality AMB-FUBINACA synthetic cannabinoid for scientific research. Stringent quality control ensures batch-to-batch consistency.',
    price: 88,
    countInStock: 40,
    category: 'cannabinoids',
    featured: false,
    images: []
  },
  {
    name: 'MDMB-4en-PINACA',
    description: 'MDMB-4en-PINACA research compound of the highest purity. Ideal for cannabinoid binding assays and pharmacological studies. Certificate of analysis available.',
    price: 92,
    countInStock: 55,
    category: 'cannabinoids',
    featured: false,
    images: []
  },
  {
    name: 'AB-FUBINACA',
    description: 'AB-FUBINACA synthetic cannabinoid with verified molecular structure. Suitable for receptor binding studies and analytical research applications.',
    price: 87,
    countInStock: 48,
    category: 'cannabinoids',
    featured: false,
    images: []
  },
  {
    name: 'MDMB-CHMINACA',
    description: 'Research-grade MDMB-CHMINACA with exceptional batch consistency. Manufactured under strict quality protocols for reliable research outcomes.',
    price: 94,
    countInStock: 42,
    category: 'cannabinoids',
    featured: false,
    images: []
  },
  {
    name: 'MDMB-FUBINACA',
    description: 'Premium MDMB-FUBINACA synthetic cannabinoid compound. High-purity research chemical suitable for advanced scientific studies.',
    price: 96,
    countInStock: 38,
    category: 'cannabinoids',
    featured: true,
    images: []
  },
  {
    name: '5F-MDMB-2201',
    description: '5F-MDMB-2201 high-purity research compound. Extensively tested for consistency and purity. Ideal for cannabinoid receptor research and reference standards.',
    price: 98,
    countInStock: 35,
    category: 'cannabinoids',
    featured: true,
    images: []
  },
  {
    name: '4F-ADB Precursor/Kit',
    description: '4F-ADB research precursor and synthesis kit. Contains high-purity starting materials and comprehensive documentation for research synthesis applications.',
    price: 120,
    countInStock: 25,
    category: 'cannabinoids',
    featured: false,
    images: []
  }
];

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function seedCannabinoids() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error('Error: MONGODB_URI not found in environment variables');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    let added = 0;
    let skipped = 0;

    for (const productData of cannabinoidProducts) {
      const slug = createSlug(productData.name);
      
      // Check if product already exists
      const existingProduct = await Product.findOne({ slug });
      
      if (existingProduct) {
        console.log(`Skipping ${productData.name} - already exists`);
        skipped++;
        continue;
      }

      // Create new product
      const newProduct = new Product({
        ...productData,
        slug,
        rating: 0,
        numReviews: 0
      });

      await newProduct.save();
      console.log(`Added: ${productData.name}`);
      added++;
    }

    console.log(`\nSeeding complete!`);
    console.log(`Added: ${added} products`);
    console.log(`Skipped: ${skipped} products (already existed)`);

  } catch (error) {
    console.error('Error seeding products:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedCannabinoids();

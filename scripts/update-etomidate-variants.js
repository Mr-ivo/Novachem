const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const priceVariantSchema = new mongoose.Schema({
  label: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true },
}, { _id: false });

const productSchema = new mongoose.Schema({
  name: { type: String },
  slug: { type: String, unique: true },
  category: { type: String },
  images: [{ type: String }],
  description: { type: String },
  price: { type: Number },
  priceVariants: [priceVariantSchema],
  countInStock: { type: Number },
  rating: { type: Number },
  numReviews: { type: Number },
  featured: { type: Boolean },
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const updates = [
  {
    slug: 'etomidate-powder-crystal',
    price: 80, // starting / base price (lowest variant)
    priceVariants: [
      { label: '1g',   quantity: 1,   unit: 'g', price: 80  },
      { label: '5g',   quantity: 5,   unit: 'g', price: 280 },
      { label: '10g',  quantity: 10,  unit: 'g', price: 480 },
      { label: '25g',  quantity: 25,  unit: 'g', price: 900 },
      { label: '50g',  quantity: 50,  unit: 'g', price: 1500 },
      { label: '100g', quantity: 100, unit: 'g', price: 2400 },
    ],
  },
  {
    slug: 'etomidate-liquid-solution',
    price: 100, // starting / base price
    priceVariants: [
      { label: '10ml',  quantity: 10,  unit: 'ml', price: 100 },
      { label: '20ml',  quantity: 20,  unit: 'ml', price: 180 },
      { label: '50ml',  quantity: 50,  unit: 'ml', price: 380 },
      { label: '100ml', quantity: 100, unit: 'ml', price: 680 },
    ],
  },
  {
    slug: 'etomidate-vape-k-pods',
    price: 120, // starting / base price
    priceVariants: [
      { label: '2 pods',  quantity: 2,  unit: 'pods', price: 120 },
      { label: '5 pods',  quantity: 5,  unit: 'pods', price: 270 },
      { label: '10 pods', quantity: 10, unit: 'pods', price: 480 },
      { label: '20 pods', quantity: 20, unit: 'pods', price: 850 },
    ],
  },
];

async function updateVariants() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error('MONGODB_URI not found');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB\n');

    for (const update of updates) {
      const result = await Product.findOneAndUpdate(
        { slug: update.slug },
        { $set: { priceVariants: update.priceVariants, price: update.price } },
        { new: true }
      );

      if (result) {
        console.log(`✓ Updated: ${result.name}`);
        result.priceVariants.forEach(v =>
          console.log(`    ${v.label.padEnd(10)} → €${v.price}`)
        );
        console.log('');
      } else {
        console.log(`✗ Not found: ${update.slug}`);
      }
    }

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateVariants();

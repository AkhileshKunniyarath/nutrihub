import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    postalCode: String,
    country: { type: String, default: "India" },
    isDefault: { type: Boolean, default: false }
  },
  { _id: false }
);

const seoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    keywords: [String],
    canonicalUrl: String,
    openGraphImage: String,
    seoContent: String
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    sku: { type: String, required: true, unique: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    images: [String],
    price: Number,
    offerPrice: Number,
    stock: Number,
    description: String,
    ingredients: [String],
    benefits: [String],
    howToUse: String,
    featured: Boolean,
    bestSeller: Boolean,
    newArrival: Boolean,
    tags: [String],
    seo: seoSchema
  },
  { timestamps: true }
);

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: String,
    description: String,
    seo: seoSchema
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    passwordHash: String,
    role: { type: String, default: "customer" },
    phone: String,
    addresses: [addressSchema]
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
        price: Number
      }
    ],
    subtotal: Number,
    discount: Number,
    total: Number,
    paymentMethod: String,
    paymentStatus: String,
    deliveryStatus: String,
    shippingAddress: addressSchema
  },
  { timestamps: true }
);

const reviewSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: Number,
    title: String,
    body: String,
    isApproved: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true },
    type: String,
    value: Number,
    minOrderValue: Number,
    isActive: Boolean
  },
  { timestamps: true }
);

const bannerSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    image: String,
    ctaLabel: String,
    ctaHref: String,
    placement: String,
    isActive: Boolean
  },
  { timestamps: true }
);

const paymentSchema = new mongoose.Schema(
  {
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    razorpayOrderId: String,
    razorpayPaymentId: String,
    amount: Number,
    status: String,
    provider: String
  },
  { timestamps: true }
);

const wishlistSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
  },
  { timestamps: true }
);

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number
      }
    ]
  },
  { timestamps: true }
);

const settingsSchema = new mongoose.Schema(
  {
    key: { type: String, unique: true },
    value: mongoose.Schema.Types.Mixed
  },
  { timestamps: true }
);

const seoPageSchema = new mongoose.Schema(
  {
    pageKey: { type: String, unique: true },
    seo: seoSchema
  },
  { timestamps: true }
);

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);
export const Banner = mongoose.models.Banner || mongoose.model("Banner", bannerSchema);
export const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export const Wishlist = mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);
export const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export const Settings = mongoose.models.Settings || mongoose.model("Settings", settingsSchema);
export const SeoPage = mongoose.models.SeoPage || mongoose.model("SeoPage", seoPageSchema);

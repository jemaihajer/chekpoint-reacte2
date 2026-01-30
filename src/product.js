// Array of product data objects containing all product information
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    badge: "Best Seller",
    color: "#667eea",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 349.99,
    description:
      "Stay connected and track your fitness goals with our Smart Watch Pro. Features heart rate monitoring, GPS, waterproof design, and 7-day battery life. Your perfect health companion.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    badge: "New Arrival",
    color: "#f093fb",
  },
  {
    id: 3,
    name: "Professional Camera",
    price: 1299.99,
    description:
      "Capture stunning moments with our Professional Camera. 45MP full-frame sensor, 4K video recording, dual card slots, and weather-sealed body. Unleash your creativity.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    badge: "Pro Choice",
    color: "#4facfe",
  },
  {
    id: 4,
    name: "Luxury Leather Backpack",
    price: 189.99,
    description:
      "Elegant and functional leather backpack designed for professionals. Features laptop compartment, USB charging port, and premium Italian leather. Style meets practicality and perfect for frequent travelers.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    badge: "Limited Edition",
    color: "#fa709a",
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    description:
      "Dominate your games with our high-precision wireless gaming mouse. Features 16000 DPI sensor, RGB lighting, 8 programmable buttons, and 70-hour battery life. Ultimate gaming performance.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    badge: "Gaming Essential",
    color: "#43e97b",
  },
  {
    id: 6,
    name: "Premium Coffee Maker",
    price: 249.99,
    description:
      "Brew barista-quality coffee at home with our premium coffee maker. Features temperature control, built-in grinder, milk frother, and programmable settings. Wake up to perfect coffee every morning.",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    badge: "Home Favorite",
    color: "#fa8231",
  },
];

// Export the first product as default for backward compatibility
export default products[0];

// Export all products array
export { products };

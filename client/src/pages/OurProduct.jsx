import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { ShoppingBag, Star, Filter, ArrowRight, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const products = [
  {
    id: 1,
    name: "Premium Puppy Food",
    category: "Food",
    price: 1299,
    rating: 4.8,
    reviews: 124,
    description: "High-protein formula designed for growing puppies' nutritional needs.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Luxury Grooming Set",
    category: "Grooming",
    price: 899,
    rating: 4.9,
    reviews: 89,
    description: "Complete set of professional-grade tools for at-home spa days.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
    tag: "Premium"
  },
  {
    id: 3,
    name: "Interactive Squeaky Toy",
    category: "Toys",
    price: 499,
    rating: 4.7,
    reviews: 256,
    description: "Durable, non-toxic toy that provides hours of mental stimulation.",
    image: "https://images.unsplash.com/photo-1576705832041-27814d8d96c3?auto=format&fit=crop&q=80&w=800",
    tag: "Top Rated"
  },
  {
    id: 4,
    name: "Organic Pet Shampoo",
    category: "Grooming",
    price: 599,
    rating: 4.6,
    reviews: 167,
    description: "Ph-balanced formula with lavender and oatmeal for sensitive skin.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    tag: "Organic"
  },
  {
    id: 5,
    name: "Comfortable Pet Bed",
    category: "Accessories",
    price: 2499,
    rating: 4.9,
    reviews: 312,
    description: "Orthopedic memory foam bed with a washable, ultra-soft cover.",
    image: "https://images.unsplash.com/photo-1591429939960-b7d5add10bc5?auto=format&fit=crop&q=80&w=800",
    tag: "Hot Deal"
  },
  {
    id: 6,
    name: "Healthy Grain-Free Treats",
    category: "Food",
    price: 349,
    rating: 4.5,
    reviews: 98,
    description: "All-natural ingredients with no artificial preservatives or fillers.",
    image: "https://images.unsplash.com/photo-1583336663277-620dc1996580?auto=format&fit=crop&q=80&w=800",
    tag: "Natural"
  }
];

const categories = ["All", "Food", "Grooming", "Toys", "Accessories"];

const OurProduct = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }));
  };

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <SEO 
        title="Our Products" 
        description="Shop for premium pet food, grooming kits, toys, and luxury accessories. Curated collection of high-quality products from trusted brands for your pets."
        path="/products"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-[#38BDF8] font-bold uppercase tracking-[0.2em] mb-4 text-sm animate-fade-in">Petflix Marketplace</h4>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              Premium Care <br />
              <span className="text-white/60">For Your Best Friend.</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-xl font-medium leading-relaxed">
              Discover our curated collection of high-quality products from trusted brands, designed to keep your pets happy, healthy, and stylish.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#38BDF8] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:-translate-y-1 hover:shadow-[#38BDF8]/20 transition-all active:scale-95">
                Shop Now
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95">
                New Arrivals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        {/* Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#0F172A] text-white shadow-lg shadow-black/10' 
                    : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-bold text-sm">
            <Filter size={18} />
            <span>Showing {filteredProducts.length} Products</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 relative flex flex-col h-full"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Overlay Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-[#0F172A] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {product.tag}
                  </span>
                </div>
                
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all shadow-sm active:scale-90">
                  <Heart size={18} fill={hoveredProduct === product.id ? "currentColor" : "none"} />
                </button>

                {/* Add to Cart Quick View */}
                <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-500 transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0`}>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-[#0F172A] hover:bg-slate-800 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center justify-center gap-2 group/btn"
                  >
                    Add to Cart
                    <ShoppingBag size={16} className="group-hover/btn:translate-y-[-2px] transition-transform" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-200"} 
                    />
                  ))}
                  <span className="text-[10px] font-bold text-slate-400 ml-2">({product.reviews})</span>
                </div>
                
                <p className="text-[#38BDF8] text-[10px] font-bold mb-1 uppercase tracking-widest">{product.category}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#38BDF8] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="text-2xl font-black text-slate-900">
                    <span className="text-slate-400 text-sm font-bold mr-1">₹</span>
                    {product.price}
                  </div>
                  <button className="flex items-center gap-2 text-slate-900 font-black uppercase text-[10px] tracking-widest group/link">
                    View
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-32 relative bg-[#0F172A] rounded-[48px] p-12 md:p-24 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#38BDF8]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-rose-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#38BDF8] rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-[#38BDF8]/20 rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <ShoppingBag size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Stay in the Loop</h2>
            <p className="text-slate-400 text-lg mb-10 font-medium">Get early access to new releases, exclusive pet tips, and special member-only discounts.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#38BDF8] focus:bg-white/10 transition-all font-medium text-sm"
              />
              <button className="bg-[#38BDF8] hover:bg-[#7DD3FC] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-[#38BDF8]/10">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default OurProduct;

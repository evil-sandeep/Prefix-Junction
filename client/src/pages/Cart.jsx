import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addItem, decreaseQuantity, removeFromCart, selectCartItems, selectCartTotalAmount } from '../redux/cartSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ChevronLeft } from 'lucide-react';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8fafc] font-['Outfit'] flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-8">
            <ShoppingBag size={48} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Your cart is empty</h2>
          <p className="text-slate-500 mb-10 max-w-md">Looks like you haven't added anything to your cart yet. Explore our premium products and find something special for your pet.</p>
          <Link to="/our-product" className="bg-[#0F172A] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl">
            Start Shopping
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/our-product" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.productId} className="bg-white rounded-[32px] p-6 flex flex-col sm:flex-row items-center gap-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Product Image */}
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-slate-50 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Product Info */}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                  <p className="text-[#38BDF8] font-bold text-sm mb-4">₹{item.price}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                      <button 
                        onClick={() => handleDecrease(item.productId)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white hover:text-slate-900 transition-all active:scale-90"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center font-black text-slate-900 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => handleIncrease(item)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white hover:text-slate-900 transition-all active:scale-90"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => handleRemove(item.productId)}
                      className="text-slate-400 hover:text-rose-500 transition-colors p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Subtotal</p>
                  <p className="text-2xl font-black text-slate-900">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#0F172A] rounded-[40px] p-10 text-white sticky top-24 shadow-2xl shadow-slate-900/20">
              <h2 className="text-2xl font-black mb-8 tracking-tight">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Subtotal</span>
                  <span className="text-white">₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Shipping</span>
                  <span className="text-[#38BDF8]">FREE</span>
                </div>
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Estimated Tax</span>
                  <span className="text-white">₹0</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Amount</span>
                  <span className="text-4xl font-black text-[#38BDF8]">₹{totalAmount}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/address')}
                className="w-full bg-[#38BDF8] hover:bg-[#7DD3FC] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-3"
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-[10px] text-slate-500 mt-6 font-medium uppercase tracking-widest">
                Secure SSL Encryption & Trusted Payments
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

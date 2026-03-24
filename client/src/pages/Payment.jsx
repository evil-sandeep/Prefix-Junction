import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { selectCartItems, selectCartTotalAmount } from '../redux/cartSlice';
import { selectCheckoutAddress } from '../redux/checkoutSlice';
import { selectSelectedPlan, selectPlanPrice, selectPlanId, clearSelectedPlan } from '../redux/planSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { ShieldCheck, CreditCard, ChevronLeft, Loader2, Info, ArrowRight } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Payment = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const selectedPlan = useSelector(selectSelectedPlan);
  const planId = useSelector(selectPlanId);
  const planPrice = useSelector(selectPlanPrice);
  const address = useSelector(selectCheckoutAddress);
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const totalAmount = selectedPlan ? Number(planPrice) : cartTotalAmount;

  useEffect(() => {
    // If there's no logged in user, kick them to login
    if (!token) {
      alert("Please log in or create an account to process this order.");
      navigate('/login');
    }
  }, [token, navigate]);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // 1. Create Order on Backend
      const apiEndpoint = selectedPlan 
        ? `${API_BASE_URL}/api/subscription/create-order` 
        : `${API_BASE_URL}/api/payment/create-order`;
      
      const payload = selectedPlan 
        ? { planId, billingCycle: totalAmount > 1000 ? 'yearly' : 'monthly' }
        : { amount: totalAmount };

      const { data: orderData } = await axios.post(apiEndpoint, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const order = selectedPlan ? orderData.order : orderData;

      // 2. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
        amount: order.amount,
        currency: order.currency,
        name: 'Petflix Junction',
        description: selectedPlan ? `${selectedPlan} Plan Subscription` : 'Premium Pet Products',
        image: 'https://i.ibb.co/vzNf5k0/petflix-logo.png',
        order_id: order.id,
        handler: async (response) => {
          // 3. Verify Payment
          try {
            const verifyEndpoint = selectedPlan 
              ? `${API_BASE_URL}/api/subscription/verify-payment` 
              : `${API_BASE_URL}/api/payment/verify-payment`;
            
            const verifyPayload = selectedPlan 
              ? { ...response, planId, billingCycle: totalAmount > 1000 ? 'yearly' : 'monthly' }
              : response;

            const { data } = await axios.post(verifyEndpoint, verifyPayload, {
              headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success || data.status === 'success') {
              // 4. Save order to DB (only for product orders, not subscriptions)
              if (!selectedPlan) {
                await axios.post(`${API_BASE_URL}/api/orders`, {
                  items: cartItems,
                  address,
                  totalAmount,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id
                }, {
                  headers: { Authorization: `Bearer ${token}` }
                });
              }

              if (selectedPlan) dispatch(clearSelectedPlan());
              navigate('/success', { state: { paymentId: response.razorpay_payment_id, orderId: response.razorpay_order_id, amount: totalAmount } });
            }
          } catch (err) {
            console.error('Verification failed', err);
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: address.fullName,
          contact: address.phone,
        },
        theme: {
          color: '#0F172A',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initialization failed', error);
      alert('Could not initialize payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/checkout" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Payment</h1>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Method & Summary */}
          <div className="space-y-8">
            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <CreditCard size={24} className="text-[#38BDF8]" />
                Payment Method
              </h2>
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-[#38BDF8]/20 flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Razorpay UPI / Cards</h4>
                    <p className="text-xs text-slate-400 font-medium">Fast & Secure Payment</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-[#38BDF8] flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#38BDF8] rounded-full" />
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-amber-50 border border-amber-100 flex gap-4">
                <Info size={24} className="text-amber-500 flex-shrink-0" />
                <p className="text-xs text-amber-700 font-medium leading-relaxed">
                  You will be redirected to Razorpay's secure payment gateway to complete your transaction.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 mb-6">Delivery Address</h2>
              <div className="text-sm font-medium text-slate-500 leading-relaxed">
                <p className="font-black text-slate-900 mb-1">{address.fullName}</p>
                <p>{address.addressLine}</p>
                <p>{address.city}, {address.state} - {address.pincode}</p>
                <p className="mt-2 text-slate-900">+91 {address.phone}</p>
              </div>
            </div>
          </div>

          {/* Final Totals */}
          <div>
            <div className="bg-[#0F172A] rounded-[40px] p-10 text-white shadow-2xl shadow-slate-900/20 lg:sticky lg:top-24">
              <h2 className="text-2xl font-black mb-8 tracking-tight">Final Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-400 font-medium">
                  <span className="flex items-center gap-2">
                    {selectedPlan ? (
                      <>
                        <ShieldCheck size={16} className="text-primary" />
                        {selectedPlan} Plan
                      </>
                    ) : 'Order Amount'}
                  </span>
                  <span className="text-white">₹{totalAmount}</span>
                </div>
                {selectedPlan && (
                  <div className="flex justify-between text-slate-400 text-xs font-bold uppercase tracking-widest pl-6">
                    <span>Billing cycle</span>
                    <span className="text-primary">{totalAmount > 1000 ? 'Yearly' : 'Monthly'}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Processing Fees</span>
                  <span className="text-emerald-400 uppercase text-xs font-black self-center">Free</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mb-10 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">Grand Total</p>
                <p className="text-5xl font-black text-[#38BDF8] tracking-tighter">₹{totalAmount}</p>
              </div>

              <button 
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-[#38BDF8] hover:bg-[#7DD3FC] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-95 shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Pay Now
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <div className="mt-8 flex items-center justify-center gap-6 opacity-40 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest">Secure Payments via Razorpay</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;

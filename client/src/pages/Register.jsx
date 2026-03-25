import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { register, reset } from '../redux/authSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../components/SEO';
import { User, Mail, Lock, Loader2, UserPlus, ChevronRight, AlertCircle } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, phone, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      navigate(from, { replace: true });
    }

    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch, from]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters');
    } else {
      dispatch(register({ name, email, phone, password }));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit'] flex flex-col">
      <SEO 
        title="Register" 
        description="Create your Petflix Junction account today and start your journey to premium pet care. Register now for easy bookings and personalized pet services."
        path="/register"
      />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-[48px] p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mx-auto mb-6">
                <UserPlus size={32} />
              </div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Create Account</h1>
              <p className="text-slate-500 font-medium">Join Petflix for premium pet care.</p>
            </div>

            {isError && (
              <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold">
                <AlertCircle size={20} />
                {message}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-14 pr-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold px-1">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    required
                    placeholder="00000 00000"
                    className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-16 pr-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-14 pr-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-14 pr-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    required
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-14 pr-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 pt-10 border-t border-slate-50 text-center">
              <p className="text-slate-500 font-medium text-sm">
                Already have an account?{' '}
                <Link to="/login" state={{ from: location.state?.from }} className="text-primary font-black hover:underline underline-offset-4">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;

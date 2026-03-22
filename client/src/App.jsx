import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from './redux/cartSlice';
import { selectCheckoutAddress } from './redux/checkoutSlice';

import Home from './pages/Home';
import Services from './pages/Services';
import BookYourSlot from './pages/BookYourSlot';
import AboutUs from './pages/AboutUs';
import WhyChooseUs from './pages/WhyChooseUs';
import OurServices from './pages/OurServices';
import HolisticCare from './pages/HolisticCare';
import AdminDashboard from './pages/AdminDashboard';
import OurProduct from './pages/OurProduct';
import Cart from './pages/Cart';
import Address from './pages/Address';
import Payment from './pages/Payment';
import OrderSuccess from './pages/OrderSuccess';
import TrackOrder from './pages/TrackOrder';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';

// Route Protectors
const CartRequired = ({ children }) => {
  const cartItems = useSelector(selectCartItems);
  const selectedPlan = useSelector((state) => state.plan.selectedPlan);
  return (cartItems.length > 0 || selectedPlan) ? children : <Navigate to="/products" />;
};

const AddressRequired = ({ children }) => {
  const address = useSelector(selectCheckoutAddress);
  const cartItems = useSelector(selectCartItems);
  const selectedPlan = useSelector((state) => state.plan.selectedPlan);
  
  if (cartItems.length === 0 && !selectedPlan) return <Navigate to="/products" />;
  if (!address.fullName.trim()) return <Navigate to="/checkout" />;
  
  return children;
};

const AuthRequired = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<BookYourSlot />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/holistic-care" element={<HolisticCare />} />
        
        {/* eCommerce Flow */}
        <Route path="/products" element={<OurProduct />} />
        <Route path="/our-product" element={<Navigate to="/products" replace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={
          <CartRequired>
            <Address />
          </CartRequired>
        } />
        <Route path="/address" element={<Navigate to="/checkout" replace />} />
        <Route path="/payment" element={
          <AddressRequired>
            <Payment />
          </AddressRequired>
        } />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/order-success" element={<Navigate to="/success" replace />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/track-order" element={<Navigate to="/track" replace />} />
        
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <AuthRequired>
            <Dashboard />
          </AuthRequired>
        } />
      </Routes>
    </Router>
  );
}

export default App;

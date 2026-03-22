import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/our-product" element={<OurProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

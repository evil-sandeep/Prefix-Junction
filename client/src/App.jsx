import React, { useState } from 'react';
import { ShoppingCart, LogIn, Mail, Phone, Clock } from 'lucide-react';
import './App.css';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="app">
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="container topbar-content">
          <div className="topbar-item">
            <Mail size={14} />
            <span>info@petflixjunction.com</span>
          </div>
          <div className="topbar-item">
            <Mail size={14} />
            <span>support@petflixjunction.com</span>
          </div>
          <div className="topbar-item">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </div>
          <div className="topbar-item">
            <Clock size={14} />
            <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-content">
          {/* Logo */}
          <div className="logo-section">
            <svg className="logo-icon" width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 85C50 85 20 60 20 40C20 25 35 15 50 30C65 15 80 25 80 40C80 60 50 85 50 85Z" stroke="#ff6b6b" strokeWidth="4" fill="transparent"/>
              <path d="M40 45C40 45 45 55 50 55C55 55 60 45 60 45" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="35" cy="35" r="4" fill="#ff6b6b"/>
              <circle cx="65" cy="35" r="4" fill="#ff6b6b"/>
            </svg>
            <span>PETFLIX JUNCTION</span>
          </div>

          {/* Navigation */}
          <nav className="nav-links">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#products" className="nav-link">OUR PRODUCTS</a>
            <a href="#booking" className="nav-link">BOOKING</a>
            <a href="#pricing" className="nav-link">PRICING</a>
            <a href="#about" className="nav-link">ABOUT US</a>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button className="cart-btn" aria-label="Shopping Cart">
              <ShoppingCart size={20} />
            </button>
            <button className="btn">
              BOOK NOW
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
          alt="Happy dog running" 
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-content">
            <h1 className="hero-title">Door-Step Services</h1>
            <h2 className="hero-subtitle">Convenient Home Grooming</h2>
            <p className="hero-desc">
              We bring professional grooming services to your doorstep. No more stressful car rides for your pet!
            </p>
            <button className="btn" style={{ fontSize: '16px', padding: '12px 32px' }}>
              Book Appointment
            </button>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="slider-dots">
          <div className={`dot ${activeSlide === 0 ? 'active' : ''}`} onClick={() => setActiveSlide(0)}></div>
          <div className={`dot ${activeSlide === 1 ? 'active' : ''}`} onClick={() => setActiveSlide(1)}></div>
          <div className={`dot ${activeSlide === 2 ? 'active' : ''}`} onClick={() => setActiveSlide(2)}></div>
        </div>
      </section>
    </div>
  );
}

export default App;

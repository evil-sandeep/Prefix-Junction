import React, { useState, useEffect } from 'react';

const OurWork = () => {
  const [stats, setStats] = useState({
    happyPets: 500,
    expertGroomers: 10,
    premiumCare: "24/7",
    safetyRate: 100
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/stats');
        const data = await response.json();
        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    
    fetchStats();
    
    // Poll for latest stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">{stats.happyPets}+</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Happy Pets</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">{stats.expertGroomers}+</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Expert Groomers</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">{stats.premiumCare}</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Premium Care</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">{stats.safetyRate}%</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Safety Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;

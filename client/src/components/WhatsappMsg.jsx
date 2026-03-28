import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappMsg = ({ phoneNumber = "919175507739", message = "Hello! I'm interested in your pet grooming services." }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn group"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="tooltip">Chat with us!</div>
        <div className="pulse-ring"></div>
        <div className="icon-container">
          <MessageCircle size={32} fill="white" strokeWidth={1.5} />
        </div>
      </a>

      <style jsx>{`
        .whatsapp-float-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-btn {
          position: relative;
          background-color: #25d366;
          color: white;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .whatsapp-btn:hover {
          transform: scale(1.1) translateY(-5px);
          background-color: #128c7e;
          box-shadow: 0 15px 30px rgba(18, 140, 126, 0.5);
        }

        .icon-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tooltip {
          position: absolute;
          right: 80px;
          background: #1a1b1e;
          color: white;
          padding: 10px 18px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: translateX(20px);
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          font-family: 'Outfit', sans-serif;
        }

        .tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid #1a1b1e;
        }

        .whatsapp-btn:hover .tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #25d366;
          border-radius: 50%;
          z-index: 1;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float-container {
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-btn {
            width: 55px;
            height: 55px;
          }
          .tooltip {
            display: none; /* Hide tooltip on mobile for cleaner look */
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsappMsg;

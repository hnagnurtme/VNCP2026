import React from 'react';
import backgroundImage from '../assets/BACKGROUND.png';
import fingerprintLogo from '../assets/fingerprint.png';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero-section" id="home">
            {/* Background Image */}
            <div className="hero-background">
                <img src={backgroundImage} alt="Vietnam Creative Pulse 2026 Background" />
            </div>

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Decorative Pattern Layer */}
            <div className="hero-pattern"></div>

            {/* Main Content */}
            <div className="hero-content">
                <div className="event-year">Vietnam Creative Pulse 2026</div>

                <h1 className="event-title">
                    DẤU CHẠM VĂN HÓA
                </h1>

                <p className="event-tagline">
                    Chạm đến không gian sáng tạo của riêng bạn
                </p>

                <div className="fingerprint-icon">
                    <img src={fingerprintLogo} alt="Fingerprint Logo" />
                </div>

                <a href="#contact" className="get-in-touch-box">
                    <span className="get-in-touch-text">Get in Touch</span>
                    <span className="get-in-touch-arrow">→</span>
                </a>
            </div>
        </div>
    );
};

export default Hero;

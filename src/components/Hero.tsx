import React from 'react';
import backgroundImage from '../assets/background 2.png';
import fingerprintLogo from '../assets/fingerprint.png';
import typefaceImg from '../assets/typeface.png';
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

                <div className="event-title">
                    <img src={typefaceImg} alt="Dấu Chạm Văn Hóa" className="event-title-img" />
                </div>

                <p className="event-tagline">
                    Khai lối mê cung - Khởi chạm bản sắc
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

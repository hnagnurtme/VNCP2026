import React from 'react';
import './App.css';
import backgroundImage from './assets/BACKGROUND.png';
import fingerprintLogo from './assets/fingerprint.png';

function App () {
    return (
        <div className="hero-section">
            {/* Background Image */ }
            <div className="hero-background">
                <img src={ backgroundImage } alt="Vietnam Creative Pulse 2026 Background" />
            </div>

            {/* Overlay */ }
            <div className="hero-overlay"></div>

            {/* Decorative Pattern Layer */ }
            <div className="hero-pattern"></div>

            {/* Decorative Elements */ }
            <div className="hero-decoration decoration-circle decoration-circle-1"></div>
            <div className="hero-decoration decoration-circle decoration-circle-2"></div>

            {/* Main Content */ }
            <div className="hero-content">
                <div className="event-year">Vietnam Creative Pulse 2026</div>

                <h1 className="event-title">
                    DẤU CHẠM VĂN HÓA
                </h1>

                <p className="event-tagline">
                    Chạm đến không gian sáng tạo của riêng bạn
                </p>

                <div className="fingerprint-icon">
                    <img src={ fingerprintLogo } alt="Fingerprint Logo" />
                </div>
            </div>
        </div>
    );
}

export default App;

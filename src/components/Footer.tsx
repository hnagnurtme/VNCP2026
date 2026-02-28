import React from 'react';
import './Footer.css';
import typefaceImg from '../assets/typeface.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Left: Event Branding */}
                    <div className="footer-brand">
                        <h2 className="footer-logo">VCP 2026</h2>
                        <h3 className="footer-tagline">Vietnam Creative Pulse 2026</h3>
                        <img src={typefaceImg} alt="Dấu Chạm Văn Hoá" className="footer-typeface" />
                        <p className="footer-description">Khai lối mê cung - Khởi chạm bản sắc</p>
                    </div>

                    {/* Center: Event Info */}
                    <div className="footer-info">
                        <div className="info-section">
                            <h4 className="info-title">Thời gian</h4>
                            <p className="info-text">18/11/2026 - 24/11/2026</p>
                        </div>

                        <div className="info-section">
                            <h4 className="info-title">Địa điểm</h4>
                            <p className="info-text">The Global City</p>
                            <p className="info-text">Đường Đỗ Xuân Hợp</p>
                            <p className="info-text">Phường Bình Trưng, Thủ Đức, TPHCM</p>
                        </div>

                        <div className="social-links">
                            <a href="/" className="social-link" aria-label="Facebook">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="/" className="social-link" aria-label="Instagram">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="/" className="social-link" aria-label="YouTube">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="/" className="social-link" aria-label="Zalo">
                                <svg width="30" height="30" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm-6.4 38.4H20V25.6h5.6v16.8zm-2.8-19.04a3.12 3.12 0 1 1 0-6.24 3.12 3.12 0 0 1 0 6.24zm25.2 19.04h-5.6v-8.4c0-2-.72-3.36-2.52-3.36-1.36 0-2.16.92-2.52 1.8-.12.32-.16.76-.16 1.2v8.76H32V31.28c0-2.2-.04-4.04-.16-5.68h4.88l.24 2.48h.12c.72-1.2 2.52-2.88 5.52-2.88 3.64 0 6.4 2.4 6.4 7.56v9.64z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Support Info */}
                    <div className="footer-support">
                        <div className="info-section">
                            <h4 className="info-title">Bản đồ</h4>
                            <div className="map-wrapper">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.14441416758!2d106.7725925!3d10.8000305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270213192535%3A0xb3551d7c390508a!2sThe%20Global%20City!5e0!3m2!1svi!2s!4v1740416900000!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="The Global City Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-authority">BỘ VĂN HOÁ THỂ THAO VÀ DU LỊCH</p>
                    <p className="copyright">© 2026 Vietnam Creative Pulse. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="/" className="footer-link">Privacy Policy</a>
                        <span className="separator">•</span>
                        <a href="/" className="footer-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

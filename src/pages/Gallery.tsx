import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery: React.FC = () => {
    return (
        <div className="gallery-page" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-primary)', color: 'white', textAlign: 'center' }}>
            <Navbar currentPage="gallery" onNavigate={() => { }} />
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem' }}>Gallery</h1>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>Coming Soon...</p>
            <Footer />
        </div>
    );
};

export default Gallery;

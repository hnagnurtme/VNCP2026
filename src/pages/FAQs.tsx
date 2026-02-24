import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQs: React.FC = () => {
    return (
        <div className="faqs-page" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-primary)', color: 'white', textAlign: 'center' }}>
            <Navbar currentPage="faqs" onNavigate={() => { }} />
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem' }}>FAQs</h1>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>Coming Soon...</p>
            <Footer />
        </div>
    );
};

export default FAQs;

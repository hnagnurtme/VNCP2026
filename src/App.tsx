import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageSlider from './components/PageSlider';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Agenda from './components/Agenda';
import Speaker from './components/Speaker';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Page = 'gallery' | 'main' | 'faqs';

/* ─── Gallery page placeholder ─── */
const GalleryPage = () => (
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
    }}>
        <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #5FC3E4, #a78bfa)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1rem',
        }}>
            Gallery
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', maxWidth: 500 }}>
            Hình ảnh sự kiện VNCP 2026 sẽ được cập nhật tại đây.
        </p>
    </div>
);

/* ─── FAQs page placeholder ─── */
const FAQsPage = () => (
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
    }}>
        <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #FF66CC, #a78bfa)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1rem',
        }}>
            FAQs
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', maxWidth: 500 }}>
            Các câu hỏi thường gặp về VNCP 2026 sẽ được cập nhật tại đây.
        </p>
    </div>
);

/* ─── Main content ─── */
const MainPage = () => (
    <>
        <Hero />
        <Problems />
        <Agenda />
        <Speaker />
        <Contact />
        <Footer />
    </>
);

function App() {
    const [currentPage, setCurrentPage] = useState<Page>('main');

    return (
        <>
            {/* Navbar is always on top, fixed, receives page state */}
            <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

            {/* 3-page horizontal slider */}
            <PageSlider
                currentPage={currentPage}
                galleryContent={<GalleryPage />}
                mainContent={<MainPage />}
                faqsContent={<FAQsPage />}
            />
        </>
    );
}

export default App;

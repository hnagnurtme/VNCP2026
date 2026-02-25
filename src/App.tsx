import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageSlider from './components/PageSlider';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Agenda from './components/Agenda';
import Speaker from './components/Speaker';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQs from './pages/FAQs';
import Gallery from './pages/Gallery';

type Page = 'gallery' | 'main' | 'faqs';

/* ─── Gallery page ─── */
const GalleryPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => <Gallery onNavigate={onNavigate} />;

/* ─── FAQs page ─── */
const FAQsPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => <FAQs onNavigate={onNavigate} />;


/* ─── Main content ─── */
const MainPage = () => (
    <>
        <Hero />
        <div className="unified-bg-wrapper">
            <Problems />
            <Agenda />
        </div>
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
                galleryContent={<GalleryPage onNavigate={setCurrentPage} />}
                mainContent={<MainPage />}
                faqsContent={<FAQsPage onNavigate={setCurrentPage} />}
            />
        </>
    );
}

export default App;

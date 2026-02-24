import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
    { label: 'VCP 2026', id: 'home' },
    { label: 'Problems', id: 'problems' },
    { label: 'Agenda', id: 'agenda' },
    { label: 'Speakers', id: 'speakers' },
    { label: 'Get in Touch', id: 'contact' },
];

interface NavbarProps {
    currentPage: 'gallery' | 'main' | 'faqs';
    onNavigate: (page: 'gallery' | 'main' | 'faqs') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        if (currentPage !== 'main') return;
        const observers: IntersectionObserver[] = [];

        NAV_ITEMS.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (!section) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0, rootMargin: '-20% 0px -60% 0px' }
            );
            observer.observe(section);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [currentPage]);

    const handleNavClick = (id: string) => {
        if (currentPage !== 'main') {
            onNavigate('main');
            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 420);
        } else {
            setActiveSection(id);
            const section = document.getElementById(id);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-full-row">
                {/* Gallery pill — LEFT */}
                <button
                    className={`navbar-page-btn navbar-page-btn--left${currentPage === 'gallery' ? ' navbar-page-btn--active' : ''}`}
                    onClick={() => onNavigate(currentPage === 'gallery' ? 'main' : 'gallery')}
                >
                    Gallery
                </button>

                {/* Main nav pill */}
                <div className="navbar-container">
                    <ul className="navbar-menu">
                        {NAV_ITEMS.map(({ label, id }) => (
                            <li className="navbar-item" key={id}>
                                <button
                                    className={`navbar-link${activeSection === id && currentPage === 'main' ? ' active' : ''}`}
                                    onClick={() => handleNavClick(id)}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* FAQs pill — RIGHT */}
                <button
                    className={`navbar-page-btn navbar-page-btn--right${currentPage === 'faqs' ? ' navbar-page-btn--active' : ''}`}
                    onClick={() => onNavigate(currentPage === 'faqs' ? 'main' : 'faqs')}
                >
                    FAQs
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

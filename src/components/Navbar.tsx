import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Problems', href: '#problems', id: 'problems' },
    { label: 'Agenda', href: '#agenda', id: 'agenda' },
    { label: 'Speakers', href: '#speakers', id: 'speakers' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        NAV_ITEMS.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (!section) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.3 }
            );

            observer.observe(section);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const handleClick = (id: string) => {
        setActiveSection(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    {NAV_ITEMS.map(({ label, href, id }) => {
                        const isActive = activeSection === id;
                        return (
                            <li className="navbar-item" key={id}>
                                <a
                                    href={href}
                                    className={`navbar-link${isActive ? ' active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(id);
                                    }}
                                >
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

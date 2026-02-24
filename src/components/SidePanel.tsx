import React, { useState, useEffect } from 'react';
import './SidePanel.css';

interface SidePanelProps {
    side: 'left' | 'right';
    label: string;
    children: React.ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ side, label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    // Lock body scroll when panel is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Floating trigger button */}
            <button
                className={`side-tab side-tab--${side}`}
                onClick={() => setIsOpen(true)}
                aria-label={`Open ${label}`}
            >
                <span className="side-tab__text">{label}</span>
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="side-panel__backdrop"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sliding panel */}
            <div className={`side-panel side-panel--${side} ${isOpen ? 'side-panel--open' : ''}`}>
                <button
                    className="side-panel__close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close panel"
                >
                    ✕
                </button>
                <div className="side-panel__content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default SidePanel;

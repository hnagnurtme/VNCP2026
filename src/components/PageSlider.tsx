import React, { useEffect, useRef } from 'react';
import './PageSlider.css';

type Page = 'gallery' | 'main' | 'faqs';

interface PageSliderProps {
    currentPage: Page;
    mainContent: React.ReactNode;
    galleryContent: React.ReactNode;
    faqsContent: React.ReactNode;
}

const PAGE_ORDER: Page[] = ['gallery', 'main', 'faqs'];

const PageSlider: React.FC<PageSliderProps> = ({
    currentPage,
    mainContent,
    galleryContent,
    faqsContent,
}) => {
    const idx = PAGE_ORDER.indexOf(currentPage);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset scroll on page change
    useEffect(() => {
        if (containerRef.current) {
            const pages = containerRef.current.querySelectorAll('.page-slide');
            pages.forEach((p) => { (p as HTMLElement).scrollTop = 0; });
        }
    }, [currentPage]);

    return (
        <div className="page-slider__viewport" ref={containerRef}>
            <div
                className="page-slider__track"
                style={{ transform: `translateX(${-idx * 100}vw)` }}
            >
                {/* Gallery page — index 0 (left) */}
                <div className="page-slide page-slide--gallery">
                    {galleryContent}
                </div>

                {/* Main page — index 1 (center) */}
                <div className="page-slide page-slide--main">
                    {mainContent}
                </div>

                {/* FAQs page — index 2 (right) */}
                <div className="page-slide page-slide--faqs">
                    {faqsContent}
                </div>
            </div>
        </div>
    );
};

export default PageSlider;

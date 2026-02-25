import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './FAQs.css';

interface FAQsProps {
    onNavigate?: (page: 'gallery' | 'main' | 'faqs') => void;
}

interface FAQItem {
    id: number;
    question: string;
    answer: React.ReactNode;
}

interface FAQGroup {
    id: number;
    label: string;
    emoji: string;
    items: FAQItem[];
}

const getFaqGroups = (navigateTo: (section: 'contact' | 'agenda') => void): FAQGroup[] => [
    {
        id: 1,
        label: 'Khám phá VCP 2026',
        emoji: '🌐',
        items: [
            {
                id: 1,
                question: 'Vietnam Creative Pulse 2026 (VCP 2026) là sự kiện gì?',
                answer: (
                    <>
                        <p>
                            Vietnam Creative Pulse 2026 là <strong>siêu sự kiện đa phương tiện cấp quốc gia</strong> mang chủ đề <strong>"Dấu Chạm Văn Hóa"</strong>. Sự kiện mang đến hành trình trải nghiệm đa giác quan, nơi người tham gia sử dụng công nghệ số để trải nghiệm trực tiếp văn hóa nghệ thuật.
                        </p>
                        <p style={{ marginTop: '0.75rem', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            Hành trình VCP 2026 gồm 3 tầng trải nghiệm:
                        </p>
                        <div className="faq-tier">
                            <div className="faq-tier-body">
                                <strong>Tầng 1 – Chạm Công nghệ (Tech Touch)</strong>
                                <p>Khám phá sức mạnh của AI và VR/AR trong nghệ thuật. Thực hành ứng dụng AI vào thiết kế, trải nghiệm không gian âm nhạc số và tham gia chuỗi Talkshow cùng GS. Fei-Fei Li, Chuyên gia Nguyễn Đắc Tình, NSND Tự Long và nghệ sĩ Soobin Hoàng Sơn.</p>
                            </div>
                        </div>
                        <div className="faq-tier">
                            <div className="faq-tier-body">
                                <strong>Tầng 2 – Chạm Bản sắc (Identity Touch)</strong>
                                <p>Giải mã định danh cá nhân trong ngành sáng tạo. Thực hiện Personal Branding Test, tạo Avatar 3D độc bản và lắng nghe câu chuyện từ Đạo diễn Victor Vũ và Giám đốc Sáng tạo Phương Vũ.</p>
                            </div>
                        </div>
                        <div className="faq-tier">
                            <div className="faq-tier-body">
                                <strong>Tầng 3 – Chạm Tương lai (Future Touch)</strong>
                                <p>Hoàn thiện "Dấu chạm bản sắc" trên hệ thống digital và nhận thẻ định danh số. Trải nghiệm Creative Collaboration, Pitching trước Hội đồng Mentor và bùng nổ cùng đêm Main Concert công nghệ đa giác quan.</p>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                id: 2,
                question: 'VCP 2026 có gì khác biệt so với các lễ hội hay triển lãm nghệ thuật thông thường?',
                answer: (
                    <>
                        <p>
                            Điểm khác biệt lớn nhất là <strong>tương tác (Interactive)</strong> thay vì tham gia thụ động. Tại các sự kiện thông thường, bạn chỉ "xem" tác phẩm. Tại VCP 2026, bạn chính là <em>người đồng sáng tạo</em>, mượn sức mạnh công nghệ để "chạm" vào nghệ thuật và lưu lại dấu ấn độc bản của riêng mình.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}>
                            Thông qua <strong>"Touch ID độc bản"</strong> (Mã QR vân tay số), mỗi bước đi, mỗi cái chạm của bạn tại sự kiện sẽ thay đổi hình ảnh, âm thanh và màu sắc của không gian xung quanh — biến bạn thành một phần sống động của<strong>"Mê cung bản sắc"</strong>.
                        </p>
                    </>
                ),
            },
        ],
    },
    {
        id: 2,
        label: 'Định hướng và Phát triển sự nghiệp',
        emoji: '🎯',
        items: [
            {
                id: 3,
                question: 'Sinh viên yêu thích ngành sáng tạo, truyền thông, thiết kế tham gia VCP 2026 sẽ nhận được gì?',
                answer: (
                    <>
                        <p>
                            Sự kiện cung cấp <strong>Bản đồ Nghề nghiệp Số (AI Career Map)</strong> giúp bạn không còn "lạc lối" giữa thị trường công nghệ đang thay đổi. Bạn sẽ nhận được:
                        </p>
                        <ul className="faq-bullets">
                            <li>Định hướng trực tiếp về cách ứng dụng AI vào quy trình làm việc (Multimedia, Thiết kế, Nội dung).</li>
                            <li>Giao lưu với các chuyên gia, nghệ sĩ thị giác hàng đầu đang ứng dụng thành công công nghệ AI.</li>
                            <li>Nhận lộ trình cá nhân hóa dựa trên bài trắc nghiệm <em>"Mê cung bản sắc"</em> bạn đã thực hiện.</li>
                        </ul>
                    </>
                ),
            },
            {
                id: 4,
                question: 'Công nghệ AI tại VCP 2026 có làm mất đi tính "con người" trong sáng tạo không?',
                answer: (
                    <>
                        <p>
                            <strong>Hoàn toàn không.</strong> VCP 2026 khẳng định AI không thay thế con người, mà là <em>"đồng đội"</em> cùng sáng tạo. Tại khu vực trải nghiệm thực tế, bạn sẽ thấy cách AI xử lý các tác vụ kỹ thuật nặng nhọc — trả lại không gian tự do để con người tập trung vào tư duy thẩm mỹ, cảm xúc và thông điệp văn hóa cốt lõi.
                        </p>
                    </>
                ),
            },
        ],
    },
    {
        id: 3,
        label: 'Hướng dẫn tham gia',
        emoji: '⚡',
        items: [
            {
                id: 5,
                question: 'Làm thế nào để đăng ký vé VCP 2026 và nhận mã QR "Touch ID độc bản"?',
                answer: (
                    <>
                        <p>
                            Sự kiện <strong>mở cửa hoàn toàn miễn phí</strong> nhưng giới hạn số lượng tham gia trải nghiệm tương tác sâu. Để đăng ký, bạn thực hiện 3 bước:
                        </p>
                        <ol className="faq-steps">
                            <li>
                                <span className="faq-step-num">1</span>
                                <span>Truy cập mục <button type="button" className="faq-link" onClick={() => navigateTo('contact')}>[Get in Touch]</button> trên website chính thức.</span>
                            </li>
                            <li>
                                <span className="faq-step-num">2</span>
                                <span>Hoàn thành bài trắc nghiệm tính cách tương tác và quét vân tay số trực tuyến.</span>
                            </li>
                            <li>
                                <span className="faq-step-num">3</span>
                                <span>Hệ thống sẽ gửi mã QR <strong>"Touch ID Văn hóa"</strong> độc bản qua email. Vui lòng lưu lại mã này để check-in tại cổng sự kiện.</span>
                            </li>
                        </ol>
                    </>
                ),
            },
            {
                id: 6,
                question: 'Thời gian và địa điểm tổ chức Vietnam Creative Pulse 2026 ở đâu?',
                answer: (
                    <>
                        <div className="faq-info-row">
                            <span className="faq-info-label">Thời gian</span>
                            <span className="faq-info-value">23/11/2026 – 29/11/2026</span>
                        </div>
                        <div className="faq-info-row">
                            <span className="faq-info-label">Địa điểm</span>
                            <span className="faq-info-value">The Global City, Đ. Đỗ Xuân Hợp, Phường An Khánh, Thủ Đức, TP.HCM</span>
                        </div>
                        <div className="faq-info-row">
                            <span className="faq-info-label">Lịch trình</span>
                            <span className="faq-info-value">Cập nhật liên tục tại mục <button type="button" className="faq-link" onClick={() => navigateTo('agenda')}>[Agenda]</button> — bao gồm Talkshow, Workshop, Concert và khu vực trải nghiệm AI.</span>
                        </div>
                    </>
                ),
            },
        ],
    },
];

const FAQs: React.FC<FAQsProps> = ({ onNavigate }) => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggle = (id: number) => {
        setOpenItems(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const navigateTo = (section: 'contact' | 'agenda') => {
        if (onNavigate) {
            onNavigate('main');
            // Give slider time to animate then scroll to section
            setTimeout(() => {
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 450);
        }
    };

    return (
        <div className="faqs-page">
            <Navbar currentPage="faqs" onNavigate={onNavigate ?? (() => { })} />

            <div className="faqs-container">
                {/* Hero */}
                <div className="faqs-hero">
                    <div className="faqs-badge">
                        <span>Câu hỏi thường gặp</span>
                    </div>
                    <h1 className="faqs-title">FAQs</h1>
                    <p className="faqs-subtitle">
                        Mọi điều bạn cần biết về <strong>Vietnam Creative Pulse 2026</strong> — siêu sự kiện quốc gia tiên phong kết hợp Di sản Văn hóa Việt Nam và Công nghệ số.
                    </p>
                </div>

                {/* Endorsement */}
                <div className="faqs-endorsement">
                    <p className="faqs-endorsement-text" style={{ textAlign: 'justify' }}>
                        VCP 2026 được tổ chức nhằm hiện thực hóa mục tiêu biến công nghiệp văn hóa thành động lực tăng trưởng kinh tế theo <strong>Nghị quyết 80-NQ/TW</strong> và <strong>Quyết định 2486/QĐ-TTg</strong>. Sự kiện là không gian để thế hệ trẻ tự do định vị bản sắc và tìm kiếm lộ trình nghề nghiệp bền vững trong nền công nghiệp sáng tạo.
                    </p>
                </div>

                {/* FAQ Groups */}
                {getFaqGroups(navigateTo).map((group: FAQGroup, gi: number) => (
                    <div className="faqs-group" key={group.id}>
                        <div className="faqs-group-label">
                            <span className="faqs-group-number">{gi + 1}</span>
                            <span>{group.label}</span>
                        </div>

                        {group.items.map((item: FAQItem) => (
                            <div
                                key={item.id}
                                className={`faq-item${openItems.has(item.id) ? ' open' : ''}`}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => toggle(item.id)}
                                    role="button"
                                    aria-expanded={openItems.has(item.id)}
                                    tabIndex={0}
                                    onKeyDown={e => e.key === 'Enter' && toggle(item.id)}
                                >
                                    <span className="faq-question-text">
                                        {item.id}. {item.question}
                                    </span>
                                    <span className="faq-icon">+</span>
                                </div>

                                <div className="faq-answer">
                                    <div className="faq-answer-content">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Footer Credit */}
                <div className="faqs-footer-credit">
                    <p className="faqs-footer-org">
                        Đơn vị chịu trách nhiệm nội dung: Ban Tổ chức VCP 2026 – Bộ VH-TT-DL
                    </p>
                    <p className="faqs-footer-mission">
                        Chúng tôi đồng hành cùng thế hệ trẻ trong hành trình đưa Công nghiệp Văn hóa – Sáng tạo Việt Nam hội nhập quốc tế thông qua chuyển đổi số.
                    </p>
                    <div className="faqs-footer-press">
                        <span className="faqs-press-tag">VnExpress</span>
                        <span className="faqs-press-tag">Tuổi Trẻ</span>
                        <span className="faqs-press-tag">VietnamNet</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FAQs;

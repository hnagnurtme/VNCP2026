import React, { useState } from 'react';
import './Contact.css';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Vui lòng nhập tên của bạn';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Vui lòng nhập số điện thoại';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setShowModal(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        }, 1500);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-intro">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-subtitle">Chỉ với một thao tác chạm</p>
                    <p className="contact-breathe">Bạn sẽ chính thức bước vào hành trình trải nghiệm độc bản của mình</p>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Họ và tên *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                placeholder=" "
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                placeholder=" "
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Số điện thoại *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`form-input ${errors.phone ? 'error' : ''}`}
                                placeholder=" "
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Lời nhắn</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-input form-textarea"
                                placeholder=" "
                                rows={5}
                            />
                        </div>

                        <button
                            type="submit"
                            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="button-spinner"></span>
                                    Đang gửi...
                                </>
                            ) : (
                                'Bắt đầu hành trình'
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Thank You Modal */}
            {showModal && (
                <div className="thankyou-overlay" onClick={closeModal}>
                    <div className="thankyou-modal" onClick={e => e.stopPropagation()}>
                        <div className="thankyou-glow"></div>

                        <div className="thankyou-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heartGrad)" />
                                <defs>
                                    <linearGradient id="heartGrad" x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="50%" stopColor="#c084fc" />
                                        <stop offset="100%" stopColor="#fbbf24" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <h2 className="thankyou-title">Cảm ơn bạn!</h2>

                        <p className="thankyou-message">
                            Chúng tôi đã nhận được thông tin của bạn<br />
                            Cảm ơn vì đã quan tâm và đồng hành cùng<br />
                            <strong>Vietnam Creative Pulse 2026</strong>
                        </p>

                        <p className="thankyou-sub">
                            Hẹn gặp lại bạn tại sự kiện<br />
                            <span>23/11/2026 – 29/11/2026 · The Global City, TP.HCM</span>
                        </p>

                        <div className="thankyou-cta-box">
                            <span className="thankyou-cta-icon">🪪</span>
                            <p className="thankyou-cta-text">
                                Tham gia <strong style={{ textDecoration: 'underline' }}>Personal Branding Test</strong> để định danh bản sắc và nhận <strong>Touch ID độc bản</strong>
                            </p>
                        </div>

                        <button className="thankyou-close" onClick={closeModal}>
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;

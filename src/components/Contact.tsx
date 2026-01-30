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
    message?: string;
}

const Contact: React.FC = () => {
    const [ formData, setFormData ] = useState<ContactForm>( {
        name: '',
        email: '',
        phone: '',
        message: ''
    } );

    const [ errors, setErrors ] = useState<FormErrors>( {} );
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const [ isSuccess, setIsSuccess ] = useState( false );

    const validateEmail = ( email: string ): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test( email );
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if ( !formData.name.trim() ) {
            newErrors.name = 'Vui lòng nhập tên của bạn';
        }

        if ( !formData.email.trim() ) {
            newErrors.email = 'Vui lòng nhập email';
        } else if ( !validateEmail( formData.email ) ) {
            newErrors.email = 'Email không hợp lệ';
        }

        if ( !formData.message.trim() ) {
            newErrors.message = 'Vui lòng nhập tin nhắn';
        }

        setErrors( newErrors );
        return Object.keys( newErrors ).length === 0;
    };

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setFormData( prev => ( {
            ...prev,
            [ name ]: value
        } ) );
        // Clear error when user starts typing
        if ( errors[ name as keyof FormErrors ] ) {
            setErrors( prev => ( {
                ...prev,
                [ name ]: undefined
            } ) );
        }
    };

    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();

        if ( !validateForm() ) {
            return;
        }

        setIsSubmitting( true );

        // Simulate API call
        setTimeout( () => {
            setIsSubmitting( false );
            setIsSuccess( true );
            setFormData( {
                name: '',
                email: '',
                phone: '',
                message: ''
            } );

            // Reset success message after 5 seconds
            setTimeout( () => {
                setIsSuccess( false );
            }, 5000 );
        }, 1500 );
    };

    return (
        <section id="contact" className="contact-section">
            {/* Cosmic Background */ }
            <div className="cosmic-background">
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="star star-4"></div>
                <div className="star star-5"></div>
                <div className="star star-6"></div>
            </div>

            <div className="contact-container">
                <div className="contact-intro">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-subtitle">Chỉ với một thao tác chạm</p>
                    <p className="contact-breathe">Bạn sẽ chính thức bước vào hành trình trải nghiệm độc bản của mình</p>
                </div>

                <div className="contact-form-wrapper">
                    {/* Glowing Orb */ }
                    <div className="glowing-orb"></div>

                    <form className="contact-form" onSubmit={ handleSubmit }>
                        { isSuccess && (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <p>Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.</p>
                            </div>
                        ) }

                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={ formData.name }
                                onChange={ handleChange }
                                className={ `form-input ${ errors.name ? 'error' : '' }` }
                                placeholder=" "
                            />
                            <label htmlFor="name" className="form-label">Họ và tên *</label>
                            { errors.name && <span className="error-message">{ errors.name }</span> }
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={ formData.email }
                                onChange={ handleChange }
                                className={ `form-input ${ errors.email ? 'error' : '' }` }
                                placeholder=" "
                            />
                            <label htmlFor="email" className="form-label">Email *</label>
                            { errors.email && <span className="error-message">{ errors.email }</span> }
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={ formData.phone }
                                onChange={ handleChange }
                                className="form-input"
                                placeholder=" "
                            />
                            <label htmlFor="phone" className="form-label">Số điện thoại</label>
                        </div>

                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                value={ formData.message }
                                onChange={ handleChange }
                                className={ `form-input form-textarea ${ errors.message ? 'error' : '' }` }
                                placeholder=" "
                                rows={ 5 }
                            />
                            <label htmlFor="message" className="form-label">Tin nhắn *</label>
                            { errors.message && <span className="error-message">{ errors.message }</span> }
                        </div>

                        <button
                            type="submit"
                            className={ `submit-button ${ isSubmitting ? 'submitting' : '' }` }
                            disabled={ isSubmitting }
                        >
                            { isSubmitting ? (
                                <>
                                    <span className="button-spinner"></span>
                                    Đang gửi...
                                </>
                            ) : (
                                'Bắt đầu hành trình'
                            ) }
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

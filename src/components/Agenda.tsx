import React from 'react';
import './Agenda.css';

const Agenda: React.FC = () => {
    return (
        <section id="agenda" className="agenda-section">
            <div className="agenda-container">
                <h2 className="agenda-title">Agenda</h2>

                <div className="agenda-grid">
                    {/* Left Column - Timeline */ }
                    <div className="timeline-column">
                        <p className="agenda-intro">
                            Thông qua 3 tầng "Chạm":
                        </p>

                        {/* Glowing Path with Particles */ }
                        <svg className="light-path" viewBox="0 0 200 800" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#5fc3e4" stopOpacity="0.8" />
                                    <stop offset="50%" stopColor="#ff66cc" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#ffa347" stopOpacity="0.8" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <radialGradient id="particleGradient">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#5fc3e4" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <path
                                d="M 100 0 Q 150 150, 80 300 T 120 600 Q 90 700, 100 800"
                                stroke="url(#pathGradient)"
                                strokeWidth="3"
                                fill="none"
                                filter="url(#glow)"
                                className="animated-path"
                            />
                            {/* Animated Particles */ }
                            <circle cx="100" cy="0" r="3" fill="url(#particleGradient)" className="particle particle-1" />
                            <circle cx="100" cy="200" r="2" fill="url(#particleGradient)" className="particle particle-2" />
                            <circle cx="100" cy="400" r="3" fill="url(#particleGradient)" className="particle particle-3" />
                            <circle cx="100" cy="600" r="2" fill="url(#particleGradient)" className="particle particle-4" />
                        </svg>

                        {/* Timeline Items */ }
                        <div className="timeline">
                            <div className="timeline-item" data-stage="1">
                                <div className="timeline-marker"></div>
                                <div className="timeline-date-badge">15/3</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Tầng 1</h3>
                                    <p className="timeline-subtitle">Chạm Công Nghệ</p>
                                    <p className="timeline-subtitle-en">Tech Touch</p>
                                </div>
                            </div>

                            <div className="timeline-item" data-stage="2">
                                <div className="timeline-marker"></div>
                                <div className="timeline-date-badge">16/3</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Tầng 2</h3>
                                    <p className="timeline-subtitle">Chạm Bản Sắc</p>
                                    <p className="timeline-subtitle-en">Identity Touch</p>
                                </div>
                            </div>

                            <div className="timeline-item" data-stage="3">
                                <div className="timeline-marker"></div>
                                <div className="timeline-date-badge">17/3</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Tầng 3</h3>
                                    <p className="timeline-subtitle">Chạm Tương Lai</p>
                                    <p className="timeline-subtitle-en">Future Touch</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Description */ }
                    <div className="description-column">
                        <div className="description-card">
                            <h3 className="description-title">Hành Trình Khám Phá</h3>
                            <p className="description-text">
                                Bạn sẽ được trải nghiệm hành trình thoát khỏi mê cung từ việc <span className="highlight-text">khai phá sức mạnh công nghệ</span>,
                                <span className="highlight-text"> thấu cảm chiều sâu bản sắc</span>, đến việc cùng nhau
                                <span className="highlight-text"> kiến tạo những viễn cảnh tương lai</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;

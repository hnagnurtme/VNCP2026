import React from 'react';
import './Agenda.css';

const Agenda: React.FC = () => {
    return (
        <section id="agenda" className="agenda-section">
            <div className="agenda-container">
                <h2 className="agenda-title">Agenda</h2>

                {/* Top - Description */}
                <div className="description-section">
                    <div className="description-card">
                        <h3 className="description-title">Hành Trình Khám Phá</h3>
                        <p className="description-text">
                            Bạn sẽ được trải nghiệm hành trình thoát khỏi mê cung từ việc <span className="highlight-text">khai phá sức mạnh công nghệ</span>,
                            <span className="highlight-text"> thấu cảm chiều sâu bản sắc</span>, đến việc cùng nhau
                            <span className="highlight-text"> kiến tạo những viễn cảnh tương lai</span>.
                        </p>
                    </div>
                </div>

                {/* Bottom - Timeline with Intro */}
                <div className="timeline-section">
                    <p className="agenda-intro">
                        Thông qua 3 tầng "Chạm":
                    </p>

                    {/* Branching Road Path */}
                    <svg className="road-path" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#5fc3e4" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#ff66cc" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#ffa347" stopOpacity="0.6" />
                            </linearGradient>
                            <filter id="roadGlow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#5fc3e4" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                        
                        {/* Main Road - Vertical with branches */}
                        <path
                            d="M 400 50 L 400 200 M 400 200 Q 350 250, 250 300 M 400 200 Q 450 250, 550 300 M 250 300 L 250 400 M 550 300 L 550 400 M 250 400 Q 300 450, 400 500 M 550 400 Q 500 450, 400 500 M 400 500 L 400 580"
                            stroke="url(#roadGradient)"
                            strokeWidth="20"
                            fill="none"
                            filter="url(#roadGlow)"
                            className="road-main"
                        />
                        
                        {/* Road dashes */}
                        <path
                            d="M 400 50 L 400 200 M 400 200 Q 350 250, 250 300 M 400 200 Q 450 250, 550 300 M 250 300 L 250 400 M 550 300 L 550 400 M 250 400 Q 300 450, 400 500 M 550 400 Q 500 450, 400 500 M 400 500 L 400 580"
                            stroke="url(#dashGradient)"
                            strokeWidth="3"
                            strokeDasharray="15 15"
                            fill="none"
                            className="road-dashes"
                        />
                    </svg>

                    {/* Timeline Items */}
                    <div className="timeline">
                        <div className="timeline-item" data-stage="1" style={{top: '80px', left: '50%'}}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-date-badge">15/3</div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">Tầng 1</h3>
                                <p className="timeline-subtitle">Chạm Công Nghệ</p>
                                <p className="timeline-subtitle-en">Tech Touch</p>
                            </div>
                        </div>

                        <div className="timeline-item" data-stage="2" style={{top: '280px', left: '20%'}}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-date-badge">16/3</div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">Tầng 2</h3>
                                <p className="timeline-subtitle">Chạm Bản Sắc</p>
                                <p className="timeline-subtitle-en">Identity Touch</p>
                            </div>
                        </div>

                        <div className="timeline-item" data-stage="3" style={{top: '280px', left: '60%'}}>
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
            </div>
            </div>
        </section>
    );
};

export default Agenda;

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

                {/* Vertical Timeline */}
                <div className="timeline-vertical">
                    <div className="timeline-line"></div>

                    {/* Floor 1 - Tech Touch */}
                    <div className="floor-section">
                        <div className="event-row">
                            <div className="event-description left">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="event-time-marker">
                                <div className="timeline-dot"></div>
                                <div className="event-time">XX/II</div>
                            </div>
                            <div className="event-spacer"></div>
                        </div>

                        <div className="floor-card-wrapper">
                            <div className="timeline-dot main"></div>
                            <div className="floor-card">
                                <h3 className="floor-number">TẦNG 1</h3>
                                <p className="floor-title">CHẠM CÔNG NGHỆ - TECH TOUCH</p>
                            </div>
                        </div>

                        <div className="event-row">
                            <div className="event-spacer"></div>
                            <div className="event-time-marker">
                                <div className="timeline-dot"></div>
                                <div className="event-time">XX/II</div>
                            </div>
                            <div className="event-description right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>

                    {/* Floor 2 - Identity Touch */}
                    <div className="floor-section">
                        <div className="event-row">
                            <div className="event-description left">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="event-time-marker">
                                <div className="timeline-dot"></div>
                                <div className="event-time">XX/II</div>
                            </div>
                            <div className="event-spacer"></div>
                        </div>

                        <div className="floor-card-wrapper">
                            <div className="timeline-dot main"></div>
                            <div className="floor-card">
                                <h3 className="floor-number">TẦNG 2</h3>
                                <p className="floor-title">CHẠM BẢN SẮC - IDENTITY TOUCH</p>
                            </div>
                        </div>

                        <div className="event-row">
                            <div className="event-spacer"></div>
                            <div className="event-time-marker">
                                <div className="timeline-dot"></div>
                                <div className="event-time">XX/II</div>
                            </div>
                            <div className="event-description right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>

                    {/* Floor 3 - Future Touch */}
                    <div className="floor-section">
                        <div className="event-row">
                            <div className="event-description left">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="event-time-marker">
                                <div className="timeline-dot"></div>
                                <div className="event-time">XX/II</div>
                            </div>
                            <div className="event-spacer"></div>
                        </div>

                        <div className="floor-card-wrapper">
                            <div className="timeline-dot main"></div>
                            <div className="floor-card">
                                <h3 className="floor-number">TẦNG 3</h3>
                                <p className="floor-title">CHẠM TƯƠNG LAI - FUTURE TOUCH</p>
                            </div>
                        </div>

                        <div className="event-row">
                            <div className="event-spacer"></div>
                            <div className="event-time-marker">
                                <div className="timeline-dot"></div>
                                <div className="event-time">XX/II</div>
                            </div>
                            <div className="event-description right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;

import React from 'react';
import './Agenda.css';

interface DayEvent {
    day: string;
    date: string;
    leftContent?: React.ReactNode[];
    rightContent?: React.ReactNode[];
}

interface Floor {
    number: string;
    title: string;
    days: DayEvent[];
}

const floors: Floor[] = [
    {
        number: 'TẦNG 1',
        title: 'CHẠM CÔNG NGHỆ - TECH TOUCH',
        days: [
            {
                day: 'DAY 1',
                date: '16/3',
                leftContent: [
                    <><strong>Lễ khai mạc</strong> khai mở hành trình “Dấu Chạm Văn Hóa”</>,
                    <><strong>Talkshow</strong>: Công nghệ mở ra cơ hội gì cho ngành sáng tạo? - Speakers: Bà Fei-Fei Li, Ông Nguyễn Đắc Tình</>,
                    <><strong>“Chạm”</strong> không gian triển lãm kết hợp AI và chất liệu văn hóa</>,
                ],
                rightContent: undefined,
            },
            {
                day: 'DAY 2',
                date: '17/3',
                leftContent: undefined,
                rightContent: [
                    <><strong>Workshop trải nghiệm</strong>: Ứng dụng AI trong thiết kế hình ảnh và sáng tạo nội dung với sự tư vấn trực tiếp cùng chuyên gia công nghệ.</>,
                    <><strong>Mini Challenge</strong>: Thực hành sáng tạo sản phẩm trong 3 giờ với công cụ AI.</>,
                    <><strong>“Chạm”</strong> không gian trải nghiệm âm nhạc số đa giác quan</>,
                ],
            },
            {
                day: 'DAY 3',
                date: '18/3',
                leftContent: [
                    <><strong>Talkshow</strong>: Câu chuyện văn hóa trong thời đại số. Speakers: NSND Tự Long, Soobin Hoàng Sơn</>,
                    <><strong>“Chạm”</strong> văn hóa với showcase trưng bày sản phẩm truyền thông bằng công nghệ VR và AR</>,
                    <><strong>Cuộc thi</strong> “Giải mã công nghệ – Bật tư duy số”</>,
                ],
                rightContent: undefined,
            },
        ],
    },
    {
        number: 'TẦNG 2',
        title: 'CHẠM BẢN SẮC - IDENTITY TOUCH',
        days: [
            {
                day: 'DAY 4',
                date: '19/3',
                leftContent: undefined,
                rightContent: [
                    'Không gian nghệ thuật tương tác "Bền đỗ bản sắc"',
                    'Trưng bày chất liệu văn hóa truyền thống được tái diễn giải bằng thiết kế hiện đại',
                    'Chạm bản sắc – Reflection Booth: Ghi lại câu chuyện cá nhân',
                ],
            },
            {
                day: 'DAY 5',
                date: '20/3',
                leftContent: [
                    'Talkshow: Bản sắc cá nhân có thể trở thành lợi thế trong ngành sáng tạo? Speakers: Victor VG, Phương VG',
                    'Personal Branding Test: Tham gia bài đánh giá bản sắc sáng tạo cá nhân cùng sự tư vấn trực tiếp từ chuyên gia',
                    'Creative Avatar Station: Tạo lập tức tranh phiên bản 3D theo bản sắc của riêng bạn',
                ],
                rightContent: undefined,
            },
        ],
    },
    {
        number: 'TẦNG 3',
        title: 'CHẠM TƯƠNG LAI - FUTURE TOUCH',
        days: [
            {
                day: 'DAY 6',
                date: '21/3',
                leftContent: undefined,
                rightContent: [
                    'Identity Reflection Zone: Người tham gia hoàn thiện "Dấu chạm bản sắc" trên hệ thống digital và nhận thẻ định danh cá nhân',
                    'Creative Collaboration Board: Khu vực ghép nhóm tự do theo điểm mạnh và định hướng đồng để cùng đề xuất một ý tưởng sáng tạo trong 60 phút',
                    'Final Pitch: Trình bày ý tưởng trước hội đồng mentor. Vinh danh và trao giải cho ý tưởng xuất sắc nhất',
                ],
            },
            {
                day: 'DAY 7',
                date: '22/3',
                leftContent: [
                    'Tech Touch Station: Trải nghiệm công nghệ VR, giao lưu cùng nghệ sĩ through qua kết nối từ xa',
                    'Main Concert: Đêm nhạc hoành tráng với sân khấu công nghệ, ánh sáng hiện đại và hiệu ứng tương tác đa chiều',
                ],
                rightContent: undefined,
            },
        ],
    },
];

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
                            Bạn sẽ được trải nghiệm hành trình thoát khỏi mê cung từ việc{' '}
                            <span className="highlight-text">khai phá sức mạnh công nghệ</span>,{' '}
                            <span className="highlight-text">thấu cảm chiều sâu bản sắc</span>, đến việc cùng nhau{' '}
                            <span className="highlight-text">kiến tạo những viễn cảnh tương lai</span>.
                        </p>
                    </div>
                </div>

                {/* Vertical Timeline */}
                <div className="timeline-vertical">
                    <div className="timeline-line"></div>

                    {floors.map((floor, floorIdx) => (
                        <div className="floor-section" key={floorIdx}>
                            {/* Floor Header Card */}
                            <div className="floor-card-wrapper">
                                <div className="floor-card">
                                    <div className="floor-card-inner">
                                        <h3 className="floor-number">{floor.number}</h3>
                                        <p className="floor-title">{floor.title}</p>
                                    </div>
                                </div>
                            </div>

                            {floor.days.map((dayEvent, dayIdx) => (
                                <div className={`event-row ${dayEvent.day.toLowerCase().replace(' ', '-')}`} key={dayIdx}>
                                    {/* Left Half: content + day-marker */}
                                    <div className={`event-half left ${!dayEvent.leftContent ? 'empty' : ''}`}>
                                        {dayEvent.leftContent && (
                                            <>
                                                <div className="event-description">
                                                    <ul>
                                                        {dayEvent.leftContent.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="event-time-marker">
                                                    <div className="event-day">{dayEvent.day}</div>
                                                    <div className="event-time">{dayEvent.date}</div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Right Half: day-marker + content */}
                                    <div className={`event-half right ${!dayEvent.rightContent ? 'empty' : ''}`}>
                                        {dayEvent.rightContent && (
                                            <>
                                                <div className="event-time-marker">
                                                    <div className="event-day">{dayEvent.day}</div>
                                                    <div className="event-time">{dayEvent.date}</div>
                                                </div>
                                                <div className="event-description">
                                                    <ul>
                                                        {dayEvent.rightContent.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agenda;

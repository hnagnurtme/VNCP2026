import React from 'react';
import './Agenda.css';

interface AgendaEvent {
    title: string;
    details: string;
}

interface AgendaDay {
    weekdayNum: string;
    weekdayText: string;
    events: AgendaEvent[];
    colorClass: string;
}

interface AgendaFloor {
    number: string;
    title: string;
    description: string;
    days: AgendaDay[];
}

const agendaData: AgendaFloor[] = [
    {
        number: 'TẦNG 1',
        title: 'CHẠM CÔNG NGHỆ - TECH TOUCH',
        description: 'Khai phá hành trình "Dấu Chạm Văn Hóa" qua sức mạnh công nghệ.',
        days: [
            {
                weekdayNum: '1',
                weekdayText: 'THỨ 2 (23/11)',
                colorClass: 'cassette-red',
                events: [
                    {
                        title: 'LỄ KHAI MẠC',
                        details: 'Mở đầu hành trình “Dấu Chạm Văn Hóa”. Speakers: Bà Fei-Fei Li, Ông Nguyễn Đắc Tình'
                    },
                    {
                        title: 'TALKSHOW: CÔNG NGHỆ & SÁNG TẠO',
                        details: 'Mở ra cơ hội mới cho ngành sáng tạo.'
                    }
                ]
            },
            {
                weekdayNum: '2',
                weekdayText: 'THỨ 3 (24/11)',
                colorClass: 'cassette-green',
                events: [
                    {
                        title: 'WORKSHOP TRẢI NGHIỆM AI',
                        details: 'Ứng dụng AI trong thiết kế hình ảnh và sáng tạo nội dung.'
                    },
                    {
                        title: 'MINI CHALLENGE: 3H SÁNG TẠO',
                        details: 'Thực hành sáng tạo sản phẩm cùng công cụ AI.'
                    }
                ]
            },
            {
                weekdayNum: '3',
                weekdayText: 'THỨ 4 (25/11)',
                colorClass: 'cassette-blue',
                events: [
                    {
                        title: 'TALKSHOW: VĂN HÓA SỐ',
                        details: 'Speakers: NSND Tự Long, Soobin Hoàng Sơn.'
                    },
                    {
                        title: 'CUỘC THI: GIẢI MÃ CÔNG NGHỆ',
                        details: 'Bật tư duy số - Showcase VR/AR Heritage.'
                    }
                ]
            }
        ]
    },
    {
        number: 'TẦNG 2',
        title: 'CHẠM BẢN SẮC - IDENTITY TOUCH',
        description: 'Thấu cảm chiều sâu bản sắc cá nhân và truyền thống.',
        days: [
            {
                weekdayNum: '4',
                weekdayText: 'THỨ 5 (26/11)',
                colorClass: 'cassette-pink',
                events: [
                    {
                        title: 'BẢN ĐỒ BẢN SẮC',
                        details: 'Không gian nghệ thuật tương tác và trưng bày văn hóa truyền thống.'
                    },
                    {
                        title: 'REFLECTION BOOTH',
                        details: 'Chạm bản sắc - Ghi lại câu chuyện cá nhân.'
                    }
                ]
            },
            {
                weekdayNum: '5',
                weekdayText: 'THỨ 6 (27/11)',
                colorClass: 'cassette-cyan',
                events: [
                    {
                        title: 'TALKSHOW: BẢN SẮC CÁ NHÂN',
                        details: 'Speakers: Victor Vũ, Phương Vũ.'
                    },
                    {
                        title: 'CREATIVE AVATAR STATION',
                        details: 'Tạo lập bức tranh phiên bản 3D theo bản sắc riêng.'
                    }
                ]
            }
        ]
    },
    {
        number: 'TẦNG 3',
        title: 'CHẠM TƯƠNG LAI - FUTURE TOUCH',
        description: 'Cùng nhau kiến tạo những viễn cảnh tương lai đột phá.',
        days: [
            {
                weekdayNum: '6',
                weekdayText: 'THỨ 7 (28/11)',
                colorClass: 'cassette-dark-green',
                events: [
                    {
                        title: 'IDENTITY REFLECTION ZONE',
                        details: 'Hoàn thiện "Dấu chạm bản sắc" trên hệ thống digital.'
                    },
                    {
                        title: 'FINAL PITCH & COLLABORATION',
                        details: 'Vinh danh và trao giải cho ý tưởng xuất sắc nhất.'
                    }
                ]
            },
            {
                weekdayNum: '7',
                weekdayText: 'CHỦ NHẬT (29/11)',
                colorClass: 'cassette-orange',
                events: [
                    {
                        title: 'TECH TOUCH STATION',
                        details: 'Trải nghiệm công nghệ VR, giao lưu cùng nghệ sĩ.'
                    },
                    {
                        title: 'VCP 2026 MAIN CONCERT',
                        details: 'Đêm nhạc hoành tráng - Hiệu ứng tương tác đa chiều.'
                    }
                ]
            }
        ]
    }
];

const Agenda: React.FC = () => {
    return (
        <section id="agenda" className="agenda-section-cassette">
            <div className="agenda-container-cassette">
                <div className="agenda-header-cassette">
                    <h1 className="weekly-text">Weekly</h1>
                    <div className="deals-row">
                        <span className="vcp-badge">VCP</span>
                        <h2 className="agenda-title-cassette">Agenda</h2>
                    </div>
                    <p className="agenda-main-desc">
                        Bạn sẽ được trải nghiệm hành trình thoát khỏi mê cung từ việc khai phá sức mạnh công nghệ, thấu cảm chiều sâu bản sắc, đến việc cùng nhau kiến tạo những viễn cảnh tương lai.
                    </p>
                </div>

                <div className="agenda-floors">
                    {agendaData.map((floor, fIdx) => (
                        <div className="floor-group" key={fIdx}>
                            <div className="floor-header">
                                <span className="floor-num">{floor.number}</span>
                                <h3 className="floor-title-full">{floor.title}</h3>
                                <p className="floor-desc">{floor.description}</p>
                            </div>

                            <div className="agenda-stack">
                                {floor.days.map((day, dIdx) => (
                                    <div
                                        className={`cassette-item ${day.colorClass}`}
                                        key={dIdx}
                                    >
                                        <div className="cassette-day-tag">{day.weekdayText}</div>

                                        <div className="cassette-content">
                                            {day.events.map((event, eIdx) => (
                                                <div className="cassette-event" key={eIdx}>
                                                    <h4 className="event-title-cassette">{event.title}</h4>
                                                    <p className="event-details-cassette">{event.details}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="cassette-glass-reflection"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="agenda-footer-cassette">
                </div>
            </div>
        </section>
    );
};

export default Agenda;

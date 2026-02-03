import React, { useState } from 'react';
import './Speaker.css';
import speaker1 from '../assets/speaker/ANH1.png';
import speaker1Detail from '../assets/speaker/details/ANH1.png';

interface ISpeaker {
    id: number;
    name: string;
    title: string;
    image: string;
    detailImage: string;
    bio: string;
    social?: {
        linkedin?: string;
        twitter?: string;
    };
}

const speakers: ISpeaker[] = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        title: 'Tech Innovation Leader',
        image: speaker1,
        detailImage: speaker1Detail,
        bio: 'Chuyên gia hàng đầu trong lĩnh vực công nghệ AI và Machine Learning với hơn 10 năm kinh nghiệm. Đã từng làm việc tại các tập đoàn công nghệ lớn và khởi nghiệp thành công nhiều dự án đổi mới sáng tạo.',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id: 2,
        name: 'Trần Thị B',
        title: 'Digital Transformation Expert',
        image: speaker1,
        detailImage: speaker1Detail,
        bio: 'Chuyên gia chuyển đổi số với kinh nghiệm tư vấn cho nhiều doanh nghiệp lớn. Đam mê chia sẻ kiến thức về xu hướng công nghệ và cách ứng dụng vào thực tiễn kinh doanh.',
    },
    {
        id: 3,
        name: 'Lê Minh C',
        title: 'UX/UI Design Pioneer',
        image: speaker1,
        detailImage: speaker1Detail,
        bio: 'Nhà thiết kế trải nghiệm người dùng với nhiều giải thưởng quốc tế. Tin rằng thiết kế tốt có thể thay đổi cách con người tương tác với công nghệ.',
    },
    {
        id: 4,
        name: 'Phạm Đức D',
        title: 'Blockchain Specialist',
        image: speaker1,
        detailImage: speaker1Detail,
        bio: 'Chuyên gia blockchain và Web3 với kinh nghiệm phát triển nhiều dự án DeFi và NFT. Đang dẫn dắt cộng đồng blockchain tại Việt Nam.',
    },
    {
        id: 5,
        name: 'Hoàng Thị E',
        title: 'Cybersecurity Expert',
        image: speaker1,
        detailImage: speaker1Detail,
        bio: 'Chuyên gia an ninh mạng với chứng chỉ quốc tế. Đã bảo vệ hệ thống cho nhiều tổ chức tài chính và chính phủ khỏi các cuộc tấn công mạng.',
    }
];

const Speaker: React.FC = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState<ISpeaker>(speakers[0]);
    const [showDetail, setShowDetail] = useState(false);

    const handleSpeakerClick = (speaker: ISpeaker) => {
        setSelectedSpeaker(speaker);
        setShowDetail(true);
    };

    return (
        <section id="speakers" className="speaker-section">
            <div className="speaker-container">
                <h2 className="speaker-title">Speakers</h2>
                <p className="speaker-intro">Gặp gỡ những diễn giả hàng đầu</p>

                <div className="speaker-layout">
                    {/* Left: Horizontal Scroll Cards (75%) */}
                    <div className="speaker-gallery">
                        <div className="speaker-cards">
                            {speakers.map((speaker) => (
                                <div
                                    key={speaker.id}
                                    className={`speaker-card ${selectedSpeaker.id === speaker.id && showDetail ? 'active' : ''}`}
                                    onClick={() => handleSpeakerClick(speaker)}
                                >
                                    <div className="speaker-card-image">
                                        <img src={speaker.image} alt={speaker.name} />
                                        <div className="speaker-card-overlay"></div>
                                    </div>
                                    <div className="speaker-card-info">
                                        <h3 className="speaker-card-name">{speaker.name}</h3>
                                        <p className="speaker-card-title">{speaker.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Detail Panel (25%) - Conditional */}
                    {showDetail && (
                        <div className="speaker-detail">
                            <div className="speaker-detail-card">
                                <button
                                    className="close-detail-btn"
                                    onClick={() => setShowDetail(false)}
                                    aria-label="Close detail panel"
                                >
                                    ✕
                                </button>
                                <div className="speaker-detail-image">
                                    <img src={selectedSpeaker.detailImage} alt={selectedSpeaker.name} />
                                </div>
                                <div className="speaker-detail-content">
                                    <h3 className="speaker-detail-name">{selectedSpeaker.name}</h3>
                                    <p className="speaker-detail-title">{selectedSpeaker.title}</p>
                                    <p className="speaker-detail-bio">{selectedSpeaker.bio}</p>
                                    {selectedSpeaker.social && (
                                        <div className="speaker-detail-social">
                                            {selectedSpeaker.social.linkedin && (
                                                <a href={selectedSpeaker.social.linkedin} className="social-link">LinkedIn</a>
                                            )}
                                            {selectedSpeaker.social.twitter && (
                                                <a href={selectedSpeaker.social.twitter} className="social-link">Twitter</a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Speaker;

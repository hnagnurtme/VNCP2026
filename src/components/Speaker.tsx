import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Speaker.css';
import speaker1 from '../assets/speaker/ANH1.png';
import speaker1Detail from '../assets/speaker/details/ANH1.png';
import feiFeiLi from '../assets/speaker/fei_fei_li.jpg';
import nguyenDacTinh from '../assets/speaker/nguyen_dac_tinh.jpg';
import phuongVu from '../assets/speaker/phuong_vu.jpg';
import soobin from '../assets/speaker/soobin.jpg';
import tuLong from '../assets/speaker/tu_long.jpg';
import victorVu from '../assets/speaker/victor_vu.png';

interface ISpeaker {
    id: number;
    name: string;
    title: string;
    image: string;
    detailImage: string;
    bio: string;
    objectPosition?: string;
    scale?: number;
    social?: {
        linkedin?: string;
        twitter?: string;
    };
}

const speakers: ISpeaker[] = [
    {
        id: 1,
        name: 'Bà Fei-Fei Li',
        title: 'Doanh nhân - Nhà nghiên cứu\ntrí tuệ nhân tạo',
        image: feiFeiLi,
        detailImage: feiFeiLi,
        bio: 'Đóng góp tiên phong trong lĩnh vực thị giác máy tính. Đồng sáng lập tổ chức phi lợi nhuận thúc đẩy sự đa dạng trong AI (AI4ALL) và là giáo sư Khoa Khoa học máy tính của Đại học Stanford.',
        objectPosition: '32% center'
    },
    {
        id: 2,
        name: 'Ông Nguyễn Đắc Tình',
        title: 'Founder Vietnam MarTech & TicketX',
        image: nguyenDacTinh,
        detailImage: nguyenDacTinh,
        bio: 'Hoạt động trong lĩnh vực marketing công nghệ và giải pháp vé điện tử. Tập trung xây dựng hệ sinh thái MarTech tại Việt Nam, kết nối cộng đồng marketing, công nghệ và dữ liệu nhằm thúc đẩy chuyển đổi số trong doanh nghiệp.',
        objectPosition: '35% center',
        scale: 1.2
    },
    {
        id: 3,
        name: 'NSND Tự Long',
        title: 'Nghệ sĩ Nhân dân, nghệ sĩ chèo',
        image: tuLong,
        detailImage: tuLong,
        bio: 'Ghi dấu ấn qua nhiều chương trình truyền hình và sân khấu lớn, góp phần lan tỏa giá trị văn hóa dân tộc đến khán giả trẻ bằng tinh thần sáng tạo và đổi mới, kết hợp nghệ thuật truyền thống và yếu tố đương đại.',
        objectPosition: '40% center'
    },
    {
        id: 4,
        name: 'Victor Vũ',
        title: 'Đạo diễn – Nhà sản xuất phim',
        image: victorVu,
        detailImage: victorVu,
        bio: 'Một trong những đạo diễn nổi bật của điện ảnh Việt Nam đương đại, được biết đến với phong cách kể chuyện giàu chiều sâu và ngôn ngữ hình ảnh hiện đại. Chú trọng khai thác yếu tố tâm lý, văn hóa và bản sắc con người trong các tác phẩm, mang đến góc nhìn sáng tạo và giàu tính điện ảnh.',
        objectPosition: '46% center'
    },
    {
        id: 5,
        name: 'Phương Vũ',
        title: 'Đạo diễn - Giám đốc sáng tạo',
        image: phuongVu,
        detailImage: phuongVu,
        bio: 'Hoạt động trong lĩnh vực sản xuất nội dung và nghệ thuật thị giác với phong cách kể chuyện hiện đại, chú trọng ngôn ngữ hình ảnh và cảm xúc. Xây dựng câu chuyện với chủ đề về người trẻ, bản sắc và sự dịch chuyển trong đời sống đương đại.',
    },
    {
        id: 6,
        name: 'Soobin Hoàng Sơn',
        title: 'Nghệ sĩ',
        image: soobin,
        detailImage: soobin,
        bio: 'Một trong những nghệ sĩ tiêu biểu của Vpop thế hệ mới với khả năng kết hợp R&B, Pop và yếu tố âm nhạc đương đại. Ghi dấu ấn bằng hình ảnh nghệ sĩ sáng tạo, không ngừng làm mới bản thân trong hành trình âm nhạc.',
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
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            style={{
                                                objectPosition: speaker.objectPosition || 'center',
                                                transform: speaker.scale ? `scale(${speaker.scale})` : 'none'
                                            }}
                                        />
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

                    {/* Right: Detail Panel - Rendered via Portal to avoid clipping */}
                    {showDetail && createPortal(
                        <div className="speaker-detail" onClick={() => setShowDetail(false)}>
                            <div className="speaker-detail-card" onClick={(e) => e.stopPropagation()}>
                                <button
                                    className="close-detail-btn"
                                    onClick={() => setShowDetail(false)}
                                    aria-label="Close detail panel"
                                >
                                    ✕
                                </button>
                                <div className="speaker-detail-flex">
                                    <div className="speaker-detail-image">
                                        <img
                                            src={selectedSpeaker.detailImage}
                                            alt={selectedSpeaker.name}
                                            style={{
                                                objectPosition: selectedSpeaker.objectPosition || 'center',
                                                transform: selectedSpeaker.scale ? `scale(${selectedSpeaker.scale})` : 'none'
                                            }}
                                        />
                                    </div>
                                    <div className="speaker-detail-content">
                                        <h3 className="speaker-detail-name">{selectedSpeaker.name}</h3>
                                        <p className="speaker-detail-title">{selectedSpeaker.title}</p>
                                        <p className="speaker-detail-bio">{selectedSpeaker.bio}</p>
                                        {selectedSpeaker.social && (
                                            <div className="speaker-detail-social">
                                                {selectedSpeaker.social.linkedin && (
                                                    <a href={selectedSpeaker.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                                )}
                                                {selectedSpeaker.social.twitter && (
                                                    <a href={selectedSpeaker.social.twitter} className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}
                </div>
            </div>
        </section>
    );
};

export default Speaker;

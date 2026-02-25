import React, { useState, useRef } from 'react';
import Footer from '../components/Footer';
import './Gallery.css';
import gallery1 from '../assets/gallery/gallery1.jpg';
import gallery2 from '../assets/gallery/gallery2.jpg';
import gallery3 from '../assets/gallery/gallery3.jpg';
import gallery4 from '../assets/gallery/gallery4.jpg';
import gallery5 from '../assets/gallery/gallery5.jpg';
import gallery6 from '../assets/gallery/gallery6.jpg';
import gallery7 from '../assets/gallery/gallery7.jpg';
import gallery8 from '../assets/gallery/gallery8.jpg';
import gallery9 from '../assets/gallery/gallery9.jpg';
import gallery10 from '../assets/gallery/gallery10.jpg';
import gallery11 from '../assets/gallery/gallery11.jpg';
import gallery12 from '../assets/gallery/gallery12.jpg';
import gallery13 from '../assets/gallery/gallery13.jpg';
import gallery14 from '../assets/gallery/gallery14.jpg';
import gallery15 from '../assets/gallery/gallery15.jpg';
import gallery16 from '../assets/gallery/gallery16.jpg';
import gallery17 from '../assets/gallery/gallery17.jpg';
import gallery18 from '../assets/gallery/gallery18.jpg';
import gallery19 from '../assets/gallery/gallery19.jpg';
import gallery20 from '../assets/gallery/gallery20.jpg';
import gallery21 from '../assets/gallery/gallery21.jpg';
import gallery22 from '../assets/gallery/gallery22.jpg';
import gallery23 from '../assets/gallery/gallery23.jpg';
import gallery24 from '../assets/gallery/gallery24.jpg';
import gallery25 from '../assets/gallery/gallery25.jpg';
import gallery26 from '../assets/gallery/gallery26.jpg';



interface GalleryPost {
    id: number;
    name: string;       // uploader display name
    touchId: string;    // their Touch ID badge
    caption: string;
    imgSrc?: string;
    aspectHeight: number;
    timestamp: string;
    likes: number;
}

// Community sample posts — replace imgSrc or remove to show placeholder
const communityPosts: GalleryPost[] = [
    { id: 1, name: 'Minh Anh T.', touchId: '#VCP‑0042', caption: '✨ Không khí tại khu vực AI Workshop quá đỉnh!', imgSrc: gallery1, aspectHeight: 72, timestamp: '23/11/2026', likes: 34 },
    { id: 2, name: 'Quang Huy N.', touchId: '#VCP‑0117', caption: 'Check-in cùng Touch ID của mình nào 🫶', imgSrc: gallery2, aspectHeight: 100, timestamp: '23/11/2026', likes: 58 },
    { id: 3, name: 'Thảo Linh P.', touchId: '#VCP‑0203', caption: 'Talkshow của GS. Fei‑Fei Li — mind blown 🤯', imgSrc: gallery3, aspectHeight: 68, timestamp: '24/11/2026', likes: 91 },
    { id: 4, name: 'Đình Phát N.', touchId: '#VCP‑0122', caption: 'Multimedia showcase — tác phẩm của cả đội mình nè 🎞️', imgSrc: gallery24, aspectHeight: 118, timestamp: '28/11/2026', likes: 86 },
    { id: 5, name: 'Phương Vy T.', touchId: '#VCP‑0311', caption: 'Main Concert 🎶 — khoảnh khắc này không thể quên!', imgSrc: gallery5, aspectHeight: 80, timestamp: '25/11/2026', likes: 122 },
    { id: 6, name: 'Tuấn Khải D.', touchId: '#VCP‑0058', caption: 'Pitching session — hồi hộp mà vui lắm 🚀', imgSrc: gallery6, aspectHeight: 62, timestamp: '25/11/2026', likes: 29 },
    { id: 7, name: 'Bảo Ngọc H.', touchId: '#VCP‑0175', caption: 'Khu trải nghiệm VR/AR thật sự ảo diệu ✨', imgSrc: gallery7, aspectHeight: 90, timestamp: '26/11/2026', likes: 66 },
    { id: 8, name: 'Thanh Tùng V.', touchId: '#VCP‑0240', caption: 'Đội sáng tạo của mình — cực chiến! 🔥', imgSrc: gallery8, aspectHeight: 75, timestamp: '26/11/2026', likes: 83 },
    { id: 9, name: 'Kim Ngân L.', touchId: '#VCP‑0302', caption: 'Concept "Mê cung bản sắc" đẹp hơn mình tưởng 💜', imgSrc: gallery9, aspectHeight: 60, timestamp: '27/11/2026', likes: 105 },
    { id: 10, name: 'Đức Minh T.', touchId: '#VCP‑0421', caption: 'Bế mạc — lưu lại kỷ niệm này cho muôn đời 🌟', imgSrc: gallery10, aspectHeight: 88, timestamp: '29/11/2026', likes: 148 },
    { id: 11, name: 'Hà Phương N.', touchId: '#VCP‑0136', caption: 'Mình và team vừa hoàn thành bài trắc nghiệm rồi! 🎯', imgSrc: gallery11, aspectHeight: 70, timestamp: '23/11/2026', likes: 41 },
    { id: 12, name: 'Trọng Nhân B.', touchId: '#VCP‑0287', caption: 'Khoảnh khắc "Chạm Công nghệ" không thể nào quên 💡', imgSrc: gallery12, aspectHeight: 95, timestamp: '23/11/2026', likes: 53 },
    { id: 13, name: 'Yến Nhi V.', touchId: '#VCP‑0193', caption: 'Lần đầu trải nghiệm Personal Branding cùng chuyên gia 🪞', imgSrc: gallery13, aspectHeight: 65, timestamp: '24/11/2026', likes: 37 },
    { id: 14, name: 'Duy Khang P.', touchId: '#VCP‑0354', caption: 'AI tạo hình của mình xịn ghê 🤖✨', imgSrc: gallery14, aspectHeight: 108, timestamp: '24/11/2026', likes: 76 },
    { id: 15, name: 'Thu Hà L.', touchId: '#VCP‑0071', caption: 'Đêm nhạc cuối cùng — cảm xúc vỡ oà 💫', imgSrc: gallery15, aspectHeight: 78, timestamp: '25/11/2026', likes: 139 },
    { id: 16, name: 'Minh Khoa T.', touchId: '#VCP‑0418', caption: 'Góc triển lãm Di sản Văn hoá — quá đẹp! 🏛️', imgSrc: gallery16, aspectHeight: 55, timestamp: '25/11/2026', likes: 62 },
    { id: 17, name: 'Ánh Tuyết H.', touchId: '#VCP‑0162', caption: 'Soobin biểu diễn live — giọng hay quá trời 🎤', imgSrc: gallery17, aspectHeight: 92, timestamp: '26/11/2026', likes: 187 },
    { id: 18, name: 'Quốc Đạt N.', touchId: '#VCP‑0229', caption: 'Team Creative Collaboration của mình nè 🎨', imgSrc: gallery18, aspectHeight: 73, timestamp: '26/11/2026', likes: 44 },
    { id: 19, name: 'Ngọc Trân P.', touchId: '#VCP‑0397', caption: 'Touch ID được in ra rồi — đẹp lắm á! 🪪', imgSrc: gallery19, aspectHeight: 60, timestamp: '27/11/2026', likes: 58 },
    { id: 20, name: 'Hoàng Long V.', touchId: '#VCP‑0083', caption: 'Mentor feedback session — học được rất nhiều 🧠', imgSrc: gallery20, aspectHeight: 85, timestamp: '27/11/2026', likes: 31 },
    { id: 21, name: 'Kiều Trinh N.', touchId: '#VCP‑0345', caption: 'Mình tự hào vì đã dũng cảm lên pitching 🏆', imgSrc: gallery21, aspectHeight: 67, timestamp: '28/11/2026', likes: 94 },
    { id: 22, name: 'Văn Hào T.', touchId: '#VCP‑0210', caption: 'Buổi sáng Day 2 — năng lượng cực kỳ tích cực ☀️', imgSrc: gallery22, aspectHeight: 100, timestamp: '24/11/2026', likes: 49 },
    { id: 23, name: 'Thuỳ Dung L.', touchId: '#VCP‑0468', caption: 'Không gian Talkshow thiết kế quá ấn tượng 🎤', imgSrc: gallery23, aspectHeight: 58, timestamp: '28/11/2026', likes: 72 },
    { id: 24, name: 'Gia Bảo L.', touchId: '#VCP‑0089', caption: 'Avatar 3D của mình ra lò rồi 🎭', imgSrc: gallery4, aspectHeight: 115, timestamp: '24/11/2026', likes: 47 },
    { id: 25, name: 'Châu Anh T.', touchId: '#VCP‑0501', caption: 'Tối cuối cùng — cả nhóm ôm nhau khóc luôn 🥺💜', imgSrc: gallery25, aspectHeight: 82, timestamp: '29/11/2026', likes: 211 },
    { id: 26, name: 'Mỹ Linh V.', touchId: '#VCP‑0339', caption: 'VCP 2026 — hẹn gặp lại ở lần sau! 👋🌟', imgSrc: gallery26, aspectHeight: 70, timestamp: '29/11/2026', likes: 163 },
];

const placeholderGradients = [
    'linear-gradient(135deg, rgba(74,93,255,0.2), rgba(180,100,255,0.12))',
    'linear-gradient(135deg, rgba(95,195,228,0.18), rgba(74,93,255,0.15))',
    'linear-gradient(135deg, rgba(180,100,255,0.22), rgba(255,102,204,0.1))',
    'linear-gradient(135deg, rgba(221,136,255,0.18), rgba(74,93,255,0.12))',
    'linear-gradient(135deg, rgba(74,93,255,0.15), rgba(95,195,228,0.2))',
    'linear-gradient(135deg, rgba(255,163,71,0.12), rgba(180,100,255,0.15))',
];

interface GalleryProps {
    onNavigate?: (page: 'gallery' | 'main' | 'faqs') => void;
}

const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
    const [posts, setPosts] = useState<GalleryPost[]>(communityPosts);
    const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
    const [uploadName, setUploadName] = useState('');
    const [uploadCaption, setUploadCaption] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [showUploadPanel, setShowUploadPanel] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleLike = (id: number) => {
        const isLiked = likedIds.has(id);
        setLikedIds(prev => {
            const next = new Set(prev);
            if (isLiked) next.delete(id); else next.add(id);
            return next;
        });
        setPosts(p => p.map(post =>
            post.id === id ? { ...post, likes: post.likes + (isLiked ? -1 : 1) } : post
        ));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleUpload = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile && !uploadCaption) return;
        const newPost: GalleryPost = {
            id: Date.now(),
            name: uploadName || 'Ẩn danh',
            touchId: `#VCP‑${String(Math.floor(Math.random() * 900) + 100)}`,
            caption: uploadCaption,
            imgSrc: previewUrl ?? undefined,
            aspectHeight: Math.floor(Math.random() * 50) + 65,
            timestamp: new Date().toLocaleDateString('vi-VN'),
            likes: 0,
        };
        setPosts(prev => [newPost, ...prev]);
        setUploadName('');
        setUploadCaption('');
        setSelectedFile(null);
        setPreviewUrl(null);
        setShowUploadPanel(false);
    };

    return (
        <div className="gallery-page">

            <div className="gallery-container">
                {/* Hero */}
                <div className="gallery-hero">
                    <div className="gallery-badge">Không gian ký ức chung</div>
                    <h1 className="gallery-title">Ký ức VCP 2026</h1>
                    <p className="gallery-subtitle">
                        Mỗi bức ảnh là một <strong>dấu chạm bản sắc</strong> — nơi bạn lưu giữ khoảnh khắc của chính mình tại sự kiện. Hãy chia sẻ cùng cộng đồng VCP 2026.
                    </p>
                    <button
                        className="gallery-upload-btn"
                        onClick={() => setShowUploadPanel(v => !v)}
                    >
                        <span>＋</span> Chia sẻ khoảnh khắc của bạn
                    </button>
                </div>

                {/* Upload panel */}
                {showUploadPanel && (
                    <div className="gallery-upload-panel">
                        <form className="gallery-upload-form" onSubmit={handleUpload}>
                            <h3 className="gallery-upload-title">📸 Chia sẻ kỷ niệm</h3>

                            <div
                                className="gallery-drop-zone"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview" className="gallery-drop-preview" />
                                ) : (
                                    <>
                                        <span className="gallery-drop-icon">🖼</span>
                                        <span className="gallery-drop-label">Chọn hoặc kéo thả ảnh vào đây</span>
                                    </>
                                )}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />

                            <input
                                className="gallery-input"
                                type="text"
                                placeholder="Tên của bạn (hoặc để ẩn danh)"
                                value={uploadName}
                                onChange={e => setUploadName(e.target.value)}
                            />
                            <textarea
                                className="gallery-input gallery-textarea"
                                placeholder="Caption ngắn — khoảnh khắc này đặc biệt với bạn thế nào?"
                                value={uploadCaption}
                                onChange={e => setUploadCaption(e.target.value)}
                                rows={2}
                            />

                            <div className="gallery-upload-actions">
                                <button type="submit" className="gallery-submit-btn">Đăng ảnh</button>
                                <button type="button" className="gallery-cancel-btn" onClick={() => setShowUploadPanel(false)}>Huỷ</button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Stats bar */}
                <div className="gallery-stats">
                    <span className="gallery-stat"><strong>{posts.length}</strong> khoảnh khắc</span>
                    <span className="gallery-stat-dot">·</span>
                    <span className="gallery-stat"><strong>{posts.reduce((a, p) => a + p.likes, 0)}</strong> lượt yêu thích</span>
                    <span className="gallery-stat-dot">·</span>
                    <span className="gallery-stat">VCP 2026 · 23–29/11/2026</span>
                </div>

                {/* Masonry grid */}
                <div className="gallery-masonry">
                    {posts.map((post, idx) => (
                        <div className="gallery-card" key={post.id}>
                            <div className="gallery-card-img">
                                {post.imgSrc ? (
                                    <img src={post.imgSrc} alt={post.caption} />
                                ) : (
                                    <div
                                        className="gallery-card-placeholder"
                                        style={{
                                            minHeight: `${post.aspectHeight * 2}px`,
                                            background: placeholderGradients[idx % placeholderGradients.length],
                                        }}
                                    >
                                        🖼
                                    </div>
                                )}
                                <div className="gallery-card-overlay" />
                            </div>

                            <div className="gallery-card-info">
                                <p className="gallery-card-caption">{post.caption}</p>
                                <div className="gallery-card-meta">
                                    <div className="gallery-card-user">
                                        <span className="gallery-card-avatar">{post.name.charAt(0)}</span>
                                        <div>
                                            <span className="gallery-card-name">{post.name}</span>
                                            <span className="gallery-card-touchid">{post.touchId}</span>
                                        </div>
                                    </div>
                                    <button
                                        className={`gallery-like-btn${likedIds.has(post.id) ? ' liked' : ''}`}
                                        onClick={() => handleLike(post.id)}
                                        aria-label="Like"
                                    >
                                        <span>{likedIds.has(post.id) ? '♥' : '♡'}</span>
                                        <span className="gallery-like-count">{post.likes}</span>
                                    </button>
                                </div>
                                <span className="gallery-card-date">{post.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Gallery;

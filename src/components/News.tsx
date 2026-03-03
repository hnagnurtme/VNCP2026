import React, { useState } from 'react';
import './News.css';
import newsThumb1 from '../assets/news_thumb_1.png';
import newsThumb6 from '../assets/news_thumb_6.png';
import newsThumb7 from '../assets/news_thumb_7.png';
import newsThumb9 from '../assets/news_thumb_9.png';

interface NewsArticle {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt?: string;
    image?: string;
}

const articles: NewsArticle[] = [
    {
        id: 1,
        title: 'Vietnam Creative Pulse 2026: Khi văn hóa Việt "chạm" vào tương lai kỹ thuật số',
        date: '12/10/2026',
        category: 'Sự kiện',
        excerpt: 'Vietnam Creative Pulse 2026 hứa hẹn là siêu sự kiện tiên phong, nơi di sản văn hóa Việt hòa quyện cùng công nghệ số để tạo ra những trải nghiệm chưa từng có.',
        image: newsThumb1,
    },
    {
        id: 2,
        title: 'Dấu Chạm Văn Hóa: Trải nghiệm văn hóa Việt bằng công nghệ tương tác lần đầu xuất hiện',
        date: '18/10/2026',
        category: 'Công nghệ',
    },
    {
        id: 3,
        title: 'Giải mã mê cung sáng tạo: Định hướng nghề nghiệp cho Gen Z trong kỷ nguyên AI',
        date: '25/10/2026',
        category: 'Gen Z',
    },
    {
        id: 4,
        title: 'Khi AI không thay thế sáng tạo: Cách công nghệ trở thành "đồng đội" của người trẻ',
        date: '01/11/2026',
        category: 'AI & Sáng tạo',
    },
    {
        id: 5,
        title: 'Bị bí ý tưởng? Khám phá 5 trải nghiệm tương tác "đánh thức" giác quan tại VCP 2026',
        date: '05/11/2026',
        category: 'Trải nghiệm',
    },
    {
        id: 6,
        title: 'Vì sao người trẻ đang tìm đến những sự kiện văn hóa - công nghệ thay vì giải trí thuần túy?',
        date: '08/11/2026',
        category: 'Văn hóa',
        excerpt: 'Xu hướng mới của Gen Z: thay vì giải trí thụ động, họ chủ động tìm kiếm những sự kiện có chiều sâu, kết hợp học hỏi và trải nghiệm công nghệ.',
        image: newsThumb6,
    },
    {
        id: 7,
        title: 'Top những sự kiện hay cho Gen Z năm 2026 không thể bỏ lỡ tại Sài Gòn',
        date: '10/11/2026',
        category: 'Lifestyle',
        excerpt: 'Từ lễ hội âm nhạc đến triển lãm nghệ thuật tương tác, Sài Gòn 2026 hứa hẹn là thiên đường của những trải nghiệm không thể bỏ lỡ dành cho thế hệ trẻ.',
        image: newsThumb7,
    },
    {
        id: 8,
        title: 'Lạc lối không đáng sợ: VCP 2026 và hành trình tìm lại bản sắc sáng tạo của bạn',
        date: '12/11/2026',
        category: 'Bản sắc',
    },
    {
        id: 9,
        title: 'Hướng dẫn đăng ký vé VCP 2026: Sẵn sàng "chạm" vào mê cung bản sắc',
        date: '14/11/2026',
        category: 'Hướng dẫn',
        excerpt: 'Chỉ với 3 bước đơn giản, bạn đã sẵn sàng sở hữu mã Touch ID độc bản và bước vào hành trình định hình bản sắc tại VCP 2026.',
        image: newsThumb9,
    },
    {
        id: 10,
        title: 'Săn vé Vietnam Creative Pulse 2026: "Chạm" sớm để nhận đặc quyền độc bản',
        date: '16/11/2026',
        category: 'Sự kiện',
    },
];

const featuredArticles = articles.filter(a => a.image);
const headlineArticles = articles.filter(a => !a.image);

interface Comment {
    id: number;
    name: string;
    text: string;
    time: string;
}

const News: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([
        { id: 1, name: 'Minh Anh', text: 'Sự kiện này trông thực sự hấp dẫn! Chờ mãi rồi 🔥', time: '03/03/2026' },
        { id: 2, name: 'Khánh Linh', text: 'Mình đã bắt đầu đăng ký vé rồi, hy vọng gặp mọi người ở VCP 2026 nhé!', time: '03/03/2026' },
    ]);
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handlePost = () => {
        if (!name.trim() || !text.trim()) return;
        const now = new Date();
        const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
        setComments(prev => [...prev, { id: Date.now(), name: name.trim(), text: text.trim(), time: dateStr }]);
        setName('');
        setText('');
    };

    return (
        <section id="news" className="news-section" aria-label="Tin tức VCP 2026">
            {/* Background blobs */}
            <div className="news-bg-blob news-bg-blob--1" aria-hidden="true" />
            <div className="news-bg-blob news-bg-blob--2" aria-hidden="true" />

            <div className="news-container">
                {/* Section Header */}
                <div className="news-header">
                    <div className="news-badge">
                        <span>Tin tức</span>
                    </div>
                    <h2 className="news-title">
                        Cập nhật <span className="news-title-accent">thông tin</span> mới nhất tại VCP 2026
                    </h2>
                </div>

                {/* Hero Card (Article 1) — full width */}
                {featuredArticles[0] && (
                    <article className="news-card news-card--hero" aria-label={featuredArticles[0].title}>
                        <div className="news-card__image-wrap">
                            <img
                                src={featuredArticles[0].image}
                                alt={featuredArticles[0].title}
                                className="news-card__image"
                                loading="lazy"
                            />
                            <div className="news-card__overlay" />
                            <div className="news-card__body">
                                <div className="news-card__meta">
                                    <span className="news-tag">{featuredArticles[0].category}</span>
                                    <time className="news-card__date" dateTime="2026-10-12">
                                        {featuredArticles[0].date}
                                    </time>
                                </div>
                                <h3 className="news-card__title">{featuredArticles[0].title}</h3>
                                {featuredArticles[0].excerpt && (
                                    <p className="news-card__excerpt">{featuredArticles[0].excerpt}</p>
                                )}
                            </div>
                        </div>
                    </article>
                )}

                {/* Lower section: unified frame with left col + side cards RIGHT */}
                <div className="news-lower-frame">
                    {/* Left column: headlines + comments */}
                    <div className="news-left-col">
                        {/* Headlines */}
                        <div className="news-headlines">
                            <div className="news-headlines__header">
                                <span className="news-headlines__label">Đọc thêm</span>
                                <div className="news-headlines__divider" aria-hidden="true" />
                            </div>
                            <ol className="news-headlines__list">
                                {headlineArticles.map((article, idx) => (
                                    <li key={article.id} className="news-headline-item">
                                        <span className="news-headline-num">{String(idx + 1).padStart(2, '0')}</span>
                                        <div className="news-headline-content">
                                            <span className="news-headline-tag">{article.category}</span>
                                            <h4 className="news-headline-title">{article.title}</h4>
                                        </div>
                                        <time className="news-headline-date">{article.date}</time>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Comments */}
                        <div className="news-comments">
                            <div className="news-comments__header">
                                <span className="news-comments__label">💬 Thảo luận</span>
                                <span className="news-comments__count">{comments.length} bình luận</span>
                            </div>

                            <div className="news-comments__list">
                                {comments.map(c => (
                                    <div key={c.id} className="news-comment-item">
                                        <div className="news-comment-avatar">
                                            {c.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="news-comment-body">
                                            <div className="news-comment-meta">
                                                <span className="news-comment-name">{c.name}</span>
                                                <time className="news-comment-time">{c.time}</time>
                                            </div>
                                            <p className="news-comment-text">{c.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="news-comments__form">
                                <input
                                    className="news-comment-input"
                                    type="text"
                                    placeholder="Tên của bạn..."
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    maxLength={40}
                                />
                                <textarea
                                    className="news-comment-textarea"
                                    placeholder="Chia sẻ cảm nghĩ của bạn về VCP 2026..."
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    rows={3}
                                    maxLength={300}
                                />
                                <button
                                    className="news-comment-submit"
                                    onClick={handlePost}
                                    disabled={!name.trim() || !text.trim()}
                                >
                                    Đăng bình luận →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Side image cards — right column */}
                    <div className="news-side-cards">
                        {featuredArticles.slice(1).map((article) => (
                            <article key={article.id} className="news-card news-card--side" aria-label={article.title}>
                                <div className="news-card__image-wrap">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="news-card__image"
                                        loading="lazy"
                                    />
                                    <div className="news-card__overlay" />
                                    <div className="news-card__body">
                                        <div className="news-card__meta">
                                            <span className="news-tag">{article.category}</span>
                                            <time className="news-card__date">{article.date}</time>
                                        </div>
                                        <h3 className="news-card__title">{article.title}</h3>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;

import React, { useState } from 'react';
import Footer from '../components/Footer';
import './FAQs.css';

interface FAQsProps {
    onNavigate?: (page: 'gallery' | 'main' | 'faqs') => void;
}

interface FAQItem {
    id: number;
    question: string;
    answer: React.ReactNode;
}

interface FAQGroup {
    id: number;
    label: string;
    emoji: string;
    items: FAQItem[];
}

const getFaqGroups = (navigateTo: (section: 'contact' | 'agenda') => void): FAQGroup[] => [
    {
        id: 1,
        label: 'Khám phá VCP 2026',
        emoji: '🌐',
        items: [
            {
                id: 1,
                question: 'Vietnam Creative Pulse 2026 (VCP 2026) là sự kiện gì?',
                answer: (
                    <>
                        <p>
                            Vietnam Creative Pulse 2026 là <strong>siêu sự kiện đa phương tiện cấp quốc gia</strong> mang chủ đề <strong>"Dấu Chạm Văn Hóa"</strong>. Sự kiện mang đến hành trình trải nghiệm đa giác quan, nơi người tham gia sử dụng công nghệ số để trải nghiệm trực tiếp văn hóa nghệ thuật.
                        </p>
                        <p style={{ marginTop: '0.75rem', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            Hành trình VCP 2026 bao gồm 3 tầng trải nghiệm:
                        </p>
                        <div className="faq-tier">
                            <div className="faq-tier-body">
                                <strong>Tầng 1 – Chạm Công nghệ (Tech Touch)</strong>
                                <p>Khám phá sức mạnh của AI và VR/AR trong nghệ thuật. Người tham gia được thực hành ứng dụng AI vào thiết kế, trải nghiệm không gian âm nhạc số và tham gia chuỗi Talkshow khai mở tư duy cùng GS. Fei-Fei Li, Chuyên gia Nguyễn Đắc Tình, NSND Tự Long và nghệ sĩ Soobin Hoàng Sơn.</p>
                            </div>
                        </div>
                        <div className="faq-tier">
                            <div className="faq-tier-body">
                                <strong>Tầng 2 – Chạm Bản sắc (Identity Touch)</strong>
                                <p>Giải mã định danh cá nhân trong ngành sáng tạo. Trực tiếp thực hiện Personal Branding Test cùng chuyên gia, tạo Avatar 3D độc bản và lắng nghe câu chuyện khai thác chất liệu văn hóa từ Đạo diễn Victor Vũ và Giám đốc Sáng tạo Phương Vũ.</p>
                            </div>
                        </div>
                        <div className="faq-tier">
                            <div className="faq-tier-body">
                                <strong>Tầng 3 – Chạm Tương lai (Future Touch)</strong>
                                <p>Hoàn thiện “Dấu chạm bản sắc” trên hệ thống digital và nhận thẻ định danh số. Trải nghiệm hoạt động ghép đội sáng tạo (Creative Collaboration), trình bày ý tưởng (Pitching) trước Hội đồng Mentor và bùng nổ cùng đêm Main Concert kết hợp công nghệ tương tác đa giác quan.</p>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                id: 2,
                question: 'VCP 2026 có gì khác biệt so với các lễ hội hay triển lãm nghệ thuật thông thường?',
                answer: (
                    <>
                        <p>
                            Điểm khác biệt lớn nhất của VCP 2026 là <strong>sự tương tác (Interactive)</strong> thay vì tham gia thụ động. Tại các sự kiện thông thường, bạn chỉ “xem” tác phẩm. Tại VCP 2026, bạn chính là người đồng sáng tạo, mượn sức mạnh công nghệ để “chạm” vào nghệ thuật và lưu lại dấu ấn độc bản của riêng mình.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}>
                            Thông qua <strong>“Touch ID độc bản”</strong> (Mã QR vân tay số), mỗi bước đi, mỗi cái chạm của bạn tại sự kiện sẽ thay đổi hình ảnh, âm thanh và màu sắc của không gian xung quanh, biến bạn thành một phần của <strong>"Mê cung bản sắc"</strong>.
                        </p>
                    </>
                ),
            },
            {
                id: 3,
                question: 'Công nghệ VR và AR tại sự kiện sẽ mang đến trải nghiệm cụ thể như thế nào?',
                answer: (
                    <>
                        <p>
                            Tại khu vực <strong>Tech Touch</strong>, công nghệ VR/AR không chỉ để "chơi game" mà được dùng để biến đổi không gian thực tế thành một sân khấu nghệ thuật ảo đa chiều.
                        </p>
                        <ul className="faq-bullets" style={{ marginTop: '0.5rem' }}>
                            <li>Khi đeo kính VR hoặc dùng camera điện thoại quét các điểm "chạm" tại sự kiện, bạn sẽ thấy các hoa văn di sản truyền thống chuyển động trong không gian.</li>
                            <li>Tự mình bước vào một phòng trưng bày truyền thông 3 chiều hoàn toàn không có thực.</li>
                        </ul>
                    </>
                ),
            },
            {
                id: 4,
                question: 'Tôi cần khoảng bao nhiêu thời gian để khám phá hết "Mê cung bản sắc" tại VCP 2026?',
                answer: (
                    <>
                        <p>
                            Để trải nghiệm trọn vẹn cả 3 tầng không gian (Tech Touch, Identity Touch, Future Touch) và tạo thành công Avatar 3D của riêng mình, bạn nên dành ít nhất <strong>2 đến 3 giờ</strong>.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}>
                            Tuy nhiên, nếu bạn muốn tham gia sâu vào các buổi Talkshow, Mini Challenge thực hành AI (3 giờ) hay hoạt động ghép đội Pitching (60 phút), bạn hoàn toàn có thể dành trọn vẹn <strong>1-2 ngày</strong> để sống trong không gian sáng tạo này.
                        </p>
                    </>
                ),
            },
        ],
    },
    {
        id: 2,
        label: 'Định hướng và Tham gia',
        emoji: '🎯',
        items: [
            {
                id: 5,
                question: 'Ai có thể tham gia sự kiện? Có giới hạn độ tuổi hay yêu cầu chuyên môn không?',
                answer: (
                    <>
                        <p>
                            VCP 2026 là sự kiện mở dành cho tất cả công chúng yêu thích văn hóa và công nghệ, <strong>không giới hạn độ tuổi</strong>. Đặc biệt, sự kiện được thiết kế tối ưu nhất cho Gen Z, sinh viên các ngành Truyền thông, Thiết kế, Nghệ thuật và những cá nhân đang tìm kiếm định hướng trong ngành công nghiệp sáng tạo.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}>
                            Bạn không cần biết lập trình (code) để tham gia các khu vực trải nghiệm AI.
                        </p>
                    </>
                ),
            },
            {
                id: 6,
                question: 'Sinh viên yêu thích ngành sáng tạo, truyền thông, thiết kế tham gia VCP 2026 sẽ nhận được giá trị gì?',
                answer: (
                    <>
                        <p>
                            Sự kiện cung cấp <strong>Bản đồ Nghề nghiệp Số (AI Career Map)</strong> giúp bạn không còn “lạc lối” giữa thị trường công nghệ. Bạn sẽ nhận được:
                        </p>
                        <ul className="faq-bullets">
                            <li>Định hướng trực tiếp về cách ứng dụng AI vào quy trình làm việc (Multimedia, Thiết kế, Nội dung).</li>
                            <li>Giao lưu với các chuyên gia, nghệ sĩ thị giác hàng đầu đang ứng dụng thành công công nghệ AI.</li>
                            <li>Nhận lộ trình cá nhân hóa dựa trên bài trắc nghiệm <em>“Mê cung bản sắc”</em> bạn đã thực hiện.</li>
                        </ul>
                    </>
                ),
            },
            {
                id: 7,
                question: 'Công nghệ AI tại VCP 2026 có làm mất đi tính "con người" trong sáng tạo không?',
                answer: (
                    <>
                        <p>
                            <strong>Hoàn toàn không.</strong> VCP 2026 khẳng định AI không thay thế con người, mà là <em>“đồng đội”</em> cùng sáng tạo. Tại khu vực trải nghiệm thực tế, bạn sẽ thấy cách AI xử lý các tác vụ kỹ thuật nặng nhọc, trả lại không gian tự do để con người tập trung vào tư duy thẩm mỹ, cảm xúc và thông điệp văn hóa cốt lõi.
                        </p>
                    </>
                ),
            },
            {
                id: 8,
                question: 'Làm sao để xem lại hình ảnh và Avatar 3D của tôi sau khi sự kiện kết thúc?',
                answer: (
                    <>
                        <p>
                            Mọi tương tác của bạn tại sự kiện đều được lưu trữ trên <strong>"Bản đồ ký ức chung"</strong>. Sau sự kiện, bạn chỉ cần dùng mã QR "Touch ID" cá nhân để đăng nhập vào khu vực [Gallery] trên website. Tại đây, bạn có thể tải về Avatar 3D độc bản và chia sẻ khoảnh khắc "dấu chạm" của mình lên mạng xã hội.
                        </p>
                    </>
                ),
            },
        ],
    },
    {
        id: 3,
        label: 'Hướng dẫn vé và Chuẩn bị',
        emoji: '⚡',
        items: [
            {
                id: 9,
                question: 'Tham gia sự kiện có hoàn toàn miễn phí không? Đêm Main Concert có cần mua vé phụ?',
                answer: (
                    <>
                        <p>
                            Sự kiện <strong>miễn phí 100%</strong> cho tất cả các hoạt động, bao gồm cả các workshop, khu vực triển lãm và đêm Main Concert bùng nổ cùng nghệ sĩ Soobin Hoàng Sơn.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}>
                            Tuy nhiên, do không gian đêm nhạc có giới hạn, mã "Touch ID" của bạn cần được <strong>kích hoạt check-in sớm</strong> tại sự kiện để đảm bảo vị trí tham gia Concert.
                        </p>
                    </>
                ),
            },
            {
                id: 10,
                question: 'Làm thế nào để đăng ký vé VCP 2026 và nhận mã QR “Touch ID độc bản”?',
                answer: (
                    <>
                        <p>
                            Sự kiện mở cửa hoàn toàn miễn phí nhưng giới hạn số lượng tham gia trải nghiệm tương tác sâu. Để đăng ký, bạn thực hiện 3 bước sau:
                        </p>
                        <ol className="faq-steps">
                            <li>
                                <span className="faq-step-num">1</span>
                                <span>Truy cập mục <button type="button" className="faq-link" onClick={() => navigateTo('contact')}>[Get in Touch]</button> trên website chính thức.</span>
                            </li>
                            <li>
                                <span className="faq-step-num">2</span>
                                <span>Hoàn thành bài trắc nghiệm tính cách tương tác và quét vân tay số trực tuyến.</span>
                            </li>
                            <li>
                                <span className="faq-step-num">3</span>
                                <span>Hệ thống sẽ gửi mã QR <strong>“Touch ID Văn hóa”</strong> độc bản (mang định danh của riêng bạn) qua email. Vui lòng lưu lại mã này để check-in tại cổng sự kiện.</span>
                            </li>
                        </ol>
                    </>
                ),
            },
            {
                id: 11,
                question: 'Tôi cần chuẩn bị gì khi đến tham gia sự kiện?',
                answer: (
                    <>
                        <p>Để có trải nghiệm tương tác mượt mà nhất, bạn chỉ cần mang theo:</p>
                        <ul className="faq-bullets">
                            <li><strong>Mã QR "Touch ID":</strong> Đã chụp màn hình hoặc lưu sẵn trong email để check-in qua các cổng không gian.</li>
                            <li><strong>Điện thoại (Smartphone):</strong> Được sạc đầy pin hoặc mang theo sạc dự phòng để tham gia các tương tác AR/VR quét qua camera.</li>
                            <li><strong>Trang phục:</strong> Thoải mái, năng động để tự do di chuyển và "chạm" vào mọi ngóc ngách của không gian.</li>
                        </ul>
                    </>
                ),
            },
            {
                id: 12,
                question: 'Thời gian và địa điểm tổ chức Vietnam Creative Pulse 2026 ở đâu?',
                answer: (
                    <>
                        <div className="faq-info-row">
                            <span className="faq-info-label">Thời gian</span>
                            <span className="faq-info-value">18/11/2026 – 24/11/2026</span>
                        </div>
                        <div className="faq-info-row">
                            <span className="faq-info-label">Địa điểm</span>
                            <span className="faq-info-value">The Global City, Q. Thủ Đức, TP.HCM</span>
                        </div>
                        <div className="faq-info-row">
                            <span className="faq-info-label">Lịch trình</span>
                            <span className="faq-info-value">Cập nhật liên tục tại mục <button type="button" className="faq-link" onClick={() => navigateTo('agenda')}>[Agenda]</button> — talkshow, workshop, concert và khu vực trải nghiệm AI.</span>
                        </div>
                    </>
                ),
            },
        ],
    },
    {
        id: 4,
        label: 'Các câu hỏi khác',
        emoji: '❓',
        items: [
            {
                id: 13,
                question: 'Tôi có thể đăng ký làm tình nguyện viên cho VCP 2026 không?',
                answer: (
                    <p>
                        Ban tổ chức rất hoan nghênh tinh thần của bạn! Cổng đăng ký tình nguyện viên (VCP Volunteers) sẽ chính thức mở vào tháng 9/2026 tại mục [Cộng đồng] trên website. Hãy theo dõi fanpage để không bỏ lỡ thông báo nhé.
                    </p>
                ),
            },
            {
                id: 14,
                question: 'Sự kiện có khu vực trông giữ xe và ăn uống không?',
                answer: (
                    <p>
                        Có, The Global City có khu vực bãi đậu xe rộng rãi cho cả xe máy và ô tô. Ngoài ra, trong khuôn viên sự kiện sẽ có khu vực Food Court với các món ăn nhẹ và đồ uống đa dạng để phục vụ khách tham quan.
                    </p>
                ),
            },
            {
                id: 15,
                question: 'Nếu tôi là doanh nghiệp muốn đồng hành hoặc tài trợ cho sự kiện thì liên hệ ai?',
                answer: (
                    <p>
                        Rất cảm ơn sự quan tâm của quý doanh nghiệp. Vui lòng gửi thông tin đề xuất hợp tác qua email: <strong>partnership@vcp2026.vn</strong> hoặc để lại lời nhắn tại mục [Get in Touch]. Ban đối ngoại của chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
                    </p>
                ),
            },
            {
                id: 16,
                question: 'Trẻ em có được tham gia sự kiện không? Có cần vé riêng cho trẻ em không?',
                answer: (
                    <p>
                        Trẻ em hoàn toàn được tham gia và không cần vé riêng. Tuy nhiên, do một số khu vực có thiết bị công nghệ hiện đại và âm thanh lớn (như Main Concert), phụ huynh vui lòng giám sát trẻ nhỏ để đảm bảo an toàn và trải nghiệm tốt nhất.
                    </p>
                ),
            },
            {
                id: 17,
                question: 'Sự kiện có cung cấp Wi-Fi miễn phí để khách tham quan trải nghiệm AR/VR không?',
                answer: (
                    <p>
                        Có, ban tổ chức cung cấp hệ thống Wi-Fi tốc độ cao miễn phí phủ sóng toàn bộ các tầng trải nghiệm để đảm bảo bạn có thể quét mã AR và tương tác số mượt mà nhất.
                    </p>
                ),
            },
            {
                id: 18,
                question: 'Tôi có thể mang thú cưng vào không gian sự kiện không?',
                answer: (
                    <p>
                        Rất tiếc, để đảm bảo vệ sinh và an toàn cho các thiết bị công nghệ cũng như các tác phẩm trưng bày, thú cưng không được phép mang vào khu vực bên trong triển lãm. Hy vọng bạn thông cảm.
                    </p>
                ),
            },
            {
                id: 19,
                question: 'Có khu vực sơ cứu y tế tại sự kiện không?',
                answer: (
                    <p>
                        Luôn có đội ngũ y tế và xe cấp cứu túc trực 24/7 tại khu vực sảnh chính và gần cổng ra vào để hỗ trợ kịp thời trong mọi tình huống khẩn cấp.
                    </p>
                ),
            },
            {
                id: 20,
                question: 'Tôi bị mất mã QR "Touch ID" đã nhận qua email, làm sao để lấy lại?',
                answer: (
                    <p>
                        Bạn có thể truy cập lại link tra cứu vé trong email xác nhận ban đầu hoặc liên hệ quầy Support tại sảnh sự kiện, cung cấp số điện thoại/email đã đăng ký để nhân viên hỗ trợ cấp lại mã mới.
                    </p>
                ),
            },
            {
                id: 21,
                question: 'VCP 2026 có kế hoạch tổ chức tại các thành phố khác ngoài TP.HCM (như Hà Nội hay Đà Nẵng) không?',
                answer: (
                    <p>
                        VCP 2026 hiện là sự kiện trọng điểm tại TP.HCM. Tuy nhiên, chúng tôi đang xem xét kế hoạch "VCP Tour" tại Hà Nội vào đầu năm 2027. Hãy theo dõi website để cập nhật những thông tin mới nhất nhé!
                    </p>
                ),
            },
            {
                id: 22,
                question: 'Sự kiện có quy định về trang phục (dresscode) cụ thể không?',
                answer: (
                    <p>
                        Không có quy định bắt buộc, nhưng chúng tôi khuyến khích bạn mặc trang phục mang phong cách <strong>Cyberpunk</strong> hoặc <strong>Modern Heritage</strong> để lên hình thật ấn tượng trong không gian "Dấu Chạm Văn Hóa".
                    </p>
                ),
            },
            {
                id: 23,
                question: 'Tôi có thể quay phim, chụp ảnh bằng máy chuyên nghiệp tại sự kiện không?',
                answer: (
                    <p>
                        Bạn có thể tự do chụp ảnh bằng điện thoại. Đối với máy ảnh chuyên nghiệp hoặc ekip quay phim thương mại, vui lòng đăng ký thẻ Media tại quầy tiếp tân để được hỗ trợ vị trí tác nghiệp tốt nhất.
                    </p>
                ),
            },
            {
                id: 24,
                question: 'Sự kiện có hỗ trợ lối đi và tiện ích cho người khuyết tật không?',
                answer: (
                    <p>
                        Tất cả các khu vực tại The Global City đều được thiết kế có lối đi riêng cho xe lăn và thang máy hỗ trợ, đảm bảo mọi khách tham quan đều có thể trải nghiệm sự kiện một cách thuận tiện nhất.
                    </p>
                ),
            },
            {
                id: 25,
                question: 'Sau khi sự kiện kết thúc, tôi có thể xem lại các nội dung Talkshow trực tuyến không?',
                answer: (
                    <p>
                        Toàn bộ các buổi Talkshow chính thức sẽ được ghi hình và phát lại (Replay) trên website VCP 2026 trong vòng 1 tuần sau khi sự kiện kết thúc dành cho những bạn có mã "Touch ID".
                    </p>
                ),
            },
            {
                id: 26,
                question: 'Tại sự kiện có khu vực gửi đồ (Lockers) cho khách tham quan không?',
                answer: (
                    <p>
                        Để bạn có thể thoải mái trải nghiệm các hoạt động tương tác, ban tổ chức có bố trí <strong>khu vực gửi đồ miễn phí</strong> tại sảnh chính. Tuy nhiên, chúng tôi khuyến khích bạn không mang theo các vật dụng có giá trị lớn hoặc quá cồng kềnh để đảm bảo an toàn.
                    </p>
                ),
            },
        ],
    },
];

const FAQs: React.FC<FAQsProps> = ({ onNavigate }) => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [isSection4Visible, setIsSection4Visible] = useState(false);

    const toggle = (id: number) => {
        setOpenItems(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const navigateTo = (section: 'contact' | 'agenda') => {
        if (onNavigate) {
            onNavigate('main');
            // Give slider time to animate then scroll to section
            setTimeout(() => {
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 450);
        }
    };

    // --- Search & Filtering Logic ---
    const allGroups = getFaqGroups(navigateTo);

    const filteredGroups = allGroups.map(group => {
        const matchingItems = group.items.filter(item => {
            const query = searchQuery.toLowerCase().trim();
            if (!query) return true;

            // Simple search in question text
            const questionMatches = item.question.toLowerCase().includes(query);

            // For answer matches, we'd ideally search the text content of the React nodes
            // Since we can't easily search ReactNodes, we'll focus on questions for now
            // but we could extend this if we had raw text data.
            return questionMatches;
        });

        return { ...group, items: matchingItems };
    }).filter(group => group.items.length > 0);

    const hasResults = filteredGroups.length > 0;

    return (
        <div className="faqs-page">

            <div className="faqs-container">
                {/* Hero */}
                <div className="faqs-hero">
                    <div className="faqs-badge">
                        <span>Câu hỏi thường gặp</span>
                    </div>
                    <h1 className="faqs-title">FAQs</h1>
                    <p className="faqs-subtitle">
                        Mọi điều bạn cần biết về <strong>Vietnam Creative Pulse 2026</strong> — siêu sự kiện quốc gia tiên&nbsp;phong kết hợp Công nghiệp Văn hóa Việt Nam và Công nghệ số.
                    </p>
                </div>

                {/* Endorsement */}
                <div className="faqs-endorsement">
                    <p className="faqs-endorsement-text" style={{ textAlign: 'justify' }}>
                        VCP 2026 được tổ chức nhằm hiện thực hóa mục tiêu biến công nghiệp văn hóa thành động lực tăng trưởng kinh tế theo <strong>Nghị quyết 80-NQ/TW</strong> và <strong>Quyết định 2486/QĐ-TTg</strong>. Sự kiện là không gian để thế hệ trẻ tự do định vị bản sắc và tìm kiếm lộ trình nghề nghiệp bền vững trong nền công nghiệp sáng tạo.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="faqs-search-wrapper">
                    <div className="faqs-search-container">
                        <span className="search-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Tìm kiếm câu hỏi hoặc từ khóa..."
                            className="faqs-search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                className="search-clear"
                                onClick={() => setSearchQuery('')}
                                title="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* FAQ Groups */}
                {hasResults ? (
                    filteredGroups.map((group: FAQGroup, gi: number) => {
                        const isSection4 = group.id === 4;
                        const shouldShowSection = !isSection4 || isSection4Visible || searchQuery.trim() !== '';

                        if (!shouldShowSection) {
                            return (
                                <div className="faqs-reveal-container" key="section-4-reveal">
                                    <button
                                        className="faqs-reveal-btn"
                                        onClick={() => setIsSection4Visible(true)}
                                    >
                                        <span>4. Các câu hỏi khác</span>
                                        <span className="reveal-dots">...</span>
                                    </button>
                                </div>
                            );
                        }

                        return (
                            <div className="faqs-group" key={group.id}>
                                <div className="faqs-group-label">
                                    <span className="faqs-group-number">{gi + 1}</span>
                                    <span>{group.label}</span>
                                </div>

                                {group.items.map((item: FAQItem) => (
                                    <div
                                        key={item.id}
                                        className={`faq-item${openItems.has(item.id) ? ' open' : ''}`}
                                    >
                                        <div
                                            className="faq-question"
                                            onClick={() => toggle(item.id)}
                                            role="button"
                                            aria-expanded={openItems.has(item.id)}
                                            tabIndex={0}
                                            onKeyDown={e => e.key === 'Enter' && toggle(item.id)}
                                        >
                                            <span className="faq-question-text">
                                                {item.id}. {item.question}
                                            </span>
                                            <span className="faq-icon">+</span>
                                        </div>

                                        <div className="faq-answer">
                                            <div className="faq-answer-content">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {isSection4 && searchQuery.trim() === '' && (
                                    <div className="faqs-collapse-wrapper">
                                        <button
                                            className="faqs-collapse-btn"
                                            onClick={() => setIsSection4Visible(false)}
                                        >
                                            <span>Thu gọn</span>
                                            <span className="collapse-icon">↑</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="faqs-no-results">
                        <div className="no-results-icon">📂</div>
                        <h3>Không tìm thấy kết quả</h3>
                        <p>Rất tiếc, chúng tôi không tìm thấy câu hỏi nào phù hợp với từ khóa "<strong>{searchQuery}</strong>".</p>
                        <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                            Hiển thị tất cả câu hỏi
                        </button>
                    </div>
                )}

                {/* Footer Credit */}
                <div className="faqs-footer-credit">
                    <p className="faqs-footer-org">
                        Đơn vị chịu trách nhiệm nội dung: Ban Tổ chức VCP 2026 – Bộ VH-TT-DL
                    </p>
                    <p className="faqs-footer-mission">
                        Chúng tôi đồng hành cùng thế hệ trẻ trong hành trình đưa Công nghiệp Văn hóa – Sáng tạo Việt Nam hội nhập quốc tế thông qua chuyển đổi số.
                    </p>
                    <div className="faqs-footer-press">
                        <span className="faqs-press-tag">VnExpress</span>
                        <span className="faqs-press-tag">Tuổi Trẻ</span>
                        <span className="faqs-press-tag">VietnamNet</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FAQs;

import React from 'react';
import './Problems.css';

const Problems: React.FC = () => {
    return (
        <section id="problems" className="problems-section">
            <div className="problems-container">
                <h3 className="problems-question">
                    Bạn có đang ráo riết đi tìm một định nghĩa cho chính mình?
                </h3>

                <div className="problems-content">
                    <p className="problems-text">
                        Giữa kỷ nguyên số nơi các giá trị văn hóa giao thoa mạnh mẽ, hành trình tìm kiếm bản sắc cá nhân
                        bỗng trở nên đầy rẫy những ngã rẽ. Thấu hiểu sự "loay hoay" đó, <span className="highlight-gradient">Vietnam Creative Pulse 2026: Dấu Chạm Văn Hóa</span> ra đời để cùng bạn định vị bản thân giữa dòng chảy sáng tạo vô tận.
                    </p>

                    <p className="problems-text">
                        Không chỉ là một sự kiện, đây là không gian của những trải nghiệm đa giác quan - nơi mỗi lối đi bạn
                        chọn đều mở ra một cánh cửa tương lai riêng biệt. Hãy để nhịp đập
                        của văn hóa, sức mạnh của sáng tạo và hơi thở của công nghệ trở thành chất liệu giúp bạn <span className="highlight-gradient">định danh bản sắc</span> và <span className="highlight-gradient">khắc họa dấu ấn độc bản</span> của chính mình.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problems;

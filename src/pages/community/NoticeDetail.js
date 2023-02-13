import React from 'react';
import * as Style from "assets/styleComponent/community/detail";
import { Link } from 'react-router-dom';

const NoticeDetail = () => {
    return (
        <Style.Detail>
            <div className="wrap">
                <h2>공지사항</h2>
                <h3>공지사항입니다.</h3>

                <div className="title">
                    <ul>
                        <li>
                            <div>제목</div>
                            <div>PKD 오픈 이벤트</div>
                        </li>
                        <li>
                            <div>작성자</div>
                            <div>PKD</div>
                        </li>
                    </ul>
                    <div>
                        <p><b>작성일</b> 2023-02-09</p>
                        <p><b>조회수</b> +9999</p>
                    </div>
                </div>

                <div className="content">
                    <p>
                        공지사항입니다~~
                    </p>
                </div>

                <Link to="/community/notice/1" className="more">목록</Link>

                <div className="differentBoard">
                    <ul>
                        <li>
                            <div>다음글</div>
                            <div><Link>질문입니다03</Link></div>
                        </li>
                        <li>
                            <div>이전글</div>
                            <div><Link>질문입니다01</Link></div>
                        </li>
                    </ul>
                </div>
            </div>
        </Style.Detail>
    );
};

export default NoticeDetail;
import React from 'react';
import { Link } from 'react-router-dom';

import noImg from "assets/images/noImg.gif";

const ReviewAll = () => {
    return (
        <>
            <ul class="all">
                <li>
                    <div class="content">
                        <div class="star">★★★★★</div>
                        <h3>제목입니다제목입니다제목입니다제목입니다.</h3>
                        <p>
                            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                        </p>
                        <button>더보기</button>
                        <div class="comments">
                            댓글 [1]
                        </div>
                    </div>
                    <div class="reviewInfo">
                        <ul>
                            <li><span>상품명</span> 상품이름입니다.</li>
                            <li><span>작성자</span> lif****</li>
                            <li><span>작성일</span> 2022/04/22</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <div class="star">★★★★★</div>
                        <h3>제목입니다제목입니다제목입니다제목입니다.</h3>
                        <p>
                            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                        </p>
                        <button>더보기</button>
                        <div class="imageView">
                            <img src={noImg} alt="" />
                            <img src={noImg} alt="" />
                        </div>
                        <div class="comments">
                            댓글 [1]
                        </div>
                    </div>
                    <div class="reviewInfo">
                        <ul>
                            <li><span>상품명</span> 상품이름입니다.</li>
                            <li><span>작성자</span> lif****</li>
                            <li><span>작성일</span> 2022/04/22</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div class="pagention">
                <a href="#"><i class="fa-solid fa-angles-left"></i></a>
                <a href="#"><i class="fa-solid fa-angle-left"></i></a>
                <span>1</span>
                <a href="#"><i class="fa-solid fa-angle-right"></i></a>
                <a href="#"><i class="fa-solid fa-angles-right"></i></a>
            </div>
        </>
    );
};

export default ReviewAll;
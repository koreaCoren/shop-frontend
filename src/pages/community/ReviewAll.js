import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMutation } from 'react-query';

import { boardDetail } from 'utils/axios';

import noImg from "assets/images/noImg.gif";
import Loading from 'components/loding/Loading';

const ReviewAll = () => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { boardPage } = useParams();
    const [boardList, setBoardList] = useState();
    const { mutateAsync, isSuccess } = useMutation(boardDetail);

    const getBoard = async () => {
        const data = {
            i_board: boardPage,
            boardType: "review",
        }
        await mutateAsync(data);
        setBoardList(data.result);
    }

    useEffect(() => {
        getBoard();
    }, [nav])

    return (
        isSuccess !== true
            ? <Loading />
            : <>
                <ul className="all">
                    {
                        boardList.list.map((a, i) => {
                            return (
                                <li key={i}>
                                    <div className="content">
                                        <div className="star">★★★★★</div>
                                        <h3>{a.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: a.title }}></p>
                                        <button>더보기</button>
                                        <div className="comments">
                                            댓글 [1]
                                        </div>
                                    </div>
                                    <div className="reviewInfo">
                                        <ul>
                                            <li><span>상품명</span> 상품이름입니다.</li>
                                            <li><span>작성자</span>{a.user_id}</li>
                                            <li><span>작성일</span> {a.create_date}</li>
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                    <li>
                        <div className="content">
                            <div className="star">★★★★★</div>
                            <h3>제목입니다제목입니다제목입니다제목입니다.</h3>
                            <p>
                                내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                            </p>
                            <button>더보기</button>
                            <div className="comments">
                                댓글 [1]
                            </div>
                        </div>
                        <div className="reviewInfo">
                            <ul>
                                <li><span>상품명</span> 상품이름입니다.</li>
                                <li><span>작성자</span> lif****</li>
                                <li><span>작성일</span> 2022/04/22</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                            <div className="star">★★★★★</div>
                            <h3>제목입니다제목입니다제목입니다제목입니다.</h3>
                            <p>
                                내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                                내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                                내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                                내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                                내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
                            </p>
                            <button>더보기</button>
                            <div className="imageView">
                                <img src={noImg} alt="" />
                                <img src={noImg} alt="" />
                            </div>
                            <div className="comments">
                                댓글 [1]
                            </div>
                        </div>
                        <div className="reviewInfo">
                            <ul>
                                <li><span>상품명</span> 상품이름입니다.</li>
                                <li><span>작성자</span> lif****</li>
                                <li><span>작성일</span> 2022/04/22</li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div className="pagention">
                    <a href="#"><i className="fa-solid fa-angles-left"></i></a>
                    <a href="#"><i className="fa-solid fa-angle-left"></i></a>
                    <span>1</span>
                    <a href="#"><i className="fa-solid fa-angle-right"></i></a>
                    <a href="#"><i className="fa-solid fa-angles-right"></i></a>
                </div>
            </>
    );
};

export default ReviewAll;
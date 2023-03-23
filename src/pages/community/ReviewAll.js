import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMutation } from 'react-query';

import { boardRead } from 'utils/axios';

import noImg from "assets/images/noImg.gif";
import Loading from 'components/loding/Loading';

const ReviewAll = () => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { boardPage } = useParams();
    const [boardList, setBoardList] = useState();
    const { mutateAsync, isSuccess } = useMutation(boardRead);

    const getBoard = async () => {
        const data = {}
        if (searchParams.get("search") === null) {
            data.boardPage = boardPage;
            data.boardType = "review";
        } else {
            data.boardPage = boardPage;
            data.boardType = "review";
            data.search = searchParams.get("search");
        }
        await mutateAsync(data);
        setBoardList(data.result);
    }

    useEffect(() => {
        getBoard();
        console.log(boardList);
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
                                        <p dangerouslySetInnerHTML={{ __html: a.content }}></p>
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
                                            <li><span>작성자</span>{a.user_id}</li>
                                            <li><span>작성일</span> {a.create_date}</li>
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
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
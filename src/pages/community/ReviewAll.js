import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMutation } from 'react-query';

import { boardRead } from 'utils/axios';

import noImg from "assets/images/noImg.gif";
import Loading from 'components/loding/Loading';

import {ReactComponent as Star} from 'assets/images/star.svg';

const ReviewAll = () => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { boardPage } = useParams();
    const [boardList, setBoardList] = useState();
    const [more, setMore] = useState();
    const { mutateAsync, isSuccess } = useMutation(boardRead);
    const [star,setStar] = useState([]);

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
                                        <div className="star">
                                            {
                                                Array(a.grade).fill(
                                                    <Star fill='#ff7f23'></Star>
                                                )
                                            }
                                        </div>
                                        <h3>{a.title}</h3>
                                        <p style={i === more ? { maxHeight: "unset" } : { maxHeight: "40px" }} dangerouslySetInnerHTML={{ __html: a.content }}></p>
                                        <button onClick={() => {
                                            i === more
                                                ? setMore(null)
                                                : setMore(i)
                                        }}>더보기</button>
                                        <div className="imageView">
                                            {
                                                a.firstImg !== ""
                                                    ? <img src={a.firstImg} alt="" />
                                                    : null
                                            }
                                            {
                                                a.secondImg !== ""
                                                    ? <img src={a.secondImg} alt="" />
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    <div className="reviewInfo">
                                        <ul>
                                            <li><span>상품명</span>{a.goods_nm}</li>
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
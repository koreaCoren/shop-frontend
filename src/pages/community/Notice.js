import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { boardRead } from 'utils/axios';
import Pageing from 'components/board/Pageing';

import * as Style from "assets/styleComponent/community/notice";
import Loading from 'components/loding/Loading';

const Notice = () => {
    const { boardPage } = useParams();
    const nav = useNavigate();
    const [boardList, setBoardList] = useState();
    const [search, setSearch] = useState("");
    const result = useQuery("boardRead", boardRead);

    const searching = () => {
        let arr = [];

        if (search.length <= 1) {
            alert("2글자 이상 입력해주세요");
            return;
        }

        result.data.forEach((el) => {
            if (el.del !== "Y") {
                if (el.title.indexOf(search) !== -1) {
                    arr.push(el);
                }
            }
        });

        if (arr.length === 0) {
            alert("검색된 게시글이 없습니다");
            return;
        }

        setBoardList(arr);
    }

    const getBoard = () => {
        let arr = [];
        result.data.forEach((el) => {
            if (el.del !== "Y") {
                arr.push(el);
            }
        })
        setBoardList(arr);
    }

    useEffect(() => {
        console.log(result);
        if (result.isLoading !== true) {
            getBoard();
        }
    }, [result.isLoading])

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "search":
                setSearch(value);
                break;

            default:
                break;
        }
    }

    return (
        <Style.Contaienr>
            <div className="wrap">
                <h2>공지사항</h2>

                <div className="flexBox">
                    <div className="search">
                        <input type="text" placeholder='제목검색' name='search' value={search} onChange={onChange} />
                        <i className="fa-solid fa-magnifying-glass" onClick={searching}></i>
                    </div>
                    <Link className='write' to={"/community/write"}>글쓰기</Link>
                </div>
                <Style.Board>
                    <ul className='title'>
                        <li>번호</li>
                        <li>제목</li>
                        <li>글쓴이</li>
                        <li>작성일</li>
                        <li>조회수</li>
                    </ul>
                    {
                        boardList?.length > 0
                            ? boardList?.slice((boardPage - 1) * 10, (boardPage - 1) * 10 + 10).map((a, i) => {
                                return (
                                    <ul key={i} className='list'>
                                        <li>{a.i_board}</li>
                                        <li><Link to={`/community/noticeDetail/${a.i_board}`}>{a.title}</Link></li>
                                        <li>{a.user_id}</li>
                                        <li>{a.create_date}</li>
                                        <li>{a.view_up}</li>
                                    </ul>
                                )
                            })
                            : <p>등록된 게시글이 없습니다</p>
                    }
                </Style.Board>

                <Pageing count={10} boardPage={boardPage} boardLength={boardList?.length} url={"/community/notice"} />
            </div>
            {result.isLoading && <Loading />}
        </Style.Contaienr>
    );
};

export default Notice;
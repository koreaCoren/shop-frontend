import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Pageing from 'components/board/Pageing';

import * as Style from "assets/styleComponent/community/notice";

const Notice = () => {
    const { boardPage } = useParams();
    const [boardList, setBoardList] = useState([
        {
            number: "1",
            title: "제목",
            user_id: "pkd",
            date: "2023/02/08",
            views: "123123",
        },
    ]);
    const [search, setSearch] = useState("");

    const searching = () => {
        let arr = [];
        boardList.forEach((el) => {
            if (search === el.title) {
                arr.push(el);
            }
        });
        setBoardList(arr);
    }

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
                        boardList.map((a, i) => {
                            return (
                                <ul key={i} className='list'>
                                    <li>{a.number}</li>
                                    <li><Link to={`/community/noticeDetail/${a.number}`}>{a.title}</Link></li>
                                    <li>{a.user_id}</li>
                                    <li>{a.date}</li>
                                    <li>{a.views}</li>
                                </ul>
                            )
                        })
                    }
                </Style.Board>

                <Pageing count={10} boardPage={boardPage} boardLength={boardList.length} url={"/community/notice"} />
            </div>
        </Style.Contaienr>
    );
};

export default Notice;
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { boardRead } from 'utils/axios';
import Pageing from 'components/board/Pageing';

import * as Style from "assets/styleComponent/community/notice";

const Notice = () => {
    const { boardPage } = useParams();
    const [boardList, setBoardList] = useState();
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

    const result = useQuery("boardRead", boardRead);
    useEffect(() => {
        console.log(result);
        setBoardList(result.data);
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
                        boardList?.map((a, i) => {
                            return (
                                <ul key={i} className='list'>
                                    <li>{i + 1}</li>
                                    <li><Link to={`/community/noticeDetail/${a.number}`}>{a.title}</Link></li>
                                    <li>{a.user_id}</li>
                                    <li>{a.create_date}</li>
                                    <li>{a.view_up}</li>
                                </ul>
                            )
                        })
                    }
                </Style.Board>

                <Pageing count={10} boardPage={boardPage} boardLength={boardList?.length} url={"/community/notice"} />
            </div>
        </Style.Contaienr>
    );
};

export default Notice;
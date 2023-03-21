import React, { useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';

import { boardRead } from 'utils/axios';
import adminCheck from 'utils/adminCheck'
import Pageing from 'components/board/Pageing';

import * as Style from "assets/styleComponent/community/notice";
import Loading from 'components/loding/Loading';
import Searching from 'components/board/Searching';

const Notice = () => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { boardPage } = useParams();
    const [boardList, setBoardList] = useState();
    const { mutateAsync, isSuccess } = useMutation(boardRead);

    const getBoard = async () => {
        const data = {}
        if (searchParams.get("search") === null) {
            data.boardPage = boardPage;
            data.boardType = "notice";
        } else {
            data.boardPage = boardPage;
            data.boardType = "notice";
            data.search = searchParams.get("search");
        }
        await mutateAsync(data);
        setBoardList(data.result);
    }

    useEffect(() => {
        getBoard();
    }, [nav, searchParams.get("search")])

    return (
        isSuccess !== true
            ? <Loading />
            : <Style.Contaienr>
                <div className="wrap">
                    <h2>공지사항</h2>

                    <div className="flexBox">
                        <Searching board={boardList.list} setBoardList={setBoardList} searchType={"notice"} />
                        {adminCheck(false) && <Link className='write' to={"/community/write"}>글쓰기</Link>}

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
                            boardList.list.length > 0
                                ? boardList.list.map((a, i) => {
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

                    <Pageing count={10} boardPage={boardPage} boardLength={boardList?.count.page_count} url={"/community/notice"} />
                </div>
            </Style.Contaienr>
    );
};

export default Notice;
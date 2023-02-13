import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import Loading from 'components/loding/Loading';
import { boardRead, boardView } from 'utils/axios';

import * as Style from "assets/styleComponent/community/detail";

const NoticeDetail = () => {
    const { boardPage } = useParams();
    const result = useQuery("boardRead", boardRead);
    const { mutateAsync } = useMutation(boardView);

    useEffect(() => {
        const data = {
            type: "notice",
            i_board: result.data[result.data[boardPage - 1].i_board - 1].i_board,
        }
        mutateAsync(data);
    }, [])

    return (
        result.isLoading
            ? <Loading />
            : <Style.Detail>
                <div className="wrap">
                    <h2>공지사항</h2>

                    <div className="title">
                        <ul>
                            <li>
                                <div>제목</div>
                                <div>{result.data[result.data[boardPage - 1].i_board - 1].title}</div>
                            </li>
                            <li>
                                <div>작성자</div>
                                <div>{result.data[result.data[boardPage - 1].i_board - 1].user_id}</div>
                            </li>
                        </ul>
                        <div>
                            <p><b>작성일</b>{result.data[result.data[boardPage - 1].i_board - 1].create_date}</p>
                            <p><b>조회수</b>{result.data[result.data[boardPage - 1].i_board - 1].view_up}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p dangerouslySetInnerHTML={{ __html: result.data[result.data[boardPage - 1].i_board - 1].content }}></p>
                    </div>

                    <Link to="/community/notice/1" className="more">목록</Link>

                    <div className="differentBoard">
                        <ul>
                            <li>
                                <div>다음글</div>
                                <div>
                                    <Link to={
                                        result.data[result.data[Number(boardPage) - 1].i_board - 2] === undefined
                                            ? null
                                            : `/community/noticeDetail/${Number(boardPage)}`
                                    }>
                                        {
                                            result.data[result.data[Number(boardPage) - 1].i_board - 2] === undefined
                                                ? "다음글이없습니다."
                                                : result.data[result.data[Number(boardPage) - 1].i_board - 2].title
                                        }
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>이전글</div>
                                <div>
                                    <Link to={
                                        result.data[Number(boardPage - 1)] === undefined
                                            ? null
                                            : `/community/noticeDetail/${Number(boardPage) - 1}`
                                    }>
                                        {
                                            result.data[result.data[Number(boardPage) - 1].i_board] === undefined
                                                ? "이전글이없습니다."
                                                : result.data[result.data[Number(boardPage) - 1].i_board].title
                                        }
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Style.Detail>
    );
};

export default NoticeDetail;
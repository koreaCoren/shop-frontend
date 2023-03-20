import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import Loading from 'components/loding/Loading';
import { boardDelete, boardDetail, boardRead, boardView } from 'utils/axios';
import adminCheck from 'utils/adminCheck';

import * as Style from "assets/styleComponent/community/detail";

const NoticeDetail = () => {
    const { boardPage } = useParams();
    const nav = useNavigate();
    const [readDetail, setReadDetail] = useState();
    const result = useMutation(boardDetail);
    const view = useMutation(boardView);
    const deleted = useMutation(boardDelete);

    const read = async () => {
        const data = {
            i_board: boardPage,
            boardType: "notice",
        }
        await result.mutateAsync(data);
        setReadDetail(data.result);
        viewUp(data.result);
    }

    const boardDel = async () => {
        const ok = window.confirm("정말로 삭제하시겠습니까?");
        if (ok) {
            const data = {
                type: "notice",
                i_board: readDetail.i_board,
            }
            await deleted.mutateAsync(data);
        }
    }

    const viewUp = async (Iboard) => {
        const data = {
            type: "notice",
            i_board: Iboard.i_board,
        }
        await view.mutateAsync(data);
    }

    useEffect(() => {
        read();
    }, [nav])

    return (
        result.isSuccess !== true
            ? <Loading />
            : <Style.Detail>
                <div className="wrap">
                    <h2>공지사항</h2>

                    <div className="title">
                        <ul>
                            <li>
                                <div>제목</div>
                                <div>{readDetail.title}</div>
                            </li>
                            <li>
                                <div>작성자</div>
                                <div>{readDetail.user_id}</div>
                            </li>
                        </ul>
                        <div>
                            <p><b>작성일</b>{readDetail.create_date}</p>
                            <p><b>조회수</b>{readDetail.view_up}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p dangerouslySetInnerHTML={{ __html: readDetail.content }}></p>
                    </div>

                    <Link to="/community/notice/1" className="more">목록</Link>
                    {adminCheck(false) && <button onClick={boardDel}>삭제</button>}

                    <div className="differentBoard">
                        <ul>
                            <li>
                                <div>다음글</div>
                                <div>
                                    <Link to={
                                        readDetail.next.length <= 0
                                            ? null
                                            : `/community/noticeDetail/${Number(readDetail.next[0].i_board)}`
                                    }>
                                        {
                                            readDetail.next.length <= 0
                                                ? "다음글이없습니다."
                                                : readDetail.next[0].title
                                        }
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>이전글</div>
                                <div>
                                    <Link to={
                                        readDetail.pre.length <= 0
                                            ? null
                                            : `/community/noticeDetail/${Number(readDetail.pre[0].i_board)}`
                                    }>
                                        {
                                            readDetail.pre.length <= 0
                                                ? "이전글이없습니다."
                                                : readDetail.pre[0].title
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
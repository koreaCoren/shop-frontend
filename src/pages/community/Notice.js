import React from 'react';
import { useParams } from 'react-router-dom';

import Pageing from 'components/board/Pageing';

import * as Style from "assets/styleComponent/community/notice";

const Notice = () => {
    const { boardPage } = useParams();
    return (
        <Style.Contaienr>
            <div className="wrap">
                <h2>공지사항</h2>

                <Style.Board>
                    <ul className='title'>
                        <li>번호</li>
                        <li>제목</li>
                        <li>글쓴이</li>
                        <li>작성일</li>
                        <li>조회수</li>
                    </ul>

                    <ul className='list'>
                        <li>1</li>
                        <li>제목</li>
                        <li>글쓴이</li>
                        <li>2023/02/08</li>
                        <li>123</li>
                    </ul>
                </Style.Board>

                <Pageing count={10} boardPage={boardPage} boardLength={10} url={"/community/notice"} />
            </div>
        </Style.Contaienr>
    );
};

export default Notice;
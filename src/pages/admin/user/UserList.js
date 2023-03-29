import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import { user, userDeleted } from 'utils/axios';
import { formatPhoneNumber } from 'utils/setPhoneNumber';
import Searching from 'components/board/Searching';
import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';
import Pageing from 'components/board/Pageing';

import * as Style from 'assets/styleComponent/admin/user/user';
import * as Common from 'assets/styleComponent/admin/common';

const UserList = () => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { boardPage } = useParams();
    const [board, setBoard] = useState();
    const users = useMutation(user);
    const deleted = useMutation(userDeleted);

    const userDelete = async (index) => {
        const data = {
            user_id: board[index].user_id,
        }
        await deleted.mutateAsync(data);
    }

    const getUser = async () => {
        const data = {}
        if (searchParams.get("search") === null) {
            data.boardPage = boardPage;
            data.boardType = "user";
        } else {
            data.boardPage = boardPage;
            data.boardType = "user";
            data.search = searchParams.get("search");
        }
        await users.mutateAsync(data);
        setBoard(data.result);
    }

    useEffect(() => {
        getUser();
    }, [nav, searchParams.get("search")])

    return (
        users.isSuccess !== true
            ? <Loading />
            : <>
                <Top title={"회원 관리"} isButton={false} />
                <Common.Padding>
                    <Common.Container>
                        <Searching board={board.list} setBoardList={setBoard} searchType={"user"} />
                    </Common.Container>
                    {
                        board.list.map((a, i) => {
                            return (
                                <Common.Container key={i} style={{ textAlign: "center" }}>
                                    <Style.Div>
                                        <ul>
                                            <li>아이디 : {a.user_id}</li>
                                            <li>이메일 : {a.user_email}</li>
                                            <li>이름 : {a.user_nm}</li>
                                            <li>연락처 : {formatPhoneNumber(a.user_tel)}</li>
                                            <li>주소 : {a.user_addr}</li>
                                            <li>가입일자 : {a.user_insdate}</li>
                                        </ul>
                                    </Style.Div>
                                    <Style.DeleteButton onClick={() => { userDelete(i) }}>회원 삭제</Style.DeleteButton>
                                </Common.Container>
                            )
                        })
                    }
                </Common.Padding>
                <Pageing boardPage={boardPage} boardLength={board.count.page_count} url={"/admin/user"} />
            </>
    );
};

export default UserList;
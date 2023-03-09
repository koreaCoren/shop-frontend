import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import { user, userDeleted } from 'utils/axios';
import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';
import Pageing from 'components/board/Pageing';

import * as Style from 'assets/styleComponent/admin/user/user';
import * as Common from 'assets/styleComponent/admin/common';

const UserList = () => {
    const nav = useNavigate();
    const { boardPage } = useParams();
    const [board, setBoard] = useState();
    const [boardCount, setBoardCount] = useState(5);
    const result = useQuery("userList", user);
    const { mutateAsync } = useMutation(userDeleted);

    const userDelete = async (index) => {
        const data = {
            user_id: board[index].user_id,
        }
        await mutateAsync(data);
    }

    useEffect(() => {
        const reverseArr = result.data;
        setBoard(reverseArr?.slice((boardPage - 1) * boardCount, (boardPage - 1) * boardCount + boardCount));
        console.log(result);
    }, [result.isLoading, nav])

    return (
        result.isLoading === true
            ? <Loading />
            : <>
                <Top title={"회원 관리"} isButton={false} />
                <Common.Padding>
                    {
                        board?.map((a, i) => {
                            return (
                                <Common.Container key={i} style={{ textAlign: "center" }}>
                                    <Style.Div>
                                        <ul>
                                            <li>아이디 : {a.user_id}</li>
                                            <li>이메일 : {a.user_email}</li>
                                            <li>이름 : {a.user_nm}</li>
                                            <li>연락처 : {a.user_tel}</li>
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
                <Pageing count={boardCount} boardPage={boardPage} boardLength={result.data?.length} url={"/admin/user"} />
            </>
    );
};

export default UserList;
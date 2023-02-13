import React, { useState } from 'react';
import { useMutation } from 'react-query';

import LoginInput from 'components/input/Input';
import TextEditor from 'components/editor/Editor';
import { boardWrite, tokenCheck } from 'utils/axios';

import * as Style from "assets/styleComponent/community/write";

const NoticeWrite = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageCode, setImageCode] = useState([]);

    const write = useMutation(boardWrite);
    const token = useMutation(tokenCheck);

    const onSubmit = async (e) => {
        e.preventDefault();

        const tokenData = {
            token: sessionStorage.getItem("token"),
            userId: sessionStorage.getItem("userId"),
        }
        await token.mutateAsync(tokenData);

        if (sessionStorage.getItem("userId") !== "admin" && sessionStorage.getItem("userId") !== "pkd") {
            alert("관리자만 작성 할 수 있습니다.");
            return;
        }

        //상품코드 연도뒷자리2개/월/일/시간/분/랜덤5자리
        const date = new Date();
        const yy = date.getFullYear().toString().substring(2);
        const mm = (("00" + (date.getMonth() + 1)).slice(-2));
        const dd = (("00" + date.getDate()).slice(-2));
        const time = (("00" + date.getHours().toString()).slice(-2)) + (("00" + date.getMinutes().toString()).slice(-2));
        const serialNumber = Math.floor((Math.random() * (99999 - 10000) + 10000));
        const code = yy + mm + dd + time + serialNumber;

        let arr = imageCode;
        for (let i = 0; i < imageCode.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (content.indexOf(imageCode[i]) === -1) {
                    if (arr[j] === imageCode[i]) {
                        arr.splice(j, 1);
                        j--;
                    }
                }
                setImageCode(arr);
            }
        }

        const data = {
            user_id: sessionStorage.getItem("userId"),
            title: title,
            content: content,
            date: `${yy}/${mm}/${dd}`,
            image_code: imageCode,
            code: code,
            type: "notice",
        }

        await write.mutateAsync(data);
    }

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "title":
                setTitle(value);
                break;
            default:
                break;
        }
    };

    return (
        <Style.Write>
            <h2>공지사항 글쓰기</h2>
            <form onSubmit={onSubmit}>
                <LoginInput type="text" name="title" value={title} placeholder="제목" onChange={onChange}></LoginInput>
                <TextEditor setContent={setContent} setImageCode={setImageCode} width="" type="notice"></TextEditor>
                <Style.Button>
                    <button>글쓰기</button>
                </Style.Button>
            </form>
        </Style.Write>
    );
};

export default NoticeWrite;
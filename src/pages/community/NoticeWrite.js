import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { addBoard } from "api/board.js"

import adminCheck from 'utils/adminCheck';
import createCode from 'utils/createCode';

import LoginInput from 'components/input/Input';
import TextEditor from 'components/editor/Editor';

import * as Style from "assets/styleComponent/community/write";

const NoticeWrite = () => {
    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageCode, setImageCode] = useState([]);

    useEffect(() => {
        if (adminCheck(true) === false) {
            nav("/");
        }
    }, [])

    const onSubmit = async (e) => {
        if (adminCheck(true) === false) {
            nav("/");
        }

        e.preventDefault();

        const date = new Date();
        const yy = date.getFullYear().toString().substring(2);
        const mm = (("00" + (date.getMonth() + 1)).slice(-2));
        const dd = (("00" + date.getDate()).slice(-2));

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
            code: createCode(),
            type: "notice",
        }

        addBoard(data);
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
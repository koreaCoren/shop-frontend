import React, { useState } from 'react';
import { useMutation } from 'react-query';

import LoginInput from 'components/input/Input';
import TextEditor from 'components/editor/Editor';
import { boardWrite } from 'utils/axios';

import * as Style from "assets/styleComponent/community/write";

const NoticeWrite = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageCode, setImageCode] = useState([]);

    const { mutateAsync } = useMutation(boardWrite);

    const onSubmit = async (e) => {
        e.preventDefault();

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
            title: title,
            content: content,
            imageCode: imageCode
        }

        await mutateAsync(data);
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
                <TextEditor api="http://192.168.0.86/shop-backend/backend/board/ins_board" setContent={setContent} setImageCode={setImageCode} width=""></TextEditor>
                <Style.Button>
                    <button>글쓰기</button>
                </Style.Button>
            </form>
        </Style.Write>
    );
};

export default NoticeWrite;
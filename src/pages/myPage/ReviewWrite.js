import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

import { boardWrite, tokenCheck } from 'utils/axios';
import createCode from 'utils/createCode';
import SubTitle from 'components/myPage/SubTitle';
import LoginInput from 'components/input/Input';
import TextEditor from 'components/editor/Editor';

import * as Common from "assets/styleComponent/myPage/myPage"

const ReviewWrite = () => {
    const { productCode, orderCode } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageCode, setImageCode] = useState([]);

    const write = useMutation(boardWrite);
    const token = useMutation(tokenCheck);

    const onSubmit = async (e) => {
        e.preventDefault();
        const date = new Date();
        const yy = date.getFullYear().toString().substring(2);
        const mm = (("00" + (date.getMonth() + 1)).slice(-2));
        const dd = (("00" + date.getDate()).slice(-2));

        await token.mutateAsync();

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
            order_code: orderCode,
            goods_code: productCode,
            type: "review",
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
        <Common.InDiv>
            <SubTitle h2={"상품후기 작성"} h3={"구매하신 상품후기를 작성 하실 수 있습니다."} clickEvent={null} clickText={null} />

            <Common.ReviewForm onSubmit={onSubmit}>
                <LoginInput type="text" name="title" value={title} placeholder="제목" onChange={onChange}></LoginInput>
                <TextEditor setContent={setContent} setImageCode={setImageCode} width="" type="review"></TextEditor>
                <Common.Button>
                    <button>글쓰기</button>
                </Common.Button>
            </Common.ReviewForm>
        </Common.InDiv>
    );
};

export default ReviewWrite;
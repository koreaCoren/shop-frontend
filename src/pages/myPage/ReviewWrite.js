import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

import { boardWrite, tokenCheck } from 'utils/axios';
import createCode from 'utils/createCode';
import SubTitle from 'components/myPage/SubTitle';
import LoginInput from 'components/input/Input';

import * as Common from "assets/styleComponent/myPage/myPage"
import ImageUpload from 'components/input/ImageUpload';

const ReviewWrite = () => {
    const { productCode, orderCode } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [firstImage, setFirstImage] = useState("");
    const [secondImage, setSecondImage] = useState("");

    const write = useMutation(boardWrite);
    const token = useMutation(tokenCheck);

    const onSubmit = async (e) => {
        e.preventDefault();
        const date = new Date();
        const yy = date.getFullYear().toString().substring(2);
        const mm = (("00" + (date.getMonth() + 1)).slice(-2));
        const dd = (("00" + date.getDate()).slice(-2));

        await token.mutateAsync();

        const data = {
            user_id: sessionStorage.getItem("userId"),
            title: title,
            content: content.replace(/\r?\n/g, "<br>"),
            firstImage: firstImage,
            secondImage: secondImage,
            date: `${yy}/${mm}/${dd}`,
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
            case "content":
                setContent(value);
                break;
            default:
                break;
        }
    };

    return (
        <Common.InDiv>
            <SubTitle h2={"상품후기 작성"} h3={"구매하신 상품후기를 작성 하실 수 있습니다."} clickEvent={null} clickText={null} />

            <Common.ReviewForm onSubmit={onSubmit}>
                <LoginInput maxLength={100} type="text" name="title" value={title} placeholder="제목 최대 100자" onChange={onChange}></LoginInput>
                <textarea maxLength={1000} name="content" value={content} onChange={onChange} placeholder="내용 최대 1000자"></textarea>
                <ImageUpload setImageData={setFirstImage} />
                <ImageUpload setImageData={setSecondImage} />
                <Common.Button>
                    <button>글쓰기</button>
                </Common.Button>
            </Common.ReviewForm>
        </Common.InDiv>
    );
};

export default ReviewWrite;
import React from 'react';
import styled from "styled-components";

const Label = styled.label`
    display: flex;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 1px solid #ddd;
    span{
        display: inline-block;
        width: 150px;
    }
    img{
        display: block;
        margin-top: 10px;
    }
`;

const ProductInput = ({ title, setImageData, imageData }) => {
    const onFileChange = (event) => {
        const { target: { files }, } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setImageData(result);
        };
        reader.readAsDataURL(theFile);
    }
    return (
        <Label>
            <span>{title}</span>
            <div>
                <input type="file" accept="image/*" onChange={onFileChange} />
                <img src={imageData} />
            </div>
        </Label>
    );
};

export default ProductInput;
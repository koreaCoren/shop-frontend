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
    textarea{
        border: 1px solid #ccc;
        border-radius: 5px;
        line-height: 30px;
        padding: 0px 10px;
        width: 80%;
        height: 300px;
        resize: none;;
    }
`;

const Textarea = ({ title, name, placeholder, onChange }) => {
    return (
        <Label>
            <span>{title}</span>
            <textarea name={name} placeholder={placeholder} onChange={onChange} />
        </Label>
    );
};

export default Textarea;
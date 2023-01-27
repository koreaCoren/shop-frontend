import React from 'react';
import styled from "styled-components";

const LoginInput = ({ type, name, placeholder, onChange }) => {
    return (
        <Input type={type} name={name} placeholder={placeholder} onChange={onChange}></Input>
    );
};

const Input = styled.input`
    border: 1px solid #ddd;
    padding: 5px;
`;

export default LoginInput;
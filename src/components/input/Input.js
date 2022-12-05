import React from 'react';
import styled from "styled-components";

const Input = styled.input`

`;

const LoginInput = ({ type, name, placeholder, onChange }) => {
    return (
        <Input type={type} name={name} placeholder={placeholder} onChange={onChange}></Input>
    );
};

export default LoginInput;
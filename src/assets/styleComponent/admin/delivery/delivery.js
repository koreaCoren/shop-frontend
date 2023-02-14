import styled from "styled-components";

export const defaultUl = styled.ul`
    li{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    li .select{
        position: relative;
    }

    li .select select{
        width: 200px;
        line-height: 25px;
        padding: 0px 5px;
        border: 1px solid #aaa;
        border-radius: 5px;
    }

    li .select i{
        position: absolute;
        top: 40%;
        right: 5px;
        transform: translateY(-50%);
        color: #aaa;
    }

    li button{
        padding: 0px 15px;
        border-radius: 5px;
        line-height: 25px;
        color: #fff;
        background-color: #1a6dff;
        cursor: pointer;
    }
`

export const H2 = styled.h2`
    font-size: 18px;
    border-bottom: 1px solid #eee;
    padding: 10px 5px;
`
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Padding = styled.div`
    padding: 50px 0px;
`

export const Info = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    grid-gap: 50px;
`

export const ImageInfo = styled.div`
    width: 100%;

    img {
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 50px;
        width: 100%;
        height: 450px;
    }

    ul {
        display: flex;
        margin-top: 10px;
        gap: 10px;
    }

    ul li {
        max-width: 80px;
        border: 1px solid #ccc;
        padding: 10px;
        cursor: pointer;
    }

    ul li img {
        width: 100%;
    }

    button {
        width: 100%;
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        padding: 15px 0px;
        cursor: pointer;
        color: #aaa;
        font-weight: bold;
        font-family: 'Pretendard-Bold';
        margin-top: 10px;
    }

    button i {
        margin-right: 5px;
    }
`

export const Content = styled.div`
    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 16px;
        color: #ccc;
        line-height: 1.2;
        margin-bottom: 20px;
    }

    .info p {
        color: #ccc;
        font-size: 18px;
        margin: 20px 0px 50px;
        font-weight: bold;
    }
`

export const DetailInfo = styled.ul`
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 20px 0px;

     li {
        display: grid;
        grid-template-columns: 150px 1fr;
    }

     li:not(:last-child) {
        margin-bottom: 20px;
    }

     li b {
        font-size: 20px;
        color: #ccc;
    }

     li span {
        font-size: 20px;
        font-weight: bold;
    }

     li span.pay {
        color: #d1b064;
    }
`

export const Quantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    padding: 30px 20px;
    font-weight: bold;

     .name {
        font-size: 16px;
    }

     .money {
        font-size: 16px;
    }

`

export const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 30px 0px;

    span {
        font-size: 22px;
    }

    span b {
        font-size: 22px;
    }

    >b {
        font-size: 28px;
        margin: 0px 10px;
    }
`

export const ButtonBox = styled.div`
    display: flex;
    gap: 5px;
`

export const Button = styled(Link)`
    flex: 1;
    text-align: center;
    border: 1px solid #ccc;
    font-weight: bold;
    font-size: 20px;
    padding: 20px 0px;
    color: ${props => props.color !== "black" ? "#333" : "#fff"};
    background-color: ${props => props.color !== "black" ? "#fff" : "#333"};
`
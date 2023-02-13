import styled from "styled-components";

export const Contaienr = styled.div`
    padding: 50px 0px;

    h2{
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 50px;
    }

    .search{
        position: relative;
    }

    .search input{
        border: 1px solid #aaa;
        padding: 5px;
        border-radius: 5px;
    }

    .search i{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #aaa;
        cursor: pointer;
    }

    .write{
        padding: 5px 20px;
        border-radius: 5px;
        background-color: #444;
        color: #fff;
        font-size: 16px;
    }
`

export const Board = styled.div`
    margin-top: 10px;

    ul{
        display: grid;
        grid-template-columns: 1fr 70% 1fr 1fr 1fr;
    }

    .title{
        border-top: 2px solid #aaa;
        border-bottom: 2px solid #aaa;
    }

    .title li{
        line-height: 40px;
        text-align: center;
    }

    .list:not(:nth-child(1)){
        border-bottom: 1px solid #aaa;
    }

    .list li:not(:nth-child(2)){
        text-align: center;
    }

    .list li,.list a{
        line-height: 40px;
    }

    p{
        text-align: center;
        line-height: 200px;
        border-bottom: 1px solid #aaa;
    }
`
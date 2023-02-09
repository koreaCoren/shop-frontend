import styled from "styled-components";

export const Contaienr = styled.div`
    padding: 50px 0px;

    h2{
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 50px;
    }
`

export const Board = styled.div`
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
`
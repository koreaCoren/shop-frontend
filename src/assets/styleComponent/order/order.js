import styled from "styled-components";

export const Order = styled.div`
    padding: 50px 0px;
`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 26px;
`

export const Purchase = styled.div`
    border: 1px solid #ddd;
    margin: 15px 0px;
    ul{
        display: grid;
        grid-template-columns: 70% 1fr 1fr;
    }

    ul.title li{
        text-align: center;
    }

    ul.productInfo li{}
`
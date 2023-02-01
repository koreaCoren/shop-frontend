import styled from "styled-components";

export const Basket = styled.div`
    padding: 50px 0px;
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 26px;
`

export const SubTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
`

export const Purchase = styled.div`
    border: 1px solid #ddd;
    margin: 15px 0px;
    ul{
        display: grid;
        grid-template-columns: 50% 1fr 1fr 1fr 1fr;
    }

    ul.title{
        border-bottom: 1px solid #ddd;
        align-items: center;
        padding: 5px 15px;
    }

    ul.title li{
        text-align: center;
    }

    ul.productInfo{
        padding: 15px;
    }

    ul.productInfo li{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    ul.productInfo li:not(:first-child){
        justify-content: center;
    }

    ul.productInfo li img{
        width: 150px;
        height: 110px;
        border-radius: 15px;
    }
    ul.productInfo li .content{}
`
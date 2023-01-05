import styled from "styled-components";

export const ProductList = styled.div`
    padding: 50px 0px;
    h2{
        text-align: center;
        font-size: 30px;
        margin-bottom: 50px;
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
    }

    ul li{
        text-align: center;
    }

    ul li a{
        width: 100%;
    }

    ul li img{
        width: 100%;
        height: 250px;
    }

    ul li h3{
        font-size: 24px;
        margin: 5px 0px;
    }
    ul li h4{
        font-size: 16px;
    }
`

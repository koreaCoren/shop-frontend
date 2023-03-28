import styled from "styled-components";

export const Products = styled.div`
    padding: 50px 0px;
    h2{
        text-align: center;
        font-size: 30px;
        margin-bottom: 50px;
    }

    .banner{
        margin-bottom: 20px;
    }
    
    .banner img{
        width: 100%;
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
    @media screen and (max-width: 850px){
        ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 15px;
        }
    }
    @media screen and (max-width: 600px){
        ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        }
    }
    @media screen and (max-width: 450px){
        ul{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
        }
    }
`



export const Select = styled.label`
    position: relative;
    select{
        border: 1px solid #aaa;
        width: 250px;
        border-radius: 5px;
        line-height: 26px;
        padding: 0px 10px;
        color: #757575;
    }
    i{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-70%);
        color: #757575;
    }
    @media screen and (max-width: 600px){
        select{
            width: 150px;
        }
    }
`;
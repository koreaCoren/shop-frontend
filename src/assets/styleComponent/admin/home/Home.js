import styled from "styled-components";

export const ChartGrid = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    grid-gap: 30px;
    height: 500px;
    > div > div > div > div > svg{
        width: 100% !important;
    }
`

export const BoardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    > div > div > div > div > svg{
        width: 100% !important;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    h3{
        font-size: 22px;
        font-weight: bold;
    }

    .selectBox{
        position: relative;
    }

    .selectBox select{
        border: 1px solid #aaa;
        padding: 5px 40px 5px 5px;
    }

    .selectBox i{
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
    }
`

export const Situation = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    li{
        flex: 1;
        width: 100%;
    }

    li > h3{
        font-size: 22px;
        margin-bottom: 15px;
        font-weight: bold;
    }

    li > div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    li > div > span{
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    
    li > div > span > h4,
    li > div > span > div{
        font-size: 18px;
    }
    
`
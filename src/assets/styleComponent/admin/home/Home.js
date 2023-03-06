import styled from "styled-components";

export const ChartGrid = styled.div`
    display: grid;
    grid-template-columns: 1000px 1fr;
    grid-gap: 30px;
    height: 500px;
`

export const BoardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
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
        font-size: 20px;
        margin-bottom: 20px;
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
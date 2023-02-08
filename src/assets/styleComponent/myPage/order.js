import styled from "styled-components";


export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    
    
    ul{
        display: flex;
        flex-direction: column;
        padding-top: 20px;

    }
    ul > li {
        line-height: 1.5;
        display: flex;
        justify-content: flex-start;
    }
    
    
`
export const SubTitle = styled.span`
width: 100px;
    font-size: 12px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    
`
export const MainTitle = styled.span`
    font-size: 18px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    
`
export const CodeTitle = styled.span`
    font-size: 22px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    padding: 20px 0;
    
`


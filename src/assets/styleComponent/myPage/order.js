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
    .botTitle{
        padding-top: 20px;
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



export const ListDiv = styled.div`
    display: flex;
    justify-content: space-between;    
    
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;

    }
    ul > li {
        line-height: 1.5;
        display: flex;
        justify-content: space-between;
    }
    ul > li > div {
        font-size: 16px;
    }
    ul > li > div > div {
        padding: 5px 0;
    }
    .botTitle{
        padding-top: 20px;
    }
    
    
`
import styled from "styled-components";

export const Contents = styled.div`
    
    color: rgb(51, 51, 51); 
    .flex60 {
        flex-basis: 60px;
    }
    .flex360 {
        flex-basis: 360px;
    }
    .flex120 {
        flex-basis: 120px;
    }
    .flex100 {
        flex-basis: 100px;
    }
`

export const Column = styled.div`

    display: flex;
    padding: 20px;    
    border-bottom: 1px solid black;
    text-align: center;
    line-height: 10px;
    font-weight: 500;       
    align-items: center;
    justify-content: space-between;        
    
`

export const Ctnt = styled.div`
    text-align: center;
    display: flex;
    padding: 20px;  
    align-items: center;
    justify-content: space-between;     
`

export const Shipping = styled.div`
    padding: 20px 0;
    form{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        width: 80%;
    }
    div{
        padding-bottom: 10px;
        display: grid;
        grid-template-columns: 0.5fr 4fr;
    }
    input[type=text]{
        border-radius: 5px;
        border: 1px solid gray;
    }
`

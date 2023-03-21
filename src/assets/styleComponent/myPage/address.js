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
    @media screen and (max-width: 450px){
     display   :none ;
    }
`

export const Ctnt = styled.div`
    text-align: center;
    display: flex;
    padding: 20px;  
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:450px){
        .flex60:nth-child(2){display:none};
        padding: 10px 0px;
    } 
`

export const Shipping = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    form{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        width: 80%;
    }
    form div{
        font-size: 16px;
        line-height: 1.7;
    }
    div:not(.btn, .daumPost){
        padding-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr 4fr;
    }
    input[type=text]{
        border-radius: 5px;
        border: 1px solid gray;
        height: 25px;
    }
    .btn{
        text-align: center;
    }
    .btn input[type=button]{
        background: black;
        color: white;
        padding: 5px 15px;
        border-radius: 5px;
    }
    
`

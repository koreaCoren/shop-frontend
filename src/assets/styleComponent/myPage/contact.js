import styled from "styled-components";

export const ChatContainer = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    .dayGroup{
        overflow-y: scroll;
        height: 100%;
        ::-webkit-scrollbar {
            width: 5px; 
        }
        ::-webkit-scrollbar-thumb {
            background: #333; 
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #eee;  
        }
    }
    ul{
        display: flex;
        flex-direction: column;
    }
    ul li{
        padding: 3px 10px;
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
    ul li p{
        padding: 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 3px #00000022;
        max-width: 60%;
        line-height: 1.2;
        text-align: left;
        img{
            max-width: 100%;
        }
    }
    ul li div{
        font-size: 12px;
        margin-top: 5px;
    }
    ul li.day{
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    ul li.day h2{
        font-size: 11px;
        background-color: #f7f7f7;
        padding: 10px;
        letter-spacing: 0.5px;
        border-radius: 5px;
    }
    ul li.right{
        align-items: end;        
        justify-content: end;
    }
    ul li.right p{
        background-color: #ffeb33;
        display: inline-block;
    }
    ul li.left{
        align-items: end;
        justify-content: start;
    }
    ul li.left p{
        background-color: #eee;
        display: inline-block;
        order: -1;
    }
    .send {
        position: relative;
    }
    .send textarea{
        width: 100%;
        border: 1px solid #ddd;
        height: 32px;
        border-radius: 5px;
        padding: 8px 5px;
    }
    .send button{
        position: absolute;
        right: 0px;
        top: 0px;
        line-height: 32px;
        padding: 0px 15px;
        background-color: #1a6dff;
        color: #fff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    }
`
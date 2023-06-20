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
    ul{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 5px; 
        }
        ::-webkit-scrollbar-thumb {
            background: #1a6dff; 
            border-radius: 10px;
        }::-webkit-scrollbar-track {
            background: #eee;  
        }
    }
    ul li.right{
        text-align: right;
    }
    ul li.right div{
        background-color: #ffeb33;
        display: inline-block;
    }
    ul li.left{
        text-align: left;
    }
    ul li.left div{
        background-color: #eee;
        display: inline-block;
    }
    ul li{
        padding: 3px 10px;
    }
    ul li div{
        padding: 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 3px #00000022;
        max-width: 40%;
        line-height: 1.2;
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
        background-color: #333;
        color: #fff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    }
`
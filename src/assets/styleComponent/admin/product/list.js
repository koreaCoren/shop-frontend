import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 6px 0 #00000044;
    margin: 15px 0px;
`

export const ProductList = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    gap: 10px;
    img{
        width: 82px;
        height: 82px;
        border-radius: 5px;
    }
`

export const Div = styled.div`
    display: flex;
    flex: 1;
    gap: 10px;
    ul{
        display: flex;
        flex-direction: column;
        gap: 5px;
        flex: 1;
        li{
            background-color: #f5f5f5;
            padding: 5px;
            border-radius: 5px;
        }
    }
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;

    li a,
    button{
        line-height: 24px;
        background-color: #1a6dff;
        color: #fff;
        padding: 0px 15px;
        border-radius: 5px;
        cursor: pointer;
    }
`
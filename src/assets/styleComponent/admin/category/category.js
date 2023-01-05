import styled from "styled-components";

export const Save = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    background-color: #1a6dff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
`

export const Padding = styled.div`
    padding: 0px 15px;
`

export const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 6px 0 #00000044;
    margin: 15px 0px;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    gap: 10px;
`

export const CateInfo = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    li{
        width: 100%;
        background-color: #f5f5f5;
        padding: 10px;
        font-size: 18px;
        border-radius: 5px;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    *{
        line-height: 24px;
        background-color: #1a6dff;
        color: #fff;
        padding: 0px 15px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        white-space: nowrap;
    }
`
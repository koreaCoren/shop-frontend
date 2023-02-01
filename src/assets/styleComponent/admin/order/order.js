import { Link } from "react-router-dom";
import styled from "styled-components";

export const Padding = styled.div`
    padding: 0px 15px;
`

export const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 6px 0 #00000044;
    margin: 15px 0px;
    text-align: center;
`

export const Div = styled.div`
    display: flex;
    flex: 1;
    gap: 10px;
    text-align: left;
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        flex: 1;
        li{
            background-color: #f5f5f5;
            padding: 5px;
            border-radius: 5px;
        }
    }
`

export const DetailButton = styled(Link)`
    margin-top: 10px;
    line-height: 30px;
    background-color: #1a6dff;
    color: #fff;
    padding: 0px 50px;
    border-radius: 5px;
`

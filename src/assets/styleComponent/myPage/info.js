import styled from "styled-components";


export const Div = styled.div`
border-top: 2px solid black;
display: flex;
justify-content: center;
padding-top: 20px;
`
export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
flex-direction: column;
border: 1px solid #ddd;
border-radius: 15px;    

>div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 0px;
    width: 100%;
}

h1{
    font-size: 20px;
    margin-bottom: 20px;
}

input{
    width: 320px;
    line-height: 24px;
}

input[type="button"]{
    border: 1px solid #70707070;
    background-color: white;
    color: #444;
    font-size: 16px;
    letter-spacing: 18px;
    padding: 5px;
    width: 100%;
    height: 50px;
    cursor: pointer;
    margin-top: 20px;
}
input[type="submit"]{
    border: 1px solid #70707070;
    background-color: white;
    color: #444;
    font-size: 16px;
    letter-spacing: 18px;
    padding: 5px;
    width: 100%;
    height: 50px;
    cursor: pointer;
    margin-top: 20px;
}

.inputTitle{
    width: 100px;
    font-size: 14px;
}
`
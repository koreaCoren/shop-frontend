import styled from "styled-components";


export const InDiv = styled.div`
background-color: white;
width: 100%;
height: 100%;
padding: 30px;
.contents{
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
}
.relogin_title{
    display:flex;
    flex-direction: column;

}
.relogin_title div{
    padding: 20px 0 10px 0;

}
.pointer{
    cursor: pointer;
}
.clickBox{
    background-color: gray;
    color: white;
    text-align: center;
    line-height: 1.7;
    border-radius: 15px;
    width: 20%;
    display: inline-block;
}
.clickBox i{
    position: relative;
    top: 5px;
}
input[type=submit]{
        border: none;
        background-color: #444;
        color: #fff;
        line-height: 24px;
        padding: 5px;
        cursor: pointer;
        margin-top: 20px;
};
`

export const Div = styled.div`
display: grid;
grid-template-columns: 200px 1fr;
min-height: 70vh;
padding: 20px 0 50px 0;
`

export const Line = styled.div`
width: 100%;
border-top: 1px solid #DDDFE1;
margin-top: 20px;
`

export const BoldLine = styled.div`
width: 100%;
border-top: 2px solid #000000;
margin-top: 20px;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border: 1px solid #ddd;
        border-radius: 15px;
        padding: 50px 15px;
    }

    h1{
        font-size: 20px;
        margin-bottom: 20px;
    }

    input{
        width: 320px;
        line-height: 24px;
    }
`

export const ReviewForm = styled.form`
        display: flex;
        flex-direction: column;
        gap: 10px; 
        margin-top: 10px;

        input,form textarea{
            width: 100%;
        }
`

export const Button = styled.div`
    text-align: center;

    button{
        background-color: #444;
        color: #fff;
        padding: 10px 30px;
        margin: 0 5px;
        border-radius: 5px;
        cursor: pointer;
    }
`
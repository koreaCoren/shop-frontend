import styled from "styled-components";


export const InDiv = styled.div`
    
background-color: white;
width: 100%;
height: 100%;
padding: 30px;
.subTitle{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid black;
    padding-bottom: 30px;
    font-weight: bold;
}
.subTitle > div{
    display: flex;
    align-items: center;
}
h2{        
    font-size: 24px;
}
.grayTitle{
    color: gray;
    padding: 0 10px;

}
.new{
    font-size: 20px;
    text-align: right;
}
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
h3{
    font-size: 18px;
}

`

export const Div = styled.div`
display: grid;
grid-template-columns: 200px 1fr;
min-width: 1200px;
min-height: 70vh;
padding: 20px 0 50px 0;
`
export const Line = styled.div`
width: 100%;
border-top: 1px solid #DDDFE1;
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

    input[type="submit"]{
        border: none;
        background-color: #444;
        color: #fff;
        line-height: 24px;
        padding: 5px;
        cursor: pointer;
        margin-top: 20px;
    };
`
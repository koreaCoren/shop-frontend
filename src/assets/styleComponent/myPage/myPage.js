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
    padding-left: 10px;

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
import styled from "styled-components";


export const InDiv = styled.div`
    
background-color: white;
width: 100%;
height: 100%;
border: 5px solid #F7F7F7;
padding: 30px;
.subTitle{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
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
}
.column{
    border-top: 2px solid black;
    height: 20px;
    width: 100%;
    margin-top: 35px;
}
`
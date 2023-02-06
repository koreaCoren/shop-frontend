import styled from "styled-components";
import view01 from "assets/images/main/view01.jpg"
import view02 from "assets/images/main/view02.jpg"
import view03 from "assets/images/main/view03.jpg"

export const Banner = styled.div`
    position: relative;
    font-family: 'Nanum Myeongjo', serif !important;

    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 1200px;
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    
    .content > div{
        display: inline-block;
        background-color: #00000077;
        color: #fff;
        padding: 50px;
    }

    .content > div h2{
        font-size: 60px;    
    }

    .content > div h2 b{
        font-size: 70px;
        margin-top: 20px;
        display: inline-block
    }
    
    .content > a{
        color: #fff;
        font-family: 'Pretendard-Regular' !important;
        font-size: 24px;
        padding: 15px 30px;
        border: 1px solid #fff;
        margin-top: 30px;
    }
`

export const BrandStory = styled.div`
    text-align: center;
    padding: 70px 0px 50px;

    h2 {
        font-size: 18px;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 40px;
        line-height: 1.2;
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        color: #999;
        line-height: 1.5;
    }
`

export const ViewMore = styled.div`
    text-align: center;

    .wrap {
        width: 100%;
        max-width: 1200px;
    }

    .wrap>div {
        width: 1px;
        height: 70px;
        background-color: #000;
        margin: 0 auto 50px;
    }

    h2 {
        font-size: 24px;
        border-bottom: 2px solid #000;
        display: inline-block;
        margin-bottom: 20px;
        padding-bottom: 10px;
    }

    ul {
        display: flex;  
    }

    ul li {
        flex: 1;
        height: 580px;
        transition: all .5s;
    }

    ul li div {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
        position: relative;
    }

    ul li:nth-child(1) div {
        background-image: url(${view01});
    }

    ul li:nth-child(2) div {
        background-image: url(${view02});
    }

    ul li:nth-child(3) div {
        background-image: url(${view03});
    }

    ul li:hover {
        flex: 1.8;
    }

    ul li:hover div::after {
    content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffff88;
    }

    ul li div h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        white-space: nowrap;
        opacity: 0;
        transition: opacity .5s;
    }

    ul li:hover div h3 {
        opacity: 1;
    }

    ul li div h3 span {
        font-size: 34px;
        color: #1b387c;
        font-family: 'Pretendard-Bold' !important;
    }

    ul li div h3 p {
        font-size: 24px;
    }
`

export const LifeHim = styled.div`
    padding: 100px 0px;
    margin: 50px 0px;
    background-color: #f4f4f6;

    .flexContainer {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 400px 1fr;
        align-items: center;
    }

    .flexContainer .content {
        text-align: center;
    }

    .flexContainer .content h3 {
        font-size: 40px;
        font-weight: bold;
        font-family: 'Pretendard-Bold' !important;
    }

    .flexContainer .content p {
        font-size: 16px;
        line-height: 1.2;
        margin-top: 30px;
        color: #797979;
    }

    .flexContainer .content .slideButton {
        display: inline-flex;
        gap: 10px;
        margin-top: 50px;
    }

    .flexContainer .content .slideButton .slideBt i {
        width: 40px;
        height: 40px;
        border: 1px solid #797979;
        line-height: 38px;
        font-size: 30px;
        color: #797979;
        cursor: pointer;
    }

    .flexContainer .slider {
        width: 100%;
    }

    .flexContainer .slider .slide .hoverBox {
        position: relative;
    }

    .flexContainer .slider .slide .hoverBox img {
        width: 100%;
        margin-bottom: 20px;
    }

    .flexContainer .slider .slide .hoverBox ul {
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-flex;
        gap: 10px;
        z-index: 1;
        opacity: 0;
        transition: opacity .5s, top .5s;
    }

    .flexContainer .slider .slide .hoverBox:hover ul {
        top: 50%;
        opacity: 1;
    }

    .flexContainer .slider .slide .hoverBox ul li a i {
        background-color: #fff;
        color: #333333;
        width: 50px;
        line-height: 50px;
        border-radius: 50%;
        text-align: center;
        font-size: 24px;
    }

    .flexContainer .slider .slide .name {
        font-size: 20px;
        font-weight: bold;
    }

    .flexContainer .slider .slide .text {
        margin: 15px 0px;
    }

    .flexContainer .slider .slide .pay {
        font-family: 'Pretendard-Bold' !important;
        font-size: 22px;
        color: #1b387c;
    }
`

export const Best = styled.div`
    text-align: center;
    padding: 50px 0px;

    h3 {
        font-family: 'Pretendard-Bold' !important;
        font-size: 30px;
        margin-bottom: 50px;
    }

    .wrap>ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 150px;
    }

    .wrap>ul li .hoverBox {
        position: relative;
    }

    .wrap>ul li .hoverBox a img {
        margin-bottom: 30px;
    }

    .wrap>ul li .hoverBox ul {
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-flex;
        gap: 10px;
        z-index: 1;
        opacity: 0;
        transition: opacity .5s, top .5s;
    }

    .wrap>ul li .hoverBox:hover ul {
        top: 50%;
        opacity: 1;
    }

    .wrap>ul li .hoverBox ul li a i {
        background-color: #fff;
        color: #333333;
        width: 50px;
        line-height: 50px;
        border-radius: 50%;
        text-align: center;
        font-size: 24px;
    }

    .wrap>ul li .name {
        font-size: 20px;
    }

    .wrap>ul li .text {
        font-size: 16px;
        color: #797979;
        margin: 20px 0px 30px;
    }

    .wrap>ul li .pay {
    font-size: 20px;
    color: #1b387c;
    font-family: 'Pretendard-Bold' !important;
    }
`

export const Review = styled.div`
    padding: 50px 0px;

    h3 {
        font-size: 30px;
        text-align: center;
        font-family: 'Pretendard-Bold' !important;
        margin-bottom: 50px;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        border: 1px solid #cccccc;
    }

    ul li a {
        width: 100%;
    }

    ul li:not(:last-child) a {
        border-right: 1px solid #cccccc;
    }

    ul li a>img {
        width: 100%;
        padding: 50px;
        border-bottom: 1px solid #ccc;
        position: relative;
    }

    ul li a .content {
        padding: 20px;
    }

    ul li a .content .star {
        color: #ffba00;
        font-size: 20px;
    }

    ul li a .content h4 {
        margin: 10px 0px;
        font-size: 16px;
        line-height: 1.2;
        font-weight: bold;
    }

    ul li a .content p {
        color: #797979;
        line-height: 1.2;
    }

    ul li a .bar {
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin-top: 20px;
    }

    ul li a .prodcutName {
        padding: 0px 20px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
    }

    ul li a .prodcutName div {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 50%;
        padding: 10px;
    }

    ul li a .prodcutName div img {
        width: 100%;
    }

    .button {
        text-align: center;
    }

    .button .more {
        padding: 20px 40px;
        background-color: #333333;
        color: #fff;
        font-size: 24px;
        border-radius: 10px;
        text-align: center;
        margin-top: 50px;
    }
`
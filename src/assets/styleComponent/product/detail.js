import styled from "styled-components";

export const Padding = styled.div`
    padding: 50px 0px;
`

export const Info = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    grid-gap: 50px;

    .imageInfo {
        width: 100%;
    }

    .imageInfo>img {
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 50px;
        width: 100%;
        height: 450px;
    }

    .imageInfo ul {
        display: flex;
        margin-top: 10px;
        gap: 10px;
    }

    .imageInfo ul li {
        max-width: 80px;
        border: 1px solid #ccc;
        padding: 10px;
        cursor: pointer;
    }

    .imageInfo ul li img {
        width: 100%;
    }

    .imageInfo button {
        width: 100%;
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        padding: 15px 0px;
        cursor: pointer;
        color: #aaa;
        font-weight: bold;
        font-family: 'Pretendard-Bold';
        margin-top: 10px;
    }

    .imageInfo button i {
        margin-right: 5px;
    }

    .content {}

    .content h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .content h3 {
        font-size: 16px;
        color: #ccc;
        line-height: 1.2;
        margin-bottom: 20px;
    }

    .content .info {}

    .content .info ul {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 20px 0px;
    }

    .content .info ul li {
        display: grid;
        grid-template-columns: 150px 1fr;
    }

    .content .info ul li:not(:last-child) {
        margin-bottom: 20px;
    }

    .content .info ul li b {
        font-size: 20px;
        color: #ccc;
    }

    .content .info ul li span {
        font-size: 20px;
        font-weight: bold;
    }

    .content .info ul li span.pay {
        color: #d1b064;
    }

    .content .info p {
        color: #ccc;
        font-size: 18px;
        margin: 20px 0px 50px;
        font-weight: bold;
    }

    .content .info .quantity {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f5f5f5;
        padding: 30px 20px;
        font-weight: bold;
    }

    .content .info .quantity .name {
        font-size: 16px;
    }

    .content .info .quantity .num {}

    .content .info .quantity .money {
        font-size: 16px;
    }

    .content .info .total {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 30px 0px;
    }

    .content .info .total span {
        font-size: 22px;
    }

    .content .info .total span b {
        font-weight: bold;
        font-size: 22px;
    }

    .content .info .total>b {
        font-weight: bold;
        font-size: 28px;
        margin: 0px 10px;
    }

    .content .info .button {
        display: flex;
        gap: 5px;
    }

    .content .info .button a {
        flex: 1;
        text-align: center;
        border: 1px solid #ccc;
        font-weight: bold;
        font-size: 20px;
        padding: 20px 0px;
    }

    .content .info .button a.black {
        color: #fff;
        background-color: #333333;
    }
`

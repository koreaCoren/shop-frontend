import React from 'react';
import * as Common from "assets/styleComponent/myPage/myPage";
import SubTitle from 'components/myPage/SubTitle';

const Contact = () => {
    return (
        <Common.InDiv>
            <SubTitle h2={"고객 문의"} h3={"문의 주시면 빠른 시간내에 답변 해드리겠습니다."} clickText={<><i className="fa-solid fa-comment-dots"></i>문의하기</>} />
        </Common.InDiv >
    );
};

export default Contact;
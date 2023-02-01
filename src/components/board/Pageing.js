import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Pageing = ({ count, boardPage, boardLength, url }) => {
    let page = [];
    const NOW_PAGE = Number(boardPage);
    const MIN_PAGE = 1;
    const MAX_PAGE = Math.ceil(boardLength / count);
    const MIN_NAV = NOW_PAGE - 2 <= 1 ? 1 : NOW_PAGE - 2;
    const MAX_NAV = NOW_PAGE + 2 >= MAX_PAGE ? MAX_PAGE : NOW_PAGE + 2;
    const TOTAL_NAV = 5;

    // 페이징 출력
    const pageLoop = (min, max) => {
        if (NOW_PAGE === 1) {
            max = TOTAL_NAV <= MAX_PAGE ? max + 2 : MAX_PAGE;
        } else if (NOW_PAGE === 2) {
            max = TOTAL_NAV <= MAX_PAGE ? max + 1 : MAX_PAGE;
        } else if (NOW_PAGE === MAX_PAGE || NOW_PAGE === MAX_PAGE - 1) {
            min = TOTAL_NAV >= MAX_PAGE ? MIN_PAGE : MAX_PAGE - 4;
        }

        for (let i = min; i <= max; i++) {
            page.push(
                <li key={i}><Link className={i === NOW_PAGE ? "now" : ""} to={`${url}/${i}`}>{i}</Link></li>
            )
        }
    }

    // 페이지가 한개일때
    if (MIN_PAGE === MAX_PAGE) {
        page.push(
            <li><Link className='now' to={`${url}/1`}>{MIN_PAGE}</Link></li>
        )
    } else {
        pageLoop(MIN_NAV, MAX_NAV);
    }

    return (
        <PageingContainer>
            <ul>
                <li><Link to={`${url}/1`}><i className="fa-solid fa-angles-left"></i></Link></li>
                {page}
                <li><Link to={`${url}/${MAX_PAGE}`}><i className="fa-solid fa-angles-right"></i></Link></li>
            </ul>
        </PageingContainer>
    );
};

export const PageingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0px;

    ul{
        display: flex;
        gap: 10px;
    }

    ul li a{
        background-color: #aaa;
        color: #fff;
        border-radius: 5px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    ul li a.now{
        background-color: #1a6dff;
    }
`

export default Pageing;
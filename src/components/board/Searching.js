import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * @param {*} board 게시글리스트
 * @param {*} setBoardList 검색값으로 새로 게시글리스트 변경
 * @returns 
 */

const Searching = ({ board, setBoardList, searchType }) => {
    const [searchValue, setSearchValue] = useState("");
    const search = () => {
        let arr = [];

        if (searchValue.length <= 1) {
            alert("2글자 이상 입력해주세요");
            return;
        }

        board.forEach((el) => {
            switch (searchType) {
                case "title":
                    if (el.del !== "Y") {
                        if (el.title.indexOf(searchValue) !== -1) {
                            arr.push(el);
                        }
                    }
                    break;
                case "orderNumber":
                    if (el.orderCode.indexOf(searchValue) !== -1) {
                        arr.push(el);
                    }
                    break;
                case "email":
                    if (el.user_email.indexOf(searchValue) !== -1) {
                        arr.push(el);
                    }
                    break;

                default:
                    break;
            }
        });

        if (arr.length === 0) {
            alert("검색된 게시글이 없습니다");
            return;
        }

        setBoardList(arr);
    }

    const placeholder = () => {
        let value = "";
        switch (searchType) {
            case "title":
                value = "제목 검색"
                break;
            case "orderNumber":
                value = "주문번호 검색"
                break;
            case "email":
                value = "이메일 검색"
                break;
            default:
                break;
        }
        return value
    }

    const enterKeypress = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "search":
                setSearchValue(value);
                break;

            default:
                break;
        }
    }

    return (
        <Search>
            <input type="text" placeholder={placeholder()} name='search' value={searchValue} onChange={onChange} onKeyPress={enterKeypress} />
            <i className="fa-solid fa-magnifying-glass" onClick={search} ></i>
        </Search>
    );
};

const Search = styled.div`
    display: inline-block;
    position: relative;

    input{
        border: 1px solid #aaa;
        width: 250px;
        padding: 5px;
        border-radius: 5px;
    }

    i{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #aaa;
        cursor: pointer;
    }
`

export default Searching;
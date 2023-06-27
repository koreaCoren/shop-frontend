
import React, { useEffect, useRef, useState } from 'react';
import { getAdminMessage, updateMessage } from 'api/chat';
import { useParams } from 'react-router-dom';
import Top from 'components/admin/Top';
import * as Style from 'assets/styleComponent/myPage/contact';
import createCode from 'utils/createCode';
import Loading from 'components/loding/Loading';

const Chat = () => {
    const { CID } = useParams();
    const [message, setMessage] = useState(null);
    const chatContentRef = useRef(null);
    const inputRef = useRef(null);
    const [sendMessage, setSendMessage] = useState("");
    const [resIndex, setResIndex] = useState(0);

    // 슆+엔터 개행
    // 엔터 메시지 보내기
    const onKeyPress = (e) => {
        if (e.code === "Enter" && e.shiftKey) {
            return;
        } else if (e.code === "Enter") {
            e.preventDefault();
            onSubmit();
        }
    }

    // 메시지 보내기
    const onSubmit = async () => {
        const data = {
            user_id: sessionStorage.getItem("userId"),
            content: sendMessage,
            stat: "req"
        }
        if (message.length === 0) {
            data.CID = createCode();
        } else {
            data.CID = message[0].CID;
        }
        await updateMessage(data);
        setSendMessage("");
        inputRef.current.focus();
        await getAdminMessage({ user_id: sessionStorage.getItem("userId"), CID: CID }, setMessage);
        setTimeout(() => {
            scrollBottomStart();
        }, 500);
    }

    // 스크롤 하단 시작
    const scrollBottomStart = () => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }

    // 시간 추출
    const formetTime = (date) => {
        const dateString = date;
        const timeString = dateString.split(" ")[1];
        const [hours, minutes] = timeString.split(":");
        return hours + ":" + minutes;
    }

    // 백엔드에서 준 데이터 가공
    const factoryData = () => {
        const copy = message
        const arr = [];
        const groupedData = {};

        // 날짜를 기준으로 데이터 배열을 그룹화
        for (let i = 0; i < copy.length; i++) {
            const item = copy[i];
            const date = item.send_date.split(' ')[0]; // 시간 부분 제외하고 날짜만 추출

            if (!groupedData[date]) {
                groupedData[date] = [];
            }

            groupedData[date].push(item);
        }

        // 그룹화된 데이터를 날짜순으로 정렬
        const sortedDates = Object.keys(groupedData).sort(function (a, b) {
            const dateA = new Date(a);
            const dateB = new Date(b);
            return dateA - dateB;
        });

        // 정렬된 날짜 순서에 따라 데이터를 출력
        for (let j = 0; j < sortedDates.length; j++) {
            const sortedDate = sortedDates[j];
            const sortedItems = groupedData[sortedDate];

            arr.push({
                days: sortedDate,
                message: sortedItems
            })
        }

        return arr;
    }

    useEffect(() => {
        getAdminMessage({ user_id: sessionStorage.getItem("userId"), CID: CID }, setMessage);
        setTimeout(() => {
            scrollBottomStart();
        }, 1000);
    }, [])

    // 실시간 통신
    useEffect(() => {
        const interval = setInterval(() => {
            setResIndex(i => i + 1);
            getAdminMessage({ user_id: sessionStorage.getItem("userId"), CID: CID }, setMessage);
        }, 1000 * 10);

        return () => {
            clearInterval(interval);
        };
    }, [])

    useEffect(() => {
        if (resIndex >= 500) {
            window.location.reload();
        }
    }, [resIndex]);


    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "message":
                setSendMessage(value);
                break;

            default:
                break;
        }
    }

    return (
        message === null
            ? <Loading />
            : <>
                <Top title={"1:1 문의 관리"} isButton={false} />
                <Style.ChatContainer>
                    <div className='dayGroup' ref={chatContentRef}>
                        {
                            factoryData().map((a, i) => {
                                return (
                                    <ul key={i}>
                                        <li className='day'>
                                            <h2>{a.days}</h2>
                                        </li>
                                        {
                                            a.message.map((b, j) => {
                                                return (
                                                    <li key={j} className={b.user_id !== "admin" ? "left" : "right"}>
                                                        <div>{formetTime(b.send_date)}</div>
                                                        <p dangerouslySetInnerHTML={{ __html: b.content }}></p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <div className="send" >
                        <textarea name="message" value={sendMessage} onChange={onChange} ref={inputRef} onKeyPress={onKeyPress} />
                        <button onClick={onSubmit}>전송</button>
                    </div>
                </Style.ChatContainer>
            </>
    );
};

export default Chat;
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Notice from 'pages/community/Notice';
import NoticeDetail from 'pages/community/NoticeDetail';
import NoticeWrite from 'pages/community/NoticeWrite';

const Community = () => {
    return (
        <>
            <Routes>
                <Route path='/notice/:boardPage' element={<Notice />} />
                <Route path='/noticeDetail/:boardPage' element={<NoticeDetail />} />
                <Route path='/write' element={<NoticeWrite />} />
            </Routes>
        </>
    );
};

export default Community;
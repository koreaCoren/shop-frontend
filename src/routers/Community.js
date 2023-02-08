import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Notice from 'pages/community/Notice';

const Community = () => {
    return (
        <>
            <Routes>
                <Route path='/notice/:boardPage' element={<Notice />} />
            </Routes>
        </>
    );
};

export default Community;
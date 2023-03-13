const searching = (board, search) => {
    let arr = [];

    if (search.length <= 1) {
        alert("2글자 이상 입력해주세요");
        return;
    }

    board.forEach((el) => {
        if (el.del !== "Y") {
            if (el.title.indexOf(search) !== -1) {
                arr.push(el);
            }
        }
    });

    if (arr.length === 0) {
        alert("검색된 게시글이 없습니다");
        return;
    }

    return arr;
}

export default searching;
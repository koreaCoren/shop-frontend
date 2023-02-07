const menus = [
    {
        mainTitle: "주문 내역",
        subList: [],
        url: "order/1",
        icon: "fa-solid fa-file-invoice-dollar",
    },

    {
        mainTitle: "찜한 상품",
        subList: [
            // { title: "카테고리 추가/삭제", url: "Category" },
            // { title: "상품등록", url: "product" }
        ],
        url: "pick",
        icon: "fa-solid fa-gift",
    },

    {
        mainTitle: "기본 배송지 관리",
        subList: [],
        url: "Address",
        icon: "fa-solid fa-truck",
    },
    {
        mainTitle: "개인 정보 수정",
        subList: [],
        url: "relogin",
        icon: "fa-solid fa-house",
    }
]

export { menus };
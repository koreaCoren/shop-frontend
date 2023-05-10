const menus = [
    {
        mainTitle: "회원 관리",
        subList: [],
        url: "user/1",
        icon: "fa-solid fa-user",
    },
    {
        mainTitle: "상품 관리",
        subList: [
            { title: "카테고리 추가/삭제", url: "Category" },
            { title: "상품등록", url: "product/1" }
        ],
        icon: "fa-solid fa-gift",
    },
    {
        mainTitle: "주문 관리",
        subList: [],
        url: "order/1",
        icon: "fa-solid fa-file-invoice-dollar",
    },
    {
        mainTitle: "배송 관리",
        subList: [],
        url: "delivery",
        icon: "fa-solid fa-truck",
    }
]

export { menus };
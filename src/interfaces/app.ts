export interface UserInterface {
    id: string;
    result: string;
    pass: string;
    msg: string;
}

export interface OrderDataInterface {
    deliveryPay: number;
    option_name: string[] | null;
    price: number;
    product_code: number;
    prodcut_img: string;
    product_name: string;
    sale: number;
    total_price: number;
}

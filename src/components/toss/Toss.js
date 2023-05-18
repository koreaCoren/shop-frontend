import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import {
    PaymentWidgetInstance,
    loadPaymentWidget,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

const selector = "#payment-widget";
const clientKey = "test_ck_OAQ92ymxN34mW7m9n5yVajRKXvdk";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export function Toss({
    orderName,
    customerName,
    customerEmail,
    successUrl,
    failUrl,
    totalPay,
}) {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

            const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
                selector,
                totalPay
            );

            paymentWidgetRef.current = paymentWidget;
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
    }, [totalPay]);

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }
        paymentMethodsWidget.updateAmount(
            totalPay,
            paymentMethodsWidget.UPDATE_REASON.COUPON
        );
    }, [totalPay]);

    return (
        <Pay>
            <div id="payment-widget" />
            <div className="btBox">
                <button
                    onClick={async () => {
                        const paymentWidget = paymentWidgetRef.current;
                        try {
                            await paymentWidget?.requestPayment({
                                orderId: nanoid(),
                                orderName: orderName,
                                customerName: customerName,
                                customerEmail: customerEmail,
                                successUrl: successUrl,
                                failUrl: failUrl,
                            });
                        } catch (error) {
                            // handle error
                        }
                    }}
                >
                    결제하기
                </button>
            </div>
        </Pay>
    );
}

const Pay = styled.div`
    .btBox{
        padding: 0px 24px 24px 24px;
    }
    button{
        width: 100%;
        background-color: #ddd;
        padding: 10px 0px;
        cursor: pointer;
    }
`



import { ReactInicis } from "components/inicis/dist";

const Inicis = ({ isPurchase, payData }) => {
    return (
        <ReactInicis payData={payData} isPurchase={isPurchase} isTest />
    )
};

export default Inicis;
import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';

import * as Style from "assets/styleComponent/myPage/myPage";
import * as PickStyle from "assets/styleComponent/myPage/pick";

import { reqPickList } from 'utils/axios';

const Pick = ({ }) => {
    const [pickList, SetPickList] = useState();
    const getPickList = useMutation(reqPickList);

    useEffect(() => {
        showPickList();
    }, []);

    const showPickList = async() => {
        const data = {
            user_id : sessionStorage.getItem('userId')
        }
        await getPickList.mutateAsync(data);
        SetPickList(data.result);
        console.log(data.result);
    }

    return (
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>찜한 상품</h2>
                    <div className='grayTitle'>찜한 상품은 최대 200개까지 표시가 됩니다.</div>
                </div>
            </div>
            <div className='contents'>
                
                    {pickList &&
                        pickList.map((item, index) => {
                            return(
                                <PickStyle.List key={index}>
                                    <div className='goodsImg'>
                                        {item.goods_img === ""
                                            ?<span>이미지 음슴</span>   
                                            :<img src={item.goods_img} alt="" />
                                        }
                                    </div>
                                    <div className='goodsInfo'>
                                        <span className='nm'>{item.goods_nm}</span>
                                        <span className='price'>{item.goods_price}원</span>
                                    </div>
                                    <div className='goodsBtn'>
                                        <button className='basket'>담기</button>
                                        <button className='favDel'>삭제</button>
                                    </div>
                                </PickStyle.List>
                            )
                        })
                    }
                

            </div>
        </Style.InDiv>
    );
};
export default Pick;
import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';

import { reqPickList } from 'utils/axios';
import { settingFav } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage";
import * as PickStyle from "assets/styleComponent/myPage/pick";
import addBasket from 'utils/addBasket';

const Pick = ({ }) => {
    const [pickList, setPickList] = useState();
    const getPickList = useMutation(reqPickList);
    const setDelFav = useMutation(settingFav);

    useEffect(() => {
        showPickList();
    }, []);

    const showPickList = async() => {
        const data = {
            user_id : sessionStorage.getItem('userId')
        }
        await getPickList.mutateAsync(data);
        setPickList(data.result);
        // console.log(data.result);
    }

    const delFav = async(i,goodsCode) => {
        let arr = pickList;
        arr.splice(i,1);
        setPickList([...arr]);
        const data = {
            user_id : sessionStorage.getItem('userId'),
            goods_code : goodsCode,
            is_fav : 0
        }
        await setDelFav.mutateAsync(data);
    }

    return (
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>찜한 상품</h2>
                    <div className='grayTitle'>찜한 상품은 최대 100개까지 표시가 됩니다.</div>
                </div>
            </div>
            <div className='contents'>
                    {
                        pickList?.map((item, index) => {
                            return(
                                <PickStyle.List key={index}>
                                    <div className='goodsImg'>
                                        {item.goods_img === ""
                                            ?<span>이미지 음슴</span>   
                                            :<img src={item.goods_img} alt="" />
                                        }
                                    </div>
                                    <div className='goodsInfo'>
                                        <span className='nm'>
                                            <Link to={`/product/detail/${item.goods_code}`}>{item.goods_nm}</Link>
                                        </span>
                                        <span className='price'>{item.goods_price}원</span>
                                    </div>
                                    <div className='goodsBtn'>
                                        <button className='basket' onClick={() => { addBasket(item, 1) }}>담기</button>
                                        <button className='favDel' 
                                                onClick={() => {
                                                    delFav(index,item.goods_code);
                                                    }} >삭제</button>
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
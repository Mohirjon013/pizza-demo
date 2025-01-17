import React from "react"
import { ProductsType } from "./HomeProducts"
import { Segmented } from "antd";
import PlusImg from "../assets/images/plus.svg"



// const priceList:string[] = ["395", "450", "290", "385"]

const HomeItem:React.FC<{item:ProductsType}> = ({item}) => {
    return (
        <div className="w-[280px] text-center ">
            <img className="h-[260px] mb-[11px]" src={item.img} alt="pizza img" width={260} height={260} />
            <h2 className="font-extrabold text-5 leading-6 mb-[22px]">Чизбургер-пицца</h2>
            <div className="w-[280px] rounded-[10px] mb-6 bg-[#F3F3F3]">
                <Segmented<string>
                    className="w-full"
                    size="large"
                    options={['тонкое', 'традиционное']}
                    onChange={(value) => {
                    console.log(value); }}
                />
                <Segmented<string>
                    className="w-full"
                    size="large"
                    options={['26 см.', '30 см.', '40 см.']}
                    onChange={(value) => {
                    console.log(value); }}
                />
            </div>
            <div className="flex items-end justify-between">
                <h2 className="font-bold text-5 leading-6 mb-[22px]">от 395 ₽</h2>
                <button className="w-[132px] py-[10px] text-[16px] font-bold text-[#EB5A1E] border-[1px] border-[#EB5A1E] rounded-[30px] flex items-center justify-center gap-[7px]">
                    <img src={PlusImg} alt="plus img" width={12} height={12} />
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default HomeItem

import bag from "../../assets/img/shopping-bag.png"
import panier from "../../assets/img/panier.png"
import circle from "../../assets/img/circle.png"
import circleEmpty from "../../assets/img/circle-empty.png"

export default function Card() {
    return (
        <div className="text-center bg-white rounded-[10px] py-5 px-6 max-w-[310px]">
            <h2 className="text-[#0A071B] font-navFont font-medium mb-[15px]">Manage your store</h2>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-[30px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="h-[50px] w-[50px] bg-[#ec9c401a] rounded-full flex items-center justify-center">
                            <img src={bag} alt="" className="h-5 w-5"/>
                        </div>
                        <div>
                            <div className="bg-[rgba(10,7,27,0.075)] h-3 w-[120px] rounded-[50px] mb-3"></div>
                            <div className="bg-[rgba(10,7,27,0.075)] h-3 w-[70px] rounded-[50px]"></div>
                        </div>
                    </div>
                    <img src={circle} alt="" />
                </div>
                <div className="flex items-center gap-[30px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="h-[50px] w-[50px] bg-[#ec9c401a] rounded-full flex items-center justify-center">
                            <img src={panier} alt="" className="h-5 w-5"/>
                        </div>
                        <div>
                            <div className="bg-[rgba(10,7,27,0.075)] h-3 w-[120px] rounded-[50px] mb-3"></div>
                            <div className="bg-[rgba(10,7,27,0.075)] h-3 w-[70px] rounded-[50px]"></div>
                        </div>
                    </div>
                    <img src={circleEmpty} alt="" />
                </div>
            </div>
        </div>
    )
}

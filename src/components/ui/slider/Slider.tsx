import data from "../../../data/data.json"
import SliderImg from "./SliderImg"

export default function Slider() {
    return (
        <div className="flex items-center justify-center w-full rounded-[25px] bg-gradient-to-r from-[#3951E5] to-[#E693A5] py-10 overflow-hidden h-full blurImg relative whitespace-nowrap max-lg:py-8 max-md:py-6 max-md:rounded-[20px] max-[425px]:rounded-[15px]">
            <div className="w-full flex gap-12 animate-[slide_15s_linear_infinite] max-md:gap-8 max-md:animate-[slide_10s_linear_infinite] max-[425px]:animate-[slide_5s_linear_infinite]">
                {data.slider.map((img, i) => (
                    <SliderImg 
                        key={i}
                        slide={img}
                    />
                ))}
            </div>
        </div>
    )
}

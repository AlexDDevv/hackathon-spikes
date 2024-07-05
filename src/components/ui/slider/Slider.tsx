import data from "../../../data/data.json"
import SliderImg from "./SliderImg"

export default function Slider() {
    return (
        <div className="w-full rounded-[25px] mb-20 bg-gradient-to-r from-[#3951E5] to-[#E693A5] py-10 overflow-hidden h-[280px] blurImg relative whitespace-nowrap">
            <div className="w-full flex gap-12 animate-[slide_15s_linear_infinite]">
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

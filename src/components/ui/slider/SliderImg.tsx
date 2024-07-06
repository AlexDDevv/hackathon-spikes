export default function SliderImg({ slide }: {slide: string}) {
    return (
        <img src={slide} alt="" className="w-[310px] h-[203px] max-lg:w-[250px] max-lg:h-[165px] max-md:w-[200px] max-md:h-[130px] max-[425px]:w-[150px] max-[425px]:h-[100px]" />
    )
}

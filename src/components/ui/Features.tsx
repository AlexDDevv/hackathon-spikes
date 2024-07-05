interface FeaturesPros {
    icon: string,
    title: string,
    text: string
}

export default function Features({ icon, title, text }: FeaturesPros) {
    return (
        <div className="setupwith my-0 mx-auto">
            <img src={icon} alt="" className="mb-[15px]"/>
            <h3 className="font-bodyFont font-bold text-base text-black mb-[15px]">{title}</h3>
            <p className="font-bodyFont font-medium text-sm text-[#626262]">{text}</p>
        </div>
    )
}

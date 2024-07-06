import logo from "../assets/img/logo-footer.png"

export default function Footer() {
    return (
        <footer className="text-[#0A071B] flex items-center justify-between gap-[25px] w-[68%] my-0 mx-auto max-lg:w-[80%] max-sm:w-full max-[425px]:gap-5">
            <div className="flex items-center justify-center gap-[6px]">
                <img src={logo} alt="Logo du site" className="h-5 w-5" />
                <span className="text-[#0A071B] font-bodyFont font-bold">Sell</span>
            </div>
            <nav>
                <ul className="flex items-center justify-center gap-10 max-sm:gap-[25px] max-[425px]:gap-5">
                    <li className="font-navFont font-semibold text-sm cursor-pointer max-sm:text-xs max-[425px]:text-[10px]">Home</li>
                    <li className="font-navFont font-semibold text-sm cursor-pointer max-sm:text-xs max-[425px]:text-[10px]">Agencies</li>
                    <li className="font-navFont font-semibold text-sm cursor-pointer max-sm:text-xs max-[425px]:text-[10px]">About</li>
                    <li className="font-navFont font-semibold text-sm cursor-pointer max-sm:text-xs max-[425px]:text-[10px]">My Shortlist</li>
                </ul>
            </nav>
        </footer>
    )
}

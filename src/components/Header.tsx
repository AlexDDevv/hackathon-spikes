import logo from "../assets/img/logo-header.png"
import twitter from "../assets/img/twitter.png"

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-[#282828] rounded-[10px] py-2 px-3 max-w-[800px] mx-auto my-0 mb-14 max-sm:mb-10 max-[425px]:mb-8">
            <div className="flex items-center justify-center gap-[6px]">
                <img src={logo} alt="Logo du site" className="h-5 w-5 max-sm:h-4 max-sm:w-4" />
                <span className="text-white font-bodyFont font-bold max-sm:text-sm">Sell</span>
            </div>
            <div className="flex items-center justify-center gap-[5px]">
                <img src={twitter} alt="Logo de Twitter" />
                <a href="https://x.com/Sport_DevWeb" className="font-navFont text-xs font-semibold h-[14px] text-white max-sm:text-[10px]">Follow us on Twitter</a>
            </div>
        </header>
    )
}

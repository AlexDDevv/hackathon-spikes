import logo from "../assets/img/logo-footer.png"

export default function Footer() {
    return (
        <footer className="text-[#0A071B] flex items-center justify-between w-[68%] my-0 mx-auto">
            <div className="flex items-center justify-center gap-[6px]">
                <img src={logo} alt="Logo du site" className="h-5 w-5" />
                <span className="text-[#0A071B] font-bodyFont font-bold">Sell</span>
            </div>
            <nav>
                <ul className="flex items-center justify-center gap-10">
                    <li className="font-navFont font-semibold text-sm">Home</li>
                    <li className="font-navFont font-semibold text-sm">Agencies</li>
                    <li className="font-navFont font-semibold text-sm">About</li>
                    <li className="font-navFont font-semibold text-sm">My Shortlist</li>
                </ul>
            </nav>
        </footer>
    )
}

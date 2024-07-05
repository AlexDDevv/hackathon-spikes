import Header from "./components/Header"
import Form from "./components/ui/Form"
import AvatarCircles from "./components/ui/AvatarCircle"
import Slider from "./components/ui/slider/Slider"
import data from "./data/data.json"
import Features from "./components/ui/Features"
import arrow from "./assets/img/arrow.png"
import Card from "./components/ui/Card"
import Footer from "./components/Footer"

function App() {
    const avatarUrls = [
        "/img/avatars/avatar1.png",
        "/img/avatars/avatar2.png",
        "/img/avatars/avatar3.png",
        "/img/avatars/avatar4.png"
    ]

    return (
        <>
            <div className="bg-grid">
                <Header />
                <main className="mb-14">
                    <section className="flex flex-col items-center text-center mb-32">
                        <button className="font-bodyFont font-bold text-sm rounded-full py-2 px-4 bg-gradient-to-l from-[#3951E5] to-[#E693A5] text-white mb-14">Introducing a new online selling platform 🎉</button>
                        <div className="max-w-[700px] my-0 mx-auto mb-7">
                            <h1 className="font-titleFont text-6xl leading-[70px] mb-5">Best way to sell your digital product</h1>
                            <p className="font-bodyFont font-medium text-[#626262] max-w-[400px] my-0 mx-auto">Go from Zero to Hero with simple platform that helps creators like you sell their digital products online.</p>
                        </div>
                        <Form
                            content={"Try it out"}
                        />
                        <div className="flex items-center gap-[10px]">
                            <AvatarCircles
                                avatarUrls={avatarUrls}
                                numPeople={100}
                            />
                            <p className="max-w-[300px] my-0 mx-auto text-left text-black/50 font-bodyFont font-medium text-xs"><span className="text-black font-bold">More than 100+</span> users are selling their products online with simple & easy ways</p>
                        </div>
                        <div className="bg-[#92C4FE] w-[450px] h-[450px] rounded-full absolute right-0 top-[-300px] blur-[300px] -z-[500]"></div>
                        <div className="bg-[#FEA492] w-[550px] h-[550px] rounded-full absolute -z-[500] left-0 top-[-150px] blur-[300px]"></div>
                    </section>
                    <section className="w-[68%] my-0 mx-auto relative">
                        <Slider />
                        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[95%] rounded-[25px] bg-white/80 -z-30"></div>
                        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[90%] rounded-[25px] bg-white/50 -z-40"></div>
                        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[85%] rounded-[25px] bg-white/20 -z-50"></div>
                        <div className="bg-[#AE92FE] w-[300px] h-[300px] rounded-full absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[100px] -z-[500]"></div>
                    </section>
                    <section className="mb-20 pl-[230px]">
                        <h2 className="font-titleFont text-black text-4xl mb-[50px]">Features</h2>
                        <div className="flex items-end gap-[120px]">
                            <div className="grid grid-cols-2 grid-rows-2 gap-16">
                                {data.features.map((feature, i) => (
                                    <Features
                                        key={i}
                                        icon={feature.icon}
                                        title={feature.title}
                                        text={feature.text}
                                    />
                                ))}
                            </div>
                            <div className="relative">
                                <div className="flex items-center justify-center gap-[15px] py-5 px-[30px] bg-[#FDFDFD] rounded-lg shadow border border-black/5 mb-[50px] absolute bottom-[200px] left-[-80px]">
                                    <div>
                                        <h3 className="font-bodyFont text-[#314EE7] font-bold text-lg mb-1">Try for free</h3>
                                        <p className="font-bodyFont text-[#242424] font-semiBold text-sm">*No credit card required</p>
                                    </div>
                                    <div className="h-[60px] w-[60px] bg-[#314EE7] rounded-full flex items-center justify-center">
                                        <img src={arrow} alt="" className="" />
                                    </div>
                                </div>
                                <Card />
                            </div>
                        </div>
                    </section>
                    <section className="bg-white w-[68%] mt-0 mx-auto text-center rounded-3xl mb-20 py-[55px] px-[50px] flex flex-col items-center">
                        <h3 className="font-titleFont text-4xl leading-[50px] mb-[30px]">Be the first to know about new features, special offers, and more.</h3>
                        <Form
                            content={"Join waitlist"}
                        />
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App

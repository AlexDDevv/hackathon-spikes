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
                    <section className="flex flex-col items-center text-center mb-32 max-md:mb-24 max-sm:mb-20">
                        <button className="font-bodyFont font-bold text-sm rounded-full py-2 px-4 bg-gradient-to-l from-[#3951E5] to-[#E693A5] text-white mb-14 max-sm:text-xs max-[425px]:text-[10px] max-sm:mb-10 max-[425px]:py-1 max-[425px]:px-3 max-[425px]:mb-9">Introducing a new online selling platform 🎉</button>
                        <div className="max-w-[700px] text-center my-0 mx-auto mb-7">
                            <h1 className="font-titleFont text-6xl leading-[70px] mb-5 mt-0 mx-auto max-md:text-5xl max-md:max-w-[555px] max-md:leading-[58px] max-sm:text-3xl max-sm:max-w-[350px] max-sm:leading-[38px] max-[425px]:text-2xl max-[425px]:max-w-[277px] max-[425px]:leading-[30px]">Best way to sell your digital product</h1>
                            <p className="font-bodyFont font-medium text-[#626262] max-w-[400px] my-0 mx-auto max-sm:text-sm max-[425px]:text-[10px] max-[425px]:max-w-[275px] max-[425px]:leading-normal">Go from Zero to Hero with simple platform that helps creators like you sell their digital products online.</p>
                        </div>
                        <Form
                            content={"Try it out"}
                        />
                        <div className="flex items-center justify-center gap-[10px] mt-5 max-sm:flex-col">
                            <AvatarCircles
                                avatarUrls={avatarUrls}
                                numPeople={100}
                            />
                            <p className="max-w-[300px] text-left text-black/50 font-bodyFont font-medium text-xs max-sm:text-center"><span className="text-black font-bold">More than 100+</span> users are selling their products online with simple & easy ways</p>
                        </div>
                        <div className="bg-[#92C4FE] w-[450px] h-[450px] rounded-full absolute right-0 top-[-300px] blur-[150px] -z-[500] max-lg:top-[-200px] max-sm:top-[-100px] max-sm:blur-[100px] max-sm:w-[300px] max-sm:h-[300px] max-[425px]:top-[-50px] max-[425px]:right-[-50px]"></div>
                        <div className="bg-[#FEA492] w-[550px] h-[550px] rounded-full absolute -z-[500] left-0 top-[-150px] blur-[300px] max-sm:w-[300px] max-sm:h-[300px] max-sm:top-0 max-sm:blur-[150px] max-[425px]:top-[50px] max-[425px]:left-[-50px]"></div>
                    </section>
                    <section className="w-[68%] mt-0 mb-20 mx-auto relative max-md:w-[80%] max-sm:w-full max-sm:mb-[60px]">
                        <Slider />
                        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[95%] rounded-[25px] bg-white/80 -z-30 max-md:rounded-[20px] max-[425px]:rounded-[15px]"></div>
                        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[90%] rounded-[25px] bg-white/50 -z-40 max-md:rounded-[20px] max-[425px]:rounded-[15px]"></div>
                        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[85%] rounded-[25px] bg-white/20 -z-50 max-md:rounded-[20px] max-[425px]:rounded-[15px]"></div>
                        <div className="bg-[#AE92FE] w-[300px] h-[300px] rounded-full absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[100px] -z-[500] max-md:w-[250px] max-md:h-[250px]"></div>
                    </section>
                    <section className="w-[68%] mb-20 mt-0 mx-auto relative max-2xl:w-full max-[1200px]:w-[68%] max-lg:w-[80%] max-md:w-full">
                        <h2 className="font-titleFont text-black text-4xl mb-[50px] max-md:text-3xl max-sm:text-2xl">Features</h2>
                        <div className="flex items-end justify-between max-[1200px]:flex-col max-[1200px]:items-start max-[1200px]:gap-20 max-md:gap-14">
                            <div className="grid grid-cols-2 grid-rows-2 gap-16 max-md:flex max-md:flex-wrap max-md:gap-12">
                                {data.features.map((feature, i) => (
                                    <Features
                                        key={i}
                                        icon={feature.icon}
                                        title={feature.title}
                                        text={feature.text}
                                    />
                                ))}
                            </div>
                            <div className="absolute right-[-200px] flex flex-col items-end gap-[50px] max-2xl:relative max-2xl:right-0">
                                <div className="flex items-center justify-center gap-[15px] py-5 px-[30px] bg-[#FDFDFD] rounded-lg shadow border border-black/5 mr-[100px] max-[1200px]:mr-0 max-[1200px]:w-full">
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
                    <section className="bg-white w-[68%] mt-0 mx-auto text-center rounded-3xl mb-20 py-[55px] px-[50px] flex flex-col items-center max-lg:w-[80%] max-lg:rounded-[20px] max-md:p-10 max-sm:w-full max-sm:p-6 max-sm:mb-[60px] max-[425px]:rounded-[15px]">
                        <h3 className="font-titleFont text-4xl leading-[50px] mb-[30px] max-lg:text-3xl max-lg:leading-10 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-[425px]:text-base max-[425px]:mb-5">Be the first to know about new features, special offers, and more.</h3>
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

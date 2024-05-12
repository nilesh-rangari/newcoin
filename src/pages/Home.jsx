import Logo from '../assets/cip-pro-small.png'
import HeroBg from '../assets/hero.png'

import Msg from '../assets/message.svg'
import MsgOrange from '../assets/msg-orange.svg'
import MsgPurple from '../assets/msg-purple.svg'
import AboutCip from '../assets/about-cip.png'


export default function Home(){
    return(
        <div className="bg-dark max-w-[1920px] mx-auto overflow-x-hidden">
            
            {/* navbar */}

            <header className="fixed top-0 left-0 right-0 z-50 ">
                <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                <nav className="flex justify-between items-center pb-5 pt-6">
                    <div className="flex items-center gap-20">
                    <div className="relative h-10 aspect-[2/1]">
                        <img alt="Logo" loading="lazy" decoding="async" data-nimg="fill"
                            className="absolute h-full w-full text-transparent inset-0"
                            src={Logo} />
                    </div>
                    <div className="lg:flex hidden gap-12 text-m text-neutral-300">
                        <a className="font-medium" href="#section_home">Home</a>
                        <a className="font-medium" href="#section_aboutus">About Us</a>
                        <a className="font-medium" href="#section_roadmap">Roadmap</a>
                        <a className="font-medium" href="#section_upcoming">Upcoming</a>
                        <a className="font-medium" href="#section_liquidity">Liquidity</a>
                        <a className="font-medium" href="#section_faqs">FAQs</a>
                    </div>
                    </div>
                    <div className="flex items-center gap-3 ">
                        <a className="inline-block primary-button py-3 px-9 rounded bg-[linear-gradient(131deg,rgba(77,175,251,1),rgba(50,122,178,1)_50%,rgba(77,175,251,1))]" 
                        target="_blank" href="https://dapp.cippro.io/">
                            Launch DApp
                        </a>
                    <div className="cursor-pointer text-3xl lg:hidden">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" 
                            strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                    </div>
                </nav>
                <hr className="border-none h-[1px] bg-gradient-to-r from-[#16161600] via-[#69696988] to-[#16161600]" />
                </div>
            </header>


            <div className="relative">
            <div className="reveal-wrapper w-full relative">
                <div className="w-full transform-none opacity-100">
                <section 
                    className="min-h-screen flex items-center relative justify-center flex-col text-center py-10 pt-24" 
                    id="section_home"
                >
                    <h1 className="text-4xl sm:text-6xl lg:text-[5.25rem] 2xl:text-[7.5rem] leading-none font-bold w-[12ch] max-w-[90%]">
                        Put Your Money On Work
                    </h1>
                    <p className="text-sm text-neutral-400 my-4 md:my-10 w-[75%] md:w-[54ch]">
                        Unleash the power of AI within . Upgrade your productivity with, unlock the potential of AI powered application open AI chat app.
                    </p>
                    <div className="flex flex-col mt-5 md:mt-0 items-center md:flex-row gap-5">
                        <a className="inline-block  primary-button  font-medium text-white  focus:outline-none py-3 px-9 rounded bg-[linear-gradient(131deg,rgba(77,175,251,1),rgba(50,122,178,1)_50%,rgba(77,175,251,1))]" 
                            href="/">
                            Get Connected
                        </a>
                    </div>
                </section>
                </div>
                <div className="absolute top-1/2 left-0 w-full pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none"></div>
            </div>

            {/* section one  */}
            <section 
                className="min-h-[768px] flex items-center overflow-hidden relative" 
                id="section_aboutus"
                >
                <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 mx-auto">
                    <div className="reveal-wrapper ">
                    <div className=''>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-center lg:text-start">
                            What is Crypto Index Pool Pro?
                        </h3>
                        <div>
                        <article className="rounded-xl">
                            <div className="flex items-start gap-4 py-4">
                            <div className="shrink-0">
                                <div className="w-10 h-10 relative">
                                <img alt="Message Icon" loading="lazy" decoding="async" data-nimg="fill" 
                                    className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                                    src={Msg} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm md:text-base">
                                    Crypto Index Pool Pro is a simplified and secure participation in Staking, generating yield by interacting the Smart contract mechanism.
                                </p>
                            </div>
                            </div>
                            <div className="flex items-start gap-4 py-4">
                            <div className="shrink-0">
                                <div className="w-10 h-10 relative">
                                <img alt="Message Icon" loading="lazy" decoding="async" data-nimg="fill"
                                    className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent' 
                                    src={MsgOrange} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm md:text-base">CIP Pro token has made a stealth launch on the most advance chain in the crypto which is ARBITRUM.</p>
                            </div>
                            </div>
                            <div className="flex items-start gap-4 py-4">
                            <div className="shrink-0">
                                <div className="w-10 h-10 relative">
                                <img alt="Message Icon" loading="lazy" decoding="async" data-nimg="fill"
                                    className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent' 
                                    src={MsgPurple} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm md:text-base">
                                    Expanding the community by P2P networking with a mission to create a Giant space in the Blockchain Industry.
                                </p>
                            </div>
                            </div>
                        </article>
                        </div>
                    </div>
                    <div className="absolute w-full left-0 top-1/2"></div>
                    <div className="absolute inset-0 w-full h-full"></div>
                    </div>
                    <div className="row-start-1 lg:row-start-auto">
                    <div className="reveal-wrapper">
                        <div className=''>
                        <div className="relative aspect-square rounded-3xl max-w-[35rem] lg:max-w-none mx-auto">
                            <img alt="About Arbitrum Figure" loading="lazy" decoding="async" data-nimg="fill" 
                            className=" rounded-3xl absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover " 
                            src={AboutCip}
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <img 
                alt="Hero Background" loading="lazy" decoding="async" data-nimg="fill" 
                className="-z-10 absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain object-top text-transparent"
                src={HeroBg} 
            />
            </div>

            {/* section two  */}
            
        </div>
    )
}

           
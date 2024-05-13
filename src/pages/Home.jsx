import { Link } from 'react-router-dom';

import Logo from '../assets/cip-pro-small.png'
import HeroBg from '../assets/hero.png'

import Msg from '../assets/message.svg'
import MsgOrange from '../assets/msg-orange.svg'
import MsgPurple from '../assets/msg-purple.svg'
import AboutCip from '../assets/about-cip.png'
import Shadow from '../assets/shadow.svg'
import Pie from '../assets/pie.svg'
import Puzzle from '../assets/puzzle.svg'
import aboutArbitrum from '../assets/about-arbitrum.png'
import arbitrumObject from '../assets/arbitrum-object.png'
import roadmap from '../assets/roadmap.png'
import roadmapObject from '../assets/roadmap-object.png'
import roadmapLine from '../assets/roadmap-line.svg'
import roadmapLineMobile from '../assets/roadmap-line-mobile.svg'

import star from '../assets/star.svg'
import union from '../assets/union.svg'
import shadow2 from '../assets/shadow2.svg'

import tokenomics from '../assets/tokenomics.png'
import tokenomicsObject from '../assets/tokenomics-object.png'







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
                        <Link to="/Dapp">
                        <a className="inline-block primary-button py-3 px-9 rounded bg-[linear-gradient(131deg,rgba(77,175,251,1),rgba(50,122,178,1)_50%,rgba(77,175,251,1))]" 
                        target="_blank" href="">
                            Launch DApp
                        </a>
                        </Link>
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
            
            <div className="relative py-20">
                <div className="reveal-wrapper w-full relative">
                    <div className="undefined w-full">
                    <div className="flex items-center justify-center gap-7 sm:gap-24 ">
                        <div>
                        <h3 className="bg-gradient-to-r from-[#5C27FE] to-[#DEC7FF] font-gotham bg-clip-text text-4xl xs:text-6xl font-extrabold text-transparent sm:text-7xl md:text-8xl tracking-wide text-center">
                            24/7
                        </h3>
                        <p className="text-neutral-300 uppercase text-sm font-medium text-center mt-5">
                            active accounts
                        </p>
                        </div>
                        <div>
                        <h3 className="bg-gradient-to-r from-[#5C27FE] to-[#DEC7FF] font-gotham bg-clip-text text-4xl xs:text-6xl font-extrabold text-transparent sm:text-7xl md:text-8xl tracking-wide text-center">
                            365
                        </h3>
                        <p className="text-neutral-300 uppercase text-sm font-medium text-center mt-5">
                            days
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="absolute top-1/2 left-0 w-full  pointer-events-none"></div>
                    <div className="absolute inset-0 pointer-events-none"></div>
                </div>
                <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[800px] h-[800px] relative z-0 max-w-[90vw]">
                    <img 
                        alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill"
                        className='absolute h-full w-full inset-0 object-contain text-transparent'
                        src={Shadow} 
                    />
                    </div>
                </div>
                </div>


            {/* section 3  */}

            <div className="overflow-hidden">
                {/* section 3 A  */}

                <section className="min-h-[768px] flex items-center py-10 relative">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold pb-16">
                        Why Buy CIP Pro?
                    </h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 relative z-10 mb-16">
                        <div >
                        <div className="rounded-xl h-full w-full bg-[#FC7F0B]" 
                            //  style="perspective:300px;background:#FC7F0B"
                             >
                            <article 
                                // style="transform:rotateX(0.5deg)" 
                                className="rounded-xl flex flex-col gap-5 h-full bg-gradient-to-br from-[#161321dd] via-[#161321f4] to-dark p-4 shadow-sm transition hover:shadow-lg sm:px-8 sm:py-10">
                            <span className="inline-block relative w-14 h-14">
                                <img alt="Message Icon" loading="lazy" decoding="async" data-nimg="fill"
                                className='absolute h-full w-full inset-0 object-contain text-transparent' 
                                src={MsgOrange}
                                />
                            </span>
                            <a href="#">
                                <h3 className="text-md sm:text-lg md:text-xl font-semibold capitalize">
                                    Arbitrum Chain Pool
                                </h3>
                            </a>
                            <p className="text-sm lg:text-base font-thin leading-7 sm:pr-3">
                                CIP Pro has 5 Dynamic Liquidity pools on the Arbitrum one chain which will grow according to Crypto Bull Trends.
                            </p>
                            <a href="/" className="group inline-flex mt-auto items-center gap-1 text-sm relative">
                                Read More 
                                <span 
                                    aria-hidden="true" 
                                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    →
                                </span>
                            </a>
                            </article>
                        </div>
                        </div>
                        <div >
                        <div className="rounded-xl h-full w-full bg-[#0BA5FC] perspective-300" 
                            // style="perspective:300px;background:#0BA5FC"
                            >
                            <article 
                                // style="transform:rotateX(0.5deg)" 
                                className="transform rotate-x-0.5 rounded-xl flex flex-col gap-5 h-full bg-gradient-to-br from-[#161321dd] via-[#161321f4] to-dark p-4 shadow-sm transition hover:shadow-lg sm:px-8 sm:py-10">
                            <span className="inline-block relative w-14 h-14">
                                <img alt="Message Icon" loading="lazy" decoding="async" data-nimg="fill" 
                                className='absolute h-full w-full inset-0 object-contain text-transparent'
                                src={Pie}
                                />
                            </span>
                            <a href="#">
                                <h3 className="text-md sm:text-lg md:text-xl font-semibold capitalize">
                                    Stake to Earn
                                </h3>
                            </a>
                            <p className="text-sm lg:text-base font-thin leading-7 sm:pr-3">
                                You can earn up to 300% in 25 months by Staking your CIP Pro tokens
                            </p>
                            <a 
                                href="/" 
                                className="group inline-flex mt-auto items-center gap-1 text-sm relative">
                                    Read More 
                                    <span 
                                        aria-hidden="true" 
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                                        →
                                    </span>
                            </a>
                            </article>
                        </div>
                        </div>
                        <div >
                        <div 
                            className="rounded-xl h-full w-full bg-[#9064FF]" 
                            style={{perspective:"300px"}}
                            >
                            <article 
                                style={{transform:"rotateX(0.5deg)"}} 
                                className="rounded-xl flex flex-col gap-5 h-full bg-gradient-to-br from-[#161321dd] via-[#161321f4] to-dark p-4 shadow-sm transition hover:shadow-lg sm:px-8 sm:py-10"
                                >
                            <span className="inline-block relative w-14 h-14">
                                <img alt="Message Icon" loading="lazy" decoding="async" data-nimg="fill"
                                className='absolute h-full w-full inset-0 object-contain text-transparent'
                                    src={Puzzle}
                                />
                            </span>
                            <a href="#">
                                <h3 className="text-md sm:text-lg md:text-xl font-semibold capitalize">Decentralized Crosschain</h3>
                            </a>
                            <p className="text-sm lg:text-base font-thin leading-7 sm:pr-3">You can also earn by referring &amp; by creating P2P network up to 20 levels.</p>
                            <a 
                                href="/" 
                                className="group inline-flex mt-auto items-center gap-1 text-sm relative"
                                >
                                    Read More
                                     <span 
                                        aria-hidden="true" 
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                      >
                                        →
                                    </span>
                            </a>
                            </article>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute -right-[350px] -bottom-[100px]">
                    <div className="w-[800px] h-[800px] relative z-0">
                        <img alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill"
                        className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent' 
                        src={Shadow} />
                    </div>
                    </div>
                </section>

                {/* section 3 B  */}

                <section className="min-h-[768px] flex items-center relative py-10">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8 w-full">
                        <div className="reveal-wrapper">
                        <div 
                            // style="opacity: 1; transform: translateX(0%) scale(1) translateZ(0px);"
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
                                What is Arbitrum?
                            </h3>
                            <p className=" text-neutral-400 sm:pr-10 lg:w-[37.7ch]">
                                Arbitrum&apos;s suite of scaling solutions provides faster speeds at a significantly lower cost, with the same level of security as Ethereum. One of Ethereum&apos;s most promising Layer-2 solutions is Arbitrum, which is designed to boost Ethereum&apos;s speed and scalability by securely offloading the bulk of the network&apos;s transaction validation processes to a second-layer blockchain.
                            </p>
                        </div>

                        </div>
                        <div className="row-start-1 lg:row-start-auto ">
                        <div className="reveal-wrapper ">
                            <div 
                                // style="opacity: 1; transform: translateX(0%) scale(1) translateZ(0px);"
                            >
                            <div className="relative aspect-square mx-auto">
                                <img 
                                    alt="About Arbitrum Figure" loading="lazy" decoding="async" data-nimg="fill" 
                                    className="p-0.5 rounded-3xl absolute h-full w-full inset-0 object-cover text-transparent" 
                                    src={aboutArbitrum}
                                    />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute left-0 -bottom-[300px] -z-10">
                        <div className="aspect-[1/3] h-[800px] relative">
                            <img alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill"
                            className='absolute h-full w-full inset-0 object-contain text-transparent'
                            src={arbitrumObject}
                        />
                        </div>
                    </div>
                </section>

                {/* section 3 C  */}

                <div className="relative">
                    <section className="min-h-[414px] md:min-h-[768px] flex items-center relative">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                        <article 
                            className="relative rounded-xl aspect-[3/1] bg-gradient-to-b from-[#02020233] to-[#6F6F6F1A] border border-neutral-700 flex items-center justify-center">
                        <h3 className="text-center text-sm md:text-xl lg:text-3xl md:w-[30ch] font-semibold lg:leading-10 p-7 md:p-0">
                            <div className="reveal-wrapper w-full relative">
                            <div className="undefined w-full" 
                                // style="opacity: 0; transform: scale(1.15) translateZ(0px);"
                                >
                                <span className="text-[#c7a6fb]">
                                    CIP Pro DAPP
                                </span> 
                                and Token functionality is Totally Decentralized with secured Trustless Mechanism.
                            </div>
            
                            </div>
                        </h3>
                        <div className="absolute left-0 top-[10%] -translate-x-1/2">
                            <img 
                                alt="Star Icon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" 
                                className='text-transparent'  
                                src={star}
                            />
                        </div>
                        <div className="absolute bottom-0 right-[10%] translate-y-1/2">
                            <img 
                                alt="Star Icon" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                                className='text-transparent' 
                                src={star}
                            />
                        </div>
                        <div className="absolute top-0 right-0 -translate-y-[75%] translate-x-[85%]">
                            <img 
                                alt="Star Icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                                className='text-transparent'
                                src={union}
                            />
                        </div>
                        </article>
                    </div>
                    <div className="absolute -right-[350px] top-[100px]">
                        <div className="w-[700px] h-[700px] relative z-0">
                        <img 
                            alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full inset-0 object-contain text-transparent'
                            src={shadow2}
                        />
                        </div>
                    </div>
                    </section>
                    <section className="relative -mb-10 md:mb-32" id="section_roadmap">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                        <div className="md:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">CIP Pro Roadmap</h2>
                        <p className="text-sm text-neutral-400 md:w-[46ch]">2023-2024</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative aspect-[2/1] lg:aspect-[3/1] hidden md:block">
                        <img 
                            alt="Roadmap Line Art" loading="lazy" decoding="async" data-nimg="fill"
                            className='absolute h-full w-full inset-0 text-transparent' 
                            src={roadmapLine}
                        />
                        </div>
                        <div className="relative aspect-[1/4] md:hidden w-2/3">
                        <img 
                            alt="Roadmap Line Art" loading="lazy" decoding="async" data-nimg="fill"
                            className='absolute h-full w-full inset-0 text-transparent'
                            src={roadmapLineMobile}
                        />
                        </div>
                        <div 
                            className="w-[17ch] text-center absolute h-0 flex flex-col justify-center left-[2%] top-[100%]" 
                        >
                        <h5 className="bg-gradient-to-b from-[#8F00FF] to-[#8F00FF77] font-sora bg-clip-text font-semibold text-transparent text-xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                            Q3-23
                        </h5>
                        <p className="md:mt-2 mt-1 text-neutral-400 text-[11px] sm:text-sm w-[19ch] mx-auto sm:w-full">
                            Idea Implementation Creating Team.
                        </p>
                        </div>
                        <div 
                            className="w-[17ch] text-center absolute h-0 flex flex-col justify-center left-[17%] top-[40%]" 
                            >
                        <h5 className="bg-gradient-to-b from-[#8F00FF] to-[#8F00FF77] font-sora bg-clip-text font-semibold text-transparent text-xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                            Q3-23
                        </h5>
                        <p className="md:mt-2 mt-1 text-neutral-400 text-[11px] sm:text-sm w-[19ch] mx-auto sm:w-full">
                            Creating smart contract DEX launch, Releasing whitepaper and Staking Contract
                        </p>
                        </div>
                        <div 
                            className="w-[17ch] text-center absolute h-0 flex flex-col justify-center left-[36%] top-[95%]" 
                        >
                        <h5 className="bg-gradient-to-b from-[#8F00FF] to-[#8F00FF77] font-sora bg-clip-text font-semibold text-transparent text-xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                            Q3-23
                        </h5>
                        <p className="md:mt-2 mt-1 text-neutral-400 text-[11px] sm:text-sm w-[19ch] mx-auto sm:w-full">
                            Integration of new protocols Discount Crypto.
                        </p>
                        </div>
                        <div 
                            className="w-[17ch] text-center absolute h-0 flex flex-col justify-center left-[45%] top-[20%]" 
                            >
                        <h5 className="bg-gradient-to-b from-[#8F00FF] to-[#8F00FF77] font-sora bg-clip-text font-semibold text-transparent text-xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                            Q3-23
                        </h5>
                        <p className="md:mt-2 mt-1 text-neutral-400 text-[11px] sm:text-sm w-[19ch] mx-auto sm:w-full">
                            CMC &amp; CG Team Expansion Community Events. Rule of Seven launch
                        </p>
                        </div>
                        <div 
                            className="w-[17ch] text-center absolute h-0 flex flex-col justify-center left-[70%] top-[78%]" 
                        >
                        <h5 className="bg-gradient-to-b from-[#8F00FF] to-[#8F00FF77] font-sora bg-clip-text font-semibold text-transparent text-xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                            Q3-23
                        </h5>
                        <p className="md:mt-2 mt-1 text-neutral-400 text-[11px] sm:text-sm w-[19ch] mx-auto sm:w-full">
                            Creating more Liquidity Pools &amp; CEX listing. Multichain Bridge customization.
                        </p>
                        </div>
                        <div 
                            className="w-[17ch] text-center absolute h-0 flex flex-col justify-center left-[78%] top-[0%]" 
                        >
                        <h5 className="bg-gradient-to-b from-[#8F00FF] to-[#8F00FF77] font-sora bg-clip-text font-semibold text-transparent text-xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                            Q3-23
                        </h5>
                        <p className="md:mt-2 mt-1 text-neutral-400 text-[11px] sm:text-sm w-[19ch] mx-auto sm:w-full">
                            Global Partnerships Team and Advisory Expansion.
                        </p>
                        </div>
                    </div>
                    <div className="absolute right-0 -scale-100 md:scale-100 md:right-auto md:left-0 top-0 md:top-[125px] -z-10">
                        <img 
                            alt="Shadow Effect" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" 
                            className='text-transparent'
                            src={roadmapObject}
                        />
                    </div>
                    </section>
                    <img 
                        alt="Roadmap Background" loading="lazy" decoding="async" data-nimg="fill" 
                        className="-z-10 absolute h-full w-full inset-0 object-cover object-bottom text-transparent"
                        src={roadmap}
                    />
                </div>

                {/* section 3 D  */}

                <section className="min-h-[414px] md:min-h-[768px] relative">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <div className="flex items-center justify-center flex-col text-center py-10 pt-24 relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-center">
                            Tokenomics
                        </h2>
                        <div className="text-sm opacity-75 sm:text-base lg:text-xl py-3 px-7 lg:py-4 lg:px-10 border border-neutral-600 rounded-xl font-semibold bg-gradient-to-b to-[#9146001A] text-[#FF8F14] from-[#DD6E0745]">Total Supply of token 10 million</div>
                        <div className="w-full">
                        <div 
                            className="relative aspect-[5/4.75] w-full mx-auto"
                            // style={{ transform: 'scale(0.25) translateZ(0px)' }} 
                            >
                            <img alt="Tokenomics Chart" loading="lazy" decoding="async" data-nimg="fill"
                                className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                                src={tokenomics} 
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute left-0 top-[125px] z-0">
                    <div className="aspect-[1/3] h-[500px] relative">
                        <img alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                            src={tokenomicsObject}
                            />
                    </div>
                    </div>
                    <div className="absolute sm:left-[8%] top-[15%] z-0">
                    <div className="relative w-8 sm:w-14 aspect-square">
                        <img alt="Star Icon" loading="lazy" decoding="async" data-nimg="fill" 
                        className='absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent'
                            src={star}
                        />
                    </div>
                    </div>
                    <div className="absolute -right-[350px] -top-[250px] z-0">
                    <div className="w-[800px] h-[800px] relative">
                        <img alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                            src={Shadow}
                        />
                    </div>
                    </div>
                </section>

                {/* section 3 E  */}

                <section className="min-h-[414px] md:min-h-[768px] relative" id="section_upcoming">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <div className="flex items-center justify-center flex-col text-center py-10 pt-24 relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-center">
                            Upcoming <span className="text-[#00A3FF]">Contracts</span> 
                            <br/>
                            Integration
                        </h2>
                        <p className="text-sm md:w-[46ch]">On Global Pool ROI</p>
                        <div className="grid lg:grid-cols-2 gap-10 pt-20">
                        <div 
                            // style="opacity: 0; transform: scale(0.85) translateZ(0px);"
                            >
                            <article className="text-start rounded-lg bg-[#6A6A6A1A] p-4 sm:p-6 lg:p-12 shadow-2xl">
                            <div className="flex items-start gap-5 sm:gap-8">
                                <div 
                                    style={{backgroundImage: "linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)"}}
                                    // style="background:linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)" 
                                    className="aspect-square rounded-lg text-xl lg:text-2xl font-semibold grid h-12 lg:h-14 place-content-center" 
                                    aria-hidden="true"
                                >
                                    01
                                </div>
                            <div>
                                <h3 className="text-lg font-medium font-sora sm:text-xl sm:font-semibold">
                                    Discount Crypto
                                </h3>
                                <p className="text-sm text-neutral-400 mt-1 sm:mt-2 lg:mt-3">
                                    Offering Discounted Crypto for CIP Pro Tokens
                                </p>
                                </div>
                            </div>
                            </article>
                        </div>
                        <div 
                            // style="opacity: 0; transform: scale(0.85) translateZ(0px);"
                            >
                            <article className="text-start rounded-lg bg-[#6A6A6A1A] p-4 sm:p-6 lg:p-12 shadow-2xl">
                            <div className="flex items-start gap-5 sm:gap-8">
                                <div 
                                    style={{backgroundImage: "linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)"}}
                                    // style="background:linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)" 
                                    className="aspect-square rounded-lg text-xl lg:text-2xl font-semibold grid h-12 lg:h-14 place-content-center" 
                                    aria-hidden="true"
                                    >
                                        02
                                </div>
                                <div>
                                <h3 className="text-lg font-medium font-sora sm:text-xl sm:font-semibold">
                                    Multichain Bridge
                                </h3>
                                <p className="text-sm text-neutral-400 mt-1 sm:mt-2 lg:mt-3">One click solution to bridge Multichain Token</p>
                                </div>
                            </div>
                            </article>
                        </div>
                        <div 
                            // style="opacity: 0; transform: scale(0.85) translateZ(0px);"
                            >
                            <article className="text-start rounded-lg bg-[#6A6A6A1A] p-4 sm:p-6 lg:p-12 shadow-2xl">
                            <div className="flex items-start gap-5 sm:gap-8">
                                <div 
                                    style={{backgroundImage: "linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)"}}
                                    // style="background:linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)" 
                                    className="aspect-square rounded-lg text-xl lg:text-2xl font-semibold grid h-12 lg:h-14 place-content-center" 
                                    aria-hidden="true"
                                    >
                                        03
                                </div>
                                <div>
                                <h3 className="text-lg font-medium font-sora sm:text-xl sm:font-semibold">
                                    Rule of Seven
                                </h3>
                                <p className="text-sm text-neutral-400 mt-1 sm:mt-2 lg:mt-3">
                                    Compounding Profit and Capital followed by Seven Rules of Buying Assets to support Liquidity.
                                </p>
                                </div>
                            </div>
                            </article>
                        </div>
                        <div 
                            // style="opacity: 0; transform: scale(0.85) translateZ(0px);"
                            >
                            <article className="text-start rounded-lg bg-[#6A6A6A1A] p-4 sm:p-6 lg:p-12 shadow-2xl">
                            <div className="flex items-start gap-5 sm:gap-8">
                                <div 
                                    style={{backgroundImage: 'linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)'}}
                                    // style="background:linear-gradient(115.23deg, #109BFF 16.25%, #1F1C29 230.73%)" 
                                    className="aspect-square rounded-lg text-xl lg:text-2xl font-semibold grid h-12 lg:h-14 place-content-center" 
                                    aria-hidden="true">
                                        04
                                </div>
                                <div>
                                <h3 className="text-lg font-medium font-sora sm:text-xl sm:font-semibold">
                                    NFTS
                                </h3>
                                <p className="text-sm text-neutral-400 mt-1 sm:mt-2 lg:mt-3">
                                    Limited Edition of Non-Fungible Tokens benefitting the community.
                                </p>
                                </div>
                            </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute -left-[350px] -top-[100px]">
                    <div className="w-[800px] h-[800px] relative z-0">
                        <img 
                            alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                            src={Shadow}
                        />
                    </div>
                    </div>
                    <div className="absolute -right-[350px] -bottom-[300px]">
                    <div className="w-[800px] h-[800px] relative z-0">
                        <img 
                            alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                            src={Shadow}
                        />
                    </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

           
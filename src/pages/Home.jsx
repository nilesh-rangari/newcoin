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
import seven from '../assets/seven.png'
import autoLiquidityObject1 from '../assets/auto-liquidity-object-1.png'
import autoLiquidity1 from '../assets/auto-liquidity-1.png'
import autoLiquidity2 from '../assets/auto-liquidity-2.png'

import autoLiquidityObject2 from '../assets/auto-liquidity-object-2.png'
import cup from '../assets/cup.svg'
import diamond from '../assets/diamond.svg'
import silverStar from '../assets/silver-star.svg'
import thinStar from '../assets/thin-star.svg'
import arrowDown from '../assets/arrow-down.svg'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import { useEffect, useState } from 'react';





export default function Home(){
    const [scrollNav, setScrollNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <div className="bg-dark max-w-[1920px] mx-auto overflow-x-hidden">
            
            {/* navbar */}

            <header className={`fixed top-0 left-0 right-0 z-50  ${scrollNav ? 'bg-[#081429]' : 'bg-transparent'}`}>
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

                {/* section 3 F  */}

                <section className="min-h-[414px] md:min-h-[768px] relative">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <div className="flex items-center justify-center flex-col text-center py-10 pt-24 relative z-10">
                        <p className="text-sm text-[#EA9444] mb-4">Discounted Crpyto</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-center">Rule of Seven</h2>
                        <p className="mt-1 text-sm text-neutral-400 max-w-[33ch]">
                            Compounding Profit and Capital followed by Seven Rules of Buying Assets to support Liquidity.
                        </p>
                        <div className="text-start my-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8">
                            <div 
                                // style="perspective:300px" 
                                className="row-start-1 lg:row-start-auto "
                                >
                                <div 
                                    className="relative aspect-square  rounded-3xl max-w-[35rem] lg:max-w-none mx-auto" 
                                    // style="transform: rotateY(-25deg) translateZ(0px);"
                                    >
                                <img alt="Seven Shape" loading="lazy" decoding="async" data-nimg="fill" 
                                    className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                                    src={seven}
                                    />
                                </div>
                            </div>
                        <div className="text-start rounded-lg bg-[#6A6A6A1A] p-4 sm:p-6 lg:p-12 lg:pb-20 shadow-2xl">
                            <p className="text-sm text-neutral-300 leading-6">
                                Have you heard of the rule of Seven strategy in trading? It&amp;apo;s a simple but effective strategy that can turn $10,000 into $1.28 million. You you. Here&amp;apo;s how it works. Find seven coins one at a time to invest in. For example, if you invest $10,000 in polka dot and the price doubles, your amount will be $20,000. Then find another coin and put $20,000 in that coin to get double. Continue this process for seven coins without taking your principal and profit thousands of coins double in crypto during every bull run. All you need to do is find seven coins in year to turn your $10,000 into $1.28 million. Crypto Index Pool Pro is using this strategy to increase liquidity in pools. You can also follow this strategy with your portfolio to&nbsp;make&nbsp;big&nbsp;money.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute left-[50%] top-[50%] -translate-x-1/3 -translate-y-1/4">
                    <div className="w-[800px] h-[800px] relative z-0">
                        <img alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill"
                        className='absolute h-full w-full inset-0 object-contain text-transparent' 
                        src={Shadow}
                        />
                    </div>
                    </div>
                    <div className="absolute w-full left-0 top-1/2"></div>
                </section>

                 {/* liquidity section  */}

                 <section 
                    className="min-h-[768px] flex items-center relative pt-10" id="section_liquidity">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8 w-full">
                        <div className="reveal-wrapper ">
                        <div 
                            // style="opacity:0;transform:translateX(-100%) scale(0.75) translateZ(0)"
                            >
                            <p className="text-sm text-[#C792FF] mb-4">Discounted Crpyto</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">CIP Pro Auto Liquidity Generation</h2>
                            <p className="mt-1 text-sm text-neutral-400">
                                Crypto Index Pool Pro has implanted a dynamic concept of Generating liquidity, unique Idea and research-based concept with a great autonomous working model will be associated with the running smart contract, These multiple supporting protocols will be running in the crypto space initializing the concept and earn fees by interacting with the community. Protocol like &quot;DISCOUNT CRYPTO will attracts the community by its unique working model, this concept will be only available for the CIP Pro community, community must fulfil the requirement of the CIP Pro protocol instructions to enjoy the benefit of Discounted crypto. The binding contemplation of Crypto Index Pool Pro ecosystem will lead to the stability for the better future of investors. 
                                <br/>
                            <br/>As crypto industry has always been building the new innovations and bringing updations in the running concepts, there is always a need of an endless requirements for the multiple tools in the decentralized industry. It has always been a challenge for the centralization governance to integrate with decentralized governance, the decentralized nature and building the products anonymously is the beauty of this Industry, as we have seen the rise of decentralized finance in the previous years, this has taken blockchain innovations to another era. 
                            <br/>
                            <br/>Things like Decentralized Email DNS service &amp; IFPS is supporting web3 which has changed the traditional system of web.
                            </p>
                        </div>
                        <div className="absolute w-full left-0 top-1/2"></div>
                        <div className="absolute inset-0 w-full h-full"></div>
                        </div>
                        <div className="row-start-1 lg:row-start-auto ">
                        <div className="reveal-wrapper ">
                            <div 
                                // style="opacity:0;transform:translateX(100%) scale(0.75) translateZ(0)"
                                >
                            <div className="relative aspect-square mx-auto">
                                <img alt="About Arbitrum Figure" loading="lazy" decoding="async" data-nimg="fill" 
                                    className="p-0.5 rounded-3xl absolute h-full w-full inset-0 object-contain text-transparent" 
                                    src={autoLiquidity1}
                                    />
                            </div>
                            </div>
                            <div className="absolute w-full left-0 top-1/2"></div>
                            <div className="absolute inset-0 w-full h-full"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute left-0 top-[25%]">
                    <div className="w-[400px] h-[800px] relative z-0 max-w-[90vw]">
                        <img 
                            alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                            src={autoLiquidityObject1}
                        />
                    </div>
                    </div>
                    <div className="absolute bottom-0 right-[10%] -translate-x-1/2">
                    <img alt="Star Icon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" 
                        className='text-transparent'
                        // style="color:transparent" 
                        src={star}
                    />
                    </div>
                </section>

                {/* new section  */}

                   <section className="min-h-[768px] flex items-center relative pb-10">
                     <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8 w-full">
                         <div className="row-start-1 lg:row-start-auto ">
                           <div className="reveal-wrapper ">
                             <div 
                                // style="opacity:0;transform:translateX(-100%) scale(0.75) translateZ(0)"
                                >
                               <div className="relative aspect-square mx-auto">
                                 <img 
                                    alt="About Arbitrum Figure" loading="lazy" decoding="async" data-nimg="fill" 
                                    className="p-0.5 rounded-3xl absolute h-full w-full top-0 left-0 object-contain text-transparent" 
                                    src={autoLiquidity2}
                                    />
                               </div>
                             </div>
                             <div className="absolute w-full left-0 top-1/2"></div>
                             <div className="absolute inset-0 w-full h-full"></div>
                           </div>
                         </div>
                         <div className="reveal-wrapper ">
                           <div 
                                // style="opacity:0;transform:translateX(100%) scale(0.75) translateZ(0)"
                                >
                             <p className="text-sm text-[#3EFF8B] mb-4">Multichain bridge</p>
                             <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">
                                CIP Pro Auto Liquidity <br/> 
                                Generation 
                             </h2>
                             <p className="mt-1 text-sm text-neutral-400">
                                After &quot;Discounted Crypto&quot; we are launching the multichain bridge for the community which will a great tool to transfer assets from multichain to one chain, A multichain bridge is a technology that allows users to transfer assets or data between different blockchains. There are different types of multichain bridges, such as cross-chain bridges and cross-chain routers. Cross-chain bridges lock the original asset in a secure address and mint a wrapped asset on the destination chain. 
                                <br/>
                               <br/>Cross-chain routers allow users to swap between any two chains directly without wrapping. This product will be also generating fees by the transactions volume which will support the CIP Pro liquidity ponderation to the protocol
                             </p>
                           </div>
                           <div className="absolute w-full left-0 top-1/2"></div>
                           <div className="absolute inset-0 w-full h-full"></div>
                         </div>
                       </div>
                     </div>
                     <div className="absolute right-0 top-[30%]">
                       <div className="w-[400px] h-[800px] relative z-0 max-w-[90vw] translate-x-1/2">
                         <img 
                            alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full top-0 right-0 bottom-0 left-0 object-contain text-transparent'
                            src={autoLiquidityObject2}
                         />
                       </div>
                     </div>
                   </section>

                {/* newsection 2  */}

                <section className="min-h-[414px] md:min-h-[768px] relative">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <div className="flex items-center justify-center flex-col text-center py-10 pt-24 relative z-10">
                        <p className="text-sm md:w-[46ch] mb-3">On Global Pool ROI</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                            Universal 
                            <span className="text-[#CD3AFF]">Pools</span> Income </h2>
                        <div 
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 lg:mt-20" 
                            // style="opacity:0;transform:scale(0.75) translateZ(0)"
                        >
                        <div>
                            <div 
                                className="rounded-[0.6rem] text-start bg-[#FFFFFF88]" 
                                // style="perspective:300px;background:#FFFFFF88;transform:scale(.85) translateY(5%);transform-origin:top right"
                                >
                            <div className="packageCard h-full text-sm sm:text-base transition duration-300 bg-[#24202d] p-5 md:p-8 rounded-[0.5rem]">
                                <img 
                                    alt="Diamond Icon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" 
                                    // style="color:transparent" 
                                    className='text-transparent'
                                    src={diamond}
                                />
                                <h3 className="text-[1.75em] font-semibold py-5">
                                    Kohinoor
                                </h3>
                                <div 
                                    // style="background:linear-gradient(90deg, #12B879, #037B42)" 
                                    className="mt-3 p-5 rounded-md   bg-gradient-to-r from-green-500 to-green-900"
                                    >
                                <h4 className="text-[1em] font-semibold mb-1 uppercase">Condition</h4>
                                <p className="text-[.75em] leading-5">User must be MARS &amp; 3 VENUS referrals in 3 LEGS</p>
                                </div>
                                <div className="pt-5 pb-3 uppercase font-medium text-[1em]">Reward</div>
                                <div 
                                    // style="color:#3DE0A2" 
                                    className="text-[2.5em] mt-1 font-semibold text-[#3DE0A2]"
                                    >
                                        6%
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div 
                                className="rounded-[0.6rem] text-start bg-[#FFFFFF88]" 
                                // style="perspective:300px;background:#FFFFFF88;transform-origin:top right"
                                >
                            <div className="packageCard h-full text-sm sm:text-base transition duration-300 bg-[#24202d] p-5 md:p-8 rounded-[0.5rem]">
                                <img 
                                    alt="Diamond Icon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" 
                                    className='text-transparent'
                                    // style="color:transparent" 
                                    src={cup}
                                    />
                                <h3 className="text-[1.75em] font-semibold py-5">Gold Plan</h3>
                                <div 
                                    // style="background:linear-gradient(90deg, #FEB54A99, #FF3A6899)" 
                                    className="mt-3 p-5 rounded-md   bg-gradient-to-r from-yellow-300 via-red-600 to-transparent"
                                    >
                                <h4 className="text-[1em] font-semibold mb-1 uppercase">Condition</h4>
                                <p className="text-[.75em] leading-5">User must be MARS &amp; 3 VENUS referrals in 3 LEGS</p>
                                </div>
                                <div className="pt-5 pb-3 uppercase font-medium text-[1em]">Reward</div>
                                <div 
                                    // style="color:#FD7F08" 
                                    className="text-[2.5em] mt-1 font-semibold text-[#FD7F08]"
                                    >
                                        10%
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div 
                                className="rounded-[0.6rem] text-start bg-[#FFFFFF88]" 
                                // style="perspective:300px;background:#FFFFFF88;transform-origin:top right"
                                >
                            <div className="packageCard h-full text-sm sm:text-base transition duration-300 bg-[#24202d] p-5 md:p-8 rounded-[0.5rem]"
                                >
                                <img 
                                    alt="Diamond Icon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" 
                                    // style="color:transparent" 
                                    className='text-transparent'
                                    src={diamond}
                                    />
                                <h3 className="text-[1.75em] font-semibold py-5">Diamond</h3>
                                <div 
                                    // style="background:linear-gradient(90deg, #DB70FF99, #76009F99)" 
                                    className="mt-3 p-5 rounded-md   bg-gradient-to-r from-purple-500 to-indigo-900"
                                    >
                                <h4 className="text-[1em] font-semibold mb-1 uppercase">Condition</h4>
                                <p className="text-[.75em] leading-5">User must be MARS &amp; 3 VENUS referrals in 3 LEGS</p>
                                </div>
                                <div className="pt-5 pb-3 uppercase font-medium text-[1em]">Reward</div>
                                <div 
                                    // style="color:#CD3AFF" 
                                    className="text-[2.5em] mt-1 font-semibold text-[#CD3AFF]"
                                    >
                                        8%
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div 
                                className="rounded-[0.6rem] text-start bg-[FFFFFF88]" 
                                // style="perspective:300px;background:#FFFFFF88;transform:scale(.85) translateY(5%);transform-origin:top left"
                                >
                            <div 
                                className="packageCard h-full text-sm sm:text-base transition duration-300 bg-[#24202d] p-5 md:p-8 rounded-[0.5rem]"
                                >
                                <img
                                    alt="Diamond Icon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" 
                                    // style="color:transparent" 
                                    className='text-transparent'
                                    src={silverStar}
                                />
                                <h3 className="text-[1.75em] font-semibold py-5">Platinum</h3>
                                <div 
                                    // style="background:linear-gradient(90deg, #54C0FF99, #12619699)" 
                                    className="mt-3 p-5 rounded-md    bg-gradient-to-r from-blue-300 to-blue-900"
                                    >
                                <h4 className="text-[1em] font-semibold mb-1 uppercase">Condition</h4>
                                <p className="text-[.75em] leading-5">User must be MARS &amp; 3 VENUS referrals in 3 LEGS</p>
                                </div>
                                <div className="pt-5 pb-3 uppercase font-medium text-[1em]">Reward</div>
                                <div 
                                    // style="color:#00A0FE" 
                                    className="text-[2.5em] mt-1 font-semibold text-[#00A0FE]"
                                    >8%
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute -left-[500px] -top-[100px]">
                    <div 
                        className="w-[800px] h-[800px] relative z-0"
                        >
                        <img 
                            alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill"
                            className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent' 
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:contain;color:transparent" 
                            src={shadow2}
                            />
                    </div>
                    </div>
                </section>

                {/* FAQs section  */}

                <section className="py-20 relative" id="section_faqs">
                    <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
                    <div className="text-center flex flex-col items-center justify-center relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 inline-block relative">
                            Frequently Asked Questions 
                            <div className="absolute -top-1/4 right-0 translate-x-[200%] hidden md:block">
                            <img 
                                alt="Star Icon" loading="lazy" width="35" height="35" decoding="async" data-nimg="1" 
                                // style="color:transparent" 
                                className='text-transparent'
                                src={thinStar}
                            />
                        </div>
                        </h2>
                        <p className="text-sm md:text-lg font-thin text-neutral-400 md:w-[46ch]">
                            Dalma is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.
                            </p>
                        <div className="space-y-4 text-start w-full lg:w-[65%] my-20">
                        <div 
                            className="rounded-[0.6rem] bg-[#FFFFFF88]" 
                            // style="perspective:300px;background:#FFFFFF88;transform:translateX(150%) translateZ(0)"
                            >
                            <details 
                                className="group text-sm sm:text-base [&amp;_summary::-webkit-details-marker]:hidden transition duration-300 bg-[#24202d] open:bg-[#2d2b37] p-5 md:p-8 rounded-[0.5rem]">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-[0.5rem]">
                                <h2 className="font-medium">What is DAPP?</h2>
                                <img 
                                    alt="Arrow Down Icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" 
                                    className="shrink-0 transition duration-300 group-open:-rotate-180 text-transparent" 
                                    // style="color:transparent"
                                    src={arrowDown}
                                />
                            </summary>
                            <p className="pt-3 leading-relaxed text-neutral-400">
                                Orders are usually shipped within 1-2 business days after placing the order.
                            </p>
                            </details>
                        </div>
                        <div 
                            className="rounded-[0.6rem] bg-[##FFFFFF88]" 
                            // style="perspective:300px;background:#FFFFFF88;transform:translateX(150%) translateZ(0)"
                            >
                            <details className="group text-sm sm:text-base [&amp;_summary::-webkit-details-marker]:hidden transition duration-300 bg-[#24202d] open:bg-[#2d2b37] p-5 md:p-8 rounded-[0.5rem]">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-[0.5rem]">
                                <h2 className="font-medium">How do they Work?</h2>
                                <img 
                                    alt="Arrow Down Icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" 
                                    className="shrink-0 transition duration-300 group-open:-rotate-180 text-transparent" 
                                    // style="color:transparent" 
                                    src={arrowDown}
                                />
                            </summary>
                            <p className="pt-3 leading-relaxed text-neutral-400">
                                Orders are usually shipped within 1-2 business days after placing the order.
                                </p>
                            </details>
                        </div>
                        <div 
                            className="rounded-[0.6rem] bg-[#FFFFFF88]" 
                            // style="perspective:300px;background:#FFFFFF88;transform:translateX(150%) translateZ(0)"
                            >
                            <details className="group text-sm sm:text-base [&amp;_summary::-webkit-details-marker]:hidden transition duration-300 bg-[#24202d] open:bg-[#2d2b37] p-5 md:p-8 rounded-[0.5rem]">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-[0.5rem]">
                                <h2 className="font-medium">What are the benefits of DAPP?</h2>
                                <img 
                                    alt="Arrow Down Icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" 
                                    className="shrink-0 transition duration-300 group-open:-rotate-180 text-transparent"
                                    src={arrowDown}
                                />
                            </summary>
                            <p className="pt-3 leading-relaxed text-neutral-400">
                                Orders are usually shipped within 1-2 business days after placing the order.
                                </p>
                            </details>
                        </div>
                        <div 
                            className="rounded-[0.6rem] bg-[#FFFFFF88]" 
                            // style="perspective:300px;background:#FFFFFF88;transform:translateX(150%) translateZ(0)"
                            >
                            <details 
                                className="group text-sm sm:text-base [&amp;_summary::-webkit-details-marker]:hidden transition duration-300 bg-[#24202d] open:bg-[#2d2b37] p-5 md:p-8 rounded-[0.5rem]">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-[0.5rem]">
                                <h2 className="font-medium">What are the Features of DAPP?</h2>
                                <img 
                                    alt="Arrow Down Icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" 
                                    className="shrink-0 transition duration-300 group-open:-rotate-180 text-transparent" 
                                    src={arrowDown}
                                />
                            </summary>
                            <p className="pt-3 leading-relaxed text-neutral-400">
                                Orders are usually shipped within 1-2 business days after placing the order.</p>
                            </details>
                        </div>
                        <div 
                            className="rounded-[0.6rem] bg-[#FFFFFF88]" 
                            // style="perspective:300px;background:#FFFFFF88;transform:translateX(150%) translateZ(0)"
                            >
                            <details className="group text-sm sm:text-base [&amp;_summary::-webkit-details-marker]:hidden transition duration-300 bg-[#24202d] open:bg-[#2d2b37] p-5 md:p-8 rounded-[0.5rem]">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-[0.5rem]">
                                <h2 className="font-medium">How does it Function?</h2>
                                <img 
                                    alt="Arrow Down Icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" 
                                    className="shrink-0 transition duration-300 group-open:-rotate-180 text-transparent" 
                                    src={arrowDown}
                                />
                            </summary>
                            <p className="pt-3 leading-relaxed text-neutral-400">
                                Orders are usually shipped within 1-2 business days after placing the order.</p>
                            </details>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="absolute -left-[350px] -top-[100px]">
                    <div className="w-[800px] h-[800px] relative z-0">
                        <img alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                        className='absolute h-full w-full inset-0 object-contain text-transparent'
                        // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:contain;color:transparent" 
                        src={Shadow}
                        />
                    </div>
                    </div>
                </section>

                {/* footer sectioon  */}

                <div className="relative">
                    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                        <div className="grid grid-cols-2 gap-8 lg:col-span-4 md:grid-cols-4">
                        <div className="flex flex-col gap-4">
                            <div className="relative h-10 aspect-square mb-3">
                            <img 
                                alt="Logo" loading="lazy" decoding="async" data-nimg="fill" 
                                className="object-contain object-left absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent" 
                                // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" 
                                src={Logo}
                            />
                            </div>
                            <a className="text-neutral-300 text-sm flex items-center gap-2" href="/">
                                <img 
                                    alt="Mail Icon" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" 
                                    // style="color:transparent" 
                                    className='text-transparent'
                                    src={mail}
                                />
                                    help@frybix.com 
                            </a>
                            <a className="text-neutral-300 text-sm flex items-center gap-2" href="/">
                                <img 
                                    alt="Phone Icon" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" 
                                    // style="color:transparent" 
                                    className='text-transparent'
                                    src={phone}
                                />
                                    +1 234 456 678 89 
                            </a>
                        </div>
                        <div>
                            <p className="font-medium text-xl mb-3 tracking-wide capitalize">Links</p>
                            <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">Home</a>
                            </li>
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">About Us</a>
                            </li>
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">Bookings</a>
                            </li>
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">Blog</a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium text-xl mb-3 tracking-wide capitalize">legal</p>
                            <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">terms of use</a>
                            </li>
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">privacy policy</a>
                            </li>
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">cookie policy</a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium text-xl mb-3 tracking-wide capitalize">product</p>
                            <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">take tour</a>
                            </li>
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">live chat</a>
                            </li>
                            <li>
                                <a href="/" className="text-neutral-300 text-sm capitalize">reveiws</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="md:max-w-md lg:col-span-2 row-start-1 lg:row-start-auto mb-10 lg:mb-0">
                        <span className="font-medium text-xl tracking-wid">Newsletter</span>
                        <p className="text-neutral-400 text-sm mt-3">Stay Up To Date</p>
                        <form className="flex mt-4 bg-neutral-800 p-2 rounded-lg max-w-[90%] lg:w-[75%]">
                            <input 
                                placeholder="Your Email" required="" type="text" 
                                className="text-sm flex-grow w-full h-12 px-4 transition duration-200 bg-transparent rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                            <button className="inline-block primary-button">
                                Subscribe
                            </button>
                        </form>
                        </div>
                    </div>
                    <hr className="border-none h-[1px] bg-gradient-to-r from-[#16161600] via-[#69696988] to-[#16161600]" />
                    <div className="flex justify-center pt-5 pb-10">
                        <p className="text-sm">Copyright 2022 uifry.com All Rights Reserved</p>
                    </div>
                    </div>
                    <div className="absolute -right-[300px] -bottom-[150px] -z-10">
                    <div className="w-[800px] h-[800px] relative ">
                        <img 
                            alt="Shadow Effect" loading="lazy" decoding="async" data-nimg="fill" 
                            className='absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent'
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:contain;color:transparent" 
                            src={Shadow}
                        />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

           
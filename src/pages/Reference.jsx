export default function Reference() {

    
    return(
        <div className="flex ">

        {/* sidebar  */}

            <div className="w-72 z-10 bg-[#0f0f0f] py-8 md:relative md:translate-x-0 duration-300 h-screen overflow-auto no-scrollbar fixed -translate-x-full">
                <div className="flex justify-center py-3">
                    <img src="/logos/cip-pro-small.png" className="max-w-[55%] h-12" />
                </div>
                <div className="flex md:hidden gap-x-4 pt-3 items-center justify-between">
                    <div></div>
                    <div className=" bg-neutral-800 cursor-pointer right-0 top-9 p-2 w-10 rotate-180">
                    <img src="/icons/chevron-right-double.svg" className="" />
                    </div>
                </div>
                <ul className="pt-6">
                    {/* buttons to be clicked */}

                    <li className="flex px-6 font-semibold py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            mt-2 ">
                    <img src="/icons/coins-hand.svg" className="opacity-50" />
                    <span className="opacity-50">LP Staking</span>
                    <div className="inline-flex flex-1 justify-end">
                        <div className="badge pulsate tracking-wider">NEW</div>
                    </div>
                    </li>
                    <li className="flex px-6 font-semibold py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            mt-2 ">
                    <img src="/icons/convert.svg" className="opacity-50" />
                    <span className="opacity-50">Converter</span>
                    </li>
                    <li className="flex px-6 font-semibold py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            mt-2 ">
                    <img src="/icons/team.svg" className="opacity-50" />
                    <span className="opacity-50">My Team Summary</span>
                    </li>
                    <li className="flex px-6 font-semibold py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            mt-2 bg-black-600 duration-200">
                    <img src="/icons/fluent_shifts-team.svg" className="bg-black-600 opacity-100 duration-200" />
                    <span className="bg-black-600 opacity-100 duration-200">Downline team </span>
                    </li>
                </ul>
                </div>
       
        {/* right content */}

        <div className="flex-1 h-screen overflow-auto no-scrollbar bg-black">   
            <header className="pt-5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                    <div className="ms-auto flex items-center gap-2">
                    <div className="flex justify-end p-3">
                        <div>

                            {/* Connect Wallet Button  */}

                        <button 
                            className="bg-[#4daffb] px-[14px] text-white text-base p-3 rounded-lg"
                            type="button"
                            data-testid="rk-connect-button"
                            >
                                Connect Wallet
                        </button>
                        </div>
                    </div>
                    <button className="bg-neutral-800 text-2xl px-2.5 py-2 rounded-lg md:hidden">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </header>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-5 pb-20">
                {/* main sticky dashboard  */}
                <header className=" py-6 px-5 md:px-10 rounded-lg bg-[linear-gradient(93deg,rgba(77,176,251,0.568),rgba(72,72,72,0)_35.99%,rgba(77,176,251,0.486)_55.39%,rgba(100,56,223,0)_136.97%)]">
                    <ul className="flex flex-col lg:flex-row gap-5 justify-between">
                    <li>
                        <small className="text-neutral-400 font-light text-sm lg:text-base">Your CIP Pro Balance</small>
                        <h3 className="font-semibold text-xl xl:text-2xl">0.00</h3>
                    </li>
                    <li>
                        <small className="text-neutral-400 font-light text-sm lg:text-base">Total Value Locked</small>
                        <h3 className="font-semibold text-xl xl:text-2xl">$ 597.15</h3>
                    </li>
                    <li>
                        <small className="text-neutral-400 font-light text-sm lg:text-base">CIP Pro Price</small>
                        <h3 className="font-semibold text-xl xl:text-2xl">$ 0.13</h3>
                    </li>
                    <li>
                        <small className="text-neutral-400 font-light text-sm lg:text-base">Team Size</small>
                        <h3 className="font-semibold text-xl xl:text-2xl">0</h3>
                    </li>
                    </ul>
                </header>

                {/* onclick change container */}
                <div>
                    <h2 className="text-2xl font-medium py-8">LP Staking</h2>

                    <div className="">
                        <div className="bg-[#181818] rounded-lg p-5 w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex sm:flex-row flex-col mb-2 sm:mb-0 sm:gap-1">
                            <div className="flex">
                                <img alt="ethereum icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                className="mb-5 relative z-0 text-transparent" src="/icons/eth.png" 
                                />
                                <img alt="cip icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                className="mb-5 relative z-10 -translate-x-1/4 text-transparent" src="/icons/round-cip-pro.png"  />
                            </div>
                            <h3 className="font-bold text-xs sm:text-sm md:text-lg flex flex-1 justify-between">
                                <span>ETH/CIP Pro</span>
                            </h3>
                            </div>
                            <div className="flex sm:flex-row flex-col mb-2 sm:mb-0 sm:gap-1">
                            <div className="flex">
                                <img alt="ethereum icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                className="mb-5 relative z-0 text-transparent" src="/icons/arb.png" />
                                <img alt="cip icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                className="mb-5 relative z-10 -translate-x-1/4 text-transparent" src="/icons/round-cip-pro.png"  />
                            </div>
                            <h3 className="font-bold text-xs sm:text-sm md:text-lg flex flex-1 justify-between">
                                <span>ARB/CIP Pro</span>
                            </h3>
                            </div>
                            <div className="flex sm:flex-row flex-col mb-2 sm:mb-0 sm:gap-1">
                            <div className="flex">
                                <img alt="ethereum icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"
                                className="mb-5 relative z-0 text-transparent" src="/icons/dai.png"  />
                                <img alt="cip icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                className="mb-5 relative z-10 -translate-x-1/4 text-transparent" src="/icons/round-cip-pro.png" />
                            </div>
                            <h3 className="font-bold text-xs sm:text-sm md:text-lg flex flex-1 justify-between">
                                <span>DAI/CIP Pro</span>
                            </h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 py-4 text-neutral-400">
                            <div className="flex items-center justify-between text-sm border-b border-[#ffffff15] py-2">
                            <span>Total Staked LPs: </span>
                            <span className="text-white">6</span>
                            </div>
                            <div className="flex items-center justify-between text-sm border-b border-[#ffffff15] py-2">
                            <span>Current APR:</span>
                            <span className="text-white">72%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm border-b border-[#ffffff15] py-2">
                            <span>Your Claimed Rewards</span>
                            <span className="text-white">$ 0</span>
                            </div>
                            <div className="flex items-center justify-between text-sm border-b border-[#ffffff15] py-2">
                            <span>Your Referral Rewards</span>
                            <span className="text-white">$ 0</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full p-3 bg-[#4DAFFB] bg-opacity-60 text-xs md:text-sm text-neutral-300 gap-2 rounded-lg md:rounded-full flex items-center justify-center my-5">
                        <span className="text-rose-800 text-lg">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                        </svg>
                        </span>No liquidity token found <a href="https://app.uniswap.org/pools?chain=arbitrum" target="_blank" className="text-[#ffffff] text-base font-bold hover:underline">click here</a> to provide, and get liquidity token.
                    </div>
                    </div>
                </div>

                {/* convertor  */}

                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-medium  py-8">Convertor</h2>
                    </div>
                    <div className="max-w-xl mx-auto pb-10">
                        <article className="bg-[#1C1C26] w-full rounded-lg p-4 md:p-7">
                        <h3>Conversion</h3>
                        <small>From</small>
                        <div className="flex items-center bg-neutral-900 rounded-xl p-1 md:p-3 w-full shadow-sm mt-3 md:mt-7">
                            <div className="relative inline-block text-left min-w-[100px]" data-headlessui-state="">
                            <button className="inline-flex items-center gap-2 bg-neutral-900 w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" id="headlessui-menu-button-:r2:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                <img src="/icons/usd.svg" className="w-7" alt=""/>
                                    USD 
                                <img src="/icons/chevron.svg" alt="" />
                            </button>
                            </div>
                            <div className="relative w-full rounded-md shadow-sm">
                            <input id="price" className="bg-neutral-900 block w-full rounded-md py-2.5 pl-4 pr-7 text-white placeholder:text-neutral-400 text-sm sm:leading-6 focus: outline-none block w-full rounded-md border-0 text-end py-1.5 md:pl-7 text-neutral-100 placeholder:text-neutral-300  sm:text-sm sm:leading-6" 
                            min="0" placeholder="00.00" type="number" value="" name="price" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 md:p-7">
                            <small>To Estimate</small>
                            <span>
                            <img src="/icons/swap.svg" className="mr-5 w-6 md:w-8" alt="" />
                            </span>
                        </div>
                        <div className="flex items-center bg-neutral-900 rounded-xl p-1 md:p-3 w-full shadow-sm mb-2">
                            <div className="relative inline-block text-left min-w-[100px]" data-headlessui-state="">
                            <button className="inline-flex items-center gap-2 bg-neutral-900 w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                <img src="/icons/round-cip-pro.png" className="w-7" alt="" />CIP Pro 
                            </button>
                            </div>
                            <div className="relative w-full rounded-md shadow-sm">
                            <input id="price" className="bg-neutral-900 block w-full rounded-md py-2.5 pl-4 pr-7 text-white placeholder:text-neutral-400 text-sm sm:leading-6 focus: outline-none block w-full rounded-md border-0 text-end py-1.5 md:pl-7 text-neutral-100 placeholder:text-neutral-300  sm:text-sm sm:leading-6" 
                            min="0" placeholder="00.00" disabled="" type="number" value="" name="price" />
                            </div>
                        </div>
                        </article>
                    </div>
                    </div>


                {/* team summary */}

                <div>
                    <h2 className="text-2xl font-medium py-8">LP Team Summary</h2>
                    <div className="flex items-center justify-center">
                        <div className="w-full">
                        <div className="overflow-auto lg:overflow-visible ">
                            <table className="table border-separate space-y-6 text-sm w-full">
                            <thead className="bg-neutral-900">
                                <tr className="w-full">
                                <th className="px-3 py-4 text-start whitespace-nowrap w-1/2">Level</th>
                                <th className="px-3 py-4 text-start whitespace-nowrap w-1/2">No of Referral</th>
                                <th className="px-3 py-4 text-start whitespace-nowrap w-1/2">Referral Bonus</th>
                                </tr>
                            </thead>
                            <tbody className="font-semibold"></tbody>
                            </table>
                            <div className="text-center py-5 bg-neutral-900 rounded-md text-neutral-500 undefined">No Records to Show!</div>
                        </div>
                        </div>
                    </div>
                </div>


                {/* downline team  */}

                <div>
                    <h2 className="text-2xl font-medium py-8">Downline Team</h2>
                    <div className="flex items-center justify-center">
                        <div className="w-full">
                        <div className="overflow-auto lg:overflow-visible">
                            <table className="table border-separate space-y-6 text-sm w-full">
                            <thead className="bg-neutral-900">
                                <tr>
                                <th className="px-3 py-4 text-center">S.No</th>
                                <th className="px-3 py-4 text-center">Level</th>
                                <th className="px-3 py-4 text-center">Wallet Address</th>
                                <th className="px-3 py-4 text-center">Amount Invested</th>
                                </tr>
                            </thead>
                            <tbody className="font-semibold"></tbody>
                            </table>
                            <div className="text-center py-5 bg-neutral-900 rounded-md text-neutral-500 undefined">No Records to Show!</div>
                            <div className="flex justify-center mt-4">
                            <nav>
                                <ul className="flex items-center gap-2">
                                <li className="page-item">
                                    <button className="aspect-square w-9 p-1 rounded-full bg-neutral-800 flex items-center justify-center disabled:opacity-50 disabled:cursor-no-drop text-primary" disabled="">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                    </svg>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className="aspect-square w-9 p-1 rounded-full bg-neutral-800 flex items-center justify-center disabled:opacity-50 disabled:cursor-no-drop text-primary" disabled="">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                    </button>
                                </li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        </div>
        
        </div>
    )
}
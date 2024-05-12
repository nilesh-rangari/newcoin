import { useState } from "react"
import Logo from "../assets/cip-pro-small.png"
import cipLogo from "../assets/round-cip-pro.png"
import ethLogo from "../assets/eth.png"
import daiLogo from "../assets/dai.png"
import arbLogo from "../assets/arb.png"
import swapLogo from "../assets/swap.svg"
// import usdLogo from "../assets/usd.svg"

export default function Dapp() {

    // staking, convertor, myTeamSummary, downlineTeam
    const [selectedTab,setSelectedTab] = useState("staking")

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen)
      };

      const closeSidebar = () => {
        setIsSidebarOpen(false);
      };
    
      const handleSidebarButtonClick = (tabItem) => {
        setSelectedTab(tabItem)
        closeSidebar();
      };
    



    let divStyle1 = (selectedTab === "staking") ? "bg-[#282828] text-white" : "text-gray-400"
    let divStyle2 = (selectedTab === "convertor") ? "bg-[#282828] text-white" : "text-gray-400"
    let divStyle3 = (selectedTab === "myTeamSummary") ? "bg-[#282828] text-white" : "text-gray-400"
    let divStyle4 = (selectedTab === "downlineTeam") ? "bg-[#282828] text-white" : "text-gray-400"


    let stakingDiv = <div>
                        <h2 className="text-2xl font-medium py-8">LP Staking</h2>

                        <div className="">
                            <div className="bg-[#181818] rounded-lg p-5 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex sm:flex-row flex-col mb-2 sm:mb-0 sm:gap-1">
                                <div className="flex">
                                    <img alt="ethereum icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                    className="mb-5 relative z-0 text-transparent" src={ethLogo}
                                    />
                                    <img alt="cip icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                    className="mb-5 relative z-10 -translate-x-1/4 text-transparent" src={cipLogo}  />
                                </div>
                                <h3 className="font-bold text-xs sm:text-sm md:text-lg flex flex-1 justify-between">
                                    <span>ETH/CIP Pro</span>
                                </h3>
                                </div>
                                <div className="flex sm:flex-row flex-col mb-2 sm:mb-0 sm:gap-1">
                                <div className="flex">
                                    <img alt="ethereum icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                    className="mb-5 relative z-0 text-transparent" src={arbLogo} />
                                    <img alt="cip icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                    className="mb-5 relative z-10 -translate-x-1/4 text-transparent" src={cipLogo}  />
                                </div>
                                <h3 className="font-bold text-xs sm:text-sm md:text-lg flex flex-1 justify-between">
                                    <span>ARB/CIP Pro</span>
                                </h3>
                                </div>
                                <div className="flex sm:flex-row flex-col mb-2 sm:mb-0 sm:gap-1">
                                <div className="flex">
                                    <img alt="ethereum icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"
                                    className="mb-5 relative z-0 text-transparent" src={daiLogo}  />
                                    <img alt="cip icon" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" 
                                    className="mb-5 relative z-10 -translate-x-1/4 text-transparent" src={cipLogo} />
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

    let convertorDiv = <div className="w-full">
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
                                    <input id="price" className="bg-neutral-900 block w-full rounded-md py-2.5 pl-4 pr-7 text-white placeholder:text-neutral-400 text-sm sm:leading-6 focus: outline-none border-0 text-end  md:pl-7 sm:text-sm" 
                                    min="0" placeholder="00.00" type="number" value="" name="price" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 md:p-7">
                                    <small>To Estimate</small>
                                    <span>
                                    <img src={swapLogo} className="mr-5 w-6 md:w-8" alt="swap logo" />
                                    </span>
                                </div>
                                <div className="flex items-center bg-neutral-900 rounded-xl p-1 md:p-3 w-full shadow-sm mb-2">
                                    <div className="relative inline-block text-left min-w-[100px]" data-headlessui-state="">
                                    <button className="inline-flex items-center gap-2 bg-neutral-900 w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                        <img src="/icons/round-cip-pro.png" className="w-7" alt="" />CIP Pro 
                                    </button>
                                    </div>
                                    <div className="relative w-full rounded-md shadow-sm">
                                    <input id="price" className="bg-neutral-900 block w-full rounded-md py-2.5 pl-4 pr-7 text-white placeholder:text-neutral-400 text-sm sm:leading-6 focus: outline-none border-0 text-end md:pl-7 sm:text-sm" 
                                    min="0" placeholder="00.00" disabled="" type="number" value="" name="price" />
                                    </div>
                                </div>
                                </article>
                            </div>
                        </div>

    let myTeamSummaryDiv = <div>
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

    let downlineTeamDiv = <div>
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

    return(
        <div className="flex ">

        {/* sidebar  */}

            <div className={`w-72 z-20 bg-[#0f0f0f] py-8 md:relative ${isSidebarOpen ? '' : '-translate-x-full'} md:translate-x-0 duration-300 h-screen overflow-auto no-scrollbar fixed`}>
                <div className="flex justify-center py-3">
                    <img src={Logo} className="max-w-[55%] h-12" />
                </div>
                <div className="flex md:hidden gap-x-4 pt-3 items-center justify-between">
                    <div></div>
                    <div className=" bg-neutral-800 cursor-pointer right-0 top-9 p-2 w-10 rotate-180">
                    <img src="/icons/chevron-right-double.svg" className="" />
                    </div>
                </div>
                <ul className="pt-6">
                    {/*sidebar buttons to be clicked */}

                    <li 
                        className={`flex px-6 font-semibold py-3 cursor-pointer hover:bg-[#282828] hover:text-white text-sm items-center gap-x-4 
                        mt-2 ${divStyle1}`}
                        onClick={() => handleSidebarButtonClick("staking")}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="">LP Staking</span>
                        <div className="inline-flex flex-1 justify-end">
                            <div className="badge pulsate tracking-wider">NEW</div>
                        </div>
                    </li>

                    <li className={`flex px-6 font-semibold py-3 cursor-pointer hover:bg-[#282828] hover:text-white text-sm items-center gap-x-4 
                            mt-2 ${divStyle2}`}
                            onClick={() => handleSidebarButtonClick("convertor")}>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <mask id="mask0_55_98" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="url(#pattern0)"/>
                            </mask>
                            <g mask="url(#mask0_55_98)">
                            <rect x="-2" y="-3" width="29" height="29" fill="currentColor"/>
                            </g>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_55_98" transform="scale(0.00195312)"/>
                            </pattern>
                            <image id="image0_55_98" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13mCVVmfjxb0/OGSTJACKIJAnCAoOiiAkwIcoaAEHRNaefsLsGXHddXXXVxTUnWN1VTAQlKiJBMhJEQTIDkhmYwOTu3x+n27n0dPfc7r5V76mq7+d53mdG2OW8p+rcuu+tOnUOSJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIUqSs6Aakgk4F5wHhgIjCl95/PAMYC44DpwHJgEXAPsLD8NFVRU3pjBjCNNN6mt/z7aaSx1zTLgFW9f+8Gnuj9Z8uBxcBSYHVMaurPAkBVMh54OrA1sBWwBTC3N+YBG/X+OZd1X/jD8SBwEfAj4CxgxagzVtXMAuYDW7b8uTlpbPWNr3nApKgEa2Ax8BDwSG88DNxNKsL7CvG7WFdIqCAWAMrNeGB7YGdgO9IXfesX/tiS8vgr8BngG3ghqqPZwB7ArqRxtj2wA7BxZFL6mzWkIuDm3rgFuBa4Ee8gdIwFgCI9DdiFdBHeuTd2BCZEJtXPjcDRpIuPqmkc6ct+f2Cv3r9vE5qRRmoVcANwDfB70h27uyITqjILAJVlHLA7sC+wX29sGppR+1YBxwA/jE5EbdsVeDlwAGnMTQvNRkVaCPwO+DXp0d3DselUhwWAijKTdOHdF1hA+uU1kufyuegB3gP8d3QiGtA44EXAK4CDSc/u1TzdwFXAmcBpwE2x6UjNsQ3wPuB8YCXpS7NOsRZ4TceOlkZrDKm4/DLwAPHjw8gvbgJOBLZFUkdNBQ4lTZRbSPyHvYxYis+Po80iFZq3Ez8ejOrEJcDhNPP1TKkjNgLeAVxAmo0b/aGOiHNGfRQ1EnuQ5mGsIH4MGNWN+4CPk14XlrQBs4EjSc/VVhH/Ac4hXjCqI6rhWEAae93En3ejPrGU9PhoCyQ9xTTgKOBX+KU/UJw38kOrNu1Nmt0dfa6NescKUiEwD6nh9iB9GB4j/oOZc6wFNhvhMdbQtgROwV/8RrmxhDRhcDJSg8wE/oG02E30h7BK8c6RHGwNaiLwCXzGb8TG7cBLkGpuL+C7pM06oj90VYxThn/INYj9gT8Tf04Noy9+gEtDq2bGAK8CLib+A1b1uH6Yx17rmwB8Hm/3G3nGQ8AhSBU3kTST/0/Ef6jqEg8O6wyov+1Ja7pHn0fD2FCcQrVXMlVDbQx8krQ+dvSHqG7hdsEj91rSpKvoc2gY7cYfSFtES9mbR9rO1uf7xcWits+G+nQBx5Peoog+f4Yx3HiYtMGUlKU5wKfx11UZcVub50TJROAnxJ83wxhNrCQ9TpWyMY30y2oR8R+QpsQv2zozgrRvxLnEnzPD6ER0Ax+i4sZFJ6BRmwy8H/gw6de/ynN1dAIVMZu0ouQ+0YlIHdJFentlOmnxIKl0hwJ3EF8NNzX23vAparzpwJXEnyvDKCpORCrR7sBFxA/8JsftpF8BGtxk4LfEnyvDKDo+jFSwTYDv4AzqHOL9GzhXTTeWtINf9HkyjDKiGzgaqQDjSRP8FhM/0I20n7gbhgzti8SfJ8MoM1aSlrSWOuY5pMlm0YPbWBdvHvKM6Sjiz5FhRMQjwDZIozQV+E9gDfGD2lgXF+Oz/6Hsjbv5Gc2O64BJVMDY6AQ0oOeT3jE/hLR5j/KwlrSR0gPRiWRqGuldf3dQU5NtAswCzo5ORNUyB/g+8RWsMXB8edAzJ0jbp0afI8PIIbpJr2lnzVuZ+TgIOBnYNDoRDehB0u51T0Qnkqk3AD+MTkLKyCPAjqQthbPk7eV4E0mb9pyDX/45+3/45T+YOaRZ/5LWmUeaxyUNaAfgWuJvVxlDxyV4t2wo3yP+HBlGrnEImfKiFqMLeBfwH/g+ee7WAHsAN0QnkqkDgAto5rVkMfBYb/QAy0lvQEB6Bty0O0bjSEs/95ne+88mku4SzaEis+M77E7So4Dl0Yn052ZA5ZtHetb/8uhE1Jav4pf/YMYAX6B+X/6rgLtJ+2zc2fLnfaQv+0W9f66JSrDCppA2h5oDzAXmk96b37rlz83CsivG1sB7gc9GJ9Jf3T64udsN+BlpQCh/DwLPAh6PTiRTbwZOiU5ilNYCtwDXtMSVpCJAMaaSrpV7tMSzQzMavSXAtmQ8IVDFOoZ0Cyj6eZTRfhw54JkUpFu5dxN/jkYSDwHfAg4mrV2g/G0BvJ30bv1K4sfQSMLXiBtoIvB14gdfbvE4cAZpU51zMsinf7ji39DeTfw5Gk48SnpTYX9cAK3qZgJ/D5xGtTZGW0H9Hm9oCFsAlxM/8HKI1aStYY8H9mLdRXiX3n8XnV//XHftfzL1N+OBu4g/T+3E7cB7SLeVVT/bAv8NLCN+rLUTny/mMCg3C0jPkKMHXGQ8AfwYeBNp0k9/XaRf2tF59g9v1Q3tKOLP0YbiJuC1+Gu/KeYCHyc9a48ee0PFkt5cVWNH0NwNUZ4gLWf8UmDCBo7TkRnk2z8eIN1i1MC6SF+u0edpqPH3HnzDqak2Bf6H+HE4VHyssN4r3D+S3gGOHmRlxnLS2w2H0f57vjOB+zPIvX848W9oLyD+HA0WF5BeK5NeQSrmo8fkQLEQC9TaGUeaWRw9uMqM64B3MrJfzF/KIP/+4cS/DTuV+PPUP7qBT+Ptfj3V5sBlxI/PgeLVBfZbJZtBnjPZi4hlwHdJ+76PlBP/qmlT0vvx0eeq/3l7U5GdVqVNJM+i9dwiO63ybA5cT/yAKjruJL2yN9rn413ARRn0p3848W/DPkL8eWqNlaRbvdJQxgLfIX68tkY3sGWRnVbx5gO3Ej+YioxrSM/FO/XM6s0Z9Kl/PADM6lD/6uw64s9VX6wlTbaV2jEG+BHx47Y1ji+0xyrU9qTJHNGDqIjoJi3Ss6BjRyuZgRP/qmoH4s9Ta3y42O6qhiaS15yA64rtroqyC/nOMB1tnAns2blD9RT/mkH/+ocT/9rzSeLPVV/8GM+ZRmZz8rp2V32Pg8Z5LmlZ0eiB0+n4VW/fijKT/BbpcOJf+24g/nz1APfi4xqNziuJH8d98dGC+6oOWkBaaCR60HQyLgP27eRBGsQ7g/o3VDjxrz3ziT9XfXFwwX1VM/yQ+LHcA/y+6I6qMxYAS4kfMJ2K24HXUd6t1F+X0KfhhCv+te9dxJ+vHuCXRXdUjbEZedyRXAtsVHBfNUrPpT6//BcBHyJNiCnLBPJbGtmJf+07i/jztZY0EVHqlBOJH9deizK3C/V45t9NWiP7aZ09PG3ZZQT5FhlO/GvfBPLYae20ojuqxplHHmP75KI7qpF5JvBX4gfIaOMvwIs7fGyG49BB8oqINcBziu1urexL/DnrofOvpEoAXyV+bN9ZeC81bFtT/ff8lwP/zIZ35StaTov/OPFveI4n/pxdUXgv1VTbkR4vRY/x+UV3VO3bnDRJLnpQjCYuJ59npm8k/nj04MS/kfgV8eft7wvvpZrsDOLH+JsL76XaMoNqr+2/gvSrLaed0XLZQtbJNsPTBTxG7Dl7EphadEfVaDn8QPlq4b3UBo2j2rv6XUWeK0ttRvyxceLf8D2D+PN2euG9VNPNIn6XSx9zZeBbxF/wRhLdwH8A4zt/SDom8jVKV/wbmdcRP7bfUngvpbQ9b+Q4X07e1+/a+yfiL3YjiYeAlxdwPDotck9uJ/6NzH8QO7bXkF7Vkor2DuKv5f5ICXIE6Vd09AAYbpwPbFLA8ShC1PrbbvU7cucRO74vLb6LEgBbEn89P7roTmp9C0i3X6JP/nCiG/gUaY/rqpgAPEL5x8qJfyN3D7Hj/AvFd1H6m+g1Xz5bfBfValPiT/pwYwlwWBEHowQnUO6xugQn/o3UVOLvir2u8F5K6/yC2PHuapclmkh6Vz76C304cTP5vNs/EpOBWyjnWK0AdiqnW7W0O/HjfauiOym1+Efir+8qydeJv8ANJ35FPRax2QdYSfHH68Nldaim/p7Y8f5g8V2UnuJAYsf8auJXbW2EY4j/Qh9OfJ20RkFdvJViby//AG/9j9ZHiR3zbv2rss0k/lq/beG9bLg9qM6kv27Sqn519F6KKQJOxfdpO+EbxI79LxbfRWk9DxA77l9YfBebax5wF/Ff7O3ECtLriXX2GmAxnTle3cBnyGsJ5Co7m9jx/97iuyit5zJix/1RxXexmbrIY2OTdmIxcEAhRyE/WzH6Vbhuwcq5024i9jNwSPFdlNbzQ2LH/ceK72IzvZv4L/Z24lFgr4KOQc4OJP3qbHdrzm7SQjHHUK/5EblYQuznYMfiuyit51PEjvtvFt/FdZpy4dyRtKxp7u4HXgz8MTqRAL/pjS2Ag4F9Sa/xbQpMIi0L+yDwF9LGGT8B7gzJtP6mANMC2+/Bc6sYdwS3/7Tg9mtnInAd8b/sNxR34gxQ5SF6WVRfAVSUFxI79ktd/roJdwD+nfw3WVhIGnj+6lEONg5u/5Hg9tVcjwa3v1GZjVVpLfmROAh4f3QSG3Af8AL88lc+onfgWxTcvprrseD2S/3s1bkAmAt8n7wXhHmA9Mv/9uhEpBZzgtu3AFCU6LE3ixLvzNe5APgCsFl0EkN4mDTz/S/RiUj9TA9uP/pXmJprKWmp8ihdlDgBt64FwAvJexvYJ4FXAH+KTkQaQHQBEP0cVs0WfRdgalkN1bEAmAp8m3xv/a8mrYB3eXQi0iBKuwAN4vHg9tVs0XegvAMwCp8Cto5OYhA9wHGkle+kXEUXAE8Gt69mWx7cvncARui55L2G+AmkiYlSzqILgNXB7avZVgW37x2AERhH2sEs181gvk81ViOUovcktwBQpDXB7Ze2m2mdCoAPAbtFJzGIi4G3RychtSm6iLYAUKToOwC+BjhMTwP+KTqJQdwNvJb4QSW1K3qFUAsARYoefxYAw/QZYEZ0EgNYSnrd76HoRKRhsABQk0WPPwuAYdiDfN/5fwtwQ3QS0jBFPwKIfgarZou+W2sBMAxfJM9+fAn4aXQS0ghEr6HRHdy+mi16/JX2fZbjF+dwHAHsH53EAK4Ejo9OQpKkwVS5AJhMevafm8eA1xN/G0mSpEFVuQB4PzA/Ool+eoA3AXcF5yFJ0pCqWgDMBD4cncQAvgKcHZ2EJEkbUtUC4APE71ne382kpX4lScpeFQuAWcD7opPoZw1wFG5iIkmqiCoWAB8hFQE5+SRp5r8kSZVQtQJgI+A90Un0cy15vo0gSdKgqlYAnECJWyW2YQ1wHK5cJkmqmCoVABsD/xCdRD9fBK6JTkKSpOGqUgHwLtLiP7m4i/TsX5KkyqlKATAZeGd0Ev0cByyLTkKSpJGoSgFwNDAvOokWPwXOj05CkqSRqkIBMAZ4b3QSLVaQXkWUJKmyqlAAvBJ4VnQSLT4H3BmdhCRJo1GFAuBD0Qm0uBf4bHQSkiSNVu4FwF7AftFJtDgBJ/5Jkmog9wIgp/f+bwT+LzoJSZI6IecCYCZweHQSLU4AuqOTkCSpE3IuAN4ITI1OotclwFnRSUiS1Ck5FwBvjU6gxUejE5AkqZNyLQD2BHaLTqLXucDvopOQJKmTci0A3hadQIt/i05AkqROy7EAmAYcEZ1Er8uBi6OTkCSp03IsAA4DZkQn0etT0QlIklSEHAuAXH79Xw+cHZ2EJElFyK0AmAMcGJ1Er/8AeqKTkCSpCLkVAK8BxkcnAdxP2vJXkqRayq0AeH10Ar2+DqyKTkKSpKLkVABsBBwQnQSwGvh2dBKSJBUppwLgtcC46CSAU4G/RichSVKRcioActn452vRCUiSVLRcCoDZwP7RSQB/AX4fnYQkSUXLpQA4iDxu/38PX/2TJDVALgXAS6MTALqBH0YnIUlSGXIoALqAl0QnAZwHLIxOQpKkMuRQAOwKbBadBHBydAKSJJUlhwLgZdEJAE8CZ0YnIUlSWSwAkrOAZdFJSJJUlugCYCawT3AO4Lr/kqSGiS4A9iP+9b8ngV8F5yBJUqmiC4B9g9sHOAdYGp2EJEllii4AFgS3D3BGdAKSJJUtsgAYDzw3sH1Iq/6dF5yDJEmliywAdgOmBLYP8Afg/uAcJEkqXWQBsF9g233Ojk5AkqQITS8AzolOQJKkCJEFQPT7/0uAy4NzkCQpRFQBsAnx6///HlgTnIMkSSGiCoBdgtptdXF0ApIkRYkqAHYNarfVRdEJSJIUJaoA2Dmo3T4rgauCc5AkKUxTC4ArgRXBOUiSFCaiABgH7BDQbit//UuSGi2iANgBmBjQbqs/BLcvSVKoiAIg+vY/WABIkhouogB4ZkCbrZ4Ebg7OQZKkUBEFwNYBbba6DlgbnIMkSaEiCoCtAtpsdWNw+5IkhWviHQBv/0uSGq/sAmA8sHnJbfZ3S3D7kiSFK7sAeDowtuQ2+7MAkCQ1XtkFQPTt/5XA3cE5SJIUruwCYKuS2+vvNnwDQJKk0guA6Of/dwW3L0lSFsouADYqub3+7g1uX5KkLJRdAMwrub3+7gtuX5KkLJRdAMwtub3+vAMgSRLNuwNgASBJEs27A3B/cPuSJGWhaZMAHw1uX5KkLJRZAEwBJpfY3kAWBbcvSVIWyiwAZpfY1kBWAiuCc5AkKQtlFgDRv/4fC25fkqRslFkATCixrYF4+1+SpF5lFgATS2xrIEuD25ckKRtNKgBWBbcvSVI2mvQIYHVw+5IkZcM7AJL66w5uf2xw+2q28cHtl7ZlfZPuAFgASO1ZE9x+9AVYzRY9/kr7/DXpDoCPAKT2lPYLZBDjgttXs1kAFCD6ovJkcPtSVXgHQE0WPf5qWQA8UWJbObYvVUV0ARD9uFDNZgFQgDtLbGsgdwS3L1XFyuD2fQSgSNEFaGlL1pdZACwkdjne6wPblqoketGs6Auwmi36DkBpn78yC4Bu4MIS22u1Avh9UNtS1SwLbn96cPtqtujxV9rnr8wCAOAnJbfX50xgeVDbUtVEFwBzgttXs80Nbr+WdwAATgceLLlNgG8FtClV1ZLg9i0AFGUMMDM4h9reAVgOfKHkNi8Dzi+5TanKot+YsQBQlFmU/73YajU1LgAA/gu4paS2uoH3ltSWVBePBLdvAaAos4PbfxToKauxiAJgJfB6yqly/hm4uoR2pDqJLgCiL8Jqrujn/w+X2VjUrY7rgaMottL5X+CzBf73pboq9SI0gI2D21dzbRTcfqnFd+Szjp8B76aYVY/OBN5KibdSpBop9TbkAKYTfyFWM20T3H5jCgCArwIvBxZ18L/5X8Cr8LU/aaTWEH8XYOvg9tVM0QXAfWU2Fl0AQJqh/1zgtFH+dxYCrwbeR/x+5lLV3RPcfvSFWM0UXXjeW2ZjORQAALeTvrwXAL9leLcf7wI+CDyL0RcRkpLoAiD6Qqxmii48S/3c5bbpxqXAC0kf/kOB/YFnA5uS3s9cRtpP4BbgCuDc3v8fn/VLnRVdAERfiNU8XcSPu+jPnSTxAVJhHRWXFt9F6SnmEzvme0g/dkuTyyMASXm5Nbj93XFXQJXr74LbXwI8UGaDFgCSBlLWap2DmQTsHJyDmuW5we3fTMmPsy0AJA3kDtKqnZH2Dm5fzRI93m4uu0ELAEkDWUt6OyfSXsHtqznGArsF51D6XTcLAEmD+WNw+wuC21dz7A5MDc7hprIbtACQNJhrg9t/BrBTcA5qhldFJ0DAxnUWAJIGc010AuRxYVb9vTq4/YcpeRVASRrKbNKy2pHvRedQhKjenkn8+/9nFd7LAXgHQNJgFpHeBoi0G2mBFqkoh0UnQFChawEgaSiXBLffBRwVnIPqqws4MjoJ4j9nkrSeY4i/PfogMLnojqqRDiF+fK8GphfdUUkarm2Jv0D2AG8ruqNqpN8SP7avKLyXkjRC9xJ/kfwT6Xat1Cm7Ez+ue4DPFd3RwTgHQNKGnB2dALAD8NroJFQrH41OoNc50QlI0mBeRfyvpB7SXulTCu6rmuGFxI/nHuAJ3PVSUsamASuIv1j2AP9acF9Vf5NIj5Six3IP8NOC+ypJo3YO8RfLHtKM6ehtW1VtnyN+HPfFWwruqySN2rHEXyz74i5gXqG9VV0dQtrpMnoM95C2255bbHclafRmk89jgB7gXGB8oT1W3TyLtLpl9Njti9OK7a4kdc5pxF80W+OH+CaT2rM56c5R9JhtjdcX2WFJ6qTDib9o9o/vAuOK7LQqbyvgFuLHams8gW+0SKqQCcADxF88+8dppDcVpP6eQx4LWfWPrxTZaUkqwr8Rf/EcKG4kbesq9XkTsIz4sTlQ7FRgvyWpEFsCa4i/gA4UTwLH47yAppsFfIP48ThYXFRc1yWpWD8n/iI6VFwK7FlY75WrMaRNox4ifgwOFYcXdQAkqWjPJf4iuqFYS1plbZ+CjoHyMRE4Gvgj8eNuQ3ELMLaQoyBJJTmf+Itpu3E1cCS+LVA3M4D3AQuJH2PtxjGFHAlJKtEBxF9Mhxv3AV8FDsJFhKpqLmn53NOB5cSPqeHE3bjxj6SayGV/gJHEY8ApwFGkrYadOJinKcAC4EPABeQ7AbWdOKrDx2bUuqITkFRZuwDXUo9nmouBq4ArgOuAO3pjUWRSDTKGtFrfNqTXOfcE9ia9LleHRzfXA7sD3dGJtLIAkDQa36XeO5otAu4kFQP3ke4c9MWilr+vBVaR3juH9Ivv8bKTDTYOmN7yv2f3/jkZmNP7v+e0xFxgPulLfyvSZL66eglwXnQS/VkAlG8aadBvCWxM+hBs1Btze//9DNKtrymkd1r7ztMk0oepadaSfqH1WUJ6/re0958vBx4FHun98yHgYdIF+x7gwTKTbZhNSXurz4pORMrU6cCropMYiAVAMWYB25OeLW4PbAdsCzyddVWxyrOCNFP4LuAvwJ9Jr+Pc0vvPNTrHkRZekfRUS4Bnk5Yjzo4FwOjNID2r2oP0jGcP0i0tVcNjwDWkZ9nXkJ4B3xOaUfWMAX5HmqwlaZ33AidFJzEYC4DhmwU8vzeeR9psog6ToLTO3aTlOn8HXAjcHppNNWxPKqCmRiciZeIi4AVkNvGvlQVAe7YBDgUOIX3p+y5ns9wB/Br4JXAuabKX1vdW4FvRSUgZeJz04/Du6ESGYgEwuPmkiRtHAbsF56J8PA6cCfwEOJv0XrLW+T/giOgkpGBHAD+OTmJDLACeajppC8m3kNY7l4byV+AHwDfxMUGf2cDlpImvUhOdRHr2nz0LgGQn4J2kL//pG/i/lfrrJr3j+zXSY4Jsn/mV5FmkImBmdCJSyX4DvBTvDFbCfqTbud3ELxNp1CNuJ21QMolmezHVXrbVMIYbdwDzUPaeT5rdHT1gjPrG3aS7Sk3edOY4LK6NZsQDpCWMlbHtgVOJHyxGc+IvwOE093Hb+4g/B4ZRZDxOWgNGmZoJfAVYTfxgMZoZFwM700z/RvzxN4wiYgmwLxXVhAVsDiVNzHoRbvmpOFsCbyM9I7yYVIw2xQWk5ZhfFJ2I1EGLgJcBl0UnovXNA35OfIVoGP3jVuDvaJ5345wAox5xH+ntsUqr6x2AA0mvZe0VnYg0gDnA0aQvw9+TLihNcCVwM/Bymj05UtV2I3AQaX6PMjKG9LxxLfEVomG0ExcCm9Ase5B2YYw+9oYx3PgFact2ZWYG6Vl/9AAxjOHGPTRvFvEmpM2Woo+9YbQTa4ATqdk8sro8AngGaQWm/aITkUZgJvBm0tyAPwXnUpalwP+QLqz7U7MLq2plIWlfmJNJxUBt1KEA2IV0G3Xr4Dyk0RgPHAY8ClwVnEtZekhbpv6GtDjXnNh0pPWcStoF9uboRIpQ9QLgucD5wEbRiUgd0EWaIDeZtP1wUywEvk26G7Av1b8uqfr+StoU7l9Ir7DWUpU/aAtIX/6zohOROmwBMIH0/nxTrCHdyTudtGDSlqHZqKlWk3bzOwy4LjgXDWIX4DHiJ4YYRpFxPM31ItLrVtHnwGhOnInr+WfvWcBDxA8Wwyg6uoG301zjgX8gbawUfS6M+sb5VHg53yaZC9xG/IAxjLJiLWkSUpONB44kvSERfT6MekQ36Rd/E1fk/Jsq7VA2nlSpPT86EalkTwD7AH+OTiTYGOBg0l2Bl+Crgxq+x4FTgK9R05n9w1GlAuDrNPt2qJrtVmBv0gYkSq/9Hge8CdgiOBflrYe0Yc93gf8DnoxNJx9VKQAOJ72PKTXZz0mzk7XOGNLz28OBI4CNY9NRRv4E/AT4AenRsfqpQgHwdOB6YHZ0IlIGjgO+FZ1EpsYCzyFtAX4Iac8BNcda4HLSs/1fA9fEppO/3AuAsaSVwpyhKSVPkr7YGv/8sg1bAweQ5g09D1cLrZs1wNXAxaTvid8BS0IzqpjcC4APAl+ITkLKzKWkL7Tu6EQqZgvSPIrdSUXU7riKaFV0k+bBXEv6ZX8tacnspZFJVV3OBcB84CZganQiUobeAXwjOoka2Iy0tsj2LX/O743JgXk11SOkpaFvB24hvflyc+/f/bLvsJwLgF+SXvmRtL7HgWcD90cnUmMbkeYgbQHM6/3fG/X+fQ6pQJjd++cU0q6OfaYAE8tMNhNLSLfm6f1zSW88CSwjvdL6KPAw6cv+EeBB4F7gLmB5uek2W64FwMGkAqCuVgB3AHeSBv1j/WJR758rSWtTt1a+i0mTXZpkBuv2rZhIurh2kS7CfTG75e+bk573bkNaPKquvgccE52EpGrKsQAYS5r1v2N0Ih2wmrShxJWkySq3kr74/dVWnhmkQmAb0gzxvYG9qMcmUmtJz7FviE5EkjrhbcQvEznSWEVarfD9pJXbJnX42KgzukjPeo8ETibdkoweOyONczp8bCQpxETgPuIvqsOJpcBPSSuSuVZBNY0DDiRtA7qQ+DE13Dig40dEkkr2DuIvpu3G/cCJ+KVfN2NIC8mcT/wYazfOLeRISFJJxpFe/Yi+mG4oriP92h9fzGFQRvYmLUG9lvhxt6HYs6BjIEmFewPxo9Y9CgAAF9tJREFUF9Gh4j7gKNyBrIn2IK02Fj0Gh4qfFdZ7SSrYFcRfRAeLU0mvl6m5ukjr8C8mfjwOFGuBrYrqvCQVZXfiL6ADxRLSLmNSn2cCNxI/NgeKTxXYb0kqxDeJv3j2j7uBnYrstCprGnAa8WO0f9yPc1MkVch00qt00RfP1rgZ2LLITqvyxpFW4oseq/3jsCI7LUmd9GbiL5qtcQ9++as9XeRXBPy80B5LUgf9kviLZl88AmxbbHdVM+OB84gfu32xgnoscyyp5uaQNryJvmj2kGZRv6zY7qqm5gC3ET+G++LYYrsrSaN3LPEXy77414L7qnrbm7T5U/Q47sH9ASRVwC+Iv1j2kHYfnFBwX1V/nyZ+LPeQHgNMLbivkjRiE0nv2UdfLHuA/Qvuq5phEnAn8eO5B3hlwX2VpBF7KfEXyR7gx0V3VI3yeuLHdA9pbQ1JytIXib9IdgO7FN1RNcoY0joS0WP7nqI7KkkjdS3xF0knS6kIbyd+bPcAWxfdUUkarpnAGuIvkAcV3VE10iTgAeLH91FFd1RSdUVtbbsAGBvUdp8bgF8H56B6WgF8PToJ4PnRCUjKV1QBkMOs+1NIv5KkIpwcnQCp0JakrPyG+Nuj2xTeSzXdH4gd493A7MJ7KamSIu4AdAHPCWi31fXAHcE5qP5+Edx+Dp81SZmKKAC2Ia2dHum04PbVDNEFAMAe0QlIylNEAbBbQJv9nRGdgBrhRuLvNO0e3L6kTEUUADsFtNlqCekRgFSGS4Pb3zG4fUmZiigAtg9os9XVpK1/pTJcGdz+dsS/cispQxEFwLMC2mx1RXD7apbo8TYJ2DI4B0kZKrsA6AK2LbnN/qIvyGqW64GVwTlEF92SMlR2AbAZMK3kNvu7Krh9Ncsq4LrgHLYLbl9ShsaV3N78ktvr7wngvuAc1Dx/AvYObN9HAFLnjQGeB7yY9PnejrTw1lRgEfAgcBNwMXAm8W8EhTuC2JXR/lB8F6X1fJTYcf+T4rsoNcZ04P+RttwezqqcvwMODsg3Gx8h9kL4s+K7KK3nDcSO+8uL76LUCK8D/sroPo8XED8XDih/DsDTS26vvzuD21czRY87HwFIozMR+A7wY2DTUf63XkCai/bi0SZVNT8j9pfQO4vvorSepxE77tfiWgDSSE0Bzqfzn8vVNOw76XfEXghfVnwXpfV0AUuJHfsbFd5LqX7GAWdR3OeyG3hNab3pp+xHANEXoQeD21cz9QAPBecwL7h9qYr+lWJ/OHYBPyBo066yC4C5JbfX36Lg9tVc0WMvuviWqmYf0mz/ok0Gvk/AY7oyC4AxxBcAjwW3r+aKHnveAZDa1wWcRHnfkTsBR5bU1t+UWQBMI3Yi0hpgcWD7arboAmBmcPtSlbyE8m/L/wtp747SlF0ARFpEehYrRYguAKI/f1KVHBfQ5hbAK8pssMwCYGqJbQ0k+hmsms0CQKqGqcSt2Hd4mY016Q7AkuD21WzR4y+6AJeqYj9gQlDbLyDNPyhFkwqAVcHtq9lWB7dvASC1Z9fAtucCm5fVWJkFwMQS2xrImuD21WzRBejk4Palqtg6uP1nlNVQmQVA2VsP9xd9AVazRRegLgUstWdGcPulvbFTZgEQfQGKvgWrZosuQKMLcKkqpgS3X9p3ZZPuAFgAKFL0+Iv+/ElVETUBsM/KshqyAJDKET3+oj9/UlVYAFS8rYGsDW5fzeYcAKkaxge3X8sCQJKk3EW/sWYBIElSgOhHAKVNGLYAkCRpneiNs1aU1ZAFgCRJ68wKbt9HAJIkBfAOgCRJDTOd+LcASts51AJAkqRkdnD7i3ESoCRJpYsuAB4tszELAEmSki2C23+kzMYsACRJSiwAJElqoM2D27cAkCQpQPQdAOcASJIUwAJAkqQGmh/c/n1lNmYBIElSWgBo6+Ac7iizMQsASZJgG+JXAbyzzMYsACRJgu2D21+NjwAkSSpddAFwD7C2zAYtACRJgu2C27+r7AYtACRJgucEt1/q83+wAJAkaTywU3AOFgCSJJXs2cCk4BxuLbtBCwBJUtPtEZ0AcEPZDVoASJKabvfg9pcDt5XdqAWAJKnp9gxu/yZKfgUQLAAkSc02BdgtOIfrIxq1AJAkNdk+wITgHG6MaNQCQJLUZPtHJ0DABECwAJAkNdvzohMA/hjRqAWAJKmpJgB7B+ewEHg4omELAElSU+1HmgQY6dKohi0AJElN9bLoBLAAkCSpdBYAkiQ1zBbAjsE5LCHoDQCwAJAkNdPLgK7gHC4jYAXAPhYAkqQmOjQ6AeD3kY1bAEiSmmY6cFB0EsAlkY1bAEiSmuYVwKTgHFYBV0QmYAEgSWqaw6MTAC4GlkYmYAEgSWqSacCLo5MAzo5OwAJAktQkrwAmRycBnBOdgAWAJKlJjo5OALgXuCk6CQsASVJTbAG8MDoJ4KzoBMACQJLUHG8BxkYnQQbP/8ECQJLUDF3AUdFJAKuB30YnARYAkqRmeD7wjOgkSF/+T0QnARYAkqRmeHd0Ar1+HJ1AHwsASVLdbU56/S/aauC06CT6WABIkuruXcD46CSA84DHopPoYwEgSaqzicCx0Un0OjU6gVYWAJKkOjsC2Dg6CWAlcHp0Eq0sACRJddUFfDg6iV7nkMns/z4WAJKkunolsFN0Er2yuv0PFgCSpPr6SHQCvZ4go9n/fSwAJEl1dBCwT3QSvX4APBmdRH8WAJKkOvrH6ARafDs6gYFYAEiS6ub5wAuik+h1FXBddBIDsQCQJNXNZ6ITaJHlr3+wAJAk1curgb+LTqLXMuBH0UkMxgJAklQXY4FPRSfR4kfA4ugkBmMBIEmqizcDO0Yn0eLr0QkMxQJAklQH04F/i06ixYXA1dFJDMUCQJJUBx8FNotOosUXohPYEAsASVLVPQN4X3QSLW4BzopOYkMsACRJVfdl0ra/ufg80B2dxIZYAEiSquwQ4ODoJFo8SFr6N3sWAJKkqpoK/Fd0Ev2cBKyITqIdFgCSpKr6NLB1dBItlpL5q3+tLAAkSVW0F/Cu6CT6OQl4NDqJdlkASJKqZjxpjf2x0Ym0WEya/FcZFgCSpKr5BLBzdBL9fBF4LDqJ4bAAkCRVyT7ACdFJ9PM46VXESrEAkCRVxVTgZPK69Q/wOWBRdBLDZQEgSaqKLwPPjE6in0dIk/8qxwJAklQFrwKOjU5iAJ8BlkQnMRIWAJKk3G1JmvWfmzuA/45OYqQsACRJOZsI/AyYG53IAD5ERVb9G4gFgCQpZ/8J7BmdxAB+C5wWncRolFkARO+MZLGjSNHjrye4fWkkXg+8MzqJAawF3h+dxGiVeVFaW2JbAxkf3L6aLXr8rQ5uXxqu5wDfiU5iEN8EbohOYrQsAKRyTAhuf01w+9JwPA04nfTef24WAR+PTqITyiwAon+BWAAo0rjg9qMLcKldk4BfkGb+5+iTpHf/K887AFI5ou8ARBfgUru+QlruN0fXUeHX/vorswBYVWJbA7EAUKTo8WcBoCr4BHku9gPpM3Q0NXqcVmYB8GSJbQ0k+gKsZou+A7A0uH1pQ94GnBidxBA+D1wfnUQnlVkARF+AJge3r2aLHn/LgtuXhnIo8NXoJIbwF+BT0Ul0WpkFQPQFaE5w+2q26PEX/fmTBrMX8H/ET5QdTA9pLYLl0Yl0WpkFQPRmCdEXYDXb7OD2o+/ASQPZFTibPF/36/Nt4DfRSRSh7EcAkauRTQKmBLavZosuQKMLcKm/nYDzif9sDGUh8JHoJIpS9joAi0tsbyA5DzTVW/RGJg8Hty+12g44D9goOpEhdJNm/T8enEdhyl6fPHrxhOjbsGqu6OIz+rMn9dmWtJHOptGJbMBngQuikyhS2QVA9K+Q6F9hai4LAAl2AC4ENgvOY0OuJq1JUGtlz7qMvgjND25fzTSN+OIz+rNXZ88ADgN2Jt3a3pp0bV0F3A/cBFwK/JL0TLmpdgfOIe/b/pDemHkjLp7Vcd8hTQSMik8W30VpPbsQO+5r+wwz0FjgrcDltH8e1pK+AF8UkG+0/Uib6ER+DtqNtxZ0DBrvRGJP7CmF91Ba36uIHfeV37Y0MwuAPzC6c3IusFXJeUc5iHVvgeUePyvoGAg4htiTe0nxXZTW8wFix/0vi+9iI4wjLQfbTWfOy2LSo4M6OxJYSfwXeztxKzCrmMMgSLe+Ik/wfcV3UVrPScSO+5yXWK2KCaQtajt9brqB95XYj7J0kSbRdapYKjqWkuZwqEDbEXuSu0kTsqQynUPsuP+n4rtYa13Ajyj2ulSn584TgJOJ/1IfTryhkCOhp5hAmlkZeaIPKLqTUosu0gz8yDH/usJ7WW8nUPw5WgnsU1aHCjSX9O589Bf6cOJLhRwJDehWYk/28cV3UfqbbYm/wO1SeC/ra2fKe4Z9C/G7Ro7Gc4A7iB/vw4mLcKv4Uv2S2BPuLE+V6Y3Ejve1VPtLJVIXadGaMs9XVdedP4LqzPTvi/vJf0Gi2vk8sSf93uK7KP3Nl4gd73cU38XaOpLyz9dDpEelVTEW+BzxX+bDjWXA3gUcD23AscSf/C0K76WUDGehmCLiV8V3sZZmAQ8Qc84OLaF/nfB00i306Ov5cGMt8OoCjofasDvxA+DthfdSgo2BNcSO9U8V3st6+i/iztmPSujfaL2C+MmtI40PFHA81KYJwApiB8DZhfdSSq92RV/s/KUzfLsS+7ZSzks3TyQVR1V5v79/nNT5Q6LhuorYQbASmFl4L9V0vyL+gje/8F7WSxdwMfHnbZOiOzoCuwLXEX9sRhpnkOYsKNjXiR8Mf194L9VkM4i/0xW9/XYVRUz8GyieV3RHh2Ec8DGqs6TvQHE1MLXTB0YjcxTxA+K0wnupJsvhi+T0wntZLzOJm/jXP44ouK/t2on05Rl9PEYTt5DnHZXG2or4QbGGtEiLVIRriR/jHyq8l/XyZeLPWV9E36GcBHyc+LtYo427SG8rKDN3Ez84vlJ4L9VEBxI/tnuAPYvuaI3sRPwy5a3x0mK7O6QXAH8aJK8qxYPA9h0+NuqQ/yF+gCwjrV0tdVIOk/8Wk57dasNymfjXGjsW2uOBbQb8eIT55hYPE3MM1aajiB8kPaTbXFKn7Ewer0idUXRHaySH+Rqt8STlFm+TgX8kFY3Rfe9EPE5ab0YZ25i0IlP0YFkCbFpwX9Uc5xE/pntwsat25TTxry/KWqdkDPAm8ngc26lYCuzXyYOk4lxG/IDpIT2OkEbrNcSP5R7SHQiXu25PThP/+uK4QnucHED1Z/f3j8fxy79SPkr8oOmLVxTcV9XbPPL5JXldwX2ti+gV/waKJ4DpBfZ5P+D8DPrZ6XgYb/tXzo7ED5y+eADYvNjuqqa6SO/cR4/hvvhEsd2thRwn/vUAnyyov/uRz+OpTsdfccJfZV1P/ADqi8tIa11Lw/Ex4sduazyz2O7WQm4T/3pI+9PP6HA/D6S+X/w9pPf8Xc+lwk4gfhC1xi/w9Sm17w3kMZm1L64stru1MIP0qzH6XPWPN3Wof2NIWwpHb0VddNwBbN2hY6YgW5HHa1Ot8R3cNEIb9mpgFfHjtTXeX2iP6yHHiX8XkR5LjMZs4MPAPRn0p+i4GnjaKI+XMpHjpJRT8XGABncsaTnp6HHaGiuAjYrsdA3kOPFvNbDLKPq0H3Ayaf2A6L6UEWfgxj61chjxg2qguAwnBuqpxgH/SfzYHCh+UGC/6yDXiX9fGkFf5gDvBf6YQf5lxkl4d7Z2xgH3ET+4BooHgFcW13VVyLbAJcSPycFiQXFdr4VcJ/7NbDP/KaRdAs+g2lvzjiTWAh9o8zipgj5O/CAbKn5IWitbzTOB9Gx1KfHjcLC4vrDe10OOK/71kIqSoUwEDiYtVrYkg3wjYhlpvo1qbC75D/AlwImkRV9Uf+NIv7huIX7sbSjeUNAxqIscJ/5dzMAT/+aR9kr5KflfE4uO+4C9BzhGqqEvED/g2ollwNfwfeu6mgF8kPSOcfRYayduw1dXh5L7xL9xwN8B/0R6GyC3yaVRcRGwSf+TqfrajDSTOXrgtRtrSc/j3gTMKuB4qDzjgBcCXyGtKR49toYTZawdX1W5Tvw7h/TK5pmk5X+j88ktvgSMH+B8quZyvFXXTqwCzgXeAWzZ8aOiIkwn7QHxPeAR4sfQSOJ20hwFDSzHiX/G4LEUH2eVZrQLTxRhHumWZrszY3N1P2lVtiuBK4CrSPttK8Z4YCfS88S9emMH0qppVXYE8OPoJDI1kzR/wwVjquE20o6aN0Yn0hQ5FgAAxwOfiU6iAA8Cd5KWsOyLe0i/Ph/rjWVh2VXXBNJ70bN7/9wc2KZfPJ36PSe/kvTsuCc6kUx9mfSuvPL3c9LiWo9HJ9IkuRYAk0kLXGwTnUiAVawrBpb3/rO+Z9KQbpGtDsgr0uyWv08j/Zofx7ov/GkRSQXrAZ5HWpdA69sFuIb6FX11s4w0F+Lb0YkoLy8h/nmUYeQa30CD6QIuJP4cGUPHVcB2A59CKS1tGj1IDSO3uJ+n3hXRUznxL+/oJj2ecfJqsFwfAfTZmPQowA1OpHUOJy0So/U58S9vC0kF2oXBeYj8Z0A/BBxDqholwffxy38o/4Jf/jnqAb5FmptxYWwqqpqTiL9tZRjRcRtp7QINbCfyW/HPSOP2wCHOmzSkScAfiB/IhhEVy4E90GByXfGvybEK+DTprS5pVOaT3qOPHtSGERHHoqE48S+vuA7Yc8gzJg3TApq3D7ZhfBYNZTJp17jo82TAIuB9wNghz5g0QkeSXiOJHuiGUUb8Ai+mG/JB4s9T02MNaYdUt0pX4d5N/IA3jKLjN6T5LxpcF2l57ehz1eS4gLTlslSaE4kf+IZRVFyBM/7bsYD4c9XUuId0R1YVVeV1sk/s/fMTkUlIBbgUOARYEp1IBbw4OoEGepg0L+UrpDlZUph3AWuJr4YNoxPxG/zlPxznEn/OmhKLSbu0Vn2rdtXM0fh2gFH9+F9cH3247iT+vNU9niDdcfWLX9naD3iA+A+LYQw3ukm/rHLfmyNHS4g/f3WNpaRNezZu+2xIgeaTFqCI/uAYRruxGHglGinv/HU+HgA+CswdxnmQsjCJVLW6VoCRe1wFPBONxiPEn8e6xK2kRXxculeVdyhptmr0h8ow+sda4N+B8Wi0/kj8+ax6XEi6Xua+O6w0LBsDPyT+A2YYfXEjsA/qFD/fI4slwLdxvX41wEuAO4j/0BnNjeXAP+Ov/k5zVdDhxVXAcfiqqRpmAun51iLiP4RGc6IbOBXYBhVhc5zvs6F4AvgGsPsIj7FUG/OALwEriP9gGvWO84E9UNF+Tfy5zi1WAKcDbwCmjPzQSvW0MWlxi8eJ/7Aa9YrzgX1RWQ4k/pznEGuAS0h3Ot2VT2rDXOBjwL3Ef4CN6sZy4PvALijCOcSPgYhYRVoO+VhgzqiPotRQ44BXA+fhM0Wj/biFtB+9F99Y80mLKkWPhzLiHtIz/VfjZD6p47Yg3Ua7hPgPu5FfPAqcArwIl+/NySGk2+DR46PTsZp0LTqeNKfEMaeOcCBt2LNJlfYhwF64WEZT3QmcBZwBXED6olF+3knaprbK17YlwOWkbaEv7f370tCMVEtV/pBE2Ah4GemX3/NItx1VT4uBi0mrpJ0F/Ck0Gw3HG4DvUZ2dFe9l3Zf9JcANpNUipUJZAIzOlsDzSSu77UGaADYpNCONRA9pHfRrgCuBi4Dr8SJcZbsBJwM7RyfSYjlwE+kL/sbeuJ60n4FUOguAzhoH7Ei6+OwAbN/75za9/07x/grcTJq892fSxfgPpF/8qpcJpFXvTiAtGFSG1cBC0iOjvriVNM5uw6JSGbEAKMd40uOCp/fGVqSJhk8jva87j/R4YXZQfnXwJOmX1EOkTaAeJV2I++Lu3vCLvnkmkh7dHUG6Y7fJCP4bS0hj6mHSOHu0JRYCd5G+7O/FL3lVhAVAXsYAM4GppC05ZwDTWLd+/Njef9Y0y0krm/V5vPefLSct7fwkaV94qR2bkwryOaTP2WLSl/YqYFnv/80TpNeBV5C+5B1fkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJHfX/AU3XqY70ua13AAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <span className="">Converter</span>
                    </li>

                    <li className={`flex px-6 font-semibold py-3 cursor-pointer hover:bg-[#282828] hover:text-white  text-sm items-center gap-x-4 
                            mt-2 ${divStyle3}`}
                            onClick={() => handleSidebarButtonClick("myTeamSummary")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                            <path d="M15.9474 8.36364C16.5712 8.36364 17.1695 8.61146 17.6107 9.0526C18.0518 9.49374 18.2996 10.092 18.2996 10.7159V17.249C18.2996 18.7742 17.6937 20.237 16.6152 21.3156C15.5367 22.3941 14.0739 23 12.5486 23C11.0233 23 9.56052 22.3941 8.48199 21.3156C7.40346 20.237 6.79755 18.7742 6.79755 17.249V10.7159C6.79755 10.092 7.04537 9.49374 7.48651 9.0526C7.92765 8.61146 8.52596 8.36364 9.14982 8.36364H15.9474ZM15.9474 9.93182H9.14982C8.94186 9.93182 8.74243 10.0144 8.59538 10.1615C8.44834 10.3085 8.36573 10.508 8.36573 10.7159V17.249C8.36573 18.3583 8.80642 19.4222 9.59086 20.2067C10.3753 20.9911 11.4392 21.4318 12.5486 21.4318C13.658 21.4318 14.7219 20.9911 15.5063 20.2067C16.2908 19.4222 16.7315 18.3583 16.7315 17.249V10.7159C16.7315 10.508 16.6488 10.3085 16.5018 10.1615C16.3548 10.0144 16.1553 9.93182 15.9474 9.93182ZM2.35227 8.36364H6.69718C6.27745 8.80065 5.98251 9.34216 5.84305 9.93182H2.35227C2.14432 9.93182 1.94488 10.0144 1.79784 10.1615C1.65079 10.3085 1.56818 10.508 1.56818 10.7159V16.2035C1.56804 16.7281 1.69943 17.2443 1.95032 17.705C2.20122 18.1656 2.56362 18.556 3.00436 18.8405C3.44511 19.1249 3.95014 19.2943 4.47326 19.3331C4.99638 19.372 5.52089 19.279 5.99882 19.0628C6.13786 19.5751 6.33755 20.0623 6.58845 20.5181C5.87218 20.8308 5.08929 20.9602 4.31048 20.8946C3.53167 20.829 2.78147 20.5704 2.12763 20.1422C1.47379 19.714 0.936898 19.1297 0.565437 18.4421C0.193977 17.7544 -0.00035158 16.9851 4.77504e-07 16.2035V10.7159C4.77504e-07 10.092 0.247828 9.49374 0.688965 9.0526C1.1301 8.61146 1.72841 8.36364 2.35227 8.36364ZM22.7386 8.36364C23.3625 8.36364 23.9608 8.61146 24.4019 9.0526C24.8431 9.49374 25.0909 10.092 25.0909 10.7159V16.2045C25.0912 16.9857 24.897 17.7546 24.5259 18.4419C24.1547 19.1292 23.6182 19.7133 22.9649 20.1414C22.3115 20.5695 21.5619 20.8282 20.7835 20.8942C20.0052 20.9601 19.2227 20.8312 18.5066 20.5191L18.5652 20.4125C18.7889 19.988 18.9698 19.5375 19.0994 19.0649C19.5771 19.2798 20.101 19.3717 20.6232 19.3322C21.1455 19.2926 21.6496 19.1229 22.0894 18.8384C22.5293 18.554 22.8909 18.164 23.1412 17.7039C23.3916 17.2438 23.5228 16.7283 23.5227 16.2045V10.7159C23.5227 10.5081 23.4403 10.3089 23.2934 10.1618C23.1466 10.0148 22.9475 9.93209 22.7397 9.93182H19.2552C19.1155 9.34203 18.8202 8.8005 18.4 8.36364H22.7386ZM12.5455 0C13.026 -1.01262e-08 13.5018 0.0946451 13.9457 0.278532C14.3897 0.462418 14.793 0.731945 15.1328 1.07172C15.4726 1.4115 15.7421 1.81488 15.926 2.25882C16.1099 2.70276 16.2045 3.17857 16.2045 3.65909C16.2045 4.13961 16.1099 4.61542 15.926 5.05936C15.7421 5.50331 15.4726 5.90668 15.1328 6.24646C14.793 6.58624 14.3897 6.85576 13.9457 7.03965C13.5018 7.22354 13.026 7.31818 12.5455 7.31818C11.575 7.31818 10.6443 6.93267 9.95809 6.24646C9.27187 5.56025 8.88636 4.62954 8.88636 3.65909C8.88636 2.68864 9.27187 1.75794 9.95809 1.07172C10.6443 0.38551 11.575 2.04507e-08 12.5455 0ZM20.9122 1.04545C21.3241 1.04545 21.7319 1.12658 22.1125 1.2842C22.493 1.44181 22.8387 1.67284 23.13 1.96407C23.4212 2.25531 23.6522 2.60106 23.8098 2.98158C23.9675 3.3621 24.0486 3.76994 24.0486 4.18182C24.0486 4.59369 23.9675 5.00153 23.8098 5.38205C23.6522 5.76257 23.4212 6.10832 23.13 6.39956C22.8387 6.6908 22.493 6.92182 22.1125 7.07944C21.7319 7.23706 21.3241 7.31818 20.9122 7.31818C20.0804 7.31818 19.2827 6.98774 18.6945 6.39956C18.1063 5.81138 17.7759 5.01363 17.7759 4.18182C17.7759 3.35 18.1063 2.55226 18.6945 1.96407C19.2827 1.37589 20.0804 1.04545 20.9122 1.04545ZM4.17868 1.04545C4.59056 1.04545 4.9984 1.12658 5.37892 1.2842C5.75944 1.44181 6.10519 1.67284 6.39643 1.96407C6.68766 2.25531 6.91869 2.60106 7.0763 2.98158C7.23392 3.3621 7.31505 3.76994 7.31505 4.18182C7.31505 4.59369 7.23392 5.00153 7.0763 5.38205C6.91869 5.76257 6.68766 6.10832 6.39643 6.39956C6.10519 6.6908 5.75944 6.92182 5.37892 7.07944C4.9984 7.23706 4.59056 7.31818 4.17868 7.31818C3.34687 7.31818 2.54912 6.98774 1.96094 6.39956C1.37276 5.81138 1.04232 5.01363 1.04232 4.18182C1.04232 3.35 1.37276 2.55226 1.96094 1.96407C2.54912 1.37589 3.34687 1.04545 4.17868 1.04545ZM12.5455 1.56818C11.9909 1.56818 11.4591 1.78847 11.067 2.18059C10.6748 2.57272 10.4545 3.10455 10.4545 3.65909C10.4545 4.21363 10.6748 4.74547 11.067 5.13759C11.4591 5.52971 11.9909 5.75 12.5455 5.75C13.1 5.75 13.6318 5.52971 14.0239 5.13759C14.4161 4.74547 14.6364 4.21363 14.6364 3.65909C14.6364 3.10455 14.4161 2.57272 14.0239 2.18059C13.6318 1.78847 13.1 1.56818 12.5455 1.56818ZM20.9122 2.61364C20.7063 2.61364 20.5024 2.6542 20.3121 2.73301C20.1218 2.81182 19.949 2.92733 19.8034 3.07295C19.6577 3.21856 19.5422 3.39144 19.4634 3.5817C19.3846 3.77196 19.344 3.97588 19.344 4.18182C19.344 4.38775 19.3846 4.59167 19.4634 4.78194C19.5422 4.9722 19.6577 5.14507 19.8034 5.29069C19.949 5.43631 20.1218 5.55182 20.3121 5.63063C20.5024 5.70944 20.7063 5.75 20.9122 5.75C21.3281 5.75 21.727 5.58478 22.0211 5.29069C22.3152 4.9966 22.4804 4.59773 22.4804 4.18182C22.4804 3.76591 22.3152 3.36704 22.0211 3.07295C21.727 2.77885 21.3281 2.61364 20.9122 2.61364ZM4.17868 2.61364C3.97275 2.61364 3.76883 2.6542 3.57857 2.73301C3.3883 2.81182 3.21543 2.92733 3.06981 3.07295C2.92419 3.21856 2.80868 3.39144 2.72987 3.5817C2.65106 3.77196 2.6105 3.97588 2.6105 4.18182C2.6105 4.38775 2.65106 4.59167 2.72987 4.78194C2.80868 4.9722 2.92419 5.14507 3.06981 5.29069C3.21543 5.43631 3.3883 5.55182 3.57857 5.63063C3.76883 5.70944 3.97275 5.75 4.17868 5.75C4.59459 5.75 4.99346 5.58478 5.28755 5.29069C5.58165 4.9966 5.74686 4.59773 5.74686 4.18182C5.74686 3.76591 5.58165 3.36704 5.28755 3.07295C4.99346 2.77885 4.59459 2.61364 4.17868 2.61364Z" 
                            fill="currentColor"/>
                        </svg>
                        <span className="">My Team Summary</span>
                    </li>

                    <li className={`flex px-6 font-semibold py-3 cursor-pointer hover:bg-[#282828] hover:text-white  text-sm items-center gap-x-4 
                            mt-2 bg-black-600 duration-200 ${divStyle4}`}
                            onClick={() => handleSidebarButtonClick("downlineTeam")}>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.75 3C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H12.76C12.926 20.618 13.004 20.213 13.004 19.812C13.004 19.707 12.997 19.602 12.984 19.5H17.75C18.2141 19.5 18.6592 19.3156 18.9874 18.9874C19.3156 18.6592 19.5 18.2141 19.5 17.75V6.25C19.5 5.78587 19.3156 5.34075 18.9874 5.01256C18.6592 4.68437 18.2141 4.5 17.75 4.5H6.25C5.78587 4.5 5.34075 4.68437 5.01256 5.01256C4.68437 5.34075 4.5 5.78587 4.5 6.25V11.51C3.9663 11.5498 3.45086 11.7216 3 12.01V6.25C3 5.38805 3.34241 4.5614 3.9519 3.9519C4.5614 3.34241 5.38805 3 6.25 3H17.75ZM11.75 6C11.9312 6.00001 12.1063 6.06564 12.2429 6.18477C12.3795 6.30389 12.4684 6.46845 12.493 6.648L12.5 6.75V12H16.248C16.438 12.0001 16.6209 12.0722 16.7598 12.202C16.8986 12.3317 16.9831 12.5093 16.996 12.6989C17.009 12.8885 16.9495 13.0759 16.8296 13.2233C16.7097 13.3707 16.5382 13.4671 16.35 13.493L16.248 13.5H11.75C11.5688 13.5 11.3937 13.4344 11.2571 13.3152C11.1205 13.1961 11.0316 13.0316 11.007 12.852L11 12.75V6.75C11 6.55109 11.079 6.36032 11.2197 6.21967C11.3603 6.07902 11.5511 6 11.75 6ZM4.75 17C5.34674 17 5.91903 16.7629 6.34099 16.341C6.76295 15.919 7 15.3467 7 14.75C7 14.1533 6.76295 13.581 6.34099 13.159C5.91903 12.7371 5.34674 12.5 4.75 12.5C4.15326 12.5 3.58097 12.7371 3.15901 13.159C2.73705 13.581 2.5 14.1533 2.5 14.75C2.5 15.3467 2.73705 15.919 3.15901 16.341C3.58097 16.7629 4.15326 17 4.75 17ZM4.75 23C7.429 23 8.5 21.431 8.5 19.875C8.5 18.84 7.78 18 6.893 18H2.607C1.72 18 1 18.84 1 19.875C1 21.437 2.071 23 4.75 23ZM11.5 15.75C11.5 16.2141 11.3156 16.6592 10.9874 16.9874C10.6592 17.3156 10.2141 17.5 9.75 17.5C9.28587 17.5 8.84075 17.3156 8.51256 16.9874C8.18437 16.6592 8 16.2141 8 15.75C8 15.2859 8.18437 14.8408 8.51256 14.5126C8.84075 14.1844 9.28587 14 9.75 14C10.2141 14 10.6592 14.1844 10.9874 14.5126C11.3156 14.8408 11.5 15.2859 11.5 15.75ZM8.916 22C9.32 21.34 9.498 20.595 9.498 19.875C9.49709 19.3983 9.38765 18.9281 9.178 18.5H10.718C11.428 18.5 12.004 19.088 12.004 19.813C12.004 20.903 11.147 22 9.004 22H8.916Z" 
                            fill="currentColor"/>
                        </svg>
                        <span className="bg-black-600 duration-200">Downline team </span>
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
                    {/* sidebar close open icon  */}
                    <button 
                        className="bg-neutral-800 text-2xl px-2.5 py-2 rounded-lg md:hidden"
                        onClick={toggleSidebar}
                        >
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

                {(selectedTab === "staking") && stakingDiv}
                {(selectedTab === "convertor") && convertorDiv}
                {(selectedTab === "myTeamSummary") && myTeamSummaryDiv}
                {(selectedTab === "downlineTeam") && downlineTeamDiv}

                </div>
            </div>
        </div>
        
        </div>
    )
}
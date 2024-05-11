function Dapp() {
    return(
        <div>
         <div className="flex justify-between py-6 px-10 md:px-10 rounded-lg bg-[linear-gradient(93deg,rgba(77,176,251,0.568),rgba(72,72,72,0)_35.99%,rgba(77,176,251,0.486)_55.39%,rgba(100,56,223,0)_136.97%)]">
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
             
             {/* <div>
                 <h1>Your CIP Pro Balance</h1>
                 <h1>0.00</h1>
             </div>
             <div>
                 <h1>Total Value Locked</h1>
                 <h1>$ 597.15</h1>
             </div>
             <div>
                 <h1>CIP Pro Price</h1>
                 <h1>$ 0.13</h1>
             </div>
             <div>
                 <h1>Team Size</h1>
                 <h1>0</h1>
             </div> */}
         </div>
       {/* LP Staking */}
    <div>
        
             <div>
                 <h1><h1>LP Staking</h1></h1>
             </div>
             <div>
                 <div className="flex justify-between">
                     <div>
                         <h1>ETH/CIP Pro</h1>
                     </div>
                     <div>
                         <h1>ARB/CIP Pro</h1>
                     </div>
                     <div>
                         <h1>DAI/CIP Pro</h1>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    )
}

export default Dapp


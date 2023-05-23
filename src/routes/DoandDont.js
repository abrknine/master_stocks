import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const DoandDont = () => {
  return (
    <div>
      <Navbar/>
      <div className='py-28 px-24'>
        <h1 className='curvy-title text-2xl font-bold'>Do's and Don't</h1>
        <p >
        Before you start your Investment/Trading journey by referring to our Research Alerts/Reports, we 
would like to inform you of some of the best Investment/Trading practices that one should follow for 
better Investment/Trading results. 
<br />
As you are aware that the Stock market is uncertain and volatile in nature, we suggest a few Do’s & 
Don’ts as a general practice to follow, which are mentioned below: – 
<br/>
<ul>
   <li>Always Trade/Invest by using a Stop Loss.</li>
   <li>Always remember to place the Stop Loss in the Trading terminal and do not keep a mental stop loss.</li>
   <li>Place a Target order in the system at the price at which you want to book your profit</li>
   <li>Always trade with only a portion of your capital.</li>
   <li>Never Trade with your entire capital in a single trade.</li>
   <li>Try to avoid trading using leverage as much as possible. </li>
   <li>Always focus on protecting your capital as with systematic trading, profit can be made in the long 
term if capital is protected.</li>

</ul>




Example: – Consider that, if someone has a capital of Rs.5 lakhs, it is suggested that you invest only 
Rs. 1 Lakh in any particular trade. The main reason for diversification is that, if any trade doesn’t go 
in the anticipated direction and stop loss gets hit, then even after SL is hit, the impact on the overall 
capital is minimized. If a person diversifies and trades, then the probability of making a profit over 
time can increase and the probability of losing capital can decrease. All recommendations will be 
given through our Mobile Application Only, kindly download them. You can also call us for customer 
support. <br /> 
<br />
We at https://masterstocks.co.in/ will never ask for your Demat/Trading account Login Id & 
Password. If someone asks you for such details, please deny them immediately and mail us at our 
official email id regarding the same. <br /> <br />
We hope that you will follow the above practices in your Trading/Investing decisions. <br/> <br />
Thank you. <br /> 
Happy Trading & Investing!

        </p>
      </div>
        <Footer/>
    </div>
  )
}

export default DoandDont

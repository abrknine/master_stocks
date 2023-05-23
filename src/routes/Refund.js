import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Refund = () => {
  return (
    <div>
      <Navbar/>
      <div className='py-28 px-24'>
        <h1 className='curvy-title text-2xl font-bold'>Refund policy</h1>
        <p >
        We value our customers and are committed to providing the best services to our clients. However, 
our clients need to realize that we do not offer a 100% guarantee on our calls and hence cannot 
offer any refund on subscriptions regardless of the individual client’s performance. Once a service 
has been subscribed to and payment has been made for the same, it can’t be canceled or refunded 
in any case. If for some unforeseen reason, the client is not satisfied with our services, they may call 
us to seek direction on future calls. We will give our best effort to increase the satisfaction levels in 
such cases. However, any request by the client to cancel a service or get a refund will NOT be 
accepted in any case, as we have clearly communicated the risk of loss of capital as well as gains to 
all our clients before subscribing to any of our services. <br /> <br />
We strongly recommend that before making a payment, our visitors and potential clients, please: <br />

<ul>
    <li>
1.Read all information about our services and the support given to our clients.

    </li>
    <li>
2.Read our Terms and Conditions.
        
    </li>
    <li>
3.Read our Privacy Policy and Refund Policy.

    </li>
    <li>
4.There is no refund possible in any case whatsoever.

    </li>
</ul>
Kindly make the payment after reading all terms and conditions, disclaimers, and refund policy.


        </p>
      </div>
        <Footer/>
    </div>
  )
}

export default Refund

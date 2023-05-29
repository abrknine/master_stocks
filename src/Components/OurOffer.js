/*import React from "react";
import offer1 from "../assets/offer1.jpg";
import './OurOffer.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const OurOffer = () => {
  return (
    <div className="Offer">
      <div className="Offer-left">
        <h1 className="text-4xl font-bold md:m-0 " >Master the art of profitable trading</h1>
        <ul>
          <li className="flex"> <AiOutlineArrowRight/>
          Are you not getting the most out of your research?</li>
          <li className="flex"><AiOutlineArrowRight/>
          Are you sick of being let down?</li>
          <li className="flex"><AiOutlineArrowRight/>
          Do you want to be able to trade stocks quickly and easily?</li>
          <li className="flex"><AiOutlineArrowRight/>
          Our alert is the perfect solution for your needs.</li>
        </ul>
        <button className="form-button">Learn more</button>
      </div>
      <div className="Offer-right">
        <img src={offer1} alt="image" />
      </div>
    </div>
  );
};

export default OurOffer;
*/

import React from "react";
import offer1 from "../assets/offer1.jpg";
import './OurOffer.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const OurOffer = () => {
  return (
    <div className="Offer px-6 ">
      <div className="Offer-left ">
        <h1 className="text-4xl font-bold md:text-5xl">Master the art of profitable trading</h1>
        <ul className="mt-6 md:mt-10 text-lg md:text-xl">
          <li className="flex items-center"><AiOutlineArrowRight className="mr-2" />Are you not getting the most out of your research?</li>
          <li className="flex items-center"><AiOutlineArrowRight className="mr-2" />Are you sick of being let down?</li>
          <li className="flex items-center"><AiOutlineArrowRight className="mr-2" />Do you want to be able to trade stocks quickly and easily?</li>
          <li className="flex items-center"><AiOutlineArrowRight className="mr-2" />Our alert is the perfect solution for your needs.</li>
        </ul>
        <button className="form-button mt-6 md:mt-10">Learn more</button>
      </div>
      <div className="Offer-right mt-6 md:mt-0">
        <img src={offer1} alt="image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default OurOffer;

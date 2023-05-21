import React from "react";
import offer1 from "../assets/offer1.jpg";
import './OurOffer.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const OurOffer = () => {
  return (
    <div className="Offer">
      <div className="Offer-left">
        <h1 className="text-4xl font-bold " >Master the art of profitable trading</h1>
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

import React from "react";
import offer1 from "../assets/offer1.jpg";
import './OurOffer.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const OurOffer = () => {
  return (
    <div className="Offer">
      <div className="Offer-left">
        <h1 className="text-4xl font-bold " >Trade Like a Pro</h1>
        <ul>
          <li className="flex"> <AiOutlineArrowRight/>
            Are you missing out on expert research services?</li>
          <li className="flex"><AiOutlineArrowRight/>
          Tired of getting false commitments?</li>
          <li className="flex"><AiOutlineArrowRight/>
          Looking for some reliable and convenient source for trade in indian stock market?</li>
          <li className="flex"><AiOutlineArrowRight/>
          Our alert is right choice for you.</li>
        </ul>
        <button className="form-button">Leran more</button>
      </div>
      <div className="Offer-right">
        <img src={offer1} alt="image" />
      </div>
    </div>
  );
};

export default OurOffer;

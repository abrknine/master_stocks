/*import React from "react";
import "./Practice.css";

const Practicei = () => {
  return (
    <div className="Practice">
      <h1 className="Practice-Heading text-2xl font-bold ">Best Practices of Trading</h1>
      <div className="Cards">
        <div className="Card-1">
          <span className="card-number">1</span>
          <h3 className="font-bold">Set Realistic Goals and Targets</h3>
          <p >
            Goal to become an overnight multi- millionare from trading is a
            waste of time. Instead of creating such false goals. capital safety
            and regular income should be your goal.
          </p>
        </div>
        <div className="Card-2">
        <span className="card-number">2</span>
          <h3 className="font-bold" >Emotion is the Enemy in Trading</h3>
          <p >
          You can't eliminate emotions from trading, but bringing emotions into trading can negatively impact your performance. Successful traders leave their emotions behind each morning.
          </p>
        </div>
        <div className="Card-3">
        <span className="card-number">3</span>
          <h3 className="font-bold" >Balance your Risks</h3>
          <p >
          To be successful in trading, it's important to assess and manage risk before making trades, rather than solely focusing on chasing profits.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practicei;*/

import Carousel from 'react-bootstrap/Carousel';
import "./Practice.css";


const Practicei= () =>{
  return (
    <>

    <div className='box my-10 '>
    <h1 className="Practice-Heading text-2xl font-bold ">Effective trading strategies</h1>
    
    <Carousel variant="dark">
      <Carousel.Item className='Car' >
      <div className="Card-1 ">
          <span className="card-number">1</span>
          <h3 className="font-bold">Celebrate your successes</h3>
          <p >
            Goal to become an overnight multi- millionare from trading is a
            waste of time. Instead of creating such false goals. capital safety
            and regular income should be your goal.
          </p>
        </div>
       
      </Carousel.Item>
      <Carousel.Item className='Car '>
      <div className="Card-2">
        <span className="card-number">2</span>
          <h3 className="font-bold" >Don't overtrade</h3>
          <p >
          You can't eliminate emotions from trading, but bringing emotions into trading can negatively impact your performance. Successful traders leave their emotions behind each morning.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item className='Car '>
      <div className="Card-3">
        <span className="card-number">3</span>
          <h3 className="font-bold" >Mitigate your risks.</h3>
          <p >
          To be successful in trading, it's important to assess and manage risk before making trades, rather than solely focusing on chasing profits.
            
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
     
    </>
  );
}

export default Practicei;

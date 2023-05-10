import React from "react";
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

export default Practicei;

import React from 'react';
import './card.scss'

const Card = () => {
  return (
      <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Celebrating less than a years worth of making false connections on Getogether :D</h5>
                <p className="card-text">If your looking to do something this year, Getogether has you covered, for less than a year people have turned to Getogether to meet people, make friends, find support, grow their pot (I mean business) and explore the outside world. Lots of events are happening daily</p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='box'>Picture here</div>
            </div>
          </div>
        </div>
  
  );
};

export default Card;
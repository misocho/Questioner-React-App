import React from "react";
import "../css/card.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="my-card">
          <div className="in-card">
            <div className="in-card-upper">
              <div className="in-card-image">
                <img src="./src/images/macbook.png" />
              </div>
            </div>
            <div className="lower-container">
              <div className="in-card-lower">
                <div className="in-card-date">
                  <div className="month">May</div>
                  <div className="date">9</div>
                </div>
                <div className="in-card-text">
                  <div className="meetup-text">
                    <div className="meetup-title">
                      <a href="#" className="meetup-link">
                        Flutter Study Jam
                      </a>
                    </div>
                    <div className="meetup-details">
                      <p>Fri, 28 Jun 2019 09:00:00 GMT</p>
                      <p>Nairobi, Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-card">
          <div className="in-card">
            <div className="in-card-upper">
              <div className="in-card-image">
                <img src="./src/images/macbook.png" />
              </div>
            </div>
            <div className="lower-container">
              <div className="in-card-lower">
                <div className="in-card-date">
                  <div className="month">May</div>
                  <div className="date">9</div>
                </div>
                <div className="in-card-text">
                  <div className="meetup-text">
                    <div className="meetup-title">
                      <a href="#" className="meetup-link">
                        Flutter Study Jam
                      </a>
                    </div>
                    <div className="meetup-details">
                      <p>Fri, 28 Jun 2019 09:00:00 GMT</p>
                      <p>Nairobi, Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-card">
          <div className="in-card">
            <div className="in-card-upper">
              <div className="in-card-image">
                <img src="./src/images/macbook.png" />
              </div>
            </div>
            <div className="lower-container">
              <div className="in-card-lower">
                <div className="in-card-date">
                  <div className="month">May</div>
                  <div className="date">9</div>
                </div>
                <div className="in-card-text">
                  <div className="meetup-text">
                    <div className="meetup-title">
                      <a href="#" className="meetup-link">
                        Flutter Study Jam
                      </a>
                    </div>
                    <div className="meetup-details">
                      <p>Fri, 28 Jun 2019 09:00:00 GMT</p>
                      <p>Nairobi, Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

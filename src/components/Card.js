import React from "react";
import "../css/card.css";

const BASE_URL = "https://misocho01-questioner.herokuapp.com/api/v2";


const getMonthDate = meetupDate => {
  let splitDate = meetupDate.split(" ");
  return {
    month: splitDate[2],
    date: splitDate[1]
  };
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: []
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/meetups/upcoming`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          var meetups = document.getElementById("card-list");
          this.setState({ meetups: data.data[0] });
        }
      });
  }

  render() {
    const { meetups } = this.state;
    return (
      <div>
        {meetups.map(meetup => (
          <div className="my-card" key={meetup.id}>
            <div className="in-card">
              <div className="in-card-upper">
                <div className="in-card-image">
                  <img src={meetup.images} />
                </div>
              </div>
              <div className="lower-container">
                <div className="in-card-lower">
                  <div className="in-card-date">
                    <div className="month">
                      {getMonthDate(meetup.happeningon).month}
                    </div>
                    <div className="date">{getMonthDate(meetup.happeningon).date}</div>
                  </div>
                  <div className="in-card-text">
                    <div className="meetup-text">
                      <div className="meetup-title">
                        <a href="#" className="meetup-link">
                          {meetup.title}
                        </a>
                      </div>
                      <div className="meetup-details">
                        <p>{meetup.happeningon}</p>
                        <p>{meetup.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;

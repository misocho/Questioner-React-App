import React from "react";
import "../css/card.css";
import axios from "axios";

import { withRouter } from "react-router-dom";
import { display_meetups } from "../actions/meetups";
import { connect } from "react-redux";

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
    this.state = {};
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/meetups/upcoming`).then(response => {
      let data = response.data.data[0];
      console.log("Life is sweet",data);
      this.props.display_meetups(data);
      console.log("props", this.props);
      var meetups = document.getElementById("card-list");

      if (data.status === 200) {
        
       
        this.props.display_meetups(data);
      }
    });
  }

  render() {
    console.log("this props", this.props)
    const meetups = this.props.meetups;
    console.log("render meetups", meetups)
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
                        <a href={meetup.id} className="meetup-link">
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

const mapStateToPros = state => {
  console.log("This is the state", state);
  return {
    meetups: state.meetups
  };
};

export default withRouter(
  connect(
    mapStateToPros,
    { display_meetups }
  )(Card)
);

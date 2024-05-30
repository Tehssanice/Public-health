import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <div className="nav-holder">
      <div className="logo">
        <img src="images/TestLogo.svg" alt="Tech Care Logo" />
      </div>

      <ul>
        <li>
          <img src="images/home_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <span>Overview</span>
        </li>
        <li className="active">
          <img src="images/patients.png" alt="" />
          <span>Patients</span>
        </li>
        <li>
          <img src="images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <span>Schedule</span>
        </li>
        <li>
          <img src="images/messages.png" alt="" />
          <span>Message</span>
        </li>
        <li>
          <img src="images/credit_card_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <span>Transactions</span>
        </li>
      </ul>

      <div className="profile">
        <img src="images/dr-Jose.png" alt="Doctor" />
        <div className="profile-detail">
          <span>
            <b> Dr. Jose Simmons </b>
          </span>
          <br />
          <span>
            <small> General Practitioner </small>
          </span>
        </div>

        <div className="setting">
          <img src="images/settings.png" alt="setting" />
          <FontAwesomeIcon icon="fas fa-ellipsis-v" />
        </div>
      </div>
    </div>
  );
}

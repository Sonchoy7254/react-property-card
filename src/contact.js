import React from "react";

function Contact(props) {
  return (
    <div>
      <div className="card">
        <div className="up">
          <h4 className="contactName">{props.name}</h4>
          <img className="avater-img" src={props.link} alt="avater_img" />
        </div>
        <div className="down">
          <ul>
            <li>Name: {props.name}</li>
            <li>Email: {props.email}</li>
            <li>Contact No: {props.contact}</li>
            <li>Address: {props.address}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

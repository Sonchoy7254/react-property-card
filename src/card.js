import React from "react";
import Component from "./component";
import Contact from "./contact";

function Card() {
  return (
    <div>
      <h4 className="contact-titla">User contact details</h4>
      <Contact
        link={Component[0].avater}
        name={Component[0].name}
        image={Component[0].avater}
        email={Component[0].email}
        contact={Component[0].contact}
        address={Component[0].address}
      />
      <Contact
        link={Component[1].avater}
        name={Component[1].name}
        email={Component[1].email}
        contact={Component[1].contact}
        address={Component[1].address}
      />
      <Contact
        link={Component[2].avater}
        name={Component[2].name}
        email={Component[2].email}
        contact={Component[2].contact}
        address={Component[2].address}
      />
      <Contact
        link={Component[3].avater}
        name={Component[3].name}
        email={Component[3].email}
        contact={Component[3].contact}
        address={Component[3].address}
      />
      <Contact
        link={Component[4].avater}
        name={Component[4].name}
        email={Component[4].email}
        contact={Component[4].contact}
        address={Component[4].address}
      />
      <Contact
        link={Component[5].avater}
        name={Component[5].name}
        email={Component[5].email}
        contact={Component[5].contact}
        address={Component[5].address}
      />
    </div>
  );
}

export default Card;

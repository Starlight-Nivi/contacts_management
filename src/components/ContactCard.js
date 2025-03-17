import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div style={{ display: "flex", flexDirection: "column" }}></div>
      <div
        className="content"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img className="ui avatar image" src={user} alt={user}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            marginLeft: "10px",
            marginTop: "7px",
          }}
          onClick={() => props.clickHandler(id)}
        ></i>
        <Link
          to={{
            pathname: `/edit`,
            state: { contacts: props.contact },
          }}
        />
        <i
          className="edit alternate outline icon"
          style={{
            cursor: "pointer",
            color: "red",
            marginLeft: "30px",
            alignSelf: "center",
          }}
        ></i>
      </div>
    </div>
  );
};
export default ContactCard;

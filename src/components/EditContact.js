import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditContact(props) {
  const navigate = useNavigate();
  const { id, name, email } = props.location.state.contact;

  // Define state using useState hooks
  const [newName, setName] = useState(name);
  const [newEmail, setEmail] = useState(email);

  const update = (e) => {
    e.preventDefault();

    if (newName === "" || newEmail === "") {
      alert("All fields are mandatory!");
      return;
    }

    props.addContactHandler({ id, name: newName, email: newEmail });

    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}

export default EditContact;

import React, { useState } from "react";

export const ApplicationForm = ({ jobTitle }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const isValid = () => {
    let valid = true;
    if (firstName == null || firstName == "") {
      document.getElementById("first-name-error").style.display = "block";
      valid = false;
    } else {
      document.getElementById("first-name-error").style.display = "none";
    }
    if (lastName == null || lastName == "") {
      document.getElementById("last-name-error").style.display = "block";
      valid = false;
    } else {
      document.getElementById("last-name-error").style.display = "none";
    }
    if (email == null || email == "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      document.getElementById("email-error").style.display = "block";
      valid = false;
    } else {
      document.getElementById("email-error").style.display = "none";
    }
    if (valid===true){
      document.getElementById("unsubmitted").style.display = "none";
      document.getElementById("submitted").style.display = "block";
    }
    return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid();
  };

  return (
    <section> 
    <form id="unsubmitted"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="application-form"
    >
      <div className="bottom-padding">
        <h3> Application</h3>
      </div>
      <label>
        First Name *
        <input className="input-field" name="firstName" id="firstName" type="text" checked={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <h5 id="first-name-error" className="error-message">
        {" "}
        * invalid{" "}
      </h5>

      <label>
        Last Name *
        <input className="input-field" name="lastName" id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <h5 id="last-name-error" className="error-message">
        {" "}
        * invalid{" "}
      </h5>
      <label>
        Email Address *
        <input className="input-field" name="email" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <h5 id="email-error" className="error-message">
        {" "}
        * invalid{" "}
      </h5>
      <label>
        Resume *
        <div className="custom-file-upload">
          <label htmlFor="file-upload">
            <strong>
              {" "}
              <span>Drop your resume here </span> <span className="purpleText cursorpointer"> or browse </span>{" "}
            </strong>
            <br />
            <span>Max. file size: 4MB (pdf, doc, docx) </span>
          </label>
          <input id="file-upload" type="file" />
        </div>
      </label>
      <div className="submitCTA ">
        <input type="submit" value="Submit" />
        <h5 id="summited" className="">
      </h5>

      </div>
    </form>
    <div id="submitted" className="application-form">    <h3> Thanks for applying for our {jobTitle} role! </h3></div>
  
    </section>
  );
};

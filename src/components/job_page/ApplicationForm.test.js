import React, { useState } from "react";
import { GATracker } from "../structure/GoogleAnalytics";

export const ApplicationForm = ({ jobTitle }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const gaEvent = GATracker(`Job-post-${jobTitle}`)

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
    if (valid === true) {
      document.getElementById("unsubmitted").style.display = "none";
      document.getElementById("submitted").style.display = "block";
      gaEvent('Applied-for-job', "job application")
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid();
  };

  return (
    <section>
      <form
        id="unsubmitted"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="application-form"
      >
        <div className="bottom-padding">
          <h3 aria-label="Application form"> Application</h3>
        </div>
        <label aria-label="First name">
          <span aria-hidden="true"> First Name * </span>
          <input className="input-field" name="firstName" id="firstName" aria-hidden="false" type="text" checked={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <h5 id="first-name-error" className="error-message" aria-label="First name is invalid">
          {" "}
          * invalid{" "}
        </h5>

        <label aria-label="Last name">
          <span aria-hidden="true"> Last Name * </span>
          <input className="input-field" name="lastName" id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <h5 id="last-name-error" className="error-message" aria-label="Last name is invalid">
          {" "}
          * invalid{" "}
        </h5>
        <label aria-label="Email Address">
          <span aria-hidden="true"> Email Address * </span>
          <input className="input-field" name="email" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <h5 id="email-error" className="error-message" aria-label="Email is invalid">
          {" "}
          * invalid{" "}
        </h5>
        <label>
          <span aria-hidden="true"> Resume * </span>
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
        </div>
      </form>
      <div id="submitted" className="application-form">
        {" "}
        <h3> Thanks for applying for our {jobTitle} role! </h3>
      </div>
    </section>
  );
};

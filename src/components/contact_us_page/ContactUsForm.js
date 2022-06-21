

import React, { useState } from "react";
import { GATracker } from "../structure/GoogleAnalytics";
// import './styles.scss'

export const ContactUsForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [message, setMessage] = useState();

  const gaEvent = GATracker('Contact-form')

  const isValid = () => {
    let valid = true;
    //eslint-disable-next-line
    if (firstName == null || firstName == "") {
      document.getElementById("first-name-error").style.display = "block";
      document.getElementById("firstName").style.border = "1px solid red";
      valid = false;
    } else {
      document.getElementById("first-name-error").style.display = "none";
      document.getElementById("firstName").style.border = "1px solid #d1d5db";
    }
        //eslint-disable-next-line
    if (lastName == null || lastName == "") {
      document.getElementById("last-name-error").style.display = "block";
      document.getElementById("lastName").style.border = "1px solid red";
      valid = false;
    } else {
      document.getElementById("last-name-error").style.display = "none";
      document.getElementById("lastName").style.border = "1px solid #d1d5db";

    }
    //eslint-disable-next-line
    if (email == null || email == "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      document.getElementById("email-error").style.display = "block";
      document.getElementById("email").style.border = "1px solid red";
      valid = false;
    } else {
      document.getElementById("email-error").style.display = "none";
      document.getElementById("email").style.border = "1px solid #d1d5db";

    }
    //eslint-disable-next-line
    if (message == null || message == "" || message.length >= 5000) {
      document.getElementById("message-error").style.display = "block";
      document.getElementById("message").style.border = "1px solid red";
        valid = false;
    }else {
        document.getElementById("message-error").style.display = "none";
        document.getElementById("message").style.border = "1px solid #d1d5db";
      }
    if (valid === true) {
      document.getElementById("unsubmitted").style.display = "none";
      document.getElementById("submitted").style.display = "block";
      gaEvent("contact-form-submited") 
    }
    return true;
  };


  const buildMessage = () => {
    let fullName = firstName + " " + lastName 
    console.log(fullName);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid() 
    buildMessage()
  };

  return (
      <section> 
    <form
      className="contact-us-form mobile-outline"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      id="unsubmitted"
    >
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
      <label aria-label="Email address">
        <span aria-hidden="true"> Email Address * </span>
        <input className="input-field" name="email" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <h5 id="email-error" className="error-message" aria-label="Email is invalid">
        {" "}
        * invalid{" "}
      </h5>
      <label aria-label="Company name">
        <span aria-hidden="true"> Company Name </span>
        <input className="input-field input-field-wide" name="companyName" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
      </label>

      <label aria-label="Company name">
        
        <span aria-hidden="true"> Job Title </span>
        <input className="input-field input-field-wide" name="jobTitle" type="text"  value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
      </label>

      <label className="contact-us-text" aria-label="What can we help you with? Max. 5000 characters">
        <span aria-hidden="true"> What we help you with? * <span> Max. 5000 characters</span></span>

        <textarea id="message" className="input-field input-field-wide input-field-tall" name="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </label>
      <h5 id="message-error" className="error-message" aria-label="Email is invalid">
        {" "}
        * invalid{" "}
      </h5>
      <div className="submitCTA ">
        <button type="submit" value="Submit" className="primary-button wide-btn"> Submit </button>
      </div>
    </form>
    <section className="contact-us-form mobile-outline" id="submitted" > 
      <h3> Thanks for getting in touch! </h3>
    </section>
    </section>
  );
};

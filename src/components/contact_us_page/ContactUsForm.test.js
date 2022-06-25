import React, { useState } from "react";
import { emailValidate, validate } from "../structure/validation";
import { GATracker } from "../structure/GoogleAnalytics";
// import './styles.scss'

export const ContactUsForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [message, setMessage] = useState();
  const [loading, setLoadingState] = useState();



  const gaEvent = GATracker('Contact-form')

  const isValid = () => {

    //eslint-disable-next-line
    let valid = true;
    let emailValid = emailValidate(email);
    let lastNameValid = validate(lastName, "last-name");
    let firstNameValid = validate(firstName, "first-name");
    let messageValid = validate(message, "message");
    valid = emailValid && lastNameValid && firstNameValid && messageValid;
    if (valid === true) {
      gaEvent("contact-form-submited") 
    }
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()){
      const url = "https://9ms7dfz6i0.execute-api.eu-west-1.amazonaws.com/stage/send"
      const config = {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: "maxwell.cochrane+dev@gmail.com",
          senderEmail: "maxwell.cochrane+dev@gmail.com",
          subject: `Enquiry from ${firstName} ${lastName} | ${companyName} ${jobTitle}`,
          message: `${message}`,
          base64Data: "",
          fileName: "",
        }),
      }
        const response = await fetch(url, config).then(setLoadingState(true))
        if (response.response = "ok") {
          setLoadingState(false)
          document.getElementById("unsubmitted").style.display = "none";
          document.getElementById("submitted").style.display = "block";
          return response
        } else {
          setLoadingState(false)
          console.log(response, "error")
        }
      
    }
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
        <input className="input-field" name="firstName" id="first-name" aria-hidden="false" type="text" checked={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <h5 id="first-name-error" className="error-message" aria-label="First name is invalid">
        {" "}
        * invalid{" "}
      </h5>
 
      <label aria-label="Last name">
        <span aria-hidden="true"> Last Name * </span>
        <input className="input-field" name="lastName" id="last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
        <span aria-hidden="true"> What we help you with? * <span className="no-padding"> Max. 5000 characters</span></span>

        <textarea id="message" className="input-field input-field-wide input-field-tall" name="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </label>
      <h5 id="message-error" className="error-message" aria-label="Email is invalid">
        {" "}
        * invalid{" "}
      </h5>
      <div className="submitCTA ">
      <button type="submit" value="Submit" className="primary-button wide-btn">
              {loading ?  <div className="loader" /> : "Submit" }
            </button>
      </div>
    </form>
    <section className="contact-us-form mobile-outline" id="submitted" > 
      <h3> Thanks for getting in touch! </h3>
    </section>
    </section>
  );
};

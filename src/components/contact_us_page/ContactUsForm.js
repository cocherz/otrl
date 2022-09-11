

import React, { useState } from "react";
import { emailValidate, validate } from "../structure/validation";
import { GATracker } from "../structure/GoogleAnalytics";
import DICT from "../../dictionary";
import { ErrorMessage } from "../structure/ErrorMessages";
import { FormSubmitted } from "./FormSubmitted";

export const ContactUsForm = () => {
  const [loading, setLoadingState] = useState();
  const [failedSend, setFailedSend] = useState(false);
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    message: "",
  });

  const gaEvent = GATracker("Contact-form");

  const isValid = () => {
    let valid = false;
    let emailValid = emailValidate(form.email);
    let lastNameValid = validate(form.lastName, "last-name");
    let firstNameValid = validate(form.firstName, "first-name");
    let messageValid = validate(form.message, "message");
    valid = emailValid && lastNameValid && firstNameValid && messageValid;
    if (valid === true) {
      gaEvent("contact-form-submited");
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValid() === true) {
      const url = "https://9ms7dfz6i0.execute-api.eu-west-1.amazonaws.com/stage/SendEmail";
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: `INBOUND from: ${form.firstName} ${form.lastName} ${form.companyName} ${form.jobTitle}`,
          message: `${form.message}`,
        }),
      };
      let resp = await fetch(url, config).then(setLoadingState(true));

      if (resp.ok) {
        setLoadingState(false);
        setSubmitted(true)
      } else {
        setLoadingState(false);
        setFailedSend(true);
      }
    } else {
      return null;
    }
  };

  return (
    
    <section>
      {!submitted ?  
      <form
        className="contact-us-form mobile-outline"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        id="unsubmitted"
      >
        <label aria-label="First name" aria-required="true">
          <span aria-hidden="true"> First Name * </span>
          <input
            className="input-field"
            name="firstName"
            id="first-name"
            type="text"
            checked={form.firstName}
            onChange={(e) => setForm((form) => ({ ...form, firstName: e.target.value }))}
          />
        </label>
        <ErrorMessage err={DICT.firstNameErr} elementID="first-name-error" />
        <label aria-label="Last name" aria-required="true">
          <span aria-hidden="true"> Last Name * </span>
          <input className="input-field" name="lastName" id="last-name" type="text" value={form.lastName} onChange={(e) => setForm((form) => ({ ...form, lastName: e.target.value }))} />
        </label>
        <ErrorMessage err={DICT.lastNameErr} elementID="last-name-error" />
        <label aria-label="Email address" aria-required="true">
          <span aria-hidden="true"> Email Address * </span>
          <input className="input-field" name="email" id="email" type="text" value={form.email} onChange={(e) => setForm((form) => ({ ...form, email: e.target.value }))} />
        </label>
        <ErrorMessage err={DICT.emailErr} elementID="email-error" />
        <label aria-label="Company name">
          <span aria-hidden="true"> Company Name </span>
          <input className="input-field input-field-wide" name="companyName" type="text" value={form.companyName} onChange={(e) => setForm((form) => ({ ...form, companyName: e.target.value }))} />
        </label>
        <label aria-label="Job Title">
          <span aria-hidden="true"> Job Title </span>
          <input className="input-field input-field-wide" name="jobTitle" type="text" value={form.jobTitle} onChange={(e) => setForm((form) => ({ ...form, jobTitle: e.target.value }))} />
        </label>
        <label className="contact-us-text" aria-label="What can we help you with? Max. 5000 characters" aria-required="true">
          <span >
            What we help you with? * <span className="no-padding"> Max. 5000 characters</span>
          </span>
          <textarea id="message" className="input-field input-field-wide input-field-tall" name="message" type="text" value={form.message} onChange={(e) => setForm((form) => ({ ...form, message: e.target.value }))} />
        </label>
        <ErrorMessage err={DICT.messageErr} elementID="message-error" />
        <div className="submitCTA ">
          <button type="submit" value="Submit" className="primary-button wide-btn">
            {loading ? <div className="loader" /> : "Submit"}
          </button>
          {!failedSend ? (
            true
          ) : (
            <span id="send-error" className="message" >
              {DICT.submitErr}
            </span>
          )}
        </div>
      </form>
      :
      <FormSubmitted /> } 
    </section>
  );
};

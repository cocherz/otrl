import React from "react";
// import './styles.scss'


export class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    return null;
  }

  render() {
    return (
      <form className="contact-us-form mobile-outline">
        <label>
          First Name *
          <br />
          <input
            className="input-field input-field-wide hello"
            name="firstName"
            type="text"
            checked={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name *
          <br />
          <input
            className="input-field input-field-wide"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Email Address *
          <br />
          <input
            className="input-field input-field-wide"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Company Name
          <br />
          <input
            className="input-field input-field-wide"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Job Title
          <br />
          <input
            className="input-field input-field-wide"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label className="contact-us-text">
          What we help you with? * <span> Max. 5000 characters</span>
          <br />
          <input
            className="input-field input-field-wide input-field-tall"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <div className="submitCTA ">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

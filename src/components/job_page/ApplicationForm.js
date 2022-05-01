import React from "react";

export class ApplicationForm extends React.Component {
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
      <form  className="application-form">
        <div className="bottom-padding">
          <h3> Application </h3>
        </div>
        <label>
          First Name *
          <br />
          <input
            className="input-field"
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
            className="input-field"
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
            className="input-field"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Resume *
          <br />
          <div className="custom-file-upload" >
          <label htmlFor="file-upload">
                <strong> <span>Drop your resume here </span> <span className="purple-text cursorpointer"> or browse </span> </strong>
                <br />
                <span>Max. file size: 4MB (pdf, doc, docx) </span>
          </label>
          <input id="file-upload" type="file" />
          </div>
        </label>
        <br />
        <div className="submitCTA ">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

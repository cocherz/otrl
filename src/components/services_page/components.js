import React from "react";

export const BrowserImage = () => {
  return (
    <section className="css-browser">
      <div className="css-browser-header">
        <div className="css-header-dots">
          <div />
          <div />
          <div />
        </div>
        <div className="header-tab">
          <div className="header-tab-open">
            {" "}
            <span>Issues</span>
          </div>
          <div className="header-tab-pill"> </div>
          <div className="header-tab-pill"> </div>
        </div>
      </div>
      <div className="browser-image-container">
        <img src="" />
      </div>
    </section>
  );
};

export const MobileImage = () => {
  return (
    <div className="css-mobile-container">
      <img src="" />
    </div>
  );
};

export const SquareImage = () => {
  return (
    <div className="css-square-container">
      <img src="" />
    </div>
  );
};




export const BespokeDevImage = () => {
  return (
    <div className="bespokeDevImage  section-container-r">
      <BrowserImage />
      <div className="left">
        <MobileImage />
      </div>
    </div>
  );
};

export const WebImage = () => {
  return (
    <div className="bespokeDevImage  section-container-r ">
       <SquareImage />
       <BrowserImage />
    </div>
  );
};

export const ConsultancyImage = () => {
  return (
    <div className="consultancy-image  section-container-r">
       <div className="right-down width-null">
        <MobileImage />
      </div>
      <BrowserImage />
      <div className="left">
        <MobileImage />
      </div>
    </div>
  );
};
export const AffiliateRetailingImage = () => {
  return (
    <div className="affiliate-image  section-container-r">
      <div className="ztop"> 
      <BrowserImage />
      </div> 
      <div className="right-up width-null">
        <BrowserImage />
      </div> 
    </div>
  );
};
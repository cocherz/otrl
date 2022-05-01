import React from "react";
import ReactGA from "react-ga";

export const GATracker = (category="page test") => {
  const eventTracker = (action = "click", label = "visited") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

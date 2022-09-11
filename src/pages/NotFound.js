import React from "react";
import { Link } from "react-router-dom";

/**
 * Page not found (404) component
 */
export const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <h1>Document not found</h1>
    <p>
      <Link to="/">Return to homepage</Link>
    </p>
  </div>
);

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page notfound">
      <div className="content">
        <img src="/error-404.png" alt="notfound" />
        <Link to={"/"}>RETURN TO HOME PAGE</Link>
      </div>
    </section>
  );
};

export default NotFound;

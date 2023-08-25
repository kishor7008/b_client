import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

import { RiCloseLine } from "react-icons/ri";

import "./uernav.css";
import { LiaBlogSolid } from "react-icons/lia";
export const AdminNav = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);


  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container" style={{ position: "fixed", top: "0", background: "black" }}>
          <Link exact to="/" className="nav-logo">
            <h1 className="logo">
              {" "}
              BLOGVIDE
              <LiaBlogSolid />
            </h1>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/allblog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{ textDecoration: "none", color: "white", textTransform: "uppercase", fontWeight: "400" }}
              >
                All Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/authors"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{ textDecoration: "none", color: "white", textTransform: "uppercase", fontWeight: "400" }}

              >
                Authors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/admin/write/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{ textDecoration: "none", color: "white", textTransform: "uppercase", fontWeight: "400" }}

              >
                Write Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/approve"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{ textDecoration: "none", color: "white", textTransform: "uppercase", fontWeight: "400" }}

              >
                Approve
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}

                to="/profile"
                style={{ textDecoration: "none", color: "white", textTransform: "uppercase", fontWeight: "400" }}

              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{ textDecoration: "none", color: "white", textTransform: "uppercase", fontWeight: "400" }}

              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                exact
                activeClassName="active"
                className="nav-links"
                style={{ textDecoration: "none", color: "white", textTransform: "uppercase", fontWeight: "400" }}
                onClick={() => localStorage.clear()}
              >
                Logout
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <h1 className="logo">
              {" "}
              {click ? <RiCloseLine /> : <HiMenuAlt1 />}

            </h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

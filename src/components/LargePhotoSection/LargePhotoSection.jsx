import React from "react";
import logo from "images/logo.svg";
import menphoto from "images/menphoto.png";
import arrow from "images/arrow.svg";
import "./LargePhotoSection.css";

const LargePhotoSection = () => {
  return (
    <section className="large-photo-section">
      <div className="large-photo-section__text-block">
        <div className="large-photo-section__logo-text-box">
          <img className="large-photo-section__logo" src={logo} alt="logo" />
          <p className="large-photo-section__text">Powerd by BoomTelecom</p>
        </div>
        <h2 className="large-photo-section__title">
          We are proud to make such a project in our company
        </h2>
        <a className="large-photo-section__link" href="">
          learn more about BoomTelecom <img src={arrow} alt="" />
        </a>
      </div>
      <div className="large-photo-section__photo-box">
        <div className="large-photo-section__photo-block">
          <img
            className="large-photo-section__photo"
            src={menphoto}
            alt="men on photo"
          />
          <div className="large-photo-section__button-on-photo">
            <p className="large-photo-section__button-on-photo-text">
              Smith Rostovskiy
            </p>
            <p className="large-photo-section__button-on-photo-subtext">
              CEO & Founder of BoomTelecom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargePhotoSection;

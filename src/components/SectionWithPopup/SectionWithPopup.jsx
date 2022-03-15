import React from "react";
import "./SectionWithPopup.css";

const SectionWithPopup = () => {
  return (
    <section className="section-with-popup">
      <h1 className="section-with-popup__title">
        This is your test task good luck
      </h1>
      <p className="section-with-popup__subtitle">
        BoomTelecom crypto investments made simple
      </p>
      <div className="section-with-popup__box-button-link">
        <button className="section-with-popup__button">Open popup</button>
        <a
          target={"_blank"}
          className="section-with-popup__link"
          href="https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna"
          rel="noreferrer"
        >
          some link
        </a>
      </div>
    </section>
  );
};

export default SectionWithPopup;

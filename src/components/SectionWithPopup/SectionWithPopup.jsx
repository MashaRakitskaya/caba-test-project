import PopupWithForm from "components/PopupWithForm/PopupWithForm";
import React, { useState } from "react";
import "./SectionWithPopup.css";

const SectionWithPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const closeByOverlay = (event) => {
    if (event?.target?.classList.contains("popup")) {
      closePopup();
    }
  };

  const handleSubmit = () => {
    closePopup();
  };

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <section className="section-with-popup">
        <h1 className="section-with-popup__title">
          This is your test task good luck
        </h1>
        <p className="section-with-popup__subtitle">
          BoomTelecom crypto investments made simple
        </p>
        <div className="section-with-popup__box-button-link">
          <button
            onClick={() => handleButtonClick()}
            className="section-with-popup__button"
          >
            Open popup
          </button>
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
      <PopupWithForm
        isOpen={isPopupOpen}
        onClose={closePopup}
        onOvarlayClose={closeByOverlay}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default SectionWithPopup;

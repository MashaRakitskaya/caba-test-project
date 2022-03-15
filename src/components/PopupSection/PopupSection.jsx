import PopupWithForm from "components/PopupWithForm/PopupWithForm";
import React, { useState } from "react";
import "./PopupSection.css";

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
      <section className="popup-section">
        <h1 className="popup-section__title">
          This is your test task good luck
        </h1>
        <p className="popup-section__subtitle">
          BoomTelecom crypto investments made simple
        </p>
        <div className="popup-section__box-button-link">
          <button
            onClick={() => handleButtonClick()}
            className="popup-section__button"
          >
            Open popup
          </button>
          <a
            target={"_blank"}
            className="popup-section__link"
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

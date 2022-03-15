/* eslint-disable react/prop-types */
import React from "react";
import { useFormik } from "formik";
import PhoneInput from "./PhoneInput/PhoneInput";
import "./PopupWithForm.css";

const PopupWithForm = ({ isOpen, onClose, onOvarlayClose, onSubmit }) => {
  const phoneRegex =
    /^(\+7)\((900|901|902|903|904|905|906|908|909|910|911|912|913|914|915|916|917|918|919|920|921|922|923|924|925|926|927|928|929|930|931|932|933|934|936|937|938|939|941|950|951|952|953|954|955|956|958|960|961|962|963|964|965|966|967|968|969|970|971|977|978|980|981|982|983|984|985|986|987|988|989|991|992|993|994|995|996|997|999)\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const validate = (values) => {
    const errors = {};

    const telephonNumber = values.number.split(" ").join("");
    if (!phoneRegex.test(telephonNumber)) {
      errors.number = "not valid";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      onSubmit();
      formik.resetForm();
    },
  });

  if (!isOpen) return null;

  return (
    <div
      className={`popup ${isOpen && "popup_opened"}`}
      onClick={onOvarlayClose}
    >
      <div className="popup__content">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">Buy sim</h3>

        <form className="popup__form" onSubmit={formik.handleSubmit}>
          <label className="popup__label" htmlFor="number">
            Enter your number
          </label>
          {formik.errors.number ? (
            <div className="popup__error">{formik.errors.number}</div>
          ) : null}
          <PhoneInput
            title="number"
            formik={formik}
            value={formik.values.number}
            name="number"
            error={formik.errors.number}
          />
          <button
            disabled={
              formik.errors.number || !formik.values.number ? true : false
            }
            className="popup__button"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default PopupWithForm;

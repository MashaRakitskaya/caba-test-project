/* eslint-disable react/prop-types */
import React from "react";
import "./CardItem.css";

const CardItem = ({
  number,
  title,
  subtitle,
  img,
  linkTitle,
  imgMarginClassName,
}) => {
  return (
    <article className="card">
      <p className="card__number">{number}</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__subtitle">{subtitle}</p>
      <img
        className={`card__img ${imgMarginClassName}`}
        src={img}
        alt="photo"
      />
      <a className="card__link" href="">
        {linkTitle}
      </a>
    </article>
  );
};

export default CardItem;

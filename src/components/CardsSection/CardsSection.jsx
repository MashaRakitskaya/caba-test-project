import CardItem from "components/CardItem/CardItem";
import React from "react";
import "./CardsSection.css";
import img1 from "images/img1.png";
import img2 from "images/img2.png";
import img3 from "images/img3.png";

const CardsSection = () => {
  return (
    <section className="cards-section">
      <h2 className="cards-section__title">
        Join other investors in 3 easy steps
      </h2>
      <div className="cards-section__list">
        <CardItem
          linkTitle="Create wallet"
          number="1"
          subtitle="Wallet allows you to securily connect
and store tokens"
          title="Create wallet"
          img={img1}
        />
        <CardItem
          linkTitle="Buy tokens"
          number="2"
          subtitle="Buy tokens on and recieve them
on your wallet"
          title="Get tokens"
          img={img2}
        />
        <CardItem
          linkTitle="How to recieve payments"
          number="3"
          subtitle="By holding tokens you become 
eligeble to recive monthly payments"
          title="Hold tokens"
          img={img3}
          imgMarginClassName="card__img_margin"
        />
      </div>
    </section>
  );
};

export default CardsSection;

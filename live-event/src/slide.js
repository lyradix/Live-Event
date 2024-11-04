import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps, concerts) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] 
  const coverImage = data[dataIndex].image;
  
  const name = data[dataIndex].name;
  const date = data[dataIndex].startTime.substring(0, 10);



  console.log(coverImage);
  return (
    <div className="card-card" draggable={true}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">
          <img
            style={{ width: 150, height:300, borderRadius:8}}
            alt=""
            className="cover-image"
            src={coverImage}
          />
          <p className="namePoster">{name}</p>
          <p className="datePoster">{date}</p>
          <p className="datePoster">{days[new Date(`${concerts.startTime}`).getDay()]}</p>
        </div>
      </div>
    </div>
  );
});

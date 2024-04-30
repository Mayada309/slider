import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlikCarousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(3);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autospeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="slik-container">
      <Slider {...settings}>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlikCarousel;

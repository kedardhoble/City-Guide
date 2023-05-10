import Carousel from "react-bootstrap/Carousel";
import "./SlideShow.css";
import img from "../static/img1.jpeg";
import img1 from "../static/img2.jpeg";
import img3 from "../static/img4.jpeg";

const SlideShow = () => {
  return (
    <Carousel fade interval={600}>
      <Carousel.Item>
        <img
          className="d-block w-100 Carouselsize"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            <b>Explore the world with us!</b>
          </h3>
          <p>
            Welcome to a new with us <br /> where you will get wholesome <br />{" "}
            experience of the city.
          </p>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Carouselsize"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>
            <b>Explore the world with us!</b>
          </h3>
          <p>
            Welcome to a new with us <br /> where you will get wholesome <br />{" "}
            experience of the city.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Carouselsize"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            <b>Explore the world with us!</b>
          </h3>
          <p>
            Welcome to a new with us <br /> where you will get wholesome <br />{" "}
            experience of the city.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;
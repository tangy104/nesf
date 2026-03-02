import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Event1.module.css";
import Tilt from "react-parallax-tilt";

// import image from "../../../../public/Events/festival/festival1.jpg"

import { events } from "../../../data/events";

const Event1 = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // extract slug
  const location = useLocation();
  const pathName =
    location.pathname.at(-1) === "/"
      ? location.pathname.slice(8, -1)
      : location.pathname.slice(8);
  console.log(pathName);

  console.log(events);

  // filter event
  const event = events.find((event) => event.slug === pathName);
  console.log(event);

  return (
    <div className={styles.container}>
      {/* Event Description */}

      <div className={styles.societyDescription}>
        <div className={styles.container1}>
          <div className={styles.left}>
            <h1 className="heading">{event.name}</h1>
            <p>{event.description[0]}</p>
          </div>
          {/* <div className={styles.right}>
            <div className={styles.subright}>
              <p className={styles.color1}>5K+ </p>
              <p> footfalls</p>
            </div>

            <p className={styles.subright}>
              <p className={styles.color2}>15K+</p>
              <p>performances</p>
            </p>
            <p className={styles.subright}>
              <p className={styles.color3}>20K+</p> <p>something</p>
            </p>
          </div> */}
          <div className={styles.highlights}>
            <p>{event.highlights[0]}</p>
            <p>{event.highlights[1]}</p>
            <p>{event.highlights[2]}</p>
          </div>
        </div>

        <div className={styles.photos}>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src={`/events/${event.images[0]}`} alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src={`/events/${event.images[1]}`} alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src={`/events/${event.images[2]}`} alt="highlight" />
          </Tilt>
        </div>
        {/* <div className={styles.photos}>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src={event.images[0]} alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src={event.images[1]} alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src={event.images[2]} alt="highlight" />
          </Tilt>
        </div> */}

        <div className={styles.container1}>
          <div className={styles.left}>
            <p>{event.description[1]}</p>
          </div>
          <div className={styles.right}>
            <p className={styles.heading}>Other events </p>
            <div className={styles.links}>
              {events
                .filter((e) => e.slug !== pathName)
                .map((e) => (
                  <Link
                    key={e.slug}
                    className={styles.others}
                    onClick={handleClick}
                    to={`/events/${e.slug}`}
                  >
                    {e.name}
                  </Link>
                ))}
              {/* <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/north-east-festival"
              >
                North East Festival
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/freshers"
              >
                Freshers
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/farewell"
              >
                Farewell
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/food-stall"
              >
                Foodstall
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/foundation-day"
              >
                Foundation Day
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/career-counselling"
              >
                Career Counselling
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/career-counselling-workshop"
              >
                Career Counselling Workshop
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event1;

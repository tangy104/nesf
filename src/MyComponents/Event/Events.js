import React from "react";
import styles from "./AllEventsPage.module.css";
import EventCard from "./EventCard";
import { events } from "../../data/events";
import { Link } from "react-router-dom";
import MainBanner from "../MainBanner";

function Events() {
  // const navigate = useNavigate();

  // const events=[
  //     {
  //         title:"North East Festival 2023",
  //         description:"IIT Kharagpur's annual celebration of North East India's diversity, uniting through captivating performances, inspiring speeches, and vibrant showcases, fostering cultural understanding.",
  //         image:fest24,
  //         greenbox1:"5K+ footfall",
  //         greenbox2:"10+ cultural performances",
  //         site:"/events/north-east-festival"
  //     },
  //     {
  //         title:"Foundation Day",
  //         description:"Embracing growth with spirited performances, engaging activities, esteemed guests, and a shared dinner, strengthening the vibrant bonds within the North East Students' Forum community",
  //         image:"Foundation Day.jpg",
  //         site:"/events/foundation-day"
  //     },
  //     {
  //         title:"Food Stall",
  //         description:"A harmonious blend of diverse dishes and traditional attires at the collaborative 3-day event with Shaurya, showcasing cultural exploration by talented forum members.",
  //         image:"highlights/highlight-5.jpg",
  //         site:"/events/food-stall"
  //     },
  //     {
  //         title:"Freshers",
  //         description:"Welcoming new students with vibrancy, dynamic performances, a Mr. and Ms. Freshers' competition, and uplifting messages from esteemed professors, setting the tone for growth and friendship",
  //         image:"Freshers.jpg",
  //         site:"/events/freshers"
  //     },
  //     {
  //         title:"Farewell",
  //         description:"A cherished annual gala bidding adieu to graduating students, uniting through heartwarming performances, thoughtful gifts, shared experiences, and a symbolic communal dinner.",
  //         image:"Farewell.jpg",
  //         site:"/events/farewell"
  //     },
  //     {
  //         title:"Career Counselling Session",
  //         description:"IIT Kharagpur's annual sessions featuring alumni, professors, and industry representatives, focusing on Career Development Counseling and offering valuable insights for a rewarding professional journey.",
  //         image:"CC Session.jpg",
  //         site:"/events/career-counselling"
  //     },
  //     {
  //         title:"Career Counselling Workshop",
  //         description:"Nurturing young aspirations in North East India through a workshop dispelling myths, providing clarity, and advancing awareness about quality education in eight districts of Assam.",
  //         image:"CC Workshop.jpg",
  //         site:"/events/career-counselling-workshop"
  //     }
  // ]

  return (
    <div className={styles.events}>
      {/* <div className="events_card">
            <img className='nefest24img' src="Fest24.jpg" alt="" />
            <div className="event_content">
                <div className="green_box">
                    <div className="green_box_text">
                        Even Grander
                    </div>
                </div>
                <div className="event_content_text">
                    North-East Festival 2024
                </div>
                <div className="coming_soon">
                    <div className="coming_soon_text">
                        Coming Soon...
                    </div>
                </div>
            </div>
        </div> */}
      <MainBanner />

      {/* heading */}
      <div className={styles.previous_events_heading}>
        <div className="heading">Our Previous Events</div>
        <div className={styles.previous_events_text}>
          <p>
            We organize a diverse set of events aimed at all round development
            of the north eastern students at IIT Kharagpur and promoting and
            showcasing north-eastern culture and tradition. Take a glimpse at
            our work so far below.
          </p>
        </div>
      </div>

      <div className={styles.eventsgrid}>
        {events.map((event, index) => {
          return (
            <div className="eventcard_container">
              <Link to={`/events/${event.slug}`} key={index}>
                <EventCard
                  key={index}
                  event={event}
                  isHighlighted={index === 0}
                />
              </Link>
            </div>
          );
        })}
        {/* <EventCard event={events} /> */}
      </div>
      {/* <EventCard event={events[0]} present={1} onClick={()=>navigate('/events/north-east-festival')}/>
        <div className="eventpair">
            <EventCard event={events[1]} present={0}/>
            <EventCard event={events[2]} present={0}/>
        </div>
        <div className="eventpair">
            <EventCard event={events[3]} present={0}/>
            <EventCard event={events[4]} present={0}/>
        </div>
        <div className="eventpair">
            <EventCard event={events[5]} present={0}/>
            <EventCard event={events[6]} present={0}/>
        </div> */}
    </div>
  );
}

export default Events;

import Head from "next/head";
import styles from "../../styles/Events.module.css";
import EventCard from "../../components/eventCard/EventCard";
import { Button, Typography } from "@mui/material";

import { db } from "../../config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Carousel } from "@mohammedsrehan/react-responsive-carousel";
import useWindowSize from "../../helpers/customHooks";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Events() {
  const { width } = useWindowSize();
  const [events, setevents] = useState([]);
  const [eventType, setEventType] = useState("concert");
  const [eventCat, setEventCat] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "events"),
      where("eventType", "==", eventType)
    );
    const getEventsCategory = async () => {
      const data = await getDocs(q);
      setEventCat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEventsCategory();
  }, [eventType]);
  useEffect(() => {
    const eventsCollectionRef = collection(db, "events");
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setevents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET Events </title>
        <meta
          name="description"
          content="Events by IEEE NSAKCET Student Branch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>Upcoming Events</h1>
          <div className={styles.events__container}>
            {events.map((event) => {
              return (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  venue={event.venue}
                  date={event.date.seconds}
                  image={event.images[0]}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.event__categories}>
          <h1 className={styles.title}>Event Categories</h1>
          <p className={styles.sub__title}>Sort through the best events</p>
          <div className={styles.event__categories__list}>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
              onClick={() => {
                setEventType("concert");
              }}
            >
              Concert
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
              onClick={() => {
                setEventType("conference");
              }}
            >
              Conference
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
              onClick={() => {
                setEventType("quiz");
              }}
            >
              Quiz
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
            >
              Workshop
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
            >
              Seminar
            </Button>
          </div>
          <div className={styles.events__container}>
            {eventCat.map((event) => {
              return (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  venue={event.venue}
                  date={event.date.seconds}
                  image={event.images[0]}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.testimonial__section}>
          <h1 className={styles.title}>Testimonials</h1>
          <p className={styles.sub__title}>
            Here&apos;s what participants are saying
          </p>
          <Carousel
            className={styles.testimonial__carousal}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={true}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={width <= 900 ? 80 : 50}
            showIndicators={false}
            showThumbs={false}
          >
            <div className={styles.testimonial}>
              <Typography variant="subtitle1" sx={{ color: "#012169"}}>
                I&apos;ve been using testimonial.to for the last few weeks and I
                absolutely LOVE it❤️ Once you start, you understand how it
                boosts your social proof. Worth every penny. Thanks @damengchen
                for building it 🙏
              </Typography>
              <div>
                <Typography variant="body1">John Doe</Typography>
                <Typography variant="caption">Student</Typography>
              </div>
            </div>
            <div className={styles.testimonial}>
              <Typography variant="subtitle1" sx={{ color: "#012169"}}>
                We&apos;ve been struggling with collecting testimonials for
                years, we used Typeform or email to get testimonials, stored the
                good ones in Notion and then had a web developer add them to our
                website, it was always a lot of work, out of date, testimonials
                got lost along the way and customers never provided them most of
                the time. This app solved all of our issues in a few minutes.
                Love tools like this.
              </Typography>
              <div>
                <Typography variant="body1">John Doe</Typography>
                <Typography variant="caption">Student</Typography>
              </div>
            </div>
            <div className={styles.testimonial}>
              <Typography variant="subtitle1" sx={{color: "#012169"}}>
                Testimonials are essential for any product launch. If you build
                products or design landing pages, definitely add this to your
                stack. It&apos;ll make launching/promoting your product so much
                easier!
              </Typography>
              <div>
                <Typography variant="body1">John Doe</Typography>
                <Typography variant="caption">Student</Typography>
              </div>
            </div>
          </Carousel>
        </section>
      </main>
    </div>
  );
}

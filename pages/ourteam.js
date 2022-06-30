import { Button, Typography } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "@mohammedsrehan/react-responsive-carousel";

//profile component
import Profile from "../components/profile/profile.js";
//data file of members
import {
  excom,
  programCommittee,
  socialMediaCommittee,
  membershipCommittee,
} from "../data/profile";

import classes from "../styles/Ourteam.module.css";

export default function OurTeam() {
  return (
    <div className={classes.OurTeam}>
      <section className={classes.OurTeam__headers}>
        <Typography variant="h3">OUR TEAM</Typography>
        <div className={classes.OurTeam__headers__buttons}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#12679b",
              color: "#fff",
              padding: "15px 10px",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "#c0122e",
              },
            }}
            href="#ecxom"
          >
            Leadership Team
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#12679b",
              color: "#fff",
              padding: "15px 10px",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "#c0122e",
              },
            }}
            href="#program"
          >
            Executive Committee
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#12679b",
              color: "#fff",
              padding: "15px 10px",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "#c0122e",
              },
            }}
            href="#socialMedia"
          >
            Publicity Team
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#12679b",
              color: "#fff",
              padding: "15px 10px",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "#c0122e",
              },
            }}
            href="#membership"
          >
            Mentors
          </Button>
        </div>
      </section>
      <section className={classes.OurTeam__group} id="excom">
        <Typography variant="h4" sx={{ color: "#12679b" }}>
          Leadership Team
        </Typography>
        {/* <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        > */}
        <div className={classes.Ourteam__group__team}>
          {excom.slice(0, 5).map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              designation={person.designation}
              linkedInURL={person.linkedInURL}
              emailURL={person.emailURL}
              image={person.image}
            />
          ))}
        </div>
        {/* </Carousel> */}
      </section>
      <section className={classes.OurTeam__group} id="program">
        <Typography variant="h4" sx={{ color: "#12679b" }}>
          Executive Committee
        </Typography>
        {/* <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        > */}
        <div className={classes.Ourteam__group__team}>
          {programCommittee.slice(0, 6).map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              designation={person.designation}
              linkedInURL={person.linkedInURL}
              emailURL={person.emailURL}
              image={person.image}
            />
          ))}
        </div>
        {/* </Carousel> */}
      </section>
      <section className={classes.OurTeam__group} id="socialMedia">
        <Typography variant="h4" sx={{ color: "#12679b" }}>
          Publicity Team
        </Typography>
        {/* <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        > */}
        <div className={classes.Ourteam__group__team}>
          {socialMediaCommittee.slice(0, 6).map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              designation={person.designation}
              linkedInURL={person.linkedInURL}
              emailURL={person.emailURL}
              image={person.image}
            />
          ))}
        </div>
        {/* </Carousel> */}
      </section>
      <section className={classes.OurTeam__group} id="membership">
        <Typography variant="h4" sx={{ color: "#12679b" }}>
          Mentors
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {membershipCommittee.slice(0, 4).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {membershipCommittee.slice(4, 8).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {membershipCommittee.slice(8, 12).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
    </div>
  );
}

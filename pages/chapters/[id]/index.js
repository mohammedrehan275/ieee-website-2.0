import { Button, Link as MLink, Paper, Typography } from "@mui/material";
import styles from "./chapter.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Profile from "../../../components/profile/profile.js";
import { chapters } from "../../../data/chapters";
// import { chapter } from "../../data/profile";

export default function Chapter({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const [clr, setClr] = useState("");
  useEffect(() => {
    const bcolor = {
      cs: "#faa41a",
      cass: "#006341",
      wie: "#712e87",
      ras: "#88201f",
      sps: "#78be20",
    };
    setClr(bcolor[id]);
  }, [id]);

  return (
    <div className={styles.chapter}>
      <section className={styles.chapter__groupPhoto}>
        <div className={styles.chapter__groupPhoto__container}>
          <Image
            src={data?.groupPhoto}
            alt="grpPhoto"
            layout="fill"
            loading="lazy"
            className={styles.chapter__groupPhoto__container__image}
          />
        </div>
        <div className={styles.header}>
          <div className={styles.header__content}>
            <div className={styles.logo}>
              <Image
                src={data?.logo}
                alt="chapterLogo"
                layout="fixed"
                loading="lazy"
                height="100px"
                width="150px"
                className={styles.logo__image}
              />
            </div>
            <div className={styles.header__text}>
              <Typography variant="h6">{data?.headerText}</Typography>
              <MLink href={data?.learnMoreLink} rel="noopener" target="_blank">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  //   className={uclass}
                  sx={{
                    backgroundColor: `${clr}`,
                    marginTop: "20px",
                  }}
                >
                  {" "}
                  {data?.text}
                  Learn More
                </Button>
              </MLink>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.chapter__joinus} style={{ color: `${clr}` }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
          }}
        >
          {data?.joinText}
        </Typography>
        <MLink
          href="/joinus"
          sx={{
            link: {
              textDecoration: "none",
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              // marginTop: "20px",
              backgroundColor: "#000",
              borderRadius: "25px",
            }}
          >
            Join Us
          </Button>
        </MLink>
      </section>
      <section
        className={styles.chapter__benefits}
        style={{ backgroundColor: `${clr}` }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            borderBottom: "3px solid #fff",
          }}
        >
          {id?.toUpperCase()} MEMBERSHIP OFFERS
        </Typography>
        <div className={styles.chapter__benefits__cards}>
          {data?.benefits?.map((benefit, idx) => {
            return (
              <Paper
                key={idx}
                elevation={8}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  padding: "40px",
                }}
              >
                <Image
                  src={benefit?.src}
                  alt="email"
                  layout="fixed"
                  loading="lazy"
                  height="100px"
                  width="300px"
                />
                <Typography variant="body1">{benefit?.text}</Typography>
              </Paper>
            );
          })}
        </div>
      </section>
      <section className={styles.chapter__website} style={{ color: `${clr}` }}>
        <Typography variant="h5">
          To visit IEEE Hyderabad section chapter Chapter website
        </Typography>
        <MLink
          sx={{
            textDecoration: "none",
          }}
          href="https://ieeehyderabad.org/chapters-ag/women-in-engineering-chapter"
          target="_blank"
          rel="noopener"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              // marginTop: "20px",
              backgroundColor: "#000",
              borderRadius: "25px",
            }}
          >
            Click Here
          </Button>
        </MLink>
      </section>
      <section className={styles.chapter__team}>
        <Typography
          variant="h4"
          sx={{
            color: `${clr}`,
            borderBottom: `3px solid ${clr}`,
          }}
        >
          Meet The Team
        </Typography>
        {/* <div className={styles.chapter__team__members}>
          {chapter.map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              designation={person.designation}
              emailURL={person.emailURL}
              linkedInURL={person.linkedInURL}
              image={person.image}
            />
          ))}
        </div> */}
      </section>
      <section
        className={styles.chapter__message}
        style={{ backgroundColor: `${clr}` }}
      >
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={styles.chapter__message__content}>
          <div className={styles.chapter__message__content__person}>
            <Profile
              key={data.advisor.name}
              name={data.advisor.name}
              designation="Faculty Advisor"
              emailURL={data.advisor.email}
              linkedInURL={data.advisor.linkedin}
              image={data.advisor.image}
            />
          </div>
          <Typography variant="h6">{data.advisorMsg}</Typography>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await chapters.find((o) => o.id === `${params.id}`);

  return {
    props: {
      data,
    },
  };
}
export async function getStaticPaths() {
  const paths = await chapters.map((chapter) => `/chapters/${chapter.id}`);
  return { paths, fallback: false };
}

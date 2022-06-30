import ListIcon from "@mui/icons-material/List";
import classes from "../styles/Join.module.css";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "@mohammedsrehan/react-responsive-carousel";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["joinus"])),
    },
  };
}

export default function JoinUs() {
  const { t } = useTranslation();

  return (
    <div className={classes.JoinUs}>
      <section className={classes.JoinUs__form}>
        <Typography variant="h4">{t("joinus:join1")}</Typography>
        <Typography
          variant="h5"
          sx={{
            lineHeight: "45px",
            lineBreak: { xs: "35px", md: "auto" },
            width: { md: "50%", xs: "90%" },
          }}
        >
          {t("joinus:join2")}
        </Typography>
        <Link
          sx={{ textDecoration: "none" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLScqnICww9HQLJoFFuBDymNhvjFAn-8WL_eAbQuYNeM9MnTVVw/viewform"
          target="_blank"
          rel="noopener"
        >
          <Button
            startIcon={<ListIcon />}
            size="large"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "10px 20px",
              fontWeight: "600",
              color: "#000",
            }}
          >
            Google Form Submission
          </Button>
        </Link>
      </section>
      <section className={classes.JoinUs__benefits}>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/softskills.png"
            layout="fixed"
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">{t("joinus:join3")}</Typography>
          <Typography variant="body1">{t("joinus:join4")}</Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/network.png"
            layout="fixed"
            alt="network"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">{t("joinus:join5")}</Typography>
          <Typography variant="body1">{t("joinus:join6")}</Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/awards.png"
            layout="fixed"
            alt="awards"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">{t("joinus:join7")}</Typography>
          <Typography variant="body1">{t("joinus:join8")}</Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/travelgrants.png"
            layout="fixed"
            alt="travel"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">{t("joinus:join9")}</Typography>
          <Typography variant="body1">{t("joinus:join10")}</Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/scholarship.png"
            layout="fixed"
            alt="scholarship"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">{t("joinus:join11")}</Typography>
          <Typography variant="body1">{t("joinus:join12")}</Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/ieeeorg.png"
            layout="fixed"
            alt="ieeeorg"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">@IEEE.org</Typography>
          <Typography variant="body1">{t("joinus:join13")}</Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/magazine.png"
            layout="fixed"
            alt="magazine"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">{t("joinus:join14")}</Typography>
          <Typography variant="body1">{t("joinus:join15")}</Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/ieeetv.png"
            layout="fixed"
            alt="ieeetv"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">IEEE.tv</Typography>
          <Typography variant="body1">{t("joinus:join16")}</Typography>
        </div>
      </section>
      <section className={classes.JoinUs__globalBenefits}>
        <div className={classes.JoinUs__globalBenefits__header}>
          <Image
            src="/joinUs/thinking.png"
            layout="fixed"
            alt="thinking"
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            {t("joinus:join17")}
          </Typography>
        </div>
        <Typography variant="h5">
          {t("joinus:join18")}{" "}
          <a
            href="https://www.ieee.org/membership/benefits/index.html"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "#12679b" }}
          >
            IEEE Global Benefits Finder
          </a>{" "}
          {t("joinus:join19")}
        </Typography>
      </section>
      <section className={classes.JoinUs__testemonials}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">{t("joinus:join20")}</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/hafsa_EFuQsDexX.jpeg"
                  sx={{ height: "150px", width: "150px" }}
                />
                <Typography variant="subtitle1">Hafsa Taruj</Typography>
                <Typography variant="overline">SMTC Lead - 2020</Typography>
              </div>
              <Typography variant="body1">{t("joinus:join21")}</Typography>
            </div>
          </div>
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">{t("joinus:join20")}</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kaunain.jpg"
                  sx={{ height: "150px", width: "150px" }}
                />
                <Typography variant="subtitle1">
                  Syeda Kaunain Fatima
                </Typography>
                <Typography variant="overline">Ex SB Chair - 2020</Typography>
              </div>
              <Typography variant="body1">{t("joinus:join22")}</Typography>
            </div>
          </div>
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">{t("joinus:join20")}</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kounain.JPG"
                  sx={{ height: "150px", width: "150px" }}
                />
                <Typography variant="subtitle1">
                  Syeda Kounain Fatima
                </Typography>
                <Typography variant="overline">SB Secretary - 2022</Typography>
              </div>
              <Typography variant="body1">{t("joinus:join23")}</Typography>
            </div>
          </div>
        </Carousel>
      </section>
      <section className={classes.JoinUs__accordion}>
        <Typography
          sx={{ color: "#000", textAlign: "center", marginBottom: "30px" }}
          variant="h4"
        >
          FAQ
        </Typography>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6"> {t("joinus:join24")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("joinus:join25")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">{t("joinus:join26")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("joinus:join27")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">{t("joinus:join28")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("joinus:join29")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">{t("joinus:join30")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("joinus:join31")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">{t("joinus:join32")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("joinus:join33")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">{t("joinus:join34")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("joinus:join37")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6"> {t("joinus:join35")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("joinus:join36")}</Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
}

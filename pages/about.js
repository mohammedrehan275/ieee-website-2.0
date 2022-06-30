import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import IEEEtimeline from "../components/timeline/IEEEtimeline";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default function About(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET</title>
        <meta name="description" content="IEEE NSAKCET About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.About}>
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              padding: "20px",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div className={styles.About_collegeimg}>
              <Image
                src="https://ik.imagekit.io/ieeensakcet/About/tr:w-1000/College_adminblock_MN682k9FP.png"
                layout="fill"
                alt="college"
              />
            </div>

            <div className={styles.About_about_text}>
              <Typography variant="h6" sx={{ textAlign: "justify" }}>
                <span className={styles.About_abouttext_header}>
                  {t("about:about_IEEESB1")}
                </span>{" "}
                {t("about:about_IEEESB")}
              </Typography>
              <h2>{props.locale}</h2>
            </div>
          </Paper>
          <Paper
            elevation={12}
            sx={{
              padding: "20px",
              gap: "20px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#c21531",
                borderBottom: "2px solid #000",
                display: "inline",
              }}
            >
              {t("about:head_our_community")}
            </Typography>

            <div className={styles.About_about_community1}>
              <div className={styles.About_about_community_img}>
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg"
                  layout="fill"
                  alt="pyramid"
                  loading="lazy"
                  className={styles.About__ourCommunity__pyramid}
                />
              </div>

              <div className={styles.About__ourCommunity__text}>
                <Typography variant="h6" sx={{ textAlign: "justify" }}>
                  {t("about:our_community_content")}
                </Typography>
              </div>
            </div>
          </Paper>
          <Paper
            elevation={12}
            sx={{
              backgroundColor: "#ffffff",
              padding: "20px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#c21531",
                borderBottom: "2px solid #000",
                display: "inline",
              }}
            >
              {t("about:head_what")}
            </Typography>
            <IEEEtimeline />
          </Paper>
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "25px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#c21531", borderBottom: "2px solid #000" }}
            >
              {t("about:head_how_we")}
            </Typography>
            <div className={styles.About__Work__image}>
              <Image
                src="https://ik.imagekit.io/ieeensakcet/About/tr:w-1000/Workflow_Cr44BHyBc.png"
                layout="fill"
                alt="work"
                loading="lazy"
              />
            </div>
            <div>
              <Accordion
                sx={{
                  backgroundColor: "#12679b",
                  color: "#fff",
                  padding: "15px",
                  margin: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                    Executive Committee (ExCOM)
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("about:excom_content")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "#12679b",
                  color: "#fff",
                  padding: "15px",
                  margin: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Leadership Team</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("about:lead_content")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "#12679b",
                  color: "#fff",
                  padding: "15px",
                  margin: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Publicity Team</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {t("about:Publicity_content_1")}
                    <br />
                    {t("about:Publicity_content_2")}
                    <br />
                    {t("about:Publicity_content_3")} <br />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Paper>
        </div>
      </main>
    </div>
  );
}

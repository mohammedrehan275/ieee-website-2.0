import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";

// New icone below

import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Icon } from "@mui/material";
import Image from "next/image";
import { yellow } from "@mui/material/colors";

const IEEEtimeline = () => {
  // export default function CustomizedTimeline() {
  return (
    <div>
      <Timeline
        position="alternate"
        align="left"
        sx={{
          width: "100%",
          alignItems: "center",
          m: "auto",
          marginTop: "20px",
        }}
      >
        <TimelineItem sx={{ width: "110%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            April 20, 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "15px" }} />
            <TimelineDot color="primary">
              <FlagCircleOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "5px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Established
            </Typography>
            <Typography>under the leadership of Mr. Mohammed Khalid</Typography>
            <Typography variant="body2" color="text.secondary">
              Chair - Ms. Syeda Kaunain Fatima
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Student Members: 23 <br /> Professional Members: 4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <GroupsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            {/* <Typography variant="h6" component="span">
            Established
          </Typography>
          <Typography>under the leadership of Mr. Mohammed Khalid</Typography> */}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Technical & Non-Technical Events conducted: 20
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action" fontSize="large">
              <EventAvailableOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            {/* <Typography variant="h6" component="span">
            Established
          </Typography>
          <Typography>under the leadership of Mr. Mohammed Khalid</Typography> */}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Recognized for contributing at IEEE Region 10 Students Young
            Professionals Women in Engineering Life Members (SYWL) Virtual
            Congress 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <StarRateOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            {/* <Typography variant="h6" component="span">
            Established
          </Typography>
          <Typography>under the leadership of Mr. Mohammed Khalid</Typography> */}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            A new beginning!
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="primary">
              <FlagCircleOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Year: 2021
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chair - Mohammed Khalid
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Student Members: 43 <br /> Professional Members: 6
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <GroupsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Technical & Non-Technical Events conducted: 15
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <EventAvailableOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Received Cash Award for SAC Buddy Program
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <AttachMoneyOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Formed IEEE Women in Engineering and Affinity Group
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="secondary">
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/wie/WIE_logo_white.png" alt="society-logo" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2021</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Formed IEEE Computer Society
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "orange" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/cs/IEEE_CS_logoicon.png" alt="society-logo" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 6, 2021</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Formed IEEE Robotics and Automation Society
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "#98012e" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/ras/RAS_ICON_white.png" alt="society-logo" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2021</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Exemplary Student Branch Award&apos;21
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <EmojiEventsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="primary">
              <FlagCircleOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Year: 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chair - Nida Meher
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Formed IEEE Signal Processing Society
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "#fff" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/sps/SPS_Logo_Color_RGB.png" alt="society-logo" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2022</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Formed IEEE Circuit and Systems Society
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot sx={{ backgroundColor: "#fff" }}>
              {/* <LaptopMacIcon fontSize="large" />*/}
              <Icon fontSize="large">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Image src="/cass/CAS-logo.png" alt="society-logo" layout="fill" />
                </div>
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>January 4, 2022</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Student Members: 77 <br />
            Professional Members: 6
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "10px" }} />
            <TimelineDot color="action">
              <GroupsOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector sx={{ height: "10px" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography></Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: "100%" }}>
          <TimelineSeparator>
            <TimelineConnector
              sx={{ height: "10px", bgcolor: "secondary.main" }}
            />
            <TimelineDot color="secondary">
              <TimelineOutlinedIcon fontSize="large" />
            </TimelineDot>
            {/* <TimelineConnector sx={{ height: "20px" }} /> */}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "23px", px: 2, margin: "0px" }}>
            <Typography>IEEE SWAY!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default IEEEtimeline;

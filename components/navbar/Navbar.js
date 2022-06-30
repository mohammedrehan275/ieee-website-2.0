import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Collapse,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SwipeableDrawer,
} from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const routePath = router.route;
  const [path, setPath] = useState("/");
  const [selectedLang, setSelectedLang] = useState("English");
  const [showLang, setShowLang] = useState(false);

  useEffect(() => {
    if (routePath == "/about" || routePath == "/joinus" || routePath === "/") {
      console.log(routePath)
      setPath(routePath);
      setShowLang(true);
    }
    if (router.locale == "ur") {
      setSelectedLang("Urdu");
    }
    if (router.locale == "te") {
      setSelectedLang("Telugu");
    }
  }, [routePath, router.locale]);

  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobile(open);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const [openLang, setOpenLang] = useState(false);
  const anchorRef = useRef(null);

  const handleLangClick = () => {
    console.info(`You clicked ${selectedLang}`);
  };

  const handleMenuItemClick = (lang) => {
    setSelectedLang(lang);
    setOpenLang(false);
  };

  const handleToggle = () => {
    setOpenLang((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenLang(false);
  };

  const mobileNav = (
    <div className={styles.mobile}>
      <IconButton
        onClick={toggleDrawer(false)}
        area-label="menu"
        className={styles.buttonR}
      >
        <ChevronRightIcon />
      </IconButton>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button>
          <Link href="/" passHref>
            <ListItemText primary="HOME" className={styles.text} />
          </Link>
        </ListItem>
        <ListItem button to="/aboutus">
          <Link href="/about" passHref>
            <ListItemText primary="ABOUT US" className={styles.text} />
          </Link>
        </ListItem>
        <ListItem button to="/events">
          <Link href="/events" passHref locale="en">
            <ListItemText primary="EVENTS" className={styles.text} />
          </Link>
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="OUR CHAPTERS" className={styles.text} />
          {open ? (
            <ExpandLessIcon className={styles.buttonR} />
          ) : (
            <ExpandMoreIcon className={styles.buttonR} />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={styles.nested}>
              <Link href="/chapters/cs" passHref locale="en">
                <ListItemText primary="CS" className={styles.text} />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/chapters/wie" passHref locale="en">
                <ListItemText primary="WIE" className={styles.text} />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/chapters/ras" passHref locale="en">
                <ListItemText primary="RAS" className={styles.text} />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/chapters/cas" passHref locale="en">
                <ListItemText primary="CAS" className={styles.text} />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/chapters/sps" passHref locale="en">
                <ListItemText primary="SPS" className={styles.text} />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <Link href="/ourteam" passHref locale="en">
            <ListItemText primary="OUR TEAM" className={styles.text} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/joinus" passHref>
            <ListItemText primary="JOIN US" className={styles.text} />
          </Link>
        </ListItem>
        {showLang ? (
          <ListItem button>
            <ButtonGroup
              variant="contained"
              ref={anchorRef}
              aria-label="split button"
            >
              <Button onClick={handleLangClick}>{selectedLang}</Button>
              <Button
                size="small"
                aria-controls={openLang ? "split-button-menu" : undefined}
                aria-expanded={openLang ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              open={openLang}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        <MenuItem
                          onClick={() => handleMenuItemClick("English")}
                        >
                          <Link href="/">English</Link>
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick("Telugu")}>
                          <Link href={`/te${path}`}>Telugu</Link>
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick("Urdu")}>
                          <Link href={`/ur${path}`}>Urdu</Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </ListItem>
        ) : (
          ""
        )}
      </List>
    </div>
  );

  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/" passHref>
          <div
            // src="https://ik.imagekit.io/ieeensakcet/tr:h-70/ieee_bDdem9m3j.png"
            className={styles.navbar__logo}
            // alt="logo"
          />
        </Link>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__list__listItem}>
            <Link href="/" passHref>
              <a className={styles.navbar__list__listItem__link}>HOME</a>
            </Link>
          </li>
          <li className={styles.navbar__list__listItem}>
            <Link href="/about" passHref>
              <a className={styles.navbar__list__listItem__link}>ABOUT US</a>
            </Link>
          </li>
          <li className={`${styles.navbar__list__listItem} ${styles.hover}`}>
            <Link href="/events" passHref locale="en">
              <a className={styles.navbar__list__listItem__link}>EVENTS</a>
            </Link>
          </li>
          <li className={`${styles.navbar__list__listItem} ${styles.hover}`}>
            <Link href="/cs" passHref locale="en">
              <a className={styles.navbar__list__listItem__link}>
                OUR CHAPTERS
              </a>
            </Link>
            <Paper
              elevation={3}
              className={`${styles.subListItem} subListItem`}
            >
              <ul className={styles.subItem}>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/chapters/cs" passHref locale="en">
                    <a className={styles.navbar__list__listItem__link__subitem}>
                      Computer Society
                    </a>
                  </Link>
                </li>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/chapters/ras" passHref locale="en">
                    <a className={styles.navbar__list__listItem__link__subitem}>
                      RAS
                    </a>
                  </Link>
                </li>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/chapters/wie" passHref locale="en">
                    <a className={styles.navbar__list__listItem__link__subitem}>
                      WIE
                    </a>
                  </Link>
                </li>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/chapters/cass" passHref locale="en">
                    <a className={styles.navbar__list__listItem__link__subitem}>
                      CAS
                    </a>
                  </Link>
                </li>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/chapters/sps" passHref locale="en">
                    <a className={styles.navbar__list__listItem__link__subitem}>
                      SPS
                    </a>
                  </Link>
                </li>
              </ul>
            </Paper>
          </li>
          <li className={styles.navbar__list__listItem}>
            <Link href="/ourteam" passHref locale="en">
              <a className={styles.navbar__list__listItem__link}>OUR TEAM</a>
            </Link>
          </li>
          <li className={styles.navbar__list__listItem}>
            <Link
              href="/joinus"
              passHref
              className={styles.navbar__list__listItem__link}
            >
              <a className={styles.navbar__list__listItem__link}>JOIN US</a>
            </Link>
          </li>
          {showLang ? (
            <>
              <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="split button"
                sx={{
                  marginTop: "4px",
                }}
              >
                <Button onClick={handleLangClick}>{selectedLang}</Button>
                <Button
                  size="small"
                  aria-controls={openLang ? "split-button-menu" : undefined}
                  aria-expanded={openLang ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                open={openLang}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                sx={{
                  zIndex: "25",
                }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          <MenuItem
                            onClick={() => handleMenuItemClick("English")}
                          >
                            <Link href={path} locale="en">
                              English
                            </Link>
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleMenuItemClick("Telugu")}
                          >
                            <Link href={`/te${path}`} locale="te">
                              Telugu
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={() => handleMenuItemClick("Urdu")}>
                            <Link href={`/ur${path}`} locale="ur">
                              Urdu
                            </Link>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          ) : (
            ""
          )}
        </ul>
        {mobile ? (
          <SwipeableDrawer
            anchor="right"
            open={mobile}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(false)}
          >
            {mobileNav}
          </SwipeableDrawer>
        ) : (
          ""
        )}
        <IconButton
          aria-label="menu"
          className={styles.button}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </nav>
    </div>
  );
};

export default NavBar;

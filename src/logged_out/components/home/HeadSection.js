import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Button, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    justifyContent: "center",
  },
  extraLargeButton: {
    borderRadius:"100px",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    height: 60,
    width: 280,
    border: "4px solid black",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  wrapper: {
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
    justifyContent: "center",
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
              <div justifyContent = "center" className={classNames(classes.containerFix, "container")}>
              <Box justifyContent="center" className="row">
                    <Box
                      display="flex"
                      justifyContent="center"
                      textAlign="center"
                      flexDirection="column"
                      height="100%"
                    >
                      <Box mb={2}>
                      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"></link>
                        <Typography  style={{ fontFamily: 'Raleway, sans-serif'}} fontWeight="bolder" variant={isWidthUpLg ? "h2" : "h3"}>
                         Smash Your Interviews <br></br>
                         Using AI 🚀
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                          <Typography
                          style={{ fontFamily: 'Roboto, sans-serif'}}
                            variant={isWidthUpLg ? "h6" : "body1"}
                            color="textSecondary"
                          >
                             <p justifyContent= "center"> Practice 100s of questions with instant feedback</p>
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          href=""
                        >
                          Boost your interview now 🚀
                        </Button>
                      </div>
                    </Box>
                </Box>
              </div>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFDC00"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);

import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentsAntimation from '../animations/documentsAnimation/data.js';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import roots from '../assets/root.svg';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data.js';

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em",
    },
    arrowContainer: {
        marginTop: "0.6em",
    },
    mainContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em",
    },
    itemContainer: {
        maxWidth: "40em",
    }
}));

export default function CustomSoftware(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row"
                justifyContent={matchesMd ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}
                        sx={{
                            marginRight: "1em",
                            marginLeft: "-3.5em"
                        }}>
                        <IconButton component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src={backArrow} alt="back arrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMd ? "center" : undefined}>
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                            We build custom software solutions for your business needs.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton component={Link} to="/mobileApps" onClick={() => props.setSelectedIndex(2)}>
                            <img src={forwardArrow} alt="forward arrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction="row" justifyContent="center"
                sx={{
                    marginTop: "15em",
                    marginBottom: "20em"
                }}>
                <Grid item container direction="column" md
                    alignItems="center"
                    sx={{
                        maxWidth: "40em",
                    }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Save Energy
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="lightbulb" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md
                    alignItems="center"
                    sx={{
                        maxWidth: "40em",
                        marginTop: matchesMd ? "10em" : "0",
                        marginBottom: matchesMd ? "10em" : "0",
                    }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Save Time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md
                    alignItems="center"
                    sx={{
                        maxWidth: "40em",
                        marginTop: matchesMd ? "10em" : "0",
                        marginBottom: matchesMd ? "10em" : "0",
                    }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Save Money
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                justifyContent="space-around"
                direction={matchesMd ? "column" : "row"}
                alignItems={matchesMd ? "center" : undefined}
            >
                <Grid item container className={classes.itemContainer} md>
                    <Grid item md container direction="column">
                        <Grid item>
                            <Typography variant="h4">
                                Digital Documents and data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie animationData={documentsAntimation} height={"100%"} widht={"100%"}
                            sx={{
                                maxHeight: 275,
                                maxWidth: 275,
                                minHeight: 250,
                            }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md>
                    <Grid item md>
                        <Lottie animationData={scaleAnimation} height={"100%"} widht={"100%"}
                            sx={{
                                maxHeight: 260,
                                maxWidth: 270
                            }} />
                    </Grid>
                    <Grid item md container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="right">
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align="right">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item container direction="row"
                sx={{
                    marginTop: "20em",
                    marginBottom: "20em"
                }}>
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={roots} alt="trees with roots" height="450em" widht="450em" />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" gutterBottom align="center">
                            Root-Cause analysis
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                justifyContent="space-around"
                sx={{
                    marginBottom: "10em"
                }}
                direction={matchesMd ? "column" : "row"}
                alignItems={matchesMd ? "center" : undefined}>
                <Grid item container className={classes.itemContainer} md>
                    <Grid item md container direction="column">
                        <Grid item>
                            <Typography variant="h4">
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie animationData={automationAnimation} height={"100%"} widht={"100%"}
                            sx={{
                                maxHeight: 275,
                                maxWidth: 275,
                                minHeight: 250,
                            }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md>
                    <Grid item md>
                        <Lottie animationData={uxAnimation} height={"100%"} widht={"100%"}
                            sx={{
                                maxHeight: 260,
                                maxWidth: 270
                            }} />
                    </Grid>
                    <Grid item md container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="right">
                                User Expirence Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align="right">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

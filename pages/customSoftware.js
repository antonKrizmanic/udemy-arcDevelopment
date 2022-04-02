import React from 'react';
import Link from '../src/Link';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Head from 'next/head';
import documentsAntimation from '../src/animations/documentsAnimation/data.js';
import scaleAnimation from '../src/animations/scaleAnimation/data.json';
import automationAnimation from '../src/animations/automationAnimation/data.json';

import uxAnimation from '../src/animations/uxAnimation/data.js';

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
            <Head>
                <title key="title">Custom software Development and Design - Free Estimate</title>
                <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Custom Software" />
                <meta key="og:url" property="og:url" content="arc.com/customSoftware" />
                <link rel="canonical" key="canonical" href="https://www.arc.com/customSoftware" />

            </Head>
            <Grid item container direction="row"
                justifyContent={matchesMd ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}
                        sx={{
                            marginRight: "1em",
                            marginLeft: "-3.5em"
                        }}>
                        <IconButton component={Link} href="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src="/assets/backArrow.svg" alt="back arrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h1" align={matchesMd ? "center" : undefined}>
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
                        <IconButton component={Link} href="/mobileApps" onClick={() => props.setSelectedIndex(2)}>
                            <img src="/assets/forwardArrow.svg" alt="forward arrow" />
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
                        <img src="/assets/bulb.svg" alt="lightbulb" />
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
                        <img src="/assets/stopwatch.svg" alt="stopwatch" />
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
                        <img src="/assets/cash.svg" alt="cash" />
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
                        <img src="/assets/root.svg" alt="trees with roots" height="450em" widht="450em" />
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

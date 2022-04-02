import React from 'react';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import technologyAnimation from '../src/animations/technologyAnimation/data.json';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
}));

export default function Revolution(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Head>
                <title key="title">The revolution - cutting edge software | Arc Development</title>
                <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Revolution" />
                <meta key="og:url" property="og:url" content="arc.com/revolution" />
                <link rel="canonical" key="canonical" href="https://www.arc.com/revolution" />
            </Head>
            <Grid item className={classes.rowContainer} sx={{ marginTop: "2em" }}>
                <Typography variant="h1"
                    sx={{
                        fontFamily: "Pacifico",
                    }} gutterBottom>
                    Revolution
                </Typography>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowContainer}>
                <Grid item lg>
                    <img src="/assets/vision.svg" alt="vision" style={{ maxWidth: matchesSm ? "300px" : "40em", marginRight: "5em", }} />
                </Grid>
                <Grid item container direction="column" lg sx={{
                    maxWidth: "40em"
                }}>
                    <Grid item>
                        <Typography align="right" variant="h4" gutterBottom>
                            Vision
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowContainer}>

                <Grid item container direction="column" lg sx={{
                    maxWidth: "40em"
                }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Technology
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end" lg>
                    <Lottie animationData={technologyAnimation} height={"100%"} widht={"100%"}
                        sx={{
                            maxWidth: "40em",
                        }} />
                </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="center" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom sx={{ color: "#000" }}>
                        Proccess
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#b3b3b3", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Consultation
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/consultation.svg" alt="handshake" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#ff7373", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Mockup
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>

                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/mockupIcon.svg" alt="mockup" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#39b54a", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Review
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/reviewIcon.svg" alt="review" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#a67c52", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Design
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/designIcon.svg" alt="design" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#39b54a", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Review
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/reviewIcon.svg" alt="review" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#fbb03b", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Build
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/buildIcon.svg" alt="build" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#c1272d", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Launch
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>

                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/launchIcon.svg" alt="rocket" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#8b45ce", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Maintain
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>

                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/maintainIcon.svg" alt="maintain" />
                </Grid>
            </Grid>

            <Grid item container direction="row" className={classes.rowContainer}
                sx={{ backgroundColor: "#29abe2", height: "90em" }}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                            Iterate
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>

                    </Grid>
                </Grid>
                <Grid item lg sx={{ alignSelf: "center" }}>
                    <img src="/assets/iterateIcon.svg" alt="iterate" />
                </Grid>
            </Grid>
        </Grid>
    )
}
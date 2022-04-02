import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CallToAction from './ui/CallToAction';
import vision from '../assets/vision.svg';
import technologyAnimation from '../animations/technologyAnimation/data.json';
import consultation from '../assets/consultationIcon.svg';
import mockup from '../assets/mockupIcon.svg';
import review from '../assets/reviewIcon.svg';
import design from '../assets/designIcon.svg';
import build from '../assets/buildIcon.svg';
import launch from '../assets/launchIcon.svg';
import maintain from '../assets/maintainIcon.svg';
import iterate from '../assets/iterateIcon.svg';

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
            <Grid item className={classes.rowContainer} sx={{ marginTop: "2em" }}>
                <Typography variant="h2"
                    sx={{
                        fontFamily: "Pacifico",
                    }} gutterBottom>
                    Revolution
                </Typography>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowContainer}>
                <Grid item lg>
                    <img src={vision} alt="vision" style={{ maxWidth: matchesSm ? "300px" : "40em", marginRight: "5em", }} />
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
                    <img src={consultation} alt="handshake" />
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
                    <img src={mockup} alt="mockup" />
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
                    <img src={review} alt="review" />
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
                    <img src={design} alt="design" />
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
                    <img src={review} alt="review" />
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
                    <img src={build} alt="build" />
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
                    <img src={launch} alt="rocket" />
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
                    <img src={maintain} alt="maintain" />
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
                    <img src={iterate} alt="iterate" />
                </Grid>
            </Grid>
        </Grid>
    )
}
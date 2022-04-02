import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CallToAction from './ui/CallToAction';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import integrationAnimation from '../animations/integrationAnimation/data.json';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

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

export default function MobileApps(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item container direction="row"
                    justifyContent={matchesMd ? "center" : undefined}>
                    <Hidden mdDown>
                        <Grid item className={classes.arrowContainer}
                            sx={{
                                marginRight: "1em",
                                marginLeft: "-3.5em"
                            }}>
                            <IconButton component={Link} to="/customsoftware" onClick={() => props.setSelectedIndex(1)}>
                                <img src={backArrow} alt="back arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography variant="h2" align={matchesMd ? "center" : undefined}>
                                iOS/Android apps development
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
                            <IconButton component={Link} to="/websites" onClick={() => props.setSelectedIndex(3)}>
                                <img src={forwardArrow} alt="forward arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid item container direction={matchesMd ? "column" : "row"} className={classes.itemContainer}
                    sx={{
                        marginTop: "15em",
                        marginBottom: "15em"
                    }}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Integration
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie>
                            <Lottie animationData={integrationAnimation} height={"100%"} widht={"100%"}
                                sx={{
                                    maxWidth: "20em",
                                }} />
                        </Lottie>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Simultaneous platform support
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMd ? "center" : undefined}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMd ? "column" : "row"} className={classes.itemContainer}
                    sx={{
                        marginBottom: "15em"
                    }}>
                    <Grid item container direction="column" md alignItems="center"
                        sx={{
                            marginTop: matchesMd ? "10em" : 0,
                            marginBottom: matchesMd ? "10em" : 0
                        }}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom align="center">
                                Extend function
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={swiss} alt="swiss army knife" />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align="center">
                                Extend access
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={access} alt="swiss army knife" sx={{ maxWidth: "28em" }} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center"
                        sx={{
                            marginTop: matchesMd ? "10em" : 0,
                            marginBottom: matchesMd ? "10em" : 0
                        }}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom align="center">
                                Increase Engagement
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={engagement} alt="swiss army knife" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column">
                <Grid item>
                    <CallToAction setValue={props.setValue} />
                </Grid>
            </Grid>
        </>
    );
}
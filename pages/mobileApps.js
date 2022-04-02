import React from 'react';
import Link from '../src/Link';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CallToAction from '../src/ui/CallToAction';
import integrationAnimation from '../src/animations/integrationAnimation/data.json';
import Head from 'next/head';



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
            <Head>
                <title key="title">iOS/Android App Design and Development | Arc Development</title>
                <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Mobile apps" />
                <meta key="og:url" property="og:url" content="arc.com/mobileApps" />
                <link rel="canonical" key="canonical" href="https://www.arc.com/mobileApps" />

            </Head>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item container direction="row"
                    justifyContent={matchesMd ? "center" : undefined}>
                    <Hidden mdDown>
                        <Grid item className={classes.arrowContainer}
                            sx={{
                                marginRight: "1em",
                                marginLeft: "-3.5em"
                            }}>
                            <IconButton component={Link} href="/customsoftware" onClick={() => props.setSelectedIndex(1)}>
                                <img src='/assets/backArrow.svg' alt="back arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography variant="h1" align={matchesMd ? "center" : undefined}>
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
                            <IconButton component={Link} href="/websites" onClick={() => props.setSelectedIndex(3)}>
                                <img src='/assets/forwardArrow.svg' alt="forward arrow" />
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

                        <Lottie animationData={integrationAnimation} height={"100%"} widht={"100%"}
                            sx={{
                                maxWidth: matchesMd ? "15em" : "20em",
                                height: matchesMd ? "20em" : undefined
                            }} />

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
                        marginBottom: "15em",
                        display: matchesMd ? "grid" : undefined
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
                            <img src='/assets/swissKnife.svg' alt="swiss army knife" />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align="center">
                                Extend access
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src='/assets/extendAccess.svg' alt="swiss army knife" sx={{ maxWidth: "28em" }} />
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
                            <img src='/assets/increaseEngagement.svg' alt="swiss army knife" />
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
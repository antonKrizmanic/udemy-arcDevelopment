import React from 'react';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CallToAction from '../src/ui/CallToAction';
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
    },
    paragraphContainer: {
        maxWidth: "30em",
    }
}));

export default function WebSite(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Head>
                <title key="title">Stunning Custom Website Design | Arc Development</title>
                <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Websites" />
                <meta key="og:url" property="og:url" content="arc.com/websites" />
                <link rel="canonical" key="canonical" href="https://www.arc.com/websites" />
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
                            <IconButton component={Link} href="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                                <img src="/assets/backArrow.svg" alt="back arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography variant="h1" align={matchesMd ? "center" : undefined}>
                                Web site apps development
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
                            <IconButton component={Link} href="/services" onClick={() => props.setSelectedIndex(0)}>
                                <img src="/assets/forwardArrow.svg" alt="forward arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid item container direction={matchesSm ? "column" : "row"} className={classes.itemContainer}
                    alignItems="center"
                    sx={{
                        marginTop: "15em"
                    }}>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h4" gutterBottom>
                                    Analitics
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src="/assets/analytics.svg" alt="analytics" style={{ marginLeft: "-2.75em" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.paragraphContainer}>
                        <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction={matchesSm ? "column" : "row"} className={classes.itemContainer}
                    alignItems="center" justifyContent="flex-end"
                    sx={{
                        marginTop: "15em",
                        marginBottom: "15em"
                    }}>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h4" gutterBottom align="center">
                                    E-Commerce
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src="/assets/ecommerce.svg" alt="ecommerce" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginLeft: "1em" }} className={classes.paragraphContainer}>
                        <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction={matchesSm ? "column" : "row"} className={classes.itemContainer}
                    alignItems="center">
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h4" gutterBottom align="center">
                                    Outreacth
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src="/assets/outreach.svg" alt="outreach" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginLeft: "1em" }} className={classes.paragraphContainer}>
                        <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction={matchesSm ? "column" : "row"} className={classes.itemContainer}
                    alignItems="center" justifyContent="flex-end"
                    sx={{
                        marginTop: "15em",
                        marginBottom: "15em"
                    }}>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h4" gutterBottom align="center">
                                    SEO
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src="/assets/seo.svg" alt="seo" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginLeft: "1em" }} className={classes.paragraphContainer}>
                        <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Typography variant="body1" align={matchesSm ? "center" : undefined} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column">
                <Grid item>
                    <CallToAction setValue={props.setValue} />
                </Grid>
            </Grid>
        </>
    )
}
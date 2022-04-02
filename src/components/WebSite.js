import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CallToAction from './ui/CallToAction';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';

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
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item container direction="row"
                    justifyContent={matchesMd ? "center" : undefined}>
                    <Hidden mdDown>
                        <Grid item className={classes.arrowContainer}
                            sx={{
                                marginRight: "1em",
                                marginLeft: "-3.5em"
                            }}>
                            <IconButton component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                                <img src={backArrow} alt="back arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography variant="h2" align={matchesMd ? "center" : undefined}>
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
                            <IconButton component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                                <img src={forwardArrow} alt="forward arrow" />
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
                                <img src={analytics} alt="analytics" style={{ marginLeft: "-2.75em" }} />
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
                                <img src={ecommerce} alt="ecommerce" />
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
                                <img src={outreach} alt="outreach" />
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
                                <img src={seo} alt="seo" />
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
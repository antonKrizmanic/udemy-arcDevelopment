import React from 'react';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography } from '@mui/material';
import ButtonArrow from '../src/ui/ButtonArrow';
import { useMediaQuery } from '@mui/material';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.75rem:",
        height: 35,
        padding: 5
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    subtitle: {
        marginBottom: "1em",
    },
    icon: {
        marginLeft: "2em",
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        },
        [theme.breakpoints.down("xs")]: {
            padding: 5
        },
    },
}));

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Head>
                <title key="title">Tops custom software development services | Arc Development</title>
                <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Services" />
                <meta key="og:url" property="og:url" content="arc.com/services" />
                <link rel="canonical" key="canonical" href="https://www.arc.com/services" />
            </Head>
            <Grid item sx={{
                marginLeft: matchesSm ? 0 : "5em",
                marginTop: matchesSm ? "1em" : "2em"
            }}>
                <Typography variant="h1" gutterBottom
                    align={matchesSm ? "center" : undefined}
                >Services</Typography>
            </Grid>
            <Grid item> {/*-----iOS-Android Block-----*/}
                <Grid container className={classes.serviceContainer}
                    justifyContent={matchesSm ? "center" : "flex-end"}
                    textAlign={matchesSm ? "center" : undefined}>
                    <Grid item sx={{
                        width: matchesSm ? undefined : "35em",
                    }}>
                        <Typography variant="h4">
                            iOS/Android App development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app
                            {matchesSm ? null : <br />} with either mobile platform.
                        </Typography>
                        <Button component={Link}
                            onClick={() => { props.setValue(1); props.setSelectedIndex(2); }}
                            href="/mobileapps" variant="outlined" className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Lear more</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item sx={{
                        marginRight: matchesSm ? "0" : "5em"
                    }}>
                        <img className={classes.icon} src="/assets/mobileIcon.svg" alt="mobilephone icon" width="250em" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Custom Software Block-----*/}
                <Grid container className={classes.serviceContainer}
                    justifyContent={matchesSm ? "center" : undefined}
                    textAlign={matchesSm ? "center" : undefined}>
                    <Grid item sx={{
                        marginLeft: matchesSm ? "0" : "5em"
                    }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete Digital Solutions for your <span className={classes.specialText}>Business</span>
                        </Typography>
                        <Button component={Link}
                            onClick={() => { props.setValue(1); props.setSelectedIndex(1); }}
                            href="/customsoftware" variant="outlined" className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Lear more</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src="/assets/CustomSoftwareIcon.svg" alt="custom software icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Websites Block-----*/}
                <Grid container className={classes.serviceContainer}
                    sx={{ marginBottom: "10em" }}
                    justifyContent={matchesSm ? "center" : "flex-end"}
                    textAlign={matchesSm ? "center" : undefined}>
                    <Grid item sx={{
                        width: matchesSm ? undefined : "35em",
                    }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach more. Discover more. Sell more.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button component={Link}
                            onClick={() => { props.setValue(1); props.setSelectedIndex(3); }}
                            href="/website" variant="outlined" className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Lear more</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item sx={{
                        marginRight: matchesSm ? "0" : "5em",
                    }}>
                        <img className={classes.icon} src="/assets/websiteIcon.svg" alt="website icon" width="250em" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
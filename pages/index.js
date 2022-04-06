import React from 'react';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, Card, CardContent } from '@mui/material';
import ButtonArrow from '../src/ui/ButtonArrow';
import animationData from '../src/animations/landinganimation/data';
import Link from '../src/Link';
import { useMediaQuery } from '@mui/material';
import CallToAction from '../src/ui/CallToAction';
import Head from 'next/head';


const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        margintTop: "2em",
        marginLeft: "10%",
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }
    },
    buttonContainer: {
        marginTop: "1em",
    },
    learButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem:",
        height: 45,
        width: 145,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.75rem:",
        height: 35,
        padding: 5
    },
    mainContainer: {
        marginTop: "5em",
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0",
        }
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
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        },
        [theme.breakpoints.down("xs")]: {
            padding: 5
        },
    },
    reacolutionBackground: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100%",
        width: "100%",
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
    },
    infoBackground: {
        backgroundImage: `url("/assets/infoBackground.svg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100%",
        width: "100%",
    }
}));

export default function LendingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXs = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <Grid container direction="column" className={classes.mainContainer}>
                <Head>
                    <title key="title">Custom Software, Mobile Apps and websites | Arc Development</title>
                    <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                    <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Lending page" />
                    <meta key="og:url" property="og:url" content="arc.com" />
                    <link rel="canonical" key="canonical" href="https://www.arc.com" />

                </Head>
                <Grid item> {/*-----Hero Block-----*/}
                    <Grid container justifyContent="flex-end" alignItems="center">
                        <Grid item sm className={classes.heroTextContainer}>
                            <Typography align="center" variant='h2'>
                                Bringing West Coast Technology
                                <br />
                                to the Midwest
                            </Typography>
                            <Grid container justifyContent="center"
                                className={classes.buttonContainer}>
                                <Grid item>
                                    <Button
                                        component={Link}
                                        href="/freeEstimate"
                                        onClick={() => props.setValue(5)}
                                        className={classes.estimateButton}
                                        variant="contained" color="primary">Free estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button component={Link}
                                        onClick={() => props.setValue(2)}
                                        href="/revolution" className={classes.learButtonHero} variant="outlined" color="primary">
                                        <span style={{ marginRight: 10 }}>Lear more</span>
                                        <ButtonArrow
                                            width={15}
                                            height={15}
                                            fill={theme.palette.common.blue}
                                        />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm className={classes.animation}>
                            <Lottie animationData={animationData} height={"100%"} widht={"100%"} />
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
                            <img className={classes.icon} src="/assets/customSoftwareIcon.svg" alt="custom software icon" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item> {/*-----iOS-Android Block-----*/}
                    <Grid container className={classes.serviceContainer}
                        justifyContent={matchesSm ? "center" : "flex-end"}
                        textAlign={matchesSm ? "center" : undefined}>
                        <Grid item >
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
                            <img className={classes.icon} src="/assets/mobileIcon.svg" alt="mobilephone icon" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item> {/*-----Websites Block-----*/}
                    <Grid container className={classes.serviceContainer}
                        justifyContent={matchesSm ? "center" : undefined}
                        textAlign={matchesSm ? "center" : undefined}>
                        <Grid item sx={{
                            marginLeft: matchesSm ? "0" : "5em"
                        }}>
                            <Typography variant="h4">
                                Website Development
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Reach more. Discover more. Sell more.
                            </Typography>
                            <Typography variant="subtitle1">
                                Optimized for Search Engines, {matchesXs && <br />} built for speed.
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
                        <Grid item>
                            <img className={classes.icon} src="/assets/websiteIcon.svg" alt="website icon" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>{/*-----The revolution-----*/}
                    <Grid container alignItems="center" justifyContent="center"
                        sx={{
                            height: "100em",
                            marginTop: "12em"
                        }}>
                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    sx={{
                                        textAlign: "center"
                                    }}>
                                    <Grid item>
                                        <Typography variant="h3" gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            Visionary insights coupled with cutting-edge technology is a recipe
                                            for revolution
                                        </Typography>
                                        <Button component={Link}
                                            onClick={() => props.setValue(2)}
                                            href="/revolution" className={classes.learButtonHero} variant="outlined" color="primary">
                                            <span style={{ marginRight: 10 }}>Lear more</span>
                                            <ButtonArrow
                                                width={15}
                                                height={15}
                                                fill={theme.palette.common.blue}
                                            />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div className={classes.reacolutionBackground} />
                    </Grid>
                </Grid>
                <Grid item> {/*-----The information block-----*/}
                    <Grid
                        container
                        sx={{
                            height: "80em",
                        }}
                        alignItems="center">
                        <Grid item container
                            sx={{
                                position: "absolute",
                                textAlign: matchesXs ? "center" : "inherit",
                            }}
                            direction={matchesXs ? "column" : "row"}>
                            <Grid
                                item
                                sm
                                sx={{
                                    marginLeft: matchesXs ? 0 : matchesSm ? "2em" : "5em",
                                }} >
                                <Grid container direction="column">
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            color: "white"
                                        }}>
                                        About Us
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Let's get personal
                                    </Typography>
                                    <Grid item>
                                        <Button
                                            component={Link}
                                            onClick={() => props.setValue(3)}
                                            href="/about"
                                            variant="outlined"
                                            className={classes.learnButton}
                                            sx={{
                                                borderColor: "white",
                                                color: "white"
                                            }}>
                                            <span style={{ marginRight: 10 }}>Learn more</span>
                                            <ButtonArrow
                                                width={10}
                                                height={10}
                                                fill="white"
                                            />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                sm
                                sx={{
                                    marginRight: matchesXs ? 0 : matchesSm ? "2em" : "5em",
                                    textAlign: matchesXs ? "center" : "right"
                                }} >
                                <Grid container direction="column">
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            color: "white"
                                        }}>
                                        Contact Us
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Say Hello!
                                    </Typography>
                                    <Grid item>
                                        <Button
                                            component={Link}
                                            onClick={() => props.setValue(4)}
                                            href="/contact"
                                            variant="outlined"
                                            className={classes.learnButton}
                                            sx={{
                                                borderColor: "white",
                                                color: "white"
                                            }}>
                                            <span style={{ marginRight: 10 }}>Learn more</span>
                                            <ButtonArrow
                                                width={10}
                                                height={10}
                                                fill="white"
                                            />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={classes.infoBackground} />
                    </Grid>
                </Grid>
                <Grid item> {/*-----Call to action-----*/}
                    <CallToAction setValue={props.setValue} />
                </Grid>
            </Grid>
        </>
    );
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@mui/styles';
import { Alert, Grid, Button, IconButton, Typography, Dialog, DialogContent, TextField, Hidden, CircularProgress, Snackbar } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Lottie from "lottie-react";
import { cloneDeep } from "lodash";
import estimateAnimation from '../src/animations/estimateAnimation/data.json';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
    icon: {
        width: "12em",
        height: "10em"
    },
    estimate: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize: "1.25rem",
        marginTop: "5em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "3em",
        marginBottom: "2em",
        borderRadius: 5
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "1.5rem",
        color: theme.palette.common.orange
    }
}));

const defaultQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: true,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: "/assets/software.svg",
                iconAlt: "Custom Software Development",
                selected: false,
                cost: 0,
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: "/assets/mobile.svg",
                iconAlt: "mobile",
                selected: false,
                cost: 0,
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: "/assets/website.svg",
                iconAlt: "Website Development",
                selected: false,
                cost: 0,
            }
        ]
    }
];

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: "/assets/website.svg",
                iconAlt: "computer outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: "/assets/iphone.svg",
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: "/assets/android.svg",
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: "/assets/camera.svg",
                iconAlt: "camera outline",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: "/assets/gps.svg",
                iconAlt: "gps pin",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: "/assets/upload.svg",
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: "/assets/users.svg",
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: "/assets/biometrics.svg",
                iconAlt: "fingerprint",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: "/assets/bell.svg",
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: "/assets/info.svg",
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: "/assets/customized.svg",
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: "/assets/data.svg",
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: "/assets/person.svg",
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: "/assets/persons.svg",
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: "/assets/people.svg",
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5
            }
        ],
        active: false
    }
];


const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: "/assets/info.svg",
                iconAlt: "person outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: "/assets/customized.svg",
                iconAlt: "outline of two people",
                selected: false,
                cost: 200
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: "/assets/globe.svg",
                iconAlt: "outline of three people",
                selected: false,
                cost: 250
            }
        ],
        active: true
    }
];


export default function FreeEstimate(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [disablePreviousNavigation, setDisablePreviousNavigation] = useState(false);
    const [disableNextNavigation, setDisableNextNavigation] = useState(false);
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");
    const [message, setMessage] = useState("");
    const [total, setTotal] = useState(0);
    const [service, setService] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeatures, setCustomFeatures] = useState("");
    const [category, setCategory] = useState("");
    const [users, setUsers] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });


    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(q => q.active);
        const activeIndex = currentlyActive[0].id - 1;

        const nextIndex = activeIndex + 1;

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
        setQuestions(newQuestions);
    }

    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(q => q.active);
        const activeIndex = currentlyActive[0].id - 1;
        const previousIndex = activeIndex - 1;

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[previousIndex] = { ...newQuestions[previousIndex], active: true };

        setQuestions(newQuestions);
    }

    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(q => q.active);
        const activeIndex = currentlyActive[0].id - 1;
        const newSelected = newQuestions[activeIndex].options[id - 1];

        switch (currentlyActive[0].subtitle) {
            case 'Select one.':
                const previousSelected = currentlyActive[0].options.filter(option => option.selected);
                if (previousSelected[0]) {
                    previousSelected[0].selected = !previousSelected[0].selected;
                }
                newSelected.selected = !newSelected.selected;
                break;
            default:
                newSelected.selected = !newSelected.selected;
                break;
        }

        switch (newSelected.title) {
            case 'Custom Software Development':
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                setPlatforms([]);
                setFeatures([]);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                break;
            case 'iOS/Android App Development':
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                setPlatforms([]);
                setFeatures([]);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                break;
            case 'Website Development':
                setQuestions(websiteQuestions);
                setService(newSelected.title);
                setPlatforms([]);
                setFeatures([]);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                break;
            default:
                setQuestions(newQuestions);
                break;
        }
    }

    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (!valid) {
                    setEmailHelper("Invalid Email");
                } else {
                    setEmailHelper("");
                }
                break;
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if (!valid) {
                    setPhoneHelper("Invalid Phone");
                }
                else {
                    setPhoneHelper("");
                }
                break;
            default:
                break;


        }
    }

    const getTotal = () => {
        let cost = 0;
        const selections = questions
            .map((question) => question.options
                .filter((option) => option.selected))
            .filter(question => question.length > 0);
        selections.map((options) => options.map((option) =>
            cost += option.cost));
        if (questions.length > 2) {
            const userCost = questions.
                filter((question) => question.title === 'How many users do you expect?')
                .map((question) => question.options
                    .filter((option) => option.selected))[0][0];

            setUsers(userCost.title);

            cost -= userCost.cost;
            cost *= userCost.cost;

        }

        setTotal(cost);
    }

    const getPlatforms = () => {
        let newPlatforms = [];

        if (questions.length > 2) {
            questions.filter((question) => question.title === 'Which platforms do you need support?')
                .map(question => question.options.filter((option) => option.selected))[0]
                .map(option => newPlatforms.push(option.title));
        }

        setPlatforms(newPlatforms);
    }

    const getFeatures = () => {
        let newFeatures = [];

        if (questions.length > 2) {
            questions.filter((question) => question.title === 'Which features do you expect to use?')
                .map(question => question.options.filter((option) => option.selected))
                .map(option => option.map(newFeature => newFeatures.push(newFeature.title)));

        }

        setFeatures(newFeatures);
    }

    const getCustomFeatures = () => {
        if (questions.length > 2) {
            const newCustomFeatures = questions.filter(question => question.title === 'What type of custom features do you expect to need?')
                .map(question => question.options.filter((option) => option.selected))[0][0].title;
            setCustomFeatures(newCustomFeatures);
        }
    }

    const getCategory = () => {
        if (questions.length === 2) {
            const newCategory = questions.filter(question => question.title === 'Which type of website are you wanting?')[0]
                .options.filter(option => option.selected)[0].title;
            setCategory(newCategory);
        }
    }

    const softwareSelection = (
        <Grid container direction="column">
            <Grid item container alignItems="center"
                sx={{
                    marginBottom: "1.25em"
                }}>
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="check" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">You want {service}
                        {platforms.length > 0 ? `for ${
                            //if only web application is selected...
                            platforms.indexOf("Web Application") > -1 &&
                                platforms.length === 1
                                ? //then finish sentence here
                                "a Web Application."
                                : //otherwise, if web application and another platform is selected...
                                platforms.indexOf("Web Application") > -1 &&
                                    platforms.length === 2
                                    ? //then finish the sentence here
                                    `a Web Application and an ${platforms[1]}.`
                                    : //otherwise, if only one platform is selected which isn't web application...
                                    platforms.length === 1
                                        ? //then finish the sentence here
                                        `an ${platforms[0]}`
                                        : //otherwise, if other two options are selected...
                                        platforms.length === 2
                                            ? //then finish the sentence here
                                            "an iOS Application and an Android Application."
                                            : //otherwise if all three are selected...
                                            platforms.length === 3
                                                ? //then finish the sentence here
                                                "a Web Application, an iOS Application, and an Android Application."
                                                : null
                            }` : null}</Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center"
                sx={{
                    marginBottom: "1.25em"
                }}>
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="check" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                            ? //...and there's only 1...
                            features.length === 1
                                ? //then end the sentence here
                                `${features[0]}.`
                                : //otherwise, if there are two features...
                                features.length === 2
                                    ? //...then end the sentence here
                                    `${features[0]} and ${features[1]}.`
                                    : //otherwise, if there are three or more features...
                                    features
                                        //filter out the very last feature...
                                        .filter(
                                            (feature, index) =>
                                                index !== features.length - 1
                                        )
                                        //and for those features return their name...
                                        .map((feature, index) => (
                                            <span key={index}>{`${feature}, `}</span>
                                        ))
                            : null}
                        {features.length > 0 &&
                            features.length !== 1 &&
                            features.length !== 2
                            ? //...and then finally add the last feature with 'and' in front of it
                            ` and ${features[features.length - 1]}.`
                            : null}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="check" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">The custom features will be of {customFeatures.toLowerCase()}
                        {`, and the project will be used by about ${users} users.`}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )

    const websiteSelection = (
        <Grid container direction="column">
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="check" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">You want {category === "Basic" ? "a Basic Website." : `an ${category} Website.`}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )

    const sendEstimate = () => {
        setLoading(true);
        axios.get("https://pokeapi.co/api/v2/", {
            params: {
                name: name,
                email: email,
                phone: phone,
                message: message
            }
        })
            .then(response => {
                console.log(response);
                setLoading(false);
                setDialogOpen(false);
                setPlatforms([]);
                setFeatures([]);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                setAlert({ open: true, message: "Estimate placed!", severity: "success" });
            }).catch(error => {
                console.log(error);
                setLoading(false);
                setPlatforms([]);
                setFeatures([]);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                setAlert({ open: true, message: "Something went wrong", severity: "error" });
            })
    }

    const estimateDisabled = () => {
        let disabled = true;
        const emptySelections = questions.map((question) =>
            question.options.filter((option) => true)).filter(question =>
                question.length === 0);
        if (questions.length === 2) {
            if (emptySelections.length === 1) {
                disabled = false;
            }
        } else if (questions.length === 1) {
            disabled = true;
        } else if (questions.length < 3 && questions[questions.lengt - 1].options.filter(option => option.selected).length > 0) {
            disabled = false;
        }

        return disabled;
    }

    useEffect(() => {
        const navigationPreviousDisabled = () => {
            const currentlyActive = questions.filter(q => q.active);
            if (currentlyActive[0].id === 1) {
                setDisablePreviousNavigation(true);
            } else {
                setDisablePreviousNavigation(false);
            }

        }

        const navigationNextDisabled = () => {
            const currentlyActive = questions.filter(q => q.active);
            if (currentlyActive[0].id === questions[questions.length - 1].id) {
                setDisableNextNavigation(true);
            } else {
                setDisableNextNavigation(false);
            }
        }

        navigationPreviousDisabled();
        navigationNextDisabled();
    }, [questions]);

    return (
        <Grid container direction="row">
            <Head>
                <title key="title">Free Software estimate | Arc Development</title>
                <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Free Estimate" />
                <meta key="og:url" property="og:url" content="arc.com/freeEstimate" />
                <link rel="canonical" key="canonical" href="https://www.arc.com/freeEstimate" />

            </Head>
            <Grid item container direction="column" lg
                alignItems={matchesMd ? "center" : undefined}>
                <Grid item
                    sx={{
                        marginTop: "2em",
                        marginLeft: matchesMd ? "0" : "5em"
                    }}>
                    <Typography variant="h1" align={matchesMd ? "center" : undefined}>Estimate</Typography>
                </Grid>
                <Grid item
                    sx={{
                        marginRight: matchesMd ? "0" : "10em",
                        maxWidth: "50em",
                        marginTop: "7.5em"
                    }}>
                    <Lottie animationData={estimateAnimation} height={"100%"} widht={"100%"} />
                </Grid>
            </Grid>
            <Grid item container direction="column" lg
                alignItems="center"
                sx={{
                    marginRight: matchesMd ? "0" : "2em",
                    marginBottom: "25em"
                }}>
                {
                    questions.filter(question => question.active).map((question, index) => (
                        <React.Fragment key={index}>
                            <Grid item>
                                <Typography
                                    variant="h1"
                                    align="center"
                                    sx={{
                                        fontWeight: 500,
                                        marginTop: "5em",
                                        fontSize: "2.2rem",
                                        lineHeight: 1.25,
                                        marginLeft: matchesSm ? "1em" : "0",
                                        marginRight: matchesSm ? "1em" : "0"
                                    }} >{question.title}</Typography>
                                <Typography variant="body1" align="center"
                                    sx={{
                                        marginBottom: "2.5em"
                                    }}
                                    gutterBottom>
                                    {question.subtitle}
                                </Typography>
                            </Grid>
                            <Grid item container>
                                {
                                    question.options.map((option, index) => (
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            md
                                            component={Button}
                                            onClick={() => handleSelect(option.id)}
                                            sx={{
                                                display: "grid",
                                                textTransform: "none",
                                                borderRadius: 0,
                                                backgroundColor: option.selected ? theme.palette.common.orange : null,
                                                marginBottom: matchesSm ? "1.5em" : "0"
                                            }}>
                                            <Grid item sx={{ maxWidth: "14em" }}>
                                                <Typography variant="h6" align="center" sx={{ marginBottom: "1em" }}>
                                                    {option.title}
                                                </Typography>
                                                <Typography variant="caption" align="center">
                                                    {option.subtitle}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                                            </Grid>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </React.Fragment>
                    ))
                }
                <Grid
                    item
                    container
                    justifyContent="space-between"
                    sx={{
                        width: "18em",
                        marginTop: "3em"
                    }}>
                    <Grid item>
                        <IconButton onClick={previousQuestion} disabled={disablePreviousNavigation}>
                            <img src={disablePreviousNavigation ? "/assets/backArrowDisabled.svg" : "/assets/backArrow.svg"} alt="backArrow" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={nextQuestion} disabled={disableNextNavigation}>
                            <img src={disableNextNavigation ? "/assets/forwardArrowDisabled.svg" : "/assets/forwardArrow.svg"} alt="forwardArrow" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        className={classes.estimate}
                        disabled={estimateDisabled()}
                        onClick={() => {
                            setDialogOpen(true);
                            getTotal();
                            getPlatforms();
                            getFeatures();
                            getCustomFeatures();
                            getCategory();
                        }}>
                        Get estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}
                fullWidth maxWidth="lg"
                fullScreen={matchesSm}
                sx={{
                    zIndex: 1302
                }}>
                <Grid container justifyContent="center">
                    <Grid item
                        sx={{
                            marginTop: "1em",
                            marginBottom: "1em"
                        }}>
                        <Typography variant="h1" align="center">Estimate</Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                    <Grid container justifyContent="space-around"
                        direction={matchesSm ? "column" : "row"}
                        alignItems={matchesSm ? "center" : undefined}>
                        <Grid item container direction="column" md={7}
                            sx={{
                                maxWidth: "20em"
                            }}>
                            <Grid item sx={{ marginBottom: "0.5em" }}>
                                <TextField
                                    label="Name"
                                    id="name"
                                    variant="standard"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item sx={{ marginBottom: "0.5em" }}>
                                <TextField
                                    label="Email"
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    id="email"
                                    variant="standard"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                />
                            </Grid>
                            <Grid item sx={{ marginBottom: "0.5em" }}>
                                <TextField
                                    label="Phone"
                                    error={phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    id="phone"
                                    variant="standard"
                                    fullWidth
                                    value={phone}
                                    onChange={(e) => onChange(e)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    InputProps={{ disableUnderline: true }}
                                    variant="standard"
                                    className={classes.message}
                                    fullWidth
                                    placeholder="Tell us more about your project"
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    multiline
                                    rows={10}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    We can create this digital solution for an estimate <span className={classes.specialText}>${total.toFixed(2)}</span>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Fill out your name, phone number and email, place your request, and we'll get back to you.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" md={5}
                            sx={{
                                maxWidth: "20em"
                            }}>
                            <Hidden smDown>
                                <Grid item>
                                    {questions.length > 2 ? softwareSelection : websiteSelection}
                                </Grid>
                            </Hidden>
                            <Grid item>
                                <Button variant="contained" className={classes.estimate} onClick={() => sendEstimate()}>
                                    {loading ? <CircularProgress size={24} /> :
                                        <>
                                            Place Request
                                            <img src="/assets/send.svg" alt="paper airplane"
                                                style={{
                                                    marginLeft: "0.5em",
                                                }} />
                                        </>}

                                </Button>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item
                                    sx={{
                                        marginBottom: "5em"
                                    }}>
                                    <Button sx={{ fontWeight: 300 }} color="primary"
                                        onClick={() => setDialogOpen(false)}>
                                        Cancel
                                        <img src="/assets/send.svg" alt="paper airplane"
                                            style={{
                                                marginLeft: "0.5em",
                                            }} />
                                    </Button>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={alert.open}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                onClose={() => setAlert({ ...alert, open: false })}
                autoHideDuration={4000}
            >
                <Alert
                    severity={alert.severity}
                    onClose={() => setAlert({ ...alert, open: false })}>{alert.message}</Alert>
            </Snackbar>
        </Grid >
    )
}
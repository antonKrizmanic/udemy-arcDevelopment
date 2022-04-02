import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import { Alert, Grid, Button, Typography, Dialog, DialogContent, TextField, CircularProgress, Snackbar } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';


const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "60em",
        paddingBottom: "10em"
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        widht: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            marginLeft: 0,
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.75rem:",
        height: 35,
        padding: 5
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down('sm')]: {
            height: 40,
            widht: 225
        }
    }
}));

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState("");

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

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

    const onConfirm = () => {
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
                setOpen(false);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setAlert({ open: true, message: "Message Sent", severity: "success" });
            }).catch(error => {
                console.log(error);
                setLoading(false);
                setAlert({ open: true, message: "Something went wrong", severity: "error" });
            })
    }

    const buttonContents = (
        <>
            Send Message
            <img src={airplane} alt="airplane"
                style={{
                    marginLeft: "1em"
                }} />
        </>
    )

    return (
        <Grid container direction="row">
            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    marginBottom: matchesMd ? "5em" : "0",
                    marginTop: matchesMd ? "5em" : "0"
                }}
                lg={4}
                xl={3}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography
                                variant="h2"
                                align={matchesMd ? "center" : undefined}
                                sx={{
                                    lineHeight: 1
                                }}>Contact us</Typography>
                            <Typography
                                variant="body1"
                                align={matchesMd ? "center" : undefined}
                                sx={{
                                    color: theme.palette.common.blue
                                }}>We're waiting</Typography>
                        </Grid>
                        <Grid item container sx={{ marginTop: "2em" }}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone"
                                    style={{
                                        marginRight: "0.5em"
                                    }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1"
                                    sx={{
                                        color: theme.palette.common.blue,
                                        fontSize: "1rem"
                                    }}
                                >
                                    <a href="tel:5555555555"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit"
                                        }}>(555) 555-5555</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container sx={{ marginBottom: "2em" }}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope"
                                    style={{
                                        marginRight: "0.5em",
                                        verticalAlign: "bottom"
                                    }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1"
                                    sx={{
                                        color: theme.palette.common.blue,
                                        fontSize: "1rem"
                                    }}
                                >
                                    <a style={{
                                        textDecoration: "none",
                                        color: "inherit"
                                    }} href="mailTo:test@gmail.com">test@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" sx={{
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
                        </Grid>
                        <Grid item>
                            <TextField
                                InputProps={{ disableUnderline: true }}
                                variant="standard"
                                className={classes.message}
                                fullWidth
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                multiline
                                rows={10}
                            />
                        </Grid>
                        <Grid item container justifyContent="center" sx={{ marginTop: "2em" }}>
                            <Button
                                variant="contained"
                                className={classes.sendButton}
                                // disabled={name.length === 0 || emailHelper.length !== 0 || phoneHelper.length !== 0 || message.length === 0 || email.length === 0 || phone.length === 0}
                                onClick={() => setOpen(true)}
                            >
                                {buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)}
                fullScreen={matchesSm}
                sx={{
                    zIndex: 1302
                }}
                PaperProps={{
                    sx:
                    {
                        paddingTop: matchesXs ? "1em" : "5em",
                        paddingBottom: matchesXs ? "1em" : "5em",
                        paddingLeft: matchesSm ? "0" : matchesMd ? "10em" : "20em",
                        paddingRight: matchesSm ? "0" : matchesMd ? "10em" : "20em",
                    }
                }}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align="center">
                                Confirm message
                            </Typography>
                        </Grid>
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
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                multiline
                                rows={10}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container
                        direction={matchesSm ? "column" : "row"}
                        sx={{
                            marginTop: "2em",
                            fontWeight: 300
                        }}
                        alignItems="center">
                        <Grid item>
                            <Button color="primary"
                                onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                className={classes.sendButton}
                                // disabled={name.length === 0 || emailHelper.length !== 0 || phoneHelper.length !== 0 || message.length === 0 || email.length === 0 || phone.length === 0}
                                onClick={() => onConfirm()}
                            >
                                {loading ? <CircularProgress size={30} /> : buttonContents}
                            </Button>
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
            <Grid
                item
                container
                className={classes.background}
                lg={8}
                xl={9}
                alignItems="center"
                justifyContent={matchesMd ? "center" : "undefined"}
                direction={matchesMd ? "column" : "row"}>
                <Grid item sx={{
                    marginLeft: matchesMd ? 0 : "3em",
                    textAlign: matchesMd ? "center" : "inherit"
                }}>
                    <Grid
                        container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMd ? "center" : "undefined"}>
                                Simple Software <br /> Revolutionary Results
                            </Typography>
                            <Typography variant="subtitle2"
                                align={matchesMd ? "center" : "undefined"}
                                sx={{
                                    fontSize: "1.25rem",
                                }}>
                                Take advantage of the 21st Century.
                            </Typography>
                            <Grid
                                container
                                item
                                justifyContent={matchesSm ? "center" : undefined}
                            >
                                <Button
                                    component={Link}
                                    onClick={() => props.setValue(2)}
                                    to="/revolution"
                                    variant="outlined"
                                    className={classes.learnButton}                                >
                                    <span style={{ marginRight: 5 }}>Learn more</span>
                                    <ButtonArrow
                                        width={10}
                                        height={10}
                                        fill={theme.palette.common.blue}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        varian="contained"
                        onClick={() => props.setValue(5)}
                        className={classes.estimateButton}>
                        Free Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}
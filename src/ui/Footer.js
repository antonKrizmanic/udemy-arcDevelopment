import React from 'react';
import Link from '../Link';
import { makeStyles } from '@mui/styles';

import { Grid, Hidden } from '@mui/material';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        widht: '100%',
        zIndex: 1302,
        position: 'relative',
    },
    adornment: {
        width: "25rem",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "20rem",
        },
        [theme.breakpoints.down("xs")]: {
            width: "15rem",
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "3em",
    },
    icon: {
        height: "4em",
        widht: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            widht: "2.5em",
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
        }
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justifyContent="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/"
                                onClick={() => props.setValue(0)}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/services"
                                onClick={() => { props.setValue(1); props.setSelectedIndex(0); }}>
                                Services
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/customsoftware"
                                onClick={() => { props.setValue(1); props.setSelectedIndex(1); }}>
                                Custom Software development
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/mobileapps"
                                onClick={() => { props.setValue(1); props.setSelectedIndex(2); }}>
                                iOS/Android apps development
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/website"
                                onClick={() => { props.setValue(1); props.setSelectedIndex(3); }}>
                                Web sites development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/revolution"
                                onClick={() => props.setValue(2)}>
                                The Revolution
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/revolution"
                                onClick={() => props.setValue(2)}>
                                Vision
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/revolution"
                                onClick={() => props.setValue(2)}>
                                Technology
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/revolution"
                                onClick={() => props.setValue(2)}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/about"
                                onClick={() => props.setValue(3)}>
                                About us
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/about"
                                onClick={() => props.setValue(3)}>
                                History
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/about"
                                onClick={() => props.setValue(3)}>
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/contact"
                                onClick={() => props.setValue(4)}>
                                Contact us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="black decoration slash" src="/assets/FooterAdornment.svg" className={classes.adornment} />
            <Grid container justifyContent="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" src="/assets/facebook.svg" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src="/assets/twitter.svg" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" src="/assets/instagram.svg" className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    );
}
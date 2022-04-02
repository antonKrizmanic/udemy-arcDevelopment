import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography, IconButton, Hidden, Avatar } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
    mission: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down('sm')]: {
            height: "20em",
            width: "20em",
            maxHeight: "300px",
            maxWidth: "300px"
        }
    }
}));

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Grid container direction="column">
                <Grid item className={classes.rowContainer}
                    sx={{
                        marginTop: matchesMd ? "1em" : "2em"
                    }}>
                    <Typography variant="h2"
                        align={matchesMd ? "center" : undefined}>
                        About Us
                    </Typography>
                </Grid>
                <Grid item container justifyContent="center" className={classes.rowContainer}
                    sx={{ marginTop: "3em" }}>
                    <Typography variant="h4" align="center" className={classes.mission}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.rowContainer}
                    direction={matchesMd ? "column" : "row"}
                    alignItems={matchesMd ? "center" : undefined}
                    justifyContent="space-around"
                    sx={{
                        marginTop: "10em",
                        marginBottom: "10em"
                    }}>
                    <Grid item container direction="column" lg sx={{
                        maxWidth: "35em"
                    }}>
                        <Grid item>
                            <Typography
                                align={matchesMd ? "center" : undefined}
                                variant="h4" gutterBottom>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMd ? "center" : undefined} variant="body1" paragraph
                                sx={{ fontWeight: 700, fontStyle: "italic" }}>
                                We're the new kid on the block
                            </Typography>
                            <Typography align={matchesMd ? "center" : undefined} variant="body1" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            <Typography align={matchesMd ? "center" : undefined} variant="body1" paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container justifyContent="center">
                        <img src={history} alt="history" style={{ maxHeight: matchesMd ? "200px" : "25em" }} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" className={classes.rowContainer}
                    sx={{
                        marginBottom: "15em"
                    }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">
                            Team
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align="center">
                            FirstName LastName, founder
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            I started coding when I was 9.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar alt="founder" src={profile} className={classes.avatar} />
                    </Grid>
                    <Grid item container justifyContent={matchesMd ? "center" : undefined}>
                        <Hidden lgUp>
                            <Grid item lg sx={{
                                maxWidht: "45em",
                                padding: "1.5em"
                            }}>
                                <Typography variant="body1" paragraph align="center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Grid item container direction="column" lg
                            sx={{
                                marginBottom: matchesMd ? "2.5em" : 0
                            }}
                            alignItems={matchesMd ? "center" : undefined}>
                            <Grid item>
                                <img src={yearbook} alt="yearbook" style={{ maxHeight: "25em", maxWidth: matchesMd ? "300px" : undefined }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    a page from my yearbook
                                </Typography>
                            </Grid>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item lg sx={{
                                maxWidht: "45em",
                                padding: "1.5em"
                            }}>
                                <Typography variant="body1" paragraph align="center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Grid item container direction="column" lg alignItems={matchesMd ? "center" : "flex-end"}>
                            <Grid item>
                                <img src={puppy} alt="puppy" style={{ maxHeight: "25em", maxWidth: matchesMd ? "300px" : undefined }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    puppy
                                </Typography>
                            </Grid>
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
    )
}
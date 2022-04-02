import React from 'react';
import Link from '../Link';
import { Grid, Button, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import ButtonArrow from './ButtonArrow';
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.75rem:",
        height: 35,
        padding: 5
    },
    background: {
        backgroundImage: `url("/assets/background.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: "60em",
        width: "100%",
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
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginLeft: 0,
        }
    }
}));

export default function CallToAction(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid
            className={classes.background}
            container
            justifyContent={matchesSm ? "center" : "space-between"}
            alignItems="center"
            direction={matchesSm ? "column" : "row"}          >
            <Grid item sx={{
                marginLeft: matchesSm ? 0 : "5em",
                textAlign: matchesSm ? "center" : "inherit"
            }}>
                <Grid
                    container direction="column">
                    <Grid item>
                        <Typography variant="h1">
                            Simple Software <br /> Revolutionary Results
                        </Typography>
                        <Typography variant="subtitle2"
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
                                href="/revolution"
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
    );
}
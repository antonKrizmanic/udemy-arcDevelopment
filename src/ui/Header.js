import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from '../Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from './theme';
import { ClassNames } from '@emotion/react';

const newTheme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: theme.palette.primary.main
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    ...theme.typography.tab,
                    color: 'white',
                    opacity: 0.7
                }
            }
        }
    },
});

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.common.white,
        borderRadius: 0,
    },
    '& .MuiMenuItem-root': {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        },
        '&:active': {
            backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
            ),
        },
    },
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header(props) {
    const theme = useTheme();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);

    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (event, newValue) => {
        props.setValue(newValue);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const menuOptions = [
        { name: "Custom Software", link: "/customSoftware", activeIndex: 1, selectedIndex: 0 },
        { name: "iOS/Android Apps", link: "/mobileApps", activeIndex: 1, selectedIndex: 1 },
        { name: "Web Sites", link: "/webSites", activeIndex: 1, selectedIndex: 2 },
    ];

    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaHasPopup: anchorEl ? "true" : undefined, onMouseOver: event => handleClick(event) },
        { name: "Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About us", link: "/about", activeIndex: 3 },
        { name: "Contact us", link: "/contact", activeIndex: 4 },
    ]

    const path = typeof window !== "undefined" ? window.location.pathname : null;
    const activeIndex = () => {
        const found = routes.find(({ link }) => link === path);
        const menuFound = menuOptions.find(({ link }) => link === path);

        if (menuFound) {
            props.setValue(1);
            props.setSelectedIndex(menuFound.selectedIndex);
        } else if (found === undefined) {
            props.setValue(false);
        } else {
            props.setValue(found.activeIndex);
        }
    }

    useEffect(() => {
        activeIndex();
    }, [path]);


    const tabs = (
        <>
            <Tabs
                value={props.value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="primary"
                sx={{
                    ml: 'auto'
                }}                            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route.name}-${index}`}
                        sx={{
                            ...theme.typography.tab,
                            minWidth: 10,
                            marginLeft: '25px'
                        }}
                        component={Link}
                        href={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaHasPopup}
                        onMouseOver={route.onMouseOver} />
                ))}
            </Tabs>
            <Button
                variant="contained"
                color="secondary"
                component={Link}
                href="/freeEstimate"
                onClick={() => props.setValue(5)}
                sx={{
                    ...theme.typography.estimate,
                    borderRadius: '50px',
                    ml: '50px',
                    mr: '25px',
                    height: '45px',
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.light,
                    }
                }}>Free Estimate</Button>
            <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                keepMounted
                sx={{
                    zIndex: 1302
                }}>
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={`${option.name}~${i}`}
                        selected={i === props.selectedIndex && props.value === 1}
                        onClick={(e) => {
                            handleMenuItemClick(e, i);
                            props.setValue(1);
                            handleClose();
                        }}
                        component={Link}
                        href={option.link}>
                        {option.name}
                    </MenuItem>
                ))}
            </StyledMenu>
        </>
    )

    const drawer = (
        <>
            <ThemeProvider theme={newTheme}>
                <SwipeableDrawer
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    onOpen={() => setOpenDrawer(true)}>

                    <List disablePadding
                        sx={{
                            my: 16
                        }}>
                        {routes.map((route, index) => route.name === 'Services' ? (
                            <>
                                <Accordion sx={{ backgroundColor: theme.palette.primary.main, borderBottom: '1px solid rgba(0,0,0,0.12)' }} elevation={0}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                        sx={{
                                            ...theme.typography.tab,
                                            color: 'white',
                                            opacity: 0.7
                                        }}>
                                        {route.name}
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ padding: 0 }}>
                                        <Grid container direction="column">
                                            {menuOptions.map((option, index) => (
                                                <Grid item>
                                                    <ListItem
                                                        key={`${option.name}-${index}`}
                                                        divider
                                                        button
                                                        component={Link}
                                                        href={option.link}
                                                        onClick={() => { setOpenDrawer(false); props.setSelectedIndex(route.selectedIndex); }}
                                                        selected={props.value === option.selectedIndex}>
                                                        <ListItemText disableTypography>{option.name}</ListItemText>
                                                    </ListItem>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </>
                        ) : (
                            <ListItem
                                key={`${route.name}-${index}`}
                                divider
                                button
                                component={Link}
                                href={route.link}
                                onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex); }}
                                selected={props.value === route.activeIndex}>
                                <ListItemText disableTypography>{route.name}</ListItemText>
                            </ListItem>
                        ))}
                        <ListItem
                            sx={{
                                backgroundColor: theme.palette.secondary.main
                            }}
                            divider button component={Link} href="/freeEstimate"
                            onClick={() => { setOpenDrawer(false); props.setValue(5) }}
                            selected={props.value === 5}>
                            <ListItemText disableTypography>Free estimate</ListItemText>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
                <IconButton
                    onClick={() => setOpenDrawer(!openDrawer)}
                    disableRipple
                    sx={{
                        ml: 'auto',
                    }}
                >
                    <MenuIcon sx={{
                        height: "50px",
                        width: "50px",
                    }} />
                </IconButton>
            </ThemeProvider>
        </>
    )


    return (
        <>
            <ElevationScroll {...props}>
                <AppBar position="fixed"
                    sx={{
                        zIndex: theme.zIndex.modal + 1
                    }}>
                    <Toolbar disableGutters>
                        <Button
                            onClick={() => props.setValue(0)}
                            component={Link}
                            disableRipple
                            href="/"
                            sx={{
                                p: 0,
                            }}>
                            <Box
                                sx={{
                                    height: '7rem',
                                    width: '388px',
                                }}>
                                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139"><style>{`.st0{fill:none}.st1{fill:#fff}.st2{font - family:Raleway; font-weight: 300; text-transform:none; text-decoration:none;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                                    <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                                    <path className="st0" d="M-1 139h479.92v.01H-1z" />
                                    <text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text>
                                    <text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text>
                                    <path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" />
                                    <path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9" />
                                    <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                                    <g id="Group_186" transform="translate(30.153 11.413)">
                                        <g id="Group_185"><g id="Words">
                                            <path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" />
                                        </g>
                                        </g>
                                    </g>
                                    <path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" />
                                </svg>

                            </Box>
                        </Button>
                        {
                            matches ? drawer : tabs
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Container>
                <Box sx={{
                    my: 16
                }}></Box>
            </Container>
        </>
    )
}
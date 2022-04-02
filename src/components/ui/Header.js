import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import theme from './theme';

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
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
        { name: "Custom Software", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
        { name: "iOS/Android Apps", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
        { name: "Web Sites", link: "/websites", activeIndex: 1, selectedIndex: 3 },
    ];

    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaHasPopup: anchorEl ? "true" : undefined, onMouseOver: event => handleClick(event) },
        { name: "Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About us", link: "/about", activeIndex: 3 },
        { name: "Contact us", link: "/contact", activeIndex: 4 },
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathName) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex);
                        }
                    }
                    break;
                case '/estimate':
                    props.setValue(5);
                    break;
                default:
                    break;
            }
        })
    }, [props.value, menuOptions, props.selectedIndex, routes]);

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
                        to={route.link}
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
                to="/estimate"
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
                        to={option.link}>
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
                        {routes.map((route, index) => (
                            <ListItem
                                key={`${route.name}-${index}`}
                                divider
                                button
                                component={Link}
                                to={route.link}
                                onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex); }}
                                selected={props.value === route.activeIndex}>
                                <ListItemText disableTypography>{route.name}</ListItemText>
                            </ListItem>
                        ))}
                        <ListItem
                            sx={{
                                backgroundColor: theme.palette.secondary.main
                            }}
                            divider button component={Link} to="/estimates"
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
                            to="/"
                            sx={{
                                p: 0,
                            }}>
                            <Box
                                sx={{
                                    height: '7rem',
                                    width: '388px',
                                }}>
                                <img src={logo} alt="logo" />
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
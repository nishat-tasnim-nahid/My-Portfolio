import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Navber() {
    const theme = useTheme();
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navDrawer: {
            color: '#fff',
            textDecoration: 'none'
        },
        navDrawerContainer: {
            backgroundColor: "#03080C "
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important',

            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navTitle: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            },
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left'
            },
        }
    })

    const { navItem, navIcon, navItemContainer, navTitle, navDrawer, navDrawerContainer } = useStyle();
    const [state, setState] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={navTitle} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Box className={navItemContainer}>
                                <Link className={navItem} to="/"><Button color="inherit">HOME</Button></Link>
                                <Link className={navItem} to="projects"><Button color="inherit">PROJECTS</Button></Link>
                                <Link className={navItem} to="projectsDetails"><Button color="inherit">PROJESTS_DETAILS</Button></Link>
                                <Link className={navItem} to="contactMe"><Button color="inherit">CONTACT_ME</Button></Link>
                            </Box>

                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250, height: 999 }}
                            className={navDrawerContainer}
                            role="presentation"
                        >
                            <List >
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={navDrawer} to="/">HOME</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={navDrawer} to="projects">PROJECTS</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={navDrawer} to="/">PROJECTS_DETAILS</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={navDrawer} to="contactMe">CONTACT_ME</Link>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}

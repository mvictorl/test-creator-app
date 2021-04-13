import { connect } from 'react-redux'
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { toggleMenu } from './store/models/app/appActions'
import './App.scss'
import {
	AppBar,
	Box,
	Button,
	Container,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
	Menu as MenuIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	AddBox as AddBoxIcon,
	Home as HomeIcon,
	Info as InfoIcon
} from '@material-ui/icons'

import Home from './components/Home/Home'
import About from './components/About/About'
import TestCaption from './components/TestCaption/TestCaption'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	title: {
		flexGrow: 1
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}))

function App({ isMenuOpen, toggleMenu }) {
	const classes = useStyles()
	const theme = useTheme()
	

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: isMenuOpen
				})}
			>
				<Toolbar>
					<IconButton
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: isMenuOpen
						})}
						color="inherit"
						aria-label="open drawer"
						onClick={toggleMenu}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap className={classes.title}>
						Test Creator App
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<BrowserRouter>
				<Drawer
					className={`${classes.drawer} ${
						isMenuOpen ? classes.drawerOpen : classes.drawerClose
					}`}
					// className={ clsx(classes.drawer, { [classes.drawerOpen]: isMenuOpen, [classes.drawerClose]: !isMenuOpen })}
					classes={{
						paper: `${isMenuOpen ? classes.drawerOpen : classes.drawerClose}`
						// paper: clsx({ [classes.drawerOpen]: isMenuOpen, [classes.drawerClose]: !isMenuOpen })
					}}
					variant="permanent"
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={toggleMenu}>
							{theme.direction === 'ltr' ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</div>
					<Divider />
					<List>
						<ListItem
							button
							component={NavLink}
							to="/"
							exact
							key="openMenuItem"
							activeClassName="Mui-selected"
						>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Open" />
						</ListItem>
						<ListItem
							button
							component={NavLink}
							to="/create"
							key="addMenuItem"
							activeClassName="Mui-selected"
						>
							<ListItemIcon>
								<AddBoxIcon />
							</ListItemIcon>
							<ListItemText primary="Create" />
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem
							button
							component={NavLink}
							to="/about"
							key="aboutMenuItem"
							activeClassName="Mui-selected"
						>
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText primary="About" />
						</ListItem>
					</List>
				</Drawer>

				<Box marginTop={12} width={1}>
					<Container>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>

							<Route path="/create">
                <TestCaption />
								
							</Route>

							<Route path="/about">
								<About />
							</Route>
						</Switch>
					</Container>
				</Box>
			</BrowserRouter>
		</div>
	)
}

const mapStateToProps = state => ({
	isMenuOpen: state.app.isMenuOpen,
})

const mapDispatchToProps = {
	toggleMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

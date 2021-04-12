import { connect } from 'react-redux'
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
	Menu,
	ChevronLeft,
	ChevronRight,
	AddBox,
	FolderOpen,
	Info
} from '@material-ui/icons'

import CommonInput from './components/CommonInput/CommonInput'

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
		// flexGrow: 1,
		// padding: theme.spacing(3)
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
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap className={classes.title}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: isMenuOpen,
					[classes.drawerClose]: !isMenuOpen
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: isMenuOpen,
						[classes.drawerClose]: !isMenuOpen
					})
				}}
				variant="permanent"
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={toggleMenu}>
						{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button key="openMenuItem">
						<ListItemIcon>
							<FolderOpen />
						</ListItemIcon>
						<ListItemText primary="Open" />
					</ListItem>
					<ListItem button key="addMenuItem">
						<ListItemIcon>
							<AddBox />
						</ListItemIcon>
						<ListItemText primary="Create" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button key="aboutMenuItem">
						<ListItemIcon>
							<Info />
						</ListItemIcon>
						<ListItemText primary="About" />
					</ListItem>
				</List>
			</Drawer>
			<Box marginTop={12} width={1}>
				<Container>
					<CommonInput label="Название теста" />
				</Container>
			</Box>
		</div>
	)
}

const mapStateToProps = state => ({
	isMenuOpen: state.app.isMenuOpen
})

const mapDispatchToProps = {
	toggleMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import './App.scss'
import { AppBar, Button, Container, CssBaseline, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CommonInput from './components/CommonInput/CommonInput'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 }
}))

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={ classes.title }>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
      <CommonInput
        label='Название теста'
      />
      </Container>
    </div>
  )
}

export default App

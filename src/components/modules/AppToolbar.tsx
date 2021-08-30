import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    text: {
      textTransform: 'uppercase',
      padding: 10,
      fontSize: 'smaller'
    },
    toolbar: {
      margin: '0 0px 0 -10px',
      zIndex: theme.zIndex.drawer + 1,
    },
  }),
);

interface AppToolbarProps {
  toggleDrawer: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function AppToolbar({ toggleDrawer }: AppToolbarProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar className={classes.toolbar}>
          <Button className={classes.text} onClick={toggleDrawer} variant="contained" color="primary" size="small">
            Import theme
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 440;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      maxHeight: `calc(100vh - 2 * ${theme.mixins.toolbar.minHeight}px - 1px)`,
      width: drawerWidth,
      marginTop: `calc(2 * ${theme.mixins.toolbar.minHeight}px + 1px)`,
      padding: theme.spacing(3)
    },
  }),
);

interface ClippedDrawerProps {
  isOpen: boolean;
  children: JSX.Element;
}

export default function ClippedDrawer({ isOpen, children }: ClippedDrawerProps) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={isOpen}
    >   
      {children}
    </Drawer>
  );
}

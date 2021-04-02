import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 440;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: `calc(2 * ${theme.mixins.toolbar.minHeight}px + 1px)`
    },
  }),
);

interface ClippedDrawerProps {
  isOpen: boolean;
}

export default function ClippedDrawer({ isOpen }: ClippedDrawerProps) {
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
      <Divider />
    </Drawer>
  );
}

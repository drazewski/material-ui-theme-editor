import {
    Avatar,
    DialogTitle,
    Grid,
    Button,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import ButtonGroup from '../elements/ButtonGroup';
  
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: '500px',
    },
    postText: {
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(1.5),
    },
    buttonCancel: {
      border: "1px solid",
      borderColor: theme.palette.grey[600],
      color: theme.palette.grey[600],
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
    buttonDelete: {
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
    },
    buttonSubmit: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,
      transition: "0.3s all" ,

      '&:hover': {
        backgroundColor: theme.palette.success.main,
        opacity: 0.6
      },
    },
    buttonGrid: {
      padding: '10px',
    },
    dialogTitle: {
      padding: theme.spacing(2),
    },
    iconDelete: {
      backgroundColor: theme.palette.error.main,
    },
    iconReport: {
      backgroundColor: '#FEAC00',
    },
  }));
  
  export interface ConfirmDialogProps {   
    handleOnCancelClick?: () => void;
    handleOnConfirmClick: () => void;
    mainMessage: string;
    description: string;
    cancelButtonTextMessage?: string;
    confirmButtonTextMessage: string;
    type: 'delete' | 'report';
  }
  
  export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element {
    const classes = useStyles();

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <DialogTitle id="dialog-title" className={classes.dialogTitle}>
             <Avatar className={props.type ==='delete'? classes.iconDelete : classes.iconReport}>
              <WarningIcon />
            </Avatar>
          </DialogTitle>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.postText} variant="h4">
            {props.mainMessage}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.postText} variant="body1">
            {props.description}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.buttonGrid}>
          <ButtonGroup>
            <Button
              id="cancel"
              className={classes.buttonCancel}
              onClick={props.handleOnCancelClick}
            >{props.cancelButtonTextMessage || "Cancel"}
            </Button>
            <Button
              type="submit"
              id="confirm"
              className={props.type ==='delete' ? classes.buttonDelete : classes.buttonSubmit}
              onClick={props.handleOnConfirmClick}
            >{props.confirmButtonTextMessage || "Ok"}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
  
  export default ConfirmDialog;
  
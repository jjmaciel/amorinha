import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    formSelect: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 400,
    },

    pagetitle: {
      marginTop: theme.spacing(2),
    },

    photo: {
      width: 200,
      height: 200,
    }

  }));
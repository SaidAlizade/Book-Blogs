import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      borderRadius: 15,
      margin: '0px 0px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'left',
      padding: '0px 0px',
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
      color: 'white',
    },
    avatar: {
      flexWrap: "nowrap"
    },
    appBarCompContainer: {
      display:"flex",
      flexWrap: "nowrap",
    },
    appBarComp: {
      margin: theme.spacing(1),
    }
  }));
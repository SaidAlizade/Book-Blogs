import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
    paper: {
        width: '50%',
        elevation: 24,
        margin: '20px',
        padding: theme.spacing(2),
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
      },
    Title:{
        width: '40%',
        margin: '5px 0',
    },
    BlogInput:{
        width: '80%',
        margin: '20px 0',
    },
    Content:{
        margin: '10px 0',
        padding: '0 5px',
    },
    Button:{
        margin: '20px 0',
        marginRight: "20px",
    }
  }));
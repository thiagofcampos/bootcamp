import { makeStyles } from '@material-ui/core/styles';

export const buttonStyle = makeStyles({
    button:{
        padding: "20px 40px",
        cursor: "pointer",
        background: "#46A4F1",
        fontSize: 18,
        color: "#fff",
        border: "unset",
        borderRadius: "6px",
        "&:hover":{
            background: "#4291D3",
        }
    }
  })
  
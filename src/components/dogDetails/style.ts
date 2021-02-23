import { makeStyles } from '@material-ui/core/styles';

export const dogDetailsStyle = makeStyles({
    containerImage:{
      padding:"0px 0px 20px 0px",
      borderRadius: "5px",
      background:"#FFDEAF",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      "& img":{
        borderRadius: "5px 5px 0 0"
      },
      "& span" :{
        opacity: "0.7",
        marginTop: 10,
        fontSize: 30,
        fontWeight: "600"
      },
      "& button" :{
        marginTop: 10
      },
      "& button:focus" :{
        border: "unset"
      }
    },
  })
  
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { width } from '@material-ui/system';


type Props={
  nutrientName:String,
  nutrientDiscription:String,
  nutrientImg:String
}

function NutrientCard(props:Props) {
  //const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {nutrientName,nutrientDiscription,nutrientImg}=props
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div style={{width:"100%",borderBottom:"1px solid",borderBottomColor:"#555"}}>
        <img src={"static/"+String(nutrientImg)} style={{width: "40vw", paddingTop: "2vh"}}/>
        <Typography variant="body2" style={{color:"#444",letterSpacing:"1vw",fontWeight:"bold",marginTop:"-1vh"}}><span>{nutrientName}</span></Typography> 
        <div style={{width:"90%",paddingLeft:"5%",paddingTop:"5%",paddingBottom:"5%"}}>
          <Typography variant="body2" style={{color:"#555",letterSpacing:"2vw"}}>{nutrientDiscription}</Typography>
        </div> 
    </div>
  );
}

export default　NutrientCard;
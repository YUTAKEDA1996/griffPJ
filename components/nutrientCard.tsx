import React from 'react';
import Typography from '@material-ui/core/Typography';



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
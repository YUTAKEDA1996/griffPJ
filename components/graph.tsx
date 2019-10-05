import React from 'react';
import { Line } from 'rc-progress';
import { Typography } from '@material-ui/core';


type Props={
  title:String,
  lowTag:String,
  highTag:String,
  resultValue:Number
}


function graph(props:Props) {
  const [completed, setCompleted] = React.useState(0);
  const {title,lowTag,highTag,resultValue}=props
  const precautions = "#FFBF44"
  const warning = "#F33887"
  const nomal = "#777"
  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted <= resultValue) {
          return Number(resultValue);
        }
        return oldCompleted+1;
      });
    }

    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div style={{textAlign:"left"}}>
      <Typography variant={"h6"} style={{color:"#333"}}><b>{title}</b></Typography>
      {
          resultValue<40 ? <Typography variant={"body2"} style={{color:warning}}>不足してます</Typography> : resultValue<60 ? <Typography variant={"body2"} style={{color:precautions}}>不足気味です</Typography> : <div></div>
      }
      <div style={{float:"left",width:"10%"}}>
        <Typography variant={"body1"} style={{color:"#555"}}><b>{lowTag}</b></Typography>
      </div>
      <div style={{float:"right",width:"10%"}}>
        <Typography variant={"body1"} style={{color:"#555"}}><b>{highTag}</b></Typography>
      </div>
      <div style={{float:"left",width:"75%"}}>
        <Line percent={completed} strokeWidth={4} strokeColor={String(resultValue<40?warning:resultValue<60?precautions:nomal)} />
      </div>
      
    </div>
  );
}

export default graph
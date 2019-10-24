import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import Circle from 'react-circle';

type Props={
  questionStr:String
  ansArray:String[]
  setAns:(String)=>void
  setQuestionNumber:(Number)=>void
  counter:number
  quesutionSum:Number
}

const selectAns=(choiceIndex:Number,setAns:(String)=>void,setQuestionNumber:(Number)=>void,quesutionSum:Number)=>{
  setAns("選んだのは"+choiceIndex);
  setQuestionNumber(count=>count<8?count+1:0)
  
}

function QuestionCard(props:Props) {
  // const classes = useStyles();
    const {questionStr,ansArray,setAns,setQuestionNumber,counter,quesutionSum}=props
  return (
    <div>
    <div >
      <div style={{textAlign:"center"}}>
        <Hidden smUp>
          <img src="static/logoBlack.png" style={{width: "40vw", paddingTop: "2vh"}}/>
          <div style={{marginTop:"5vh",marginLeft:"10vw",width:"80vw"}}>
            <h2 style={{color:"#555",fontFamily:"\'Sawarabi Mincho\', sans-serif"}}>{questionStr}</h2>
          </div>
          <div style={{marginTop:"5vh"}}>
            <Circle
              size={"200"}
              animationDuration={"1s"}
              progress={counter/8*100}
              animate={true}
              roundedStroke={true}
            />
          </div>
          <div style={{marginTop:"5vh",marginLeft:"15vw"}}>
            {ansArray.map((ans,index)=>{return (
              <div key={"div"+index} style={{marginTop:"3vh",width:"70vw"}}>
              <Button onClick={()=>selectAns(index,setAns,setQuestionNumber,quesutionSum)} variant="outlined" color="secondary" fullWidth={true} size="large" key={index} style={{color:"#6495ed",border:"6px,solid",borderRadius:"1em",borderColor:"#6495ed"}}>{ans}</Button>
              </div>
            )
            })}
          </div>     
        </Hidden>
        <Hidden xsDown>
          <p>ここからPCView</p>
        </Hidden>
      </div>
    </div>
    </div>
  );
}


export default　QuestionCard;
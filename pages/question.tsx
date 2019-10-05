import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import QuestionCard from '../components/questionCard';
import React, { useState } from 'react';

type state={
  childAns:String;
}

function KaruteButton(props:{hidden:Boolean}){
  const {hidden}=props
  if(hidden){
    return <div></div>
  }
  else{
    return (<div style={{paddingTop: "10vh",textAlign:"center"}}><Button variant="contained" style={{background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',margin:"0px 100px 0 100px"}}><Link href="/loading"><p　style={{color:"#fff"}}>カルテを作成</p></Link></Button></div>)
  }
}

function TOP(props) {
  // const classes = useStyles();
  const [ans, setAns] = useState("");
  const [questionNumber,setQuestionNumber]=useState(0)
  const qusetinArray=["性別を教えてください","ここ一週間の平均睡眠時間は？","週に何回魚を食べますか?","週に何回お肉を食べますか?","あなたに足りてない物は?","Success!"]
  const ansArray=[
    ["男性","女性","その他"],
    ["3時間未満","3~6時間,6~8時間"],
  ["食べない","1回〜3回","4~6回"],
  ["食べない","1回〜3回","4~6回"],
  ["集中力","記憶力","瞬発力"],
  []
  
]

  const {childAns } = props;
  return (
    <div>
    <div >
      <div style={{textAlign:"center"}}>
        <Hidden smUp>
          <QuestionCard questionStr={qusetinArray[questionNumber]} ansArray={ansArray[questionNumber]} setAns={setAns} setQuestionNumber={setQuestionNumber} counter={questionNumber}/>
          <KaruteButton hidden={questionNumber<5?true:false}/>
        </Hidden>
        <Hidden xsDown>
          <p>ここからPCView</p>
        </Hidden>
      </div>
    </div>
    </div>
  );
}

TOP.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

TOP.getInitialProps = async (ctx: any) => {
  return "{}"
}

export default withWidth()(TOP);
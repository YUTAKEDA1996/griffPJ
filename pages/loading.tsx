import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import React, { useState } from 'react';
import ReactLoading from 'react-loading';

type state={
  childAns:String;
}

function KaruteButton(props:{hidden:Boolean}){
  const {hidden}=props
  if(hidden){
    return <div></div>
  }
  else{
    return (<div style={{textAlign:"center",marginTop:"5vh"}}><Button variant="contained" fullWidth={true} style={{background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}><Link href="/result"><p　style={{color:"#fff"}}>結果を見る</p></Link></Button></div>)
  }
}

function TOP(props) {
  // const classes = useStyles();
  const [ans, setAns] = useState("");
  const [questionNumber,setQuestionNumber]=useState(0)

  const {childAns } = props;
  return (
    <div>
    <div >
      <div style={{textAlign:"center"}}>
        <Hidden smUp>
      <img src="static/logoBlack.png" style={{width: "40vw", paddingTop: "4vh"}}/>

         <div style={{width:"60vw",marginLeft:"20vw",marginTop:"20vh"}}>
         <h2 style={{color:"#555"}}>作成中...</h2>
           <div style={{width:"30vw",marginLeft:"20vw",marginTop:"8vh"}}>
            <ReactLoading type={"cylon"} color={"#1e90ff"} height={100} width={80} />
           </div>
           <KaruteButton hidden={false} />
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

TOP.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

TOP.getInitialProps = async (ctx: any) => {
  return "{}"
}

export default withWidth()(TOP);
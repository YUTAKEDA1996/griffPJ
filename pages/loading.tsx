import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import Success from '@material-ui/icons/CheckCircle'
import Typography from '@material-ui/core/Typography';

type state={
  childAns:String;
}

function KaruteButton(props:{hidden:Boolean}){
  const {hidden}=props
  if(hidden){
    return <div></div>
  }
  else{
    return (<div style={{textAlign:"center",marginTop:"10vh"}}><Button variant="contained" fullWidth={true} style={{background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}><Link href="/result"><p　style={{color:"#fff"}}>結果を見る</p></Link></Button></div>)
  }
}

function Loading(props:{hidden:Boolean}){
  const {hidden}=props
  if(!hidden){
    return (
    <div>
       <Typography variant="h5" style={{color:"#777"}}>作成完了!</Typography> 
      <Success style={{color:"#9acd32",fontSize:"10vh",marginTop:"10vh"}}/>


    </div>)
  }
  else{
    return (
    <div> 
        <Typography variant="h5" style={{color:"#777",letterSpacing:"1vw",fontWeight:"bold"}}><span>作成中</span></Typography> 
        <div style={{width:"30vw",marginLeft:"20vw",marginTop:"8vh"}}>
      <ReactLoading type={"cylon"} color={"#1e90ff"} height={100} width={80} />
      </div>
    </div>
    )
  }
}

function TOP(props) {
  const [completed, setCompleted] = React.useState(0);
  const [hiddenResultButton,setHiddenResultButton]=React.useState(true);
  
  React.useEffect(() => {
    function progress() {
      setHiddenResultButton(hid=>{
          return false
      })
    }

    const timer = setInterval(progress, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const {childAns } = props;
  return (
    <div>
    <div >
      <div style={{textAlign:"center"}}>
        <Hidden smUp>
      <img src="static/logoBlack.png" style={{width: "40vw", paddingTop: "4vh"}}/>

         <div style={{width:"60vw",marginLeft:"20vw",marginTop:"15vh"}}>
          <Loading hidden={hiddenResultButton}/>
           <KaruteButton hidden={hiddenResultButton} />
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
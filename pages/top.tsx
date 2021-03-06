import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import Particles from 'react-particles-js';



function QUESTION(props) {
  // const classes = useStyles();
  
  const { width } = props;
  return (
    <div>
    <div >
      <div style={{textAlign:"center"}}>
        <Hidden smUp>
        <img src="static/iHack_top.png" style={{width: "90vw", paddingTop: "15vh"}}/>
        <div style={{marginTop:"5vh"}}>
          <Particles params={{particles:{number:{value:15},color:{value:"#000000"},line_linked:{color:"#555555",distance:100}}}}/>
        </div>
        <div style={{marginLeft:"20vw",width:"60vw",paddingTop: "20vh",textAlign:"center"}}><Button variant="contained" fullWidth={true} style={{background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}><Link href="/question"><p　style={{color:"#fff"}}>診断を開始</p></Link></Button></div>
        
        </Hidden>
        <Hidden xsDown>
          <p>ここからPCView</p>
        </Hidden>
      </div>
    </div>
    </div>
  );
}

QUESTION.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

QUESTION.getInitialProps = async (ctx: any) => {
  return "{}"
}

export default withWidth()(QUESTION);
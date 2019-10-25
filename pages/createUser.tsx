import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

var firebaseConfig = {
  apiKey: "AIzaSyB9-a7SICGfcYNXoYMC1olSDBa4leHExxw",
  authDomain: "ihack-test-api.firebaseapp.com",
  databaseURL: "https://ihack-test-api.firebaseio.com",
  projectId: "ihack-test-api",
  storageBucket: "ihack-test-api.appspot.com",
  messagingSenderId: "381772633250",
  appId: "1:381772633250:web:5da06e7391cca657b733fb",
  measurementId: "G-Y9J8FYSQ9X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Required for side-effects
require('firebase/firestore');

function QUESTION(props) {
  // const classes = useStyles();

  const {width} = props;
  return (
    <div>
      <div>
        <div style={{textAlign: 'center'}}>
          <Hidden smUp>
            <img
              src="static/logoBlack.png"
              style={{width: '70vw', paddingTop: '25vh'}}
            />
            <Typography
              variant="h6"
              style={{color: '#555', margin: '-3vh', paddingTop: '-1vh'}}
            >
              パフォーマンスをハックする
            </Typography>
            <div
              style={{
                marginLeft: '20vw',
                width: '60vw',
                paddingTop: '30vh',
                textAlign: 'center',
              }}
            >
              <Button
                variant="contained"
                fullWidth={true}
                style={{
                  background:
                    'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                }}
              >
                <Link href="/question">
                  <p style={{color: '#fff'}}>診断を開始</p>
                </Link>
              </Button>
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

QUESTION.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

QUESTION.getInitialProps = async (ctx: any) => {
  return '{}';
};

export default withWidth()(QUESTION);

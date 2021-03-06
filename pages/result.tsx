import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import React, { useState } from 'react';
import NutrinoCard from '../components/nutrientCard'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Graph from '../components/graph'



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

function Nutrients(props:{nutrientNames:String[],nutrientDiscriptions:String[],nutrientImgs:String[]}){
  const {nutrientNames,nutrientDiscriptions,nutrientImgs}=props
  if(nutrientNames.length==nutrientDiscriptions.length && nutrientNames.length==nutrientImgs.length){
    return nutrientNames.map((value,index)=>{
      return (<NutrinoCard nutrientName={value} nutrientDiscription={nutrientDiscriptions[index]} nutrientImg={nutrientDiscriptions[index]}/>)
    })
  }else{
    return(<div><p>要素数があっていません</p></div>)
  }
}

function Result(props) {
  const nutrientNames=["ビタミンB3","L-トレニオン","バントテン酸Ca","BCAA"]
  const nutrientDiscriptions=["ビタミンB3は糖質・脂質・タンパク質の代謝に不可欠です。",
  "必須アミノ酸の一つ。肝臓に脂肪を蓄積するのを防ぎます。","ビタミンの一種。糖分や脂質、たん白質などの代謝にかかわるほか、皮膚を正常にたもつ働きをします。","疲労感、筋肉痛の軽減の効果があります。また、運動時のパフォーマンスの維持にも繋がります。"]
  const nutrientImgs=["sanma.png","papurika.png","niku.png","kyabetu.png"]

  const titles=["糖質","脂質","ミネラル","ビタミン","タンパク質"]
  const lowTags=["不足","不足","不足","不足","不足"]
  const highTags=["適切","適切","適切","適切","適切"]
  const resultValues=[60,30,80,40,90]
  return (
  <div style={{textAlign:"center"}}>
        <Hidden smUp>
          <div style={{width:"90%",marginLeft:"5vw"}}>
          <img src="static/logoBlack.png" style={{width: "40vw",marginTop:"3vh"}}/>
          <Typography variant="h6" style={{color:"#444",letterSpacing:"1vw",fontWeight:"bold",marginTop:"5vh"}}>ー Result ー</Typography>
          {
            titles.map((value,index) =>{
              return (
                <div key={index} style={{marginTop:index==0?"5vh":"10vh",width:"90vw"}}>
                  <Graph title={value} lowTag={lowTags[index]} highTag={highTags[index]}  resultValue={resultValues[index]} />
                </div>
              )

            })
          }
          

          <Typography variant="body1" style={{color:"#444",letterSpacing:"1vw",fontWeight:"bold",marginTop:"10vh"}}>あなたに必要な栄養素</Typography>
            {nutrientNames.map(function(value,index){
              return <NutrinoCard key={index} nutrientName={value} nutrientDiscription={nutrientDiscriptions[index]} nutrientImg={nutrientImgs[index]}/>
            })}
            
          </div>
          <img src="static/griff_disc.png" style={{width: "103vw",marginTop:"5vh",marginLeft:"-2vw"}}/>
          <div style={{marginTop: "5vh",marginBottom:"5vh",textAlign:"center"}}><Button variant="contained" style={{background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',margin:"0px 100px 0 100px"}}><Link href="/top"><p　style={{color:"#fff"}}>購入はこちらから</p></Link></Button></div>


        </Hidden>
        <Hidden xsDown>
          <p>ここからPCView</p>
        </Hidden>
    </div>
  );
}

Result.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

Result.getInitialProps = async (ctx: any) => {
  return "{}"
}

export default withWidth()(Result);
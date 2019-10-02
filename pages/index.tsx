import React from 'react';

function Home() {
  React.useEffect(()=>{
    location.href="/home"
  },[])
  return <div>Now Loading!</div>;
}

export default Home;
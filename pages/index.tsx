import React from 'react';

function Home() {
  React.useEffect(()=>{
    location.href="/top"
  },[])
  return <div>Now Loading!</div>;
}

export default Home;
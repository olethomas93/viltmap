import React from 'react'
import dynamic from 'next/dynamic'



function Edit() {
  // const Map = React.useMemo(() => dynamic(
  //   () => import('../components/map'), // replace '@components/map' with your component's location
  //   { 
  //     loading: () => <p>A map is loading</p>,
  //     ssr: false // This line is important. It's what prevents server-side render
  //   }
  // ), [/* list variables which should trigger a re-render here */])

  const EditMap = React.useMemo(()=>dynamic(()=> import('../components/editMap'),
  
  {

loading:()=> <p>A map is loading</p>,
ssr:false
  }
  ) )

  const Toolbar = dynamic(()=> import('../components/toolbar'))
  return( 
  
  <div >
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
  

<Toolbar/>

<div style={{height:"50%"}}>
 <EditMap/>
 </div>
  </div>)
 
}

export default Edit
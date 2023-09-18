import React from 'react'
import img from "../../InfinityWar5aabd55fed5fa.jpg"
import "../Home/Home.scss"
const imgurl = "https://image.tmdb.org/t/p/original"
const Card =({img})=>{
    return(
      
        <img className='card' src={img} alt="" srcset="" />
 
    )
}


const Row = ({title,arry=[],topRated=[],nowPlaying=[]}) => {
  return (
    <div className='Row'>
      <h2>{title}</h2>
     <div>

   {arry.map((item,index)=>(
    <Card key={index} img={`${imgurl}/${item.poster_path}`} />
   ))}
   {topRated.map((item,index)=>(
    <Card key={index} img={`${imgurl}/${item.poster_path}`} />
   ))}
   {nowPlaying.map((item,index)=>(
    <Card key={index} img={`${imgurl}/${item.poster_path}`} />
   ))}
  

     </div>
    </div>
  )
}

export {Row} 
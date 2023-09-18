import React, { useEffect, useState } from 'react';
import "./Home.scss";
import {Row} from '../Row/Row';
import axios from "axios";
import {BiPlay}from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
const apiKey = "6ebc312073ed8d8f150400697f53299a";
const url ="https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming";
const popular = "popular";
const Rated = "top_rated";
const nowPlaying = "now_playing";


const Home = () => {
  const[PopularMovie,setPopularMovie]=useState([]);
  const[RatedMovie,setRatedMovie]=useState([]);
  const[NowPlaying,setNowPlaying]=useState([]);
  
  useEffect(() => {  
      const fetchdata =  async ()=>{
       const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)

        setPopularMovie(results)
      }
      
      fetchdata();
    }, [])
    useEffect(() => {  
        const fetchMostRated =  async ()=>{
         const {data:{results}} = await axios.get(`${url}/movie/${Rated}?api_key=${apiKey}`)
          setRatedMovie(results)
        }
        fetchMostRated();
      },[])
    useEffect(() => {  
        const fetchNowPlaying =  async ()=>{
         const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
          setNowPlaying(results)
        }
        fetchNowPlaying();
      },[])

   
  return (
    <div className='Home'>
      <div className="Banner" style={{
        backgroundImage: PopularMovie[0]? `url(${`${imgurl}/${PopularMovie[0].poster_path}`})`:"none"
      }}>
       
      
      {PopularMovie[0] && <h1>{PopularMovie[8].title}</h1>}
      {PopularMovie[0] && <p>{PopularMovie[8].overview}</p>}

      <div>

      <button>Play <BiPlay /> </button>
      <button>My list <AiOutlinePlus /> </button>
   
      </div>

      </div>
     
      <Row title={"Popular On Netflix"} arry={PopularMovie} />  
      <Row title={"Top Rated"} topRated={RatedMovie} />  
      <Row title={"Now playing"} nowPlaying={NowPlaying} />  
 
    </div>
)
  
}

export  default Home;
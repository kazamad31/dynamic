import React, { useEffect,useState } from 'react';
import Card from './Card';

const News = () => {
  const [posts,setPost]= useState([])
  useEffect(()=>{
    const fetchApi = async()=>{
    const url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=0ce8f899dc0b47f29957cfe60fa4a794`
    const response= await fetch(url);
    const resjson= await response.json();
    const news=(resjson.articles);
    console.log(news);
    setPost(news);
     }
     fetchApi();
     },[]); 
    
  return (
    <>
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row gy-4'>
          { 
          posts.map((val, ind)=>{
            return <Card key={ind} imgsrc={val.urlToImage}
                  title={val.title} description={val.description} url={val.url} />
          })}                                              
        </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default News;
import React, { useEffect,useState } from 'react';
import Card from './Card';
import axios from 'axios';

const News = () => {
  const [posts,setPost]= useState([]);
  const [search, setSearch]= useState("india");
  useEffect(()=>{
    const fetchApi = async()=>{
    //const url= `https://newsapi.org/v2/top-headlines?country=${search}&apiKey=0ce8f899dc0b47f29957cfe60fa4a794`
    const option = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {q: `${search}`, lang: 'en', sort_by: 'relevancy', page: '1'},
      headers: {
        'x-api-key': 'C5WqXO9XxQJXvvos2K-eYWNc3apHJOKxNZsHVvu3ORM'
      }
    };
    const response= await axios.request(option);
    //console.log(response.data);
    const news=(response.data.articles);
    setPost(news);
     }
     fetchApi();
     },[search]); 
    
  return (
    <>
    <div className="inputData">
      <input type="search" className="inputField" onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      {!posts? (<p>incorrect country name</p>) :(<div className='container-fluid mb-5'>
      <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row gy-4'> 
          { 
          posts.map((val, ind)=>{
            return <Card key={ind} imgsrc={val.media}
                  title={val.title} description={val.summary} url={val.link} />
          })}                                              
        </div>
        </div>
      </div>
    </div>) }
    
    </>
  )
};

export default News;
import React from 'react';

const Card = (props) => {
  return (<>
  <div className='col-md-3 col-12 mx-auto'>
 <div className="card" style={{height:'400px',position:'relative'}}>
    <img src={props.imgsrc} className="card-img-top" style={{width:'auto',height:'200px'}} alt="mycard"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-description" style={{textOverflow:'ellipsis',
    overflow:'hidden',
    whiteSpace: 'nowrap'}}>{props.description}</p>
      <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More..</a>
    </div>
  </div>
  </div>
  </>
  )
};

export default Card;
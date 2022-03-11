import React from 'react';

const Card = (props) => {
  return (<>
  <div className='col-md-3 col-12 mx-auto'>
 <div className="card">
    <img src={props.imgsrc} className="card-img-top" alt="mycard"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-description">{props.description}</p>
      <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More..</a>
      {console.log(props.url)}
    </div>
  </div>
  </div>
  </>
  )
};

export default Card;
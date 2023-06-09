import React from 'react';
import News from './News';

const Home = () => {
  return (<>
  
<div className="container-fluid">
   <nav className="navbar navbar-expand-lg navbar-light bg-white">
         
        
            <a className="navbar-brand" href="#">Vex</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center text-lg-left">
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#service">SERVICE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center mb-5 mb-md-0">
                <img src="images/watch.png" alt=""/>
            </div>
            <div className="col-md-6 align-self-center text-center text-md-left">
                <div className="block">
                    <h1 className="font-weight-bold mb-4 font-size-60">Belive in Technology, Make the change</h1>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptas, modi fugit in veritatis labore perferendis. Minima hic at, nostrum nihil!</p>
                    <a className="btn btn-main" href="#about" role="button">Buy Now With $199</a>
                </div>
                </div>
                </div>
                </div>
  </>);};

export default Home;
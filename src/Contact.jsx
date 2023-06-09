import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => toast("Wow so easy!");
  notify();
  return (<div>
      <h1>This is Contact Page</h1>
      <button>clickMe</button>
  
      <ToastContainer />
  </div>);
};

export default Contact;
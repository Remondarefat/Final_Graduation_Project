import React from 'react';
import './ContactUs.css';
export default function ContactUs() {

  return (
  <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-6'>
        <div>
      <img src='sphinx.jpg' className='sphinx' alt='sphinx'/>
      </div>
    </div>
    <div className='col-md-6'>
    <div className='big-container'>
    <h2 className='contact'>Contact Us</h2>
    <hr className='horizontal-line'></hr>
    <form className='form-big-container mx-auto'>
    <div className="form-group">
      <label for="exampleInputName">Full Name</label>
      <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name"/>
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <div class="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="submit-button">Submit</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  );
}

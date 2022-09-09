import React,{useState} from 'react'
import {images}from '../../constants';
import {AppWrap,MotionWrap} from '../../wrapper';
import {client} from '../../client';
import './Footer.scss'
const Footer = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
const {name,email,message}=formData;
const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  

}
const handleSubmit=()=>{
  setLoading(true)
  const contact={
    _type:'contact',
    name: name,
    email:email,
    message: message
  }
  client.create(contact)
  .then(()=>{
    setLoading(false)
    setIsSubmited(true)
  })
}
  return (
    <>
    <h2 className="head-text">Take a coffe & chat with me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:cpjunaif98@gmail.com" className='p-text'>cpjunaif98@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
        <a href="tel:+91 9633446312" className='p-text'>+91 9633446312</a>
      </div>
    </div>
{!isSubmited?(
    <div className="app__footer-form app__flex">
      <div className="app__flex">
      <input type="text" className='p-text' placeholder='Your Name' value={name} onChange={handleChange} name="name" />
      </div>
      <div className="app__flex">
      <input type="email" className='p-text' placeholder='Your Email' value={email} onChange={handleChange} name="email" />
      </div>
      <div>
        <textarea 
        name="message" 
        className='p-text'
        placeholder='Your Message'
        value={message}
        onChange={handleChange}
        id="" 
        cols="" 
        rows="">

        </textarea>
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}>{loading?"Sending":"Send Message"}</button>
    </div>):
    <div>
      <h3 className='head-text'>Thank you for getting in touch</h3>
    </div>
     } 
    </>
  )
}

export default AppWrap(MotionWrap(Footer,"app__footer"),'contact','app__whitebg')
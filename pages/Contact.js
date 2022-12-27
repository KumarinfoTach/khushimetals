import {useState,useEffect} from "react";
import emailjs from '@emailjs/browser';
import TopPages from '../Components/TopPages'
import styles from  "../styles/contact.module.css"
import Bredcurm from "../Components/SmallComponents/bredcurm";
import { FaRegEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaArrowRight } from "react-icons/fa";
import Heading_P from '../Components/Heading_P';
import topimg from "../public/Images/contact_img.jpg"
const Contact = () => {

const[values,setValues]=useState({
  name:"",
  email:"",
  phone:"",
  message:""

})
const {name,email,phone,message}=values
  const data_bredcrum =[{
    id:1,
    name:"Home",
    link:"/"
},{
    id:2,
    name:"Contact",
    link:"/Contact"
}]

const  handleChange=(e)=>setValues({...values,[e.target.name]:e.target.value})
const handleSubmit = (e)=>{

  e.preventDefault();
  if(values.name== ""||values.email==""||values.phone==""||values.message==""){
alert("Please fill all then submit")
  }else{
    emailjs.send('service_iokec9y', 'template_j8a42rs', values, 'TbJ69shjd3CH_cpzA')
    .then(response => {
  
    
      alert('Sent Message Successfully to Khushi metal and alloys!', response)
    })
  }
  
}
  return (
    <>
      <TopPages data={{heading:"Contact Us",img:topimg}}/>
    <div className={styles.contact_us}>
    <Bredcurm data={{data_bredcrum}}/>
<div className={styles.contact_container}>
<div className={`${styles.gap_row} row`}>
      <div className="col-12 col-md-4">
       <div className={styles.item_box}>
        <div className={styles.info_box}>
        <span><FaRegEnvelope/></span>
         <div className={styles.emails_box}>
          <h2>Email Address</h2>
          <p>Sent mail asap anytime</p>
         </div>
        </div>
         <div  className={styles.content_info}>
          <div className={styles.email_box}>
          <h4>khushimetalandalloy@gmail.com</h4>
          <h4>lalitmodi2014@gmail.com</h4>
          </div>
          <span><FaArrowRight/></span>
         </div>
       </div>
      </div>
      <div className="col-12 col-md-4">
        <div className={styles.item_box}>
        
        
        <div className={styles.info_box}>
        <span><FaPhoneAlt/></span>
         <div className={styles.emails_box}>
          <h2>Phone Number</h2>
          <p>call us asap anytime</p>
         </div>
        </div>
         <div  className={styles.content_info}>
          <div className={styles.email_box}>
          <h4>+91 8291870720</h4>
          <h4>+91 8080059591</h4>
          </div>
          <span><FaArrowRight/></span>
         </div>

       </div>
        </div>
        <div className="col-12 col-md-4">
        <div className={styles.item_box}>
        
        
        <div className={styles.info_box}>
        <span><FaMapMarkerAlt/></span>
         <div className={styles.emails_box}>
          <h2>Office Address</h2>
          <p>Sent mail asap anytime</p>
         </div>
        </div>
         <div  className={styles.content_info}>
          <div className={styles.email_box}>
          <h5>Shop No - 02, Ground Floor, 91, Haji Mansion, 3rd Kamithipura Lane, Mumbai Central, Mumbai - 400008</h5>
          
          </div>
          <span><FaArrowRight/></span>
         </div>

        
       </div>
        </div>
    </div>
</div>
    

    <div className={styles.massssge_box}>
    <Heading_P text={{ text1: "Write Message", text2: "Get In Touch" }} />

   <div className={`${styles.contact_form} row`} >
    <div className="col-12 col-md-6">
      <div className={styles.contact_info_text}>
      <div className={styles.lets_talk}>Let's talk</div>
      <h4>Lets talk about your Requirments.</h4>
      <p>  Fill the form and send in your queries. I will respond as soon as I
            can. Alternatively, You can reach out to me at my email address.</p>
      </div>
    
    </div>
    <div className="col-12 col-md-6">
      <div className={styles.enquiry_box}>
      <form className={styles.form_massage} onSubmit={handleSubmit}>
   

      <label for="name" className="">Full name<span className={styles.stars}>*</span></label>
      <input type="text" name="name" value={name}  onChange={handleChange} className="" />

      <label for="email" className="">E-mail<span className={styles.stars}>*</span></label>
      <input type="email" name="email" value={email}  onChange={handleChange} className="" />

      <label for="subject" className="">Phone No.<span className={styles.stars}>*</span></label>
      <input type="text" name="phone" value={phone} onChange={handleChange}  className="" />

      <label for="message" className="">Message<span className={styles.stars}>*</span></label>
      <textarea name="message" onChange={handleChange} className="" value={message}></textarea>
      <div className="">
        <button type="submit" className="Submit_btn">
          Send
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </form>
      </div>
    
      </div>
   </div>


    </div>
<div className={styles.map_text}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2572958992873!2d72.8250358!3d18.964240999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cff3786a5f7f%3A0x75a2f3bdc9f03e33!2sKhushi%20metal%20and%20alloys!5e0!3m2!1sen!2sin!4v1671987232113!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

    </div>
    </>
  )
}

export default Contact
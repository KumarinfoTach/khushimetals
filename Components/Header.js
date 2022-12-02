import React,{useEffect} from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import $ from "jquery"
import { AiOutlineSearch,AiOutlineMenu,AiFillPhone } from "react-icons/ai";
import { FaCaretDown,FaSearch ,FaWhatsappSquare,FaFacebook,FaTwitter,FaWhatsapp} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Header = () => {
// var jsdom = require('jsdom');
// $ = require('jquery')(new jsdom.JSDOM().window);
  /* Please ❤ this if you like it! */

  // const { JSDOM } = require("jsdom");
  // const myJSDom = new JSDOM (html);
  // const $ = require('jquery')(myJSDom.window);

  const header_data=[{
    name:"Home",
    link:"/"

  },{
    name:"About",
    link:"/about"
  },{
    name:"Products",
    link:"#",
    submenu:[{
      name:"stainless Steel",
      link:"/stainless_steel"
    },
    {
      name:"Nickel alloys",
      link:"/Nickel_alloys"
    }]
  },
  {
    name:"Metarials",
    link:"/Metarials"
  
  },
  {
    name:"Contact Us",
    link:"/contact"
  }


]

const menu_click=()=>{
 $(".icon").css("top","34px")
 $(".search_div").css("top","34px")

}



useEffect(() => {     

  $(window).on('scroll', function() {
    console.log( $(this).scrollTop(),   );
    if( $(this).scrollTop()==0){
   if( $(window).width()<=1030){

     $("nav").css("top","49px")
   }else{
    $("nav").css("top","33px")

   }
    }else{
      $("nav").css("top","0px")
    }
  });
  

},[]);



function search_bar_show(){

  $("#sear_wrraper_box").slideToggle('slow');

  // document.getElementsByClassName('searchwrraper')[0].style.opacity=1
}


const items = [
  {
    id: 0,
    name: 'Cobol'
  },
  {
    id: 1,
    name: 'JavaScript'
  },
  {
    id: 2,
    name: 'Basic'
  },
  {
    id: 3,
    name: 'PHP'
  },
  {
    id: 4,
    name: 'Java'
  }
]

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
}

const handleOnHover = (result) => {
  // the item hovered
  console.log(result)
}

const handleOnSelect = (item) => {
  // the item selected
  console.log(item)
  alert("geh")
}

const handleOnFocus = () => {
  console.log('Focused')
}

const formatResult = (item) => {
  return (
    <>
     
     <Link href=""><span style={{ display: 'block', textAlign: 'left' }} className={styles.search_link}>{item.name}</span></Link>
    </>
  )
}
  return (
    <div className={styles.Container}>
      
      <div className={styles.header_info}>
        <div className={styles.group_info}>
        <span className={styles.info}><AiFillPhone/> +91 8291870720</span>
        <span className={styles.info}><MdEmail/> lalitmodi2014@gmail.com</span>
        </div>

        
        <span className={styles.social_info}>

         <Link href='#' ><FaWhatsappSquare/></Link>
         <Link href='#'><FaFacebook/></Link>
         <Link href='#'><FaTwitter/></Link>

        </span>
      </div>



      <div className={styles.navbar}>


      <nav>
      <div className="logo"><span>Khushi</span> Metal and Alloys</div>
      <label for="btn" className="icon" onClick={()=>{
  menu_click()
      }}>
      <AiOutlineMenu/>
       
      </label>
      <input type="checkbox" id="btn"/>
      <ul>
        {header_data.map((item,index)=>{
          return(
            <li>{item.submenu?<label for="btn-2" class="show">{item.name} +</label>:null}
              
              
              <Link href={item.link} key={index}>{item.name} {item.submenu?<FaCaretDown/>
            :null}</Link>
            {item.submenu?<input type="checkbox" id="btn-2"/>:null}
            {item.submenu?<ul>
            {item.submenu?
            item.submenu.map((each,index)=>{
              return(
               
            <li><Link href={each.link} key={index}>{each.name}</Link></li>
          
              )
            }):null
          
          }
            </ul>:null}
            </li>
          )
        })}

        

        </ul>
        

        <div className='d_flex_c search_div' style={{"top": "50%",
    "right": "16px",
    "transform": "translateY(-50%)",
    "position": "absolute"}}>
          <div className={styles.search_box}>
          <button className={styles.search_button} onClick={()=>{
            search_bar_show()
          }}> <AiOutlineSearch/></button>
          <div className={styles.searchwrraper} id="sear_wrraper_box">
          <ReactSearchAutocomplete
            items={header_data}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
            {/* <div className='d_flex_c '>
            <input type="text" placeholder='Search...!'></input>
        <span className='btn_cursor'>

        <FaSearch/>
        </span>
            </div> */}
       

        {/* <div className='d_flex_C_F_C w_100 search_link' >
          <span className='w_100'><Link href="" className='mx-2'> <AiOutlineSearch/>search 1</Link></span>
          <span className='w_100'><Link href=""  className='mx-2'> <AiOutlineSearch/>search 1</Link></span>
          <span className='w_100'><Link href=""  className='mx-2'> <AiOutlineSearch/>search 1</Link></span>
        </div> */}
      </div>
      </div>
      </div>

    </nav>


      
       {/* <h4>    <span>Khushi</span> Metal And Alloys</h4>
      <nav>
        <ul>
        {header_data.map((item,index)=>{
          return(
            <li><Link href={item.link} key={index}>{item.name} {item.submenu?<FaCaretDown/>:null}</Link>
               <ul>
            {item.submenu?
            item.submenu.map((each,index)=>{
              return(
               
            <li><Link href={each.link} key={index}>{each.name}</Link></li>
          
              )
            }):null
          
          }
            </ul>
            </li>
          )
        })}

        </ul>
        <div className='d_flex_c'>
          <div className={styles.search_box}>
          <button className={styles.search_button} onClick={()=>{
            search_bar_show()
          }}> <AiOutlineSearch/></button>
          <div className={styles.searchwrraper} id="sear_wrraper_box">
            <div className='d_flex_c'>
            <input type="text" placeholder='Search...!'></input>
        <span className='btn_cursor'>

        <FaSearch/>
        </span>
            </div>
       

        <div className='d_flex_C_F_C w_100 search_link' >
          <span className='w_100'><Link href="">search 1</Link></span>
          <span className='w_100'><Link href="">search 1</Link></span>
          <span className='w_100'><Link href="">search 1</Link></span>
        </div>
      </div>

          </div>

 

      
          
          <button className={styles.search_button}>

          <AiOutlineMenu/>
    </button>
         
        </div>
      </nav> */}
      </div>




    </div>
  )
}

export default Header
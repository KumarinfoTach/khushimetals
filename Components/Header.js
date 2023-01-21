import React,{useEffect,useRef} from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Image from "next/image";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import $ from "jquery"
import { AiOutlineSearch,AiOutlineMenu,AiFillPhone } from "react-icons/ai";
import { FaCaretDown,FaSearch ,FaWhatsappSquare,FaFacebook,FaTwitter,FaWhatsapp} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Router from 'next/router';
import logo from "../public/Images/k_logo.png";
const Header = () => {
  const inputNameRef = useRef()
const{pathname}=Router

  const header_data=[{
    name:"Home",
    link:"/"

  },{
    name:"About",
    link:"/About"
  },{
    name:"Products",
    link:"#",
    label:"btn-2",
    submenu:[
      
    {
      name:"Cobalt Alloy Scrap",
      link:"/Products/CobaltAlloysScraps"
    },
    {
      name:"Nickel alloys Scrap",
      link:"/Products/NickelAlloysScraps"
    }
    ,
    {
      name:"Tungsten Alloy Scrap",
      link:"/Products/TungstenAlloysScraps"
    }
    ,
    {
      name:"Titanium & Tantalum",
      link:"/Products/TitaniumandTantalumScraps"
    }
    ,
      
      {
      name:"Stainless Steel Scrap",
      link:"/Products/StainlessSteel"
    }
  ]
  },
  {
    name:"Metarials",
    link:"#",
    label:"btn-3",
    submenu:[
      
      {
        name:"Cobalt",
        link:"/Metarials/Cobalt"
      },
      {
        name:"Nickel ",
        link:"/Metarials/Nickel"
      }
     ,
        
        {
        name:"Chromium",
        link:"/Metarials/Chromium"
      }
      ,
        
      {
      name:"Niobium",
      link:"/Metarials/Niobium"
    }
    ,
        
    {
    name:"Molybdenum",
    link:"/Metarials/Molybdenum"
  }, 
  {
    name:"Tungsten",
    link:"/Metarials/Tungsten"
  }
  ,
  {
    name:"Titanium",
    link:"/Metarials/Titanium"
  }
  , 
  {
    name:"Tantalum",
    link:"/Metarials/Tuntalum"
  }
  ,
  
    ]
  
  },
  {
    name:"Contact Us",
    link:"/Contact"
  }


]

const menu_click=()=>{
  document.getElementById("mobile_list").classList.remove("d-none");
 $(".icon").css("top","34px")
 $(".search_div").css("top","34px")

}



useEffect(() => {     

  $(window).on('scroll', function() {
 
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
    id: 1,
    name: "Cobalt",
    link: "/Metarials/Cobalt",
  },
  {
    id: 2,
    name: "Nickel ",
    link: "/Metarials/Nickel",
  },
  {
    id: 3,
    name: "Chromium",
    link: "/Metarials/Chromium",
  },
  {
    id: 4,
    name: "Niobium",
    link: "/Metarials/Niobium",
  },
  {
    id: 5,
    name: "Molybdenum",
    link: "/Metarials/Molybdenum",
  },
  {
    id: 6,
    name: "Tungsten",
    link: "/Metarials/Tungsten",
  },
  {
    id: 7,
    name: "Titanium",
    link: "/Metarials/Titanium",
  },
  {
    id: 8,
    name: "Tantalum",
    link: "/Metarials/Tuntalum",
  },
  {
    id: 9,
    name: "Cobalt Alloy Scrap",
    link: "/Products/CobaltAlloysScraps",
  },
  {
    id: 10,
    name: "Nickel alloys Scrap",
    link: "/Products/NickelAlloysScraps",
  },
  {
    id: 11,
    name: "Tungsten Alloy Scrap",
    link: "/Products/TungstenAlloysScraps",
  },
  {
    id: 12,
    name: "Titanium & Tantalum",
    link: "/Products/TitaniumandTantalumScraps",
  },
  {
    id: 13,
    name: "Stainless Steel Scrap",
    link: "/Products/StainlessSteel",
  },
];


const handleOnSelect = (item) => {
  // the item selected

console.log("item", item.link);
  
    Router.push(item.link)
 
 
}



const formatResult = (item) => {
 
  return (
    <>
     
        <span
          key={item.id}
          style={{ display: "block", textAlign: "left" }}
          className={styles.search_link}
        >
          {item.name}
        </span>
      
    </>
  );
}
  return (
    <div className={styles.Container}>
      <div className={styles.header_info}>
        <div className={styles.group_info}>
          <span className={styles.info}>
            <AiFillPhone /> +91 8291870720
          </span>
          <span className={styles.info}>
            <MdEmail /> khushimetalandalloy@gmail.com
          </span>
        </div>

        <span className={styles.social_info}>
          <Link href="https://wa.me/+918291870720" target="_blank">
            <FaWhatsappSquare />
          </Link>
        </span>
      </div>

      <div className={styles.navbar}>
        <nav>
          <div className="logo">
            <Image src={logo} alt=""></Image>
          </div>
          <label
            for="btn"
            className="icon"
            onClick={() => {
              menu_click();
            }}
          >
            <AiOutlineMenu />
          </label>
          <input ref={inputNameRef} type="checkbox" id="btn" />
          <ul id="mobile_list">
            {header_data.map((item, index) => {
              return (
                <li key={index}>
                  {item.submenu ? (
                    <label for={item.label} class="show">
                      {item.name} +
                    </label>
                  ) : null}

                  <Link href={item.link}>
                    {item.name} {item.submenu ? <FaCaretDown /> : null}
                  </Link>
                  {item.submenu ? (
                    <input type="checkbox" id={item.label} />
                  ) : null}
                  {item.submenu ? (
                    <ul>
                      {item.submenu
                        ? item.submenu.map((each, index) => {
                            return (
                              <li key={index}>
                                <Link href={each.link} key={index}>
                                  {each.name}
                                </Link>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div
            className="d_flex_c search_div"
            style={{
              top: "50%",
              right: "16px",
              transform: "translateY(-50%)",
              position: "absolute",
            }}
          >
            <div className={styles.search_box}>
              <button
                className={styles.search_button}
                onClick={() => {
                  search_bar_show();
                }}
              >
                {" "}
                <AiOutlineSearch />
              </button>
              <div className={styles.searchwrraper} id="sear_wrraper_box">
                <ReactSearchAutocomplete
                  items={items}
                  onSelect={handleOnSelect}
                  placeholder="Search Products here...!"
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
  );
}

export default Header
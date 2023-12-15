import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import man from "../Assets/Rectangle 10.png"
import sun from '../Assets/Help.png'
function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          <div  style={{display:"flex"}}  ><h6 className='icon' > good morning <img src={sun}  />   </h6></div>  
        </div>
        <div className='header-right'>
           
           <div    >


<div style={{backgroundColor:'white',display:'flex',marginTop:'40px',minWidth:'9rem',height:'3.5rem',borderRadius:'1rem'}}  >
  <div style={{padding:'0',marginTop:"8%",marginLeft:'10%'}}>
  
  <h4 style={{margin:'0'}}  className="headername">
Jone  Doe 
</h4> 
 <h6 style={{margin:'0'}} >jon@doe.com</h6>
</div>
<div><img style={{marginTop:'35%',marginLeft:'30%'}} src={man}/></div>
</div>


           </div>
        </div>
    </header>
  )
}

export default Header
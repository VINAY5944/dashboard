import React from 'react'
import dashboard from "../Assets/Circled Menu.png"
import support from "../Assets/Support.png"
import plugin from "../Assets/Puzzle.png"
import help from "../Assets/Help.png"
import statboard from "../Assets/StatBoard.png"
import briefcase from '../Assets/Briefcase.png'
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
               <img  src={briefcase} /><img src={statboard} alt="" />
            </div>
      
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                 <div style={{display:'flex'}}><img  src={dashboard} className='icon'/> Dashboard</div>   
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div style={{display:'flex'}}>   <img src={support} className='icon'/> Support</div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div style={{display:'flex'}}>  <img src={plugin} className='icon'/> Plugin</div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div style={{display:'flex'}}>    <img src={help} className='icon'/> Help  </div>
                </a>
            </li>
            
           
           
        </ul>
    </aside>
  )
}

export default Sidebar
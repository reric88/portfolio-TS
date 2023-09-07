import React from 'react'

type Props = {
    handleNavButton: (v: string) => void,
    navButton: {
      about: boolean;
      home: boolean;
      projects: boolean;
    },
    currentPage: string,
    handleCurrentPage: (v:string)=>void,
  
  };

export const NavHome = (props: Props) => {
  return (
    <div id='nav-home' className={`nav-menus ${props.navButton.home ? 'nav-drawer-up' : ''}`}>
        <div className="select-link">
            {/* <p>Home</p> */}
            <a onClick={()=>props.handleCurrentPage('home')} href="#home">Home</a>
        </div>
    </div>
  )
}

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

export const NavAbout = (props: Props) => {
  return (
    <div id='nav-about' className={`nav-menus ${props.navButton.about ? 'nav-drawer-up' : ''}`}>
        <div className="select-link">
            {/* <p>About</p> */}
            <a onClick={()=>props.handleCurrentPage('about')} href="#about">About</a>
        </div>
    </div>
  )
}

import React from 'react'
import { NavHome } from './NavHome'
import { NavAbout } from './NavAbout'
import { NavProjects } from './NavProjects'

type Props = {
    handleNavButton: (v: string) => void,
    navButton: {
      about: boolean;
      home: boolean;
      projects: boolean;
    },
    currentPage: string,
    handleCurrentPage: (v:string)=>void,
    // handleVisitedPages: (v:string)=>void
  
  };

export const NavMenus = (props: Props) => {
  return (
    <div className='nav-menu-parent'>
        <div className="nav-menu-container">
            <div className="nav-menu-children">
            <NavHome handleNavButton={props.handleNavButton} navButton={props.navButton} currentPage={props.currentPage} handleCurrentPage={props.handleCurrentPage}  />
            <NavAbout handleNavButton={props.handleNavButton} navButton={props.navButton} currentPage={props.currentPage} handleCurrentPage={props.handleCurrentPage}  />
            <NavProjects handleNavButton={props.handleNavButton} navButton={props.navButton} currentPage={props.currentPage} handleCurrentPage={props.handleCurrentPage}  />
            </div>
        </div>
    </div>
  )
}

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

export const NavProjects = (props: Props) => {
  return (
    <div id='nav-projects' className={`nav-menus ${props.navButton.projects ? 'nav-drawer-up' : ''}`}>
        <div onClick={()=>props.handleCurrentPage('projects')} className="select-link">
            <p>Projects</p>
        </div>
        <div onClick={()=>props.handleCurrentPage('github')} className="select-link">
            <p>Github</p>
        </div>
    </div>
  )
}

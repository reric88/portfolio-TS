import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Card } from "./components/Card";
import { Border } from "./components/Border";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [navButton, setNavButton] = useState({
    home: false,
    about: false,
    projects: false,
  });
  const [visitedPages, setVisitedPages] = useState([currentPage]);
  const [pageNumber, setPageNumber] = useState(visitedPages.length);

  const handleCurrentPage = (v: string) => {
    setNavButton({ about: false, home: false, projects: false })
    if (v !== currentPage){
      setCurrentPage(v);
    setVisitedPages((prevVisitedPages) => [...prevVisitedPages, v]);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  // useEffect(() => {
  //   console.log("VisitedPages:", visitedPages);
  //   console.log("PageNumber:", pageNumber);
  //   console.log("CurrentPage", visitedPages[pageNumber - 1]);
  // }, [pageNumber]);

  const handleNavButton = (v: string) => {
    if (v === "home" && navButton.home === false) {
      setNavButton({ about: false, home: true, projects: false });
    } else if (v === "about" && navButton.about === false) {
      setNavButton({ about: true, home: false, projects: false });
    } else if (v === "projects" && navButton.projects === false) {
      setNavButton({ about: false, home: false, projects: true });
    } else {
      setNavButton({ about: false, home: false, projects: false });
    }
  };

  const handleBackForward = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList.contains("nav-backward") && pageNumber > 1) {
      setCurrentPage(visitedPages[pageNumber - 2]);
      setPageNumber((prev) => (prev - 1));
    }
    
    if (e.currentTarget.classList.contains("nav-forward")) {
      if (pageNumber < visitedPages.length) {
        setCurrentPage(visitedPages[pageNumber]);
        setPageNumber((prev) => (prev + 1));
      }
      if (pageNumber >= visitedPages.length) {
        return;
      }
    }
    // console.log(currentPage, pageNumber)
  };

useEffect(()=>{
  console.log('PageNumber', pageNumber)
  console.log('CurrentPage', currentPage)
},[pageNumber])

  return (
    <>
    <div id="app">
      {/* <Projects /> */}
    <img className='bg-image' src="/images/neuro.png" alt="" />
      {/* <Background /> */}
      <Navbar
        navButton={navButton}
        handleNavButton={handleNavButton}
        handleBackForward={handleBackForward}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
      {currentPage === 'home' ? <Background /> : <></>}
      {currentPage === 'about' ? <About /> : <></>}
      {currentPage === 'projects' ? <Projects /> : <></>}
    </div>
    <Border />
    </>
  );
}

export default App;

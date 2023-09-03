import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Card } from "./components/Card";

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

  const handleBackForward = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.classList.contains("back") && pageNumber > 1) {
      setCurrentPage(visitedPages[pageNumber - 1]);
      setPageNumber((prev) => (prev -= 1));
    }

    if (e.currentTarget.classList.contains("forward")) {
      if (pageNumber < visitedPages.length) {
        setCurrentPage(visitedPages[pageNumber + 1]);
        setPageNumber((prev) => (prev += 1));
      }
      if (pageNumber >= visitedPages.length) {
        return;
      }
    }
  };

  return (
    <>
    <div id="app">
    <img className='bg-image' src="/images/neuro.png" alt="" />
      {/* <Background /> */}
      <button onClick={handleBackForward} className="fb-button back">
        Go Back
      </button>
      <button onClick={handleBackForward} className="fb-button forward">
        Go Forward
      </button>
      <div className="cards">
      <Card />
      <Card />
      <Card />
      </div>
      <Navbar
        navButton={navButton}
        handleNavButton={handleNavButton}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
      {/* {currentPage === 'home' ? <Background /> : <></>} */}
      {currentPage === 'about' ? <About /> : <></>}
      {currentPage === 'projects' ? <Projects /> : <></>}
    </div>
    </>
  );
}

export default App;

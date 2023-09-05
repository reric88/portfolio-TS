import React, { useRef } from "react";

type Props = {
  link: string;
  id: string;
  image: string;
  title: string;
  front: string;
  back: string;
  langs: string;
};

export const Card = (props: Props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);

  const flipCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!shadowRef.current || !contentRef.current) {
      return;
    }
    shadowRef.current.classList.toggle("card-clicked");
    contentRef.current.classList.toggle("card-clicked");
  };

  return (
    <>
      <div id={props.id} className="card">
        <div ref={shadowRef} className="card-shadow"></div>
        <div ref={contentRef} className="card-content">
          <div className="card-front">
            <a target="_blank" href={props.link}>
              <div className="card-image">
                <img src={props.image} alt="" />
              </div>
            </a>
            <div onClick={(e) => flipCard(e)} className="card-description">
              <h2>{props.title}</h2>
              <hr></hr>
              <p>{props.front}</p>
            </div>
          </div>
          <div onClick={(e) => flipCard(e)} className="card-back">
            <hr></hr>
            
              {props.id === "gca-card" ? (
                <>
                  <p>
                    Home page by{" "}
                    <a target="_blank" href="https://github.com/reric88">
                      myself
                    </a>
                  </p>
                  <p>
                    About page by{" "}
                    <a target="_blank" href="https://github.com/jokeeley">
                      Jo Keeley
                    </a>
                  </p>
                  <p>
                    Contact page by{" "}
                    <a target="_blank" href="https://github.com/keithroe6">
                      Keith Roe
                    </a>
                  </p>
                </>
              ) : props.id === "movieApp-card" ? (
                <>
                  <p>
                    This was made using an API provided by{" "}
                    <a href="https://www.themoviedb.org">The Movie Database.</a>
                  </p>
                </>
              ) : (
                <p>
              {props.back}
              </p>
              )}
            
            <hr></hr>
            <h3>{props.langs}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

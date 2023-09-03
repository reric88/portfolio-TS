import React, { useRef } from "react";

type Props = {
    link: string,
    title: string,
    front: string,
    back: string,
}

export const Card = (props: Props) => {
    const contentRef = useRef<HTMLDivElement | null>(null)
    const shadowRef = useRef<HTMLDivElement | null>(null)

    const flipCard = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!shadowRef.current || !contentRef.current){
            return
        }
        shadowRef.current.classList.toggle('card-clicked')
        contentRef.current.classList.toggle('card-clicked')
    }

  return (
    <div className="card">
        <div ref={shadowRef} className="card-shadow"></div>
        <div ref={contentRef} className="card-content">
          <div className="card-front">
            <a target="_blank" href={props.link}>
              <div className="card-image"></div>
            </a>
            <div onClick={(e)=>flipCard(e)} className="card-description">
              <h4>{props.title}</h4>
              <hr></hr>
              <p>{props.front}</p>
            </div>
          </div>
          <div onClick={(e)=>flipCard(e)} className="card-back">
            <hr></hr>
            <p>
              {props.back}
            </p>
            <hr></hr>
            <h6>HTML - CSS - JavaScript</h6>
          </div>
        </div>
      </div>
  );
};

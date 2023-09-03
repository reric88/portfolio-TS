import React from "react";
import { Card } from "./Card";
import { pokedex, exit } from './CardInfo'

const data = [pokedex, exit];

export const Projects = () => {
  return (
    <div id="projects" className="page">
      
      <div className="cards">
      {data.map((info, index) => (
          <Card
            key={index}
            link={info.link}
            title={info.title}
            front={info.front}
            back={info.back}
          />
        ))}
        
      </div>
    </div>
  );
};

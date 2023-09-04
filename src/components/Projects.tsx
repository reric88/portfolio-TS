import React from "react";
import { Card } from "./Card";
import { pokedex, exit, zonk, toDo, gca, movieApp, coffee, videoBG, fullPage, lePain, wutToEat, imgSlider, photoSite, ghostbuster } from './CardInfo'

const data = [pokedex, exit, zonk, toDo, gca, movieApp, coffee, videoBG, fullPage, lePain, wutToEat, imgSlider, photoSite, ghostbuster];

export const Projects = () => {
  return (
    <div id="projects" className="page">
      
      <div className="cards">
      {data.map((info, index) => (
          <Card
            key={index}
            id={info.id}
            link={info.link}
            image={info.image}
            title={info.title}
            front={info.front}
            back={info.back}
            langs={info.langs}
          />
        ))}
        
      <div className="sm-spacer"></div>
      </div>
    </div>
  );
};

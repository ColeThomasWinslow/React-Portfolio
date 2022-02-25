import React from "react";
import { TechData } from "./TechData";

function Tech() {
  return (
    <div className="TechSection" name="tech">
      <div className="TechCont">
        {TechData.map((tech) => {
          return (
            <div key={tech.id} className="TechImpWrap">
              <img
                className="techImg"
                src={tech.img}
                alt={`tech ${tech.id} `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tech;

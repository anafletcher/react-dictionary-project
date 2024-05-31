import React from "react";
import "./Synonyms.css";

export default function Synonmy(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          if (index < 5) {
            return (
              <li className="Synonyms-synonym" key={index}>
                {synonym}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    return null;
  }
}

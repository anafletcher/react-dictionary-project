import React from "react";
import "./Synonyms.css";

export default function Synonmy(props) {
  console.log(props.synonym);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li className="Synonyms-synonym" key={index}>
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

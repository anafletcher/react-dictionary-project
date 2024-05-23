import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="Results-returned">
          <h2>{props.results.word}</h2>
          <h3>{props.results.phonetic}</h3>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Results-default">
        Please enter a word that you would like to look up...
      </div>
    );
  }
}

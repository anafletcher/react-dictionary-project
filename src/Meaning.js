import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <em>{props.meaning.partOfSpeech}</em>
      </h4>
      <p className="Meaning-definition">{props.meaning.definition}</p>
      {props.meaning.example != null && (
        <p className="Meaning-example">
          <em>Example: </em>
          {props.meaning.example}
        </p>
      )}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

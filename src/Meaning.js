import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>
        <em>{props.meaning.partOfSpeech}</em>
      </h4>
      <p className="Meaning-definition">{props.meaning.definition}</p>
      <p className="Meaning-example">{props.meaning.example}</p>
      {props.meaning.synonyms &&
        props.meaning.synonyms.map(function (synonyms) {
          return <Synonyms synonyms={synonyms} />;
        })}
    </div>
  );
}

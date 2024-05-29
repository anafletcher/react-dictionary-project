import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
        </section>

        <section>
          <p className="Results-phonetics">
            <strong>phonetics: </strong>
            <span className="Results-phonetics-text">
              /{props.results.phonetic} /
            </span>
          </p>
        </section>

        <div className="Results-returned">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

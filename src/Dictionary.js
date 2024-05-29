import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "f3c5613898a1043cbte4a77d8c1bcfo0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            className="Dictionary-search-input"
            type="search"
            placeholder="Look up a word..."
            onChange={handleKeywordChange}
          />
        </form>
        <div className="Dictionary-hints">
          <em>Examples: sunset, love, breakfast</em>
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}

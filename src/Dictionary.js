import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h3>Please enter the word you want to look up...</h3>
      <form onSubmit={search}>
        <input
          className="Dictionary-search-input"
          type="search"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}

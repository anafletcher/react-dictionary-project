import React from "react";

export default function Synonmy(props) {
  console.log(props.synonym);
  if (props.synonym) {
    return <span className="Synonyms-synonym">{props.synonym}</span>;
  } else {
    return null;
  }
}

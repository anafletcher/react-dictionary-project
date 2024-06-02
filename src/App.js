import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Online Dictionary</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Definition" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://github.com/anafletcher"
            default="_blank"
            rel="noreferrer"
          >
            Alicia Fletcher
          </a>
          , is{" "}
          <a
            href="https://github.com/anafletcher/react-dictionary-project"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and is{" "}
          <a
            href="https://react-project-dictionary-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

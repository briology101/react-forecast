import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kalamazoo" />
        <footer>
          This project was coded by Bri Franz-Jonas and is open source on {""}
          <a
            href="https://github.com/briology101/react-forecast"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
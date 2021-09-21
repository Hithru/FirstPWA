import React from "react";
import "./App.css";
import video from "./videos/sculpture.mp4";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
        <div>
          <video src={video} controls height={200} />
        </div>
      </header>
    </div>
  );
}

export default App;

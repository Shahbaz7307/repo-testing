import "./App.css";
import React, { Fragment } from "react";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="bg-black h-screen w-screen flex flex-col items-center justify-center gap-5">
      <Weather />
    </div>
  );
};

export default App;

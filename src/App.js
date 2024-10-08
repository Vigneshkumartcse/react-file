import React from "react";
import { jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom";
import photo from "./one.jpeg";
import Header from "./Components/Header";
import Body from "./Components/Body";
 
const AppLayout = () => {   
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
 };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

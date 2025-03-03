import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Box from "./Components/Box";
import Box2 from "./Components/Box2";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <Header />
      <Box />
      <Box2 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

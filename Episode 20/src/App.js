import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Box from "./Components/Box";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <Header />
      <Box />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

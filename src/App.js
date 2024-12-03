import React from "react";
import Introduction from "./components/Introduction";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function App() {
  return (
    <div className="bg-[#0D1117] min-h-screen">
      <Introduction />
      <Technologies />
      <Projects />
      <Contacts />
    </div>
  );
}

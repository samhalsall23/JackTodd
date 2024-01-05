import React from "react";
import ProjectTile from "./components/ProjectTile";

import ToddDesigns from "./images/WHITELOGO-jack.png"

export default function Page() {
  return (
    <main>
      <div>
        <img src="./images/WHITELOGO-jack.png" alt='logo' />
      </div>
      <h1>This is a</h1>
      <ProjectTile />
    </main>
  );
}

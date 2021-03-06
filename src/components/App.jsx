import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry img={emojiTerm.emoji} tit={emojiTerm.name} det={emojiTerm.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>     //Looping through emojipedia array and sending each object to createEntry Function
    </div>
  );
}

export default App;

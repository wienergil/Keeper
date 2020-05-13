import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notesList, changeNotesList] = useState([]);

  function addNote(note){
    console.log("dsv");
    changeNotesList(prevList=>{
      return [...prevList,note]
    })
    console.log(notesList);
  }

  function deleteNote(id){
    console.log("IN");
        changeNotesList(prevList => {
       return prevList.filter((noteItem,index ) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAddButton={addNote} />

      {notesList.map((note, index) => (
        <Note 
        key ={index}
        id = {index}
        title={note.title} 
        content={note.body}
        deleteNote={deleteNote}
        />
      )
        )}
      <Footer />
    </div>
  );
}

export default App;

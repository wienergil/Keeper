import React, {useState} from "react";

function CreateArea(props) {

  const [note, updateNote] = useState({
    title: "",
    body: ""
  });

  function addText(event){
    const {name, value} = event.target;
    updateNote(prevValue =>{
      return{
        ...prevValue,
        [name]: value
      };
    })
    };


  function onPress(event){

    event.preventDefault();
    props.onAddButton(note);
  }

  return (
    <div>
      <form>
        <input onChange={addText} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={addText} name="body" placeholder="Take a note..." rows="3" value = {note.body}  />
        <button onClick={onPress}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


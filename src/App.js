import './App.css';
import React,{useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {db} from './firebaseCon'
import firebase from 'firebase'
import Task from './Task';



const App = () => {
  const [state , seState] = useState("")
  const [liststate , selistState] = useState([])

  useEffect(() => {
    getToDos();
  }, []) 

  function getToDos () {

    db.collection("todos").onSnapshot( function (dq) {
      selistState(
        dq.docs.map((doc) => ({
        id: doc.id ,
        todoF:doc.data().todoF ,
        inprogress:doc.data().inprogress ,
        

      })))
    })
  }


  function addtoDo (e) {
    e.preventDefault();
    if (state === "") return
    db.collection("todos").add({
      inprogress:true , 
      timeStamp:firebase.firestore.FieldValue.serverTimestamp() ,
      todoF:state ,
    })
    seState("");
  };

  return (
    <div className="app">
      <h1>Hello from to do app</h1>
  <form style={{margin:"10px"}}>
     <TextField
        value={state}
        onChange={(e) =>seState(e.target.value) & 
        console.log (state) } 
        id="standard-basic" 
        label="Write to do"
        style={{maxWidth:"330px" , width:"120vw" }}
       />

          <Button type='submit' variant="contained" onClick={addtoDo} style={{display:"none"}}>
             Default
          </Button>
  </form>
  {liststate.map ((todoes) => <Task todoF={todoes.todoF} inprogress = {todoes.inprogress} id={todoes.id}/>)}
    </div>
  );
}

export default App;

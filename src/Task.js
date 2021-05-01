import React from 'react'
import {ListItem , ListItemText , Button} from '@material-ui/core';
import { db } from './firebaseCon';


function Task({todoF , inprogress , id}) {
    function inpro () {
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        })
    }
    
    function deleteed () {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText primary={todoF} secondary={inprogress ?  "in Progress" : "Completed"}/>
            </ListItem>
            <Button onClick={inpro}>{inprogress ?  "Done" : "UnDone"}</Button>
            <Button onClick={deleteed}>X</Button>

        </div>
    )
}

export default Task

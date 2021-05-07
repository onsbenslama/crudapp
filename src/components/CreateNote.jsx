import React, {useState} from "react";
import axios from "axios";
function  CreateNote () {
    const [input, setInput]= useState({
        title:'',
        content:''
    })
    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }
 function handleClick (event)  {
     event.preventDefault();
     const newNote = {
         title: input.title,
         content:input.content
     }
    axios.post('http://localhost:3001/create', newNote)
 }  
        

    return <div className="container">
        <h1>Creer une note </h1>
        <form>
            <div className='form-group'>
                <input onChange={handleChange} name="title" value ={input.title} autoComplete ="off" className="form-control" placeholder="Note title"></input>
            </div>
            <div className='form-group'>
                <textarea onChange= {handleChange} name="content" value={input.content} autoComplete ="off" className="form-control" placeholder="Note content" ></textarea>
            </div>
            <button onClick ={handleClick} className="btn btn-lg btn-info">Add note</button>
            </form>
    
    </div>
}
export default CreateNote;
import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'



function CreateEvents() {
    const [name, setName]=useState("")
    const [group, setGroup]=useState("")
    const [date, setDate]=useState("")
    const [age, setAge]=useState("")
    const [location, setLocation]=useState("")
    const [images, setImages]=useState("")
    const [description, setDescription]=useState("")
    const handleImage = e => {
        let input = e.target;
        for (let i = 0; i < input.files.length; i++) {
          let reader = new FileReader();
          reader.onload = b =>
            setImages(images.concat(b.target.result));
          reader.readAsDataURL(input.files[i]);
        }
      };
    const handlePost = (
            name,
            group,
            date,
            age,
            location,
            images,
            description
    ) => {
        axios.post("http://localhost:2500/events", {
            name:name,
            group:group,
            date:date,
            age:age,
            location:location,
            images:images,
            description:description
        })
    }
    return (
        <div className="form-container">
            <h1>Create your Awesome Event</h1>
            <form onSubmit= {e => {
                e.preventDefault()
                handlePost(
                    name,
                    group,
                    date,
                    age,
                     location,
            images,
            description
                )
            }}>
                <div className="input-container">
            
            <br></br>
                    <TextField required label="Event Name" id="event-name" style={{width:"500px"}} onChange={e => setName(e.target.value)}>

                    </TextField>
                </div>
                <div className="input-container">
            
            <br></br>
                    <TextField required label="Group" id="event-group" style={{width:"500px"}} onChange={e => setGroup(e.target.value)}>

                    </TextField>
                </div>

                <div className="input-container">
             
          
             <TextField required label="Date"id="event-date" style={{width:"500px"}} onChange={e => setDate(e.target.value)}>

             </TextField>
         </div>
         <div className="input-container">
            
           
                    <TextField required label="Age Range" id="event-age" style={{width:"500px"}} onChange={e => setAge(e.target.value)}>

                    </TextField>
                </div>


                <div className="input-container">
             
          
                    <TextField required label="Location"id="event-location" style={{width:"500px"}} onChange={e => setLocation(e.target.value)}>

                    </TextField>
                </div>

                <div className="input-container">
             
          
            
             <input
                id="file-input"
                type="file"
                onChange={e => handleImage(e)}
                multiple
              ></input>
              <div id="label">Media</div>
    
         </div>
         
    
                
                <div className="input-container">
                
            <br></br>
                    <TextField required label="Description" id="event-description" rows="15" style={{width:"500px"}} multiline variant="outlined" onChange={e => setDescription(e.target.value)} >

                    </TextField>
                </div>
                <div className="input-container">
                
            <br></br>
                    <button className="go"><span>Go</span></button>
                </div>
            </form>
        </div>
    )
}

export default CreateEvents
import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'
import AlertDialog from './AlertDialog'
import { useAuth0 } from "../react-auth0-spa";
import {Card} from '@material-ui/core'



function CreateEvents() {
    const { loading, user } = useAuth0();
    const [name, setName]=useState("")
    const [date, setDate]=useState("")
    const [age, setAge]=useState("")
    const [location, setLocation]=useState("")
    const [images, setImages]=useState("")
    const [description, setDescription]=useState("")
    const [clicked, setClicked] = useState(false)
    const [creator, setCreator] = useState("")
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
            date,
            age,
            location,
            images,
            description,
            creator
    ) => {
        axios.post("http://localhost:2500/events", {
            name:name,
            date:date,
            age:age,
            location:location,
            images:images,
            description:description,
            creator: creator
        })
    }
    useEffect(() => {
        setCreator(user.name)
    })
    return (
        <div className="form-container">
            <Card className="create-events-card" style={{width: "600px", margin: '0 auto'}}>

            <h1>Create your Awesome Event</h1>
            <form onSubmit= {e => {
                e.preventDefault()
                handlePost(
                    name,
                    date,
                    age,
                     location,
            images,
            description,
            creator
                )
                setClicked(true)
            }}>
                <div className="input-container">
            
            <br></br>
                    <TextField required label="Event Name" id="event-name" style={{width:"500px"}} onChange={e => setName(e.target.value)}>

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
            <AlertDialog props={{name,            date,
            age,
            location,
            images,
            description,
            page: 'event', clicked, handlePost }}></AlertDialog>
                    {/* <button className="go" ><span>Go</span></button> */}
                </div>
            </form>
            </Card>

        </div>
    )
}

export default CreateEvents
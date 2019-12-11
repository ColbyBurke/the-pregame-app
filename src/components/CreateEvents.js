import React from 'react'
import { TextField } from '@material-ui/core'



function CreateEvents() {
    return (
        <div className="form-container">
            <h1>Create your Awesome Event</h1>
            <form>
                <div className="input-container">
            
            <br></br>
                    <TextField required label="Event Name" id="group-name" style={{width:"500px"}}>

                    </TextField>
                </div>

                <div className="input-container">
             
          
             <TextField required label="Date"id="group-date" style={{width:"500px"}}>

             </TextField>
         </div>


                <div className="input-container">
             
          
                    <TextField required label="Location"id="group-location" style={{width:"500px"}}>

                    </TextField>
                </div>

                <div className="input-container">
             
          
             <TextField required label="Images"id="group-images" style={{width:"500px"}}>

             </TextField>
         </div>
         
    
                
                <div className="input-container">
                
            <br></br>
                    <TextField required label="Description" id="group-description" rows="15" style={{width:"500px"}} multiline variant="outlined"  >

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
import React from 'react'
import { TextField } from '@material-ui/core'



function CreateGroups() {
    return (
        <div className="form-container createGroup">

            <h1>Create your Awesome Group</h1>
            <form>
                <div className="input-container">

                    <br></br>
                    <TextField required label="Group Name" id="group-name" style={{ width: "500px" }}>

                    </TextField>
                </div>


                <div className="input-container">


                    <TextField required label="Age Range" id="group-ageRange" style={{ width: "500px" }}>

                    </TextField>
                </div>


                <div className="input-container">

                    <br></br>
                    <TextField required label="Description" id="group-description" rows="15" style={{ width: "500px" }} multiline variant="outlined"  >

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

export default CreateGroups
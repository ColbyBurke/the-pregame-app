import React, {useState, useEffect} from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'
import AlertDialog from './AlertDialog'
import { useAuth0 } from "../react-auth0-spa";




function CreateGroups() {
    const { loading, user } = useAuth0();
    const [name, setName] = useState("")
    const [comments, setComments] = useState([])
    const [events, setEvents] = useState([])
    const [groupLeader, setGroupLeader] = useState("")
    const [description, setDescription] = useState("")
    const [age, setAge] = useState("")
    const [clicked, setClicked] = useState(false)
    const handlePost = (
        name,
        comments,
        events,
        groupLeader,
        description,
        age
    ) => {
        axios.post("http://localhost:2500/groups", {
            name: name,
            comments: comments,
            events: events,
            groupLeader: groupLeader,
            description: description,
            age: age
        })
    }
    useEffect(() => {
        setGroupLeader(user.email)
    },[])
    if (loading || !user){
        return <div>Loading ...</div>
    }
    
        return (

            <div className="form-container createGroup">

                <h1>Create your Awesome Group</h1>
                <form>
                    <div className="input-container">

                        <br></br>
                        <TextField required label="Group Name" id="group-name" style={{ width: "500px" }} onChange={e => setName(e.target.value)}>

                        </TextField>
                    </div>


                    <div className="input-container">


                        <TextField required label="Comments" id="group-comments" style={{ width: "500px" }} onChange={e => setComments(e.target.value)}>

                        </TextField>
                    </div>


                    <div className="input-container">

                        <br></br>
                        <TextField required label="Events" id="group-events" rows="15" style={{ width: "500px" }} multiline variant="outlined" onChange={e => setEvents(e.target.value)} >

                        </TextField>
                    </div>
                    
                    <div className="input-container">

                        <br></br>
                        <TextField required label="Description" id="group-description" rows="15" style={{ width: "500px" }} multiline variant="outlined" onChange={e => setDescription(e.target.value)} >

                        </TextField>
                    </div>
                    <div className="input-container">

                        <br></br>
                        <TextField required label="Age Range" id="group-age" rows="15" style={{ width: "500px" }} multiline variant="outlined"  onChange={e => setAge(e.target.value)}>

                        </TextField>
                    </div>
                    <div className="input-container">

                        <br></br>
                        <AlertDialog props={{handlePost, name, comments, events, groupLeader, description, age, page: 'createGroup', clicked}}/>
                    </div>
                </form>

            </div>
        )
    }

    export default CreateGroups
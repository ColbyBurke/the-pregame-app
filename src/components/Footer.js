import React from "react"
import { Card } from '@material-ui/core'



function Footer() {
    return (
        <Card  style={{
            borderRadius: '0px'
        }}>
            <div className="footer-container">
                <p style={{
                    paddingLeft: '1.5%',
                    paddingTop: '1.4%'
                }}>&copy;Web page made by JRS students</p>
            </div>
        </Card>
    )
}

export default Footer
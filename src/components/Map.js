import React from 'react'
export default function Map({location}){
    console.log(location);
    return (
        <div
              className="mapouter"
              style={{
                position: "relative",
                textAlign: "right",
                height: "200px",
                width: "300px",
                border: '1px solid #0074D9',
                boxShadow: '0 0 3px #ccc'
              }}
            >
              <div
                className="gmap_canvas"
                style={{
                  overflow: "hidden",
                  background: "none!important",
                  height: "100%",
                  width: "300px"
                }}
              >
                <iframe
                  width="300"
                  height="200"
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
    )
}
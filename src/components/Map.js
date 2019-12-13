import React from 'react'
export default function Map({location}){
    console.log(location);
    return (
        <div
              class="mapouter"
              style={{
                position: "relative",
                textAlign: "right",
                height: "500px",
                width: "600px",
                border: '1px solid #0074D9',
                boxShadow: '0 0 3px #ccc'
              }}
            >
              <div
                class="gmap_canvas"
                style={{
                  overflow: "hidden",
                  background: "none!important",
                  height: "100%",
                  width: "600px"
                }}
              >
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
    )
}
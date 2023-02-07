import React from "react";

const Display = () => {
    return (
        <div id = "display" className= "inner-con">
            <div id = "side-bar">
            <h2 style={{textAlign:"justify"}}>iPod.js</h2> 
            <div className="options">Cover Flow
                <span> &#62; </span>                
            </div>
            <div className="options">Music
                <span> &#62; </span>
            </div>
            <div className="options">Games
                <span> &#62; </span>
            </div>
            <div className="options">Setting
                <span> &#62; </span>
            </div>
            
            </div>
        </div>
    )
}

export default Display;
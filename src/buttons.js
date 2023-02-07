import React from "react";

const Button = () => {
    return(
        <div className='inner-con' id = "DivOfBtn">

          <div id = "button-div" className='inner-con'>

            <div className='wheel-divs' style={{top : "51%"}}>
              <b> Menu </b>
            </div>

            <div className='wheel-divs' style={{left : "39%"}}>
              <img src='https://cdn-icons-png.flaticon.com/512/7625/7625621.png'></img>
            </div>

            <div style={{height:'40%', width:'40%', backgroundColor:"lightgrey",borderRadius:'50%'}}>

            </div>

            <div className='wheel-divs' style={{right : "39%"}}>
              <img src='https://cdn-icons-png.flaticon.com/512/6364/6364389.png'></img>
            </div>

            <div className='wheel-divs' style={{bottom : "15%"}}>
              <img src='https://cdn-icons-png.flaticon.com/512/7960/7960808.png'></img>
            </div>

          </div>
        </div>
    )
}

export default Button;
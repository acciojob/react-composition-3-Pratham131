
import React, {useState} from "react";
import './../styles/App.css';


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text={"This is a tooltip"}>
          <p>Hover over me</p>
        </Tooltip>
        <Tooltip text={"This is another tooltip"}>
          <p>Hover over me to see another tooltip</p>
        </Tooltip> 
    </div>
  )
}

export default App

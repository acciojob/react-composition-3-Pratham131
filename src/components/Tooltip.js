import React, {useState} from "react"
export const Tooltip = ({text, children}) => {
    const [showToolTip, setShowToolTip] = useState(false)
  
    const show = () => {
      setShowToolTip(true);
    }
  
    const hide = () => {
      setShowToolTip(false);
    }
  
    return <>
      {
        showToolTip && <div className= "tooltip">
          <b className="toottiptext">{text}</b>
        </div>
      }
        <div onMouseEnter={show} onMouseLeave={hide}>
          {children}
        </div>
    </>
  }
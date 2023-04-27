import React from 'react'
import "./Tech.css"
import { Link, Outlet} from "react-router-dom"
const Technology = () => {
  return (
    <>
      <div className="tech-Container">
        <div className="right-box">
          <Link to={"Html"} style={{textDecoration:"none" , color:"black"}}>
            <h2>Html</h2>

          </Link>
          <Link to={"Css"} style={{textDecoration:"none" , color:"black"}}>
            <h2>Css</h2>

          </Link>
          <Link to={"Javascript"} style={{textDecoration:"none" , color:"black"}}>
            <h2>JavaScript</h2>

          </Link>
          <Link to={"Reactjs"} style={{textDecoration:"none" , color:"black"}}>
            <h2>Reactjs</h2>

          </Link>
        </div>
        <div className="left-box">
          
          <Outlet/>
        </div>
      </div>

    </>
  )
}

export default Technology

import React from "react"
import { Link } from "react-router-dom"

class NavBar extends React.Component{
   constructor(props) {
        super(props)
   }

   render(){
    return(
        <>
            <Link to="/"><button>HOME</button></Link>
            <Link to="/form"><button>FORM</button></Link>
            <hr />
        </>
    )
   }
}


export default NavBar
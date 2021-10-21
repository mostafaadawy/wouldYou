import React, { Component } from "react"
import {Link} from "react-router-dom"
class Footer extends Component{
    render() {
        return(
            <footer>
                <div className='inner'>
                <div>
                Copyright © 2017 All Rights Reserved Mostafa Adawy 
                <Link to={{pathname: "https://github.com/mostafaadawy"}} target='_blank' className='github'></Link>
                <Link to={{pathname: "https://web.facebook.com/mostafa.adawy.96/"}} target='_blank' className='facebook'></Link>
                <Link to={{pathname: "mailto:mostafa_adawy@ymail.com"}} target='_blank' className='atemail'></Link>
                <Link to={{pathname: "https://www.linkedin.com/in/%E2%80%ABmostafa-adawy%E2%80%AC-%E2%80%AB-11b937125/"}} target='_blank' className='linkedin'></Link>
                </div>
                </div>
        </footer>
      
      )
    }
}
export default Footer
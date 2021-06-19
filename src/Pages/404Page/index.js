import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Image404 from '../../Images/404 Page.jpg'
import './style.css'
const NotFound = () => {
    useEffect(() => {
        document.title = "Fresho - 404 Not Found!"
      }, [])
    return (
        <div className="pageNotFound">
            <img src={Image404} alt="404 Page Not Found!" />
        <Link to="/" className="link404">Go to Home</Link>
        </div>
    )
}

export default NotFound

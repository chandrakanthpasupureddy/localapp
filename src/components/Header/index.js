import { Link } from "react-router-dom"
import "./index.css"
const Header = () =>{
    return(
        <div className="hed-cont">
            <div className="img-cont">
            <img src = "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726058487/unnamed_lfeczo.png" 
            alt = "img"
            className="hed-img"/>
            <h2 className="hed">LOKAL APP</h2>
            </div>
            <div className="para">
                <Link to = "/">
                <h3 className="pa">Home</h3>
                </Link>
                <Link to="/page">
                <h3>Bookmarks</h3>
                </Link>
                
            </div>
        </div>
    )
}
export default Header
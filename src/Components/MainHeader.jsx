import { Link } from "react-router-dom"
import HeaderImage from '../assets/images/header.jpg'

const MainHeader = () => {
  return (
    <header className="main_header">{
        <div className="main_header-container">
          <div className="main_header-left">
            <h4>#VisitOurShop&Buy!</h4>
            <h1>Get the best Items!!!</h1>
            <h5>QUALITY PRODUCTS FROM US</h5>
              <p>
              Pradeepa Electricals , Pallegama , Embilipitiya.
              </p>
              <Link to="/explore" className="btn lg">Explore!</Link>
              </div>
        
            <div className="main_header-right">
              <div className="main_header-circle"></div>
              <div className="main_header-image">
                <img src={HeaderImage} alt="INSPIRATIONAL IMAGE MISSING" className="img"/>
              </div>
    
            </div>
          </div>}
       </header>
      )
    }
    
    export default MainHeader
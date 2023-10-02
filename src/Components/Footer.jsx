import { Link } from "react-router-dom"
import Logo from '../assets/images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to ="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                Connect with us on social media to stay in the loop with our latest articles.
                </p>
                <div className="footer_social">
                    <a href="https://linkedin.com" target="_blank" className="href"  rel="noopener noreferrer"><FaLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" className="href"  rel="noopener noreferrer"><FaFacebook/></a>
                    <a href="https://twitter.com" target="_blank" className="href"  rel="noopener noreferrer"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target="_blank" className="href"  rel="noopener noreferrer"><AiOutlineInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/explore">Inspire</Link>
                <Link to="/contact">Contact</Link>

            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Product series</Link>
                <Link to="/s">Customers</Link>
                <Link to="/s">FAQs</Link>
                <Link to="/s">Communities</Link>

            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>2023 Basadhi Pradeepa_electricals &copy;All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
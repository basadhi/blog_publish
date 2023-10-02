import './contact.css'

import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'



const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    We're passionate about sharing knowledge and stories with you.

   "Browse our categories to find articles that pique your interest."

    </Header>
    <section className='contact'>
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href='bashadithennakoon@gmail.com' target="_blank" rel="noopener noreferrer"><MdEmail/></a>
          <a href='http://m.me/bashadi_thennakoon' target="_blank" rel="noopener noreferrer"><BsMessenger/></a>
          <a href='http://wa.me/+94761546870' target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
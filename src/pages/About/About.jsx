import './about.css'
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header.jpg'
import StoryImage from '../../assets/images/elec.jpg'

import Contact from '../Contact/Contact'

const About = () => {
  return (
    <>
    <Header title="About Us" className='header'
    image={HeaderImage}>
      <p>We're passionate about sharing our products  with you.</p>
<p>"Browse our categories to find more items that pique your necessity."</p>
      </Header>

      <section className='about_story'>
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
            Thank you for being a part of our online community.
             We're dedicated to providing you with the best products we have.
              </p>
            
            <p>
            Your support motivates us to continue sharing more original and best items from the branded companies
            such as ,
            </p>
            <ul>
              <li >Orange</li>
              <li>Terasaki</li>
              <li>Hagger</li>
              <li>Kelani</li>
              <li>ACL</li>
            </ul>

          </div>
        </div>
        
      </section>

      <Contact/>

      
    

      </>
  )
}

export default About
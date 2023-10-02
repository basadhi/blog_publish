import './about.css'
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header.jpg'
import StoryImage from '../../assets/images/header.jpg'
import VisionImage from '../../assets/images/header.jpg'
import MisionImage from '../../assets/images/header.jpg'

const About = () => {
  return (
    <>
    <Header title="About Us"
    image={HeaderImage}>
      <p>We're passionate about sharing knowledge and stories with you.</p>
<p>"Browse our categories to find articles that pique your interest."</p>
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
             We're dedicated to providing you with valuable content and insights.
              </p>
            <p>
            Whether you're here for information, inspiration, or entertainment,
               we hope our articles have enriched your day.
            </p>
            <p>
            Your support motivates us to continue sharing knowledge and stories with you. Stay connected with us 
                on social media, subscribe to our newsletter, and explore our ever-growing 
                archive of articles. We look forward to continuing this journey together 
                and appreciate your ongoing readership.
            </p>

          </div>
        </div>
        
      </section>

      <section className='about_vision'>
        <div className="container about_vision-container">
          
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
            Thank you for being a part of our online community.
             We're dedicated to providing you with valuable content and insights.
              </p>
            <p>
            Whether you're here for information, inspiration, or entertainment,
               we hope our articles have enriched your day.
            </p>
            <p>
            Your support motivates us to continue sharing knowledge and stories with you. Stay connected with us 
                on social media, subscribe to our newsletter, and explore our ever-growing 
                archive of articles. We look forward to continuing this journey together 
                and appreciate your ongoing readership.
            </p>
            

          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
        
      </section>
      <section className='about_mission'>
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MisionImage} alt="Our Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mision</h1>
            <p>
            Thank you for being a part of our online community.
             We're dedicated to providing you with valuable content and insights.
              </p>
            <p>
            Whether you're here for information, inspiration, or entertainment,
               we hope our articles have enriched your day.
            </p>
            <p>
            Your support motivates us to continue sharing knowledge and stories with you. Stay connected with us 
                on social media, subscribe to our newsletter, and explore our ever-growing 
                archive of articles. We look forward to continuing this journey together 
                and appreciate your ongoing readership.
            </p>

          </div>
        </div>
        
      </section>
      


      </>
  )
}

export default About
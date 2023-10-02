import './gallery.css'
import Header from '../../Components/Header'
import HeaderImage from '../../assets/images/header.jpg'


const Gallery = () => {

  const galleryLength=4;
  const images=[];

  for (let i=1; i <= galleryLength;i++){
    images.push(require(`../../assets/Shop lamps/${i}.jpg`))
  }




  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    We're passionate about sharing our items and products with you. "Browse our categories to find shops that pique your interest.

    </Header>
    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image,index) =>{
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`}/>
            </article>
          } )
        }
      </div>
    </section>
    


    </>
  )
}

export default Gallery
import './explore.css'
import Header from '../../Components/Header'
import Card from '../../UI/Card'
import HeaderImage from '../../assets/images/header.jpg'
import {plans} from '../../data'

const Inspire = () => {
  return (
    <>
    <Header title ="Inspire from the Quotes" image={HeaderImage}>
    We're passionate about sharing knowledge and stories with you. "Browse our categories to find articles that pique your interest.
        </Header>
    <section className='plans'>
      <div className="container plans_container">
        {
          plans.map(({id,name,desc,price,features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature,available},index) => {
                  return <p key={index} className={!available ? ' disabled ' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>

    </>
    
  )
}

export default Inspire
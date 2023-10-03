import './explore.css'
import Header from '../../Components/Header'
import Card from '../../UI/Card'
import HeaderImage from '../../assets/images/header.jpg'
import {plans} from '../../data'

const Inspire = () => {
  return (
    <>
    <Header title ="Explore our wiring section!" image={HeaderImage}>
    We're eager in sharing the best series of wiring collection with you.Visit our shop in Embilipitiya!
        </Header>
    <section className='plans'>
      <div className="container plans_container">
        {
          plans.map(({id,name,desc,price,features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`Rs.${price}`}</h1><h2>/item</h2>
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
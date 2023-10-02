import {CiShoppingTag} from 'react-icons/ci'
import SectionHead from './SectionHead'

import { products } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import {AiOutlineShop} from 'react-icons/ai'


const Programs = () => {
  return (
    <section className="products">
        <div className="container product_container">
            <SectionHead icon={<AiOutlineShop/>} title="Products"/>
        

    <div className="products_wrapper">
        {
            products.map(({id,icon,title,info,path})=>{
                return (
                    <Card className="products_product" key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className='btn sm'>Shop Now!
                        <CiShoppingTag/></Link>
                    </Card>
                )
            })
        }
    </div>
    </div>
    </section>
  )
}

export default Programs
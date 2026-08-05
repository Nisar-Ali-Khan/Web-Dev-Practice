import './Product.css'
import Price from './Price'

function Product({ title, description, oldPrice, newPrice }) {
  return (
    <div className="product">
      <h4>{title}</h4>
      <p>{description}</p>
      <Price oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  )
}

export default Product

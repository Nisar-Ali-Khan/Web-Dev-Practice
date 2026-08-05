import Product from './Product'

const products = [
  {
    title: 'Product 1',
    description: 'Description 1',
    oldPrice: '234',
    newPrice: '199',
  },
  {
    title: 'Product 2',
    description: 'Description 2',
    oldPrice: '234',
    newPrice: '199',
  },
  {
    title: 'Product 3',
    description: 'Description 3',
    oldPrice: '234',
    newPrice: '199',
  },
]

function ProductTab() {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.title} {...product} />
      ))}
    </div>
  )
}

export default ProductTab

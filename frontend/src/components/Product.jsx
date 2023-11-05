import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product.name}`}>
            <Card.Img src={product.image} variant='top' /> {/* variant = positioning */}
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'> {/* as='div' is to display Card.Title as a div */}
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product

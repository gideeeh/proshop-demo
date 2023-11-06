import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
/*  import products from '../products';this is removed because instead
of fetching data from a hardfile, we now fetch data from the backend. Use effect hook to fetch data*/ 
import Product from '../components/Product'; 
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                { products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl = {3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
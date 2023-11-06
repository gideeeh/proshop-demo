import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js'
const port = process.env.PORT || 5000; /* Prefix process before env then call env variable to call var from .env */

const app = express();

app.get('/', (req, res) => { /* Sample get request uri to respond with API is running... text */
    res.send('API is running...');
});

app.get('/api/products', (req,res) => { /* API to get the list of products. Listening to the url */
    res.json(products);
})

app.get('/api/products/:id', (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

app.listen(port,() => console.log(`Server running on port ${port}`));
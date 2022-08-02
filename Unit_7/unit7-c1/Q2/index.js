const fs = require('fs');
let data = fs.readFileSync('products.json');
let allData = JSON.parse(data);

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    console.log(req.method, req.path);
    next();
})

//get all products
app.get('/products', (req, res) => {
    return res.status(200).send({
        Products: allData
    });
});

//create a new product
app.post('/products/create', (req, res) => {
    let newProduct = req.body;
    allData.push(newProduct);
    fs.writeFile("products.json", JSON.stringify(allData), (err) => {
        if (err) throw err;
    }
    );
    return res.status(200).send({
        message: 'Product created successfully',
        Product: newProduct
    });
}
);

//delete a product
app.delete('/products/:productId', (req, res) => {
    let id = req.params.productId;
    let index = allData.findIndex(product => product.id == id);
    if(index == -1){
        return res.status(404).send({
            message: 'Product not found'
        });
    }
    allData.splice(index, 1);
    fs.writeFile("products.json", JSON.stringify(allData), (err) => {
        if (err) throw err;
    }
    );
    return res.status(200).send({
        message: 'Product deleted successfully'
    });
}
);

//update a product
app.put('/products/:productId', (req, res) => {
    let id = req.params.productId;
    let index = allData.findIndex(product => product.id == id);
    if(index == -1){
        return res.status(404).send({
            message: 'Product not found'
        });
    }
    allData[index] = req.body;
    fs.writeFile("products.json", JSON.stringify(allData), (err) => {
        if (err) throw err;
    }
    );
    return res.status(200).send({
        message: 'Product updated successfully'
    });
}
);



app.listen(5000, () => {
    console.log('Server is running on port 5000');
})

const dns = require('dns');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    console.log(req.method, req.path);
    next();
}
);
//get ip post request
app.post('/getmeip', (req, res) => {
    let { website_name } = req.body;
    // console.log(website_name);
    dns.lookup(website_name, (err, address) => {
        if (err) {
            return res.status(404).send({
                message: 'Website not found'
            });
        }
        return res.status(200).send({
            website_name: website_name,
            ip_address: address
        });
    }
    );
});

app.listen(7000, () => {
    console.log('Server is running on port 7000');
});
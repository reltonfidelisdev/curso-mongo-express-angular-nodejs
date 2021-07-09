const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    
    try {
        let product;
        
        //Criamos o objeto produto
        product = new Product(req.body);
        await product.save();
        res.send(product);
;
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno');
    }

}

exports.listProducts = async (req, res) => {

    try {
        
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno')
    }

}

exports.listProductById = async (req, res) => {

    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({msg: 'Product not found!'});
        }

        res.json(product);

    }catch(error){
        console.log(error);
        res.status(500).send('Product not found!');
    }
}

exports.updateProducts = async (req, res) => {
    try {

        const {name, category, pizzaria, price} = req.body;
        let product = await Product.findById(req.params.id);

        if(!product){
            res.status(404).json({msg: 'No product found!'})
        }
        
        product.name = name;
        product.category = category;
        product.pizzaria = pizzaria;
        product.price = price;

        product = await Product.findOneAndUpdate({ _id:req.params.id}, product, {new: true})
        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno')
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({msg: 'Product not found!'});
        }

        await Product.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'The product has Deleted!' });

    }catch(error){
        console.log(error);
        res.stsus(500).send('Product not found!');
    }
}
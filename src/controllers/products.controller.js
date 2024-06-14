import { ProductService } from "../services/products.service.js"

export class ProductsController {
    prods = async(req, res) => {
        try{
            const products = await ProductService.getAllProdsViews(req)
            res.status(200).json(products.response)
        }
        catch(error){
            res.status(500).json('There is an error in the server.', error)
        }
    }

    findId = async(req, res) => {
        let pid = req.params.pid
        try{
            const findProd = await ProductService.findIdProd(pid)
            res.json(findProd)
        }
        catch (error){
            res.status(500).json('There is an error with the ID / Item not Found.', error)
        }
    }

    addProd = async(req, res) => {
        const newProduct = req.body
        try{
            const product = await ProductService.addProducts(newProduct)
            res.send({message: 'This Product has been added', product: product})
        }
        catch(error){
            res.status(500).json('There is an error with adding this product.', error)
        }
    }

    changeProd = async(req, res) => {
        let pid = req.params.pid
        const prod = req.body
        try{
            const prodChange = await ProductService.updateProd(pid, prod)
            res.send({message: 'This Product has been changed', product: prodChange})
        }
        catch(error){
            res.status(500).json('There is a problem with the change of the product.', error)
        }
    }

    deleteProd = async(req, res) => {
        let pid = req.params.pid
        try{
            const delProduct = await ProductService.deleteProduct(pid)
            res.send({message: 'This Product has been eliminated', product: delProduct})
        }
        catch(error){
            res.status(500).json('We could not delete the product.', error)
        }
    }
}
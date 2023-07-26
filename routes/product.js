import express from 'express'
import { createProduct, getProductById } from '../controller/product.js'

const product=express.Router()

product.post('/',createProduct)
product.get('/:idVideo',getProductById)

export default product;
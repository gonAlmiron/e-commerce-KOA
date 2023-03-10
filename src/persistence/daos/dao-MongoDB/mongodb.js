import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../../../logs/logger';

dotenv.config();

mongoose.set('strictQuery', false);

export default class DaoMongoDB {
    constructor(collection, schema){
        this.collection = mongoose.model(collection, schema);
        this.initDB = mongoose.connect(process.env.MONGO_ATLAS_URL);
    }

    async initMongoDB() {
        return this.initDB;
    }

    async save(doc) {
        try {
            const productoCreado = await this.collection.create(doc);
            return productoCreado;
        } catch (error) {
            logger.error(error);
        }
    }

    async getAll() {
        try {
            const productos = await this.collection.find({});
            return productos;
        } catch (error) {
            logger.error(error);
        }
    }

    async getProduct(id) {
        try {
            const product = await this.collection.findById(id)
            return product;
        } catch (err) {
            logger.error(err)
        }
    }

    async deleteProduct(id) {
        try { 
            const productDeleted = await this.collection.findByIdAndDelete(id)
            return productDeleted
        } catch (err) {
            logger.error(err)
        }
    }

    async updateProduct(id, newProductData) {
        try {
            const productUpdated = await this.collection.findByIdAndUpdate(id, newProductData)
            return productUpdated
        } catch(err) {
            logger.error(err)
        }
    }
}
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
   constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}
  
   async createProduct(productName: string, price: number) {
      const product = await this.productRepository.save({ productName, price});
      console.log("Product created");
      return this.productRepository.save(product);
   }

   getAllProducts(productName: string) {
      return this.productRepository.find({ where: {productName} })
   }

   getById(id: number) {
      return this.productRepository.findOneBy({ id })
   }

   async update(id: number, atributtes: Partial<Product>) {
      const product = await this.getById(id);
      if (!product) {
         throw new NotFoundException('product not found')
      }

      Object.assign(product, atributtes);
      return this.productRepository.save(product)
   }

   async delete(id:number) {
      const product = await this.getById(id);
      if (!product) {
         throw new NotFoundException('product not found')
      }
      return this.productRepository.delete(product)
   } 
}
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { createProductDTO } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('')
  createProduct(@Body() body: createProductDTO) {
    this.productService.createProduct(
      body.productName,
      body.price,
    )  
  }

  @Get()
  listAllProducts( productName: string) {
    return this.productService.getAllProducts(productName)
  }

  @Get('/:id')
  async findProduct(@Param('id') id: number) {
    const product = await this.productService.getById((id));
    if (!product) {
      throw new NotFoundException('product not found')
    }
    return product
  }

  @Patch('/:id')
  updateProduct(@Param('id') id: number, @Body() body: createProductDTO) {
    return this.productService.update((id), body)
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.delete((id))
  }
}
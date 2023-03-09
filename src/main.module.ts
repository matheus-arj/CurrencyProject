import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product/product.entity";
import { ProdutoModule } from "./product/product.module";


@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    database: 'product',
    username: 'postgres',
    password: 'postgres',
    entities: [Product],
    synchronize: true,
  }), 
  ProdutoModule],
  // controllers: [ProdutoController],
  // providers: [ProdutoService],
})
export class MainModule {}
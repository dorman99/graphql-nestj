import { Module } from "@nestjs/common";
import { OrderAPIService } from "./order.api.service";

@Module({
    providers: [OrderAPIService], 
    exports: [OrderAPIService]
})
export class OrderAPIModule{}
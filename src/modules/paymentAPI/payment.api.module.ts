import { Module } from "@nestjs/common";
import { PaymentAPIService } from "./payment.api.service";

@Module({
    providers: [PaymentAPIService], 
    exports: [PaymentAPIService]
})
export class PaymentAPIModule {}
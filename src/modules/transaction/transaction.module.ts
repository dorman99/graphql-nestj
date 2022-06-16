import { Module } from '@nestjs/common';
import { OrderAPIModule } from '../orderAPI/order.api.module';
import { PaymentAPIModule } from '../paymentAPI/payment.api.module';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';

@Module({
  imports: [PaymentAPIModule, OrderAPIModule],
  providers: [TransactionService, TransactionResolver],
})
export class TransactionModule {}

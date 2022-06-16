import { Injectable } from '@nestjs/common';
import { OrderAPIService } from '../orderAPI/order.api.service';
import { PaymentAPIService } from '../paymentAPI/payment.api.service';
import { TransactionDto } from './dto/transaction.dto';
import { CreateTransactionInput } from './input/createTransaction.input';

@Injectable()
export class TransactionService {
  constructor(
    private orderAPIService: OrderAPIService,
    private paymentAPIService: PaymentAPIService,
  ) {}

  async getTransacitonDetail(orderId: string): Promise<TransactionDto> {
    const orderDetail = await this.orderAPIService.getOrder(orderId);
    const paymentDetail = await this.paymentAPIService.getPayment(orderId);
    const transaction: TransactionDto = new TransactionDto(
      orderDetail.id,
      orderDetail.customerName,
      paymentDetail.id,
      paymentDetail.status,
    );
    return transaction;
  }

  async createTransaction(data: CreateTransactionInput): Promise<TransactionDto> {
    console.info("DATA CREATION FOR ORDER ", data);
    const orderDetail = await this.orderAPIService.createOrder();
    const paymentDetail = await this.paymentAPIService.createPayment(orderDetail.id);
    const transaction: TransactionDto = new TransactionDto(
      orderDetail.id,
      orderDetail.customerName,
      paymentDetail.id,
      paymentDetail.status,
    );
    return transaction;
  }
}

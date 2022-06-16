import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { TransactionDto, TransactionDtoResult } from './dto/transaction.dto';
import { CreateTransactionInput, CreateTransactionResult } from './input/createTransaction.input';
import { TransactionService } from './transaction.service';

@Resolver()
export class TransactionResolver {
  constructor(private transactionService: TransactionService) {}

  @Query(() => TransactionDtoResult)
  async getTransactionDetail(
    @Args('orderId', { type: () => String }) orderId: string,
  ): Promise<TransactionDto> {
    return await this.transactionService.getTransacitonDetail(orderId);
  }

  @Mutation(() => CreateTransactionResult)
  async createTransaction(@Args('data') data: CreateTransactionInput): Promise<TransactionDto> {
    return this.transactionService.createTransaction(data)
  }
}

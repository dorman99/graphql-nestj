import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { ErrorDto } from 'src/common/dto';

@ObjectType()
export class TransactionDto {
  @Field()
  customerName: string;
  @Field()
  orderId: string;
  @Field()
  paymentId: string;
  @Field()
  paymentStatus: string;
  constructor(
    customerName: string,
    orderId: string,
    paymentId: string,
    paymentStatus: string,
  ) {
    this.customerName = customerName;
    this.orderId = orderId;
    this.paymentId = paymentId;
    this.paymentStatus = paymentStatus;
  }
}

export const TransactionDtoResult = createUnionType({
  name: 'TransactionResult',
  types: () => [TransactionDto, ErrorDto] as const,
});

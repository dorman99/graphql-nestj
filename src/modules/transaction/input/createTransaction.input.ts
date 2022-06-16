import { createUnionType, Field, InputType } from "@nestjs/graphql";
import { ErrorDto } from "src/common/dto";
import { TransactionDto } from "../dto/transaction.dto";


@InputType()
export class  CreateTransactionInput {
    @Field(() => Number)
    amount: number;
    @Field(() => String)
    name: string;
}

export const CreateTransactionResult = createUnionType({
    name: 'CreateTransactionResult',
    types: () => [TransactionDto, ErrorDto] as const
})
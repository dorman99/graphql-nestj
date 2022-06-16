// import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
// import { map, Observable } from 'rxjs';
// import { TransactionDto, TransactionDtoResult } from '../dto/transaction.dto';

// export class DetailTransactionInterceptor implements NestInterceptor {
//   intercept(
//     _: ExecutionContext,
//     next: CallHandler,
//   ): Observable<any> | Promise<Observable<any>> {
//     return next
//       .handle()
//       .pipe(map((data: TransactionDto) => new TransactionDtoResult(data)));
//   }
// }

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { FindPokemonsDto } from '../dto/findPokemon.dto';
import { Pokemon } from '../pokemon.entity';

export class SuccessFindPokemonInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(map((data: Pokemon[]) => new FindPokemonsDto(data)));
  }
}

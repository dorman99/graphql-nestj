import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InputPokemon } from '../input/pokemon.input';
import { Pokemon } from './pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(@InjectRepository(Pokemon) private repo: Repository<Pokemon>) {}

  async createPokemon(createPokemonDto: InputPokemon): Promise<Pokemon> {
    return await this.repo.save(createPokemonDto);
  }

  async getPokemons(): Promise<Pokemon[]> {
    return await this.repo.find();
  }

  async find(id: string): Promise<Pokemon> {
    return await this.repo.findOne({ where: { id } });
  }
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemons")
export class Pokemon {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'varchar'})
    type: string

    @Column({type: 'varchar'})
    pokedex: number
}
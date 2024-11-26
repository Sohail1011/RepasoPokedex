import { useEffect, useRef, useState } from "react"
import { Pokemon, Result } from "../interfaces/Pokemon.interface";
import axios from "axios";
import { PokeRow } from "./PokeRow";

export function PokeDex() {

    const [data, setData] = useState<Pokemon[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadPokemon(currentPageRef.current)
            .then(info => setData(info));
    }, [])

    const loadPokemon = async (page: number): Promise<Pokemon[]> => {
        try {
            const { data } = await axios.get<Result>('https://pokeapi.co/api/v2/pokemon', {
                params: {
                    offset: (page - 1) * 10,
                    limit: 10
                }
            });
            return data.results;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    const nextPage = async () => {
        currentPageRef.current++;
        const pokemons = await loadPokemon(currentPageRef.current);
        if (pokemons.length > 0) {
            setData(pokemons);
        } else {
            currentPageRef.current++;
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current < 1) {
            currentPageRef.current++;
        } else {
            currentPageRef.current--;
            const pokemons = await loadPokemon(currentPageRef.current);
            setData(pokemons);
        }
    }
    return (
        <>
            <h1>Lista de Pokemon</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            data => (
                                <PokeRow data={data} />
                            )
                        )
                    }
                </tbody>
            </table>
            <div>
                <button onClick={prevPage} className="buttonPaginator">Prev</button>
                <button onClick={nextPage} className="buttonPaginator">Next</button>
            </div>
        </>
    )
}

import { Pokemon } from "../interfaces/Pokemon.interface"

interface Props {
    data: Pokemon
}

const getPhoto = (url: string): string => {
    const id = url.split('/').slice(-2, -1);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

const getId = (url: string): string => {
    return url.split('/').slice(-2, -1)[0];
}

export const PokeRow = ({ data }: Props) => {
    return (
        <div>
            <tr>
                <td>{getId(data.url)}</td>
                <td><img key={getPhoto(data.url)} src={getPhoto(data.url)} alt={data.name} /></td>
                <td>{data.name}</td>
            </tr>
        </div>
    )
}
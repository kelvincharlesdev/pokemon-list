import axios from "axios"
export const apiUrlBase = 'https://pokeapi.co/api/v2'

export const fetchPokemons = async (offset = 0) => {
    const response = await axios.get(`${apiUrlBase}/pokemon?limit=10&offset=${offset}`);
    return response.data.results
}







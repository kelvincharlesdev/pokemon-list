import axios from "axios"
import { apiUrlBase } from "./fetchPokemons"

export const fetchPokemon =  async (name = '') => {
    const response = await axios.get(`${apiUrlBase}/pokemon/${name}`)

    return response.data
    
}
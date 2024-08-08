import { fetchPokemons } from "./fetchPokemons";

export const fetchListUrls = async (offset = 0) => {
    const urls = await fetchPokemons(offset)
    return urls.map(url => url.url);
}
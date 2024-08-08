import axios from "axios";
import { fetchListUrls } from "./fetchListUrls";

export const fetchUrl = async (offset = 0) => {
    const urls = await fetchListUrls(offset)
    const results = await Promise.all(urls.map(url => axios.get(url)));

    return results.map(result => result.data)

}

fetchUrl().catch(console.error);
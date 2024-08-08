import { IoSearch } from "react-icons/io5";

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import { fetchUrl } from '../../services/fetchUrl';

import { Button } from '../../components/Button';
import { Card } from "../../components/Card"

import * as S from './styles'

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const fetchPokemons = async (newOffset) => {
        const response = await fetchUrl(newOffset)
        setPokemons(response)
        setFilteredPokemons(response);
    }

    const loadPokemons = async (newOffset) => {
        const response = await fetchUrl(newOffset)
        setPokemons(prevPokemons => [...prevPokemons, ...response,])
        setFilteredPokemons(prevPokemons => [...prevPokemons, ...response]);

    }

    const handleLoadMore = () => {
        const newOffset = offset + 10
        setOffset(newOffset)
        loadPokemons(newOffset)
    }

    useEffect(() => {
        fetchPokemons(0)
    }, [])


    const onChangeInput = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value === '') {
            setFilteredPokemons(pokemons);
        } else {
            const filtered = pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredPokemons([...filtered])
        }
    };

    return (
        <S.WrapperHome>
            <S.Main>
                <S.ContentInput>
                    <input type="text" placeholder='Busque seu Pokémon' value={inputValue} onChange={onChangeInput} />
                    <IoSearch />
                </S.ContentInput>
                <S.CardList>
                    {filteredPokemons.map(pokemon => (
                        <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
                            <Card pokemon={pokemon} />
                        </Link>
                    ))}
                </S.CardList>
                <Button onClick={handleLoadMore}>
                    Carregar mais
                </Button>
            </S.Main>


        </S.WrapperHome>
    )
}
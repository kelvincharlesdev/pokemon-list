import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchPokemon } from '../../services/fetchPokemon';
import { PokemonDetail } from '../../components/PokemonDetail';
import { Button } from '../../components/Button';

import * as S from './styles';


export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null);
    const [abilities, setAbilities] = useState([]);
    const navigate = useNavigate()

    const { id } = useParams();

    const fetchAbilities = async (abilities) => {
        const urlAbilities = abilities.map(item => item.ability.url);
        const results = await Promise.all(urlAbilities.map(url => axios.get(url)));
        const abilitiesData = results.map(result => result.data.effect_entries);

        setAbilities(abilitiesData);
    }

    useEffect(() => {
        const fetchPokemonData = async (id) => {
            try {
                const response = await fetchPokemon(id);
                setPokemon(response);
                await fetchAbilities(response.abilities);
            } catch (error) {
                console.error('Failed to fetch Pokémon data:', error);
            }
        }
        if (id) {
            fetchPokemonData(id);
        }
    }, [id]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <S.ContentPokemonDetails>
            <Button onClick={() => navigate('/')}>voltar</Button>
            <S.Main>
                <PokemonDetail pokemon={pokemon} abilities={abilities} />
            </S.Main>
        </S.ContentPokemonDetails>
    )
}

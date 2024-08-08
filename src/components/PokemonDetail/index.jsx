import PropTypes from 'prop-types'
import * as S from './styles'

export const PokemonDetail = ({ pokemon, abilities }) => {
    return (
        <>
            <S.NameId>
                <h2>{pokemon.name}</h2>
                <span>#{pokemon.id}</span>
            </S.NameId>
            <S.ContainerPokemonDetails>
                <S.InfoWrapper>
                    <S.ContentImage>
                        <span></span>
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    </S.ContentImage>

                    <S.ContentInfo>
                        <div>
                            <h3>Tipo</h3>
                            <S.List>
                                {pokemon.types.map((type, index) => (
                                    <p key={index}>{type.type.name}</p>
                                ))}
                            </S.List>
                        </div>

                        <dl>
                            <dt><h3>Moves</h3></dt>
                            <S.ListItems>
                                {pokemon.moves.slice(0, 6).map((move, index) => (
                                    <dd key={index}>
                                        <p> {move.move.name}</p>
                                    </dd>
                                ))}
                            </S.ListItems>
                        </dl>
                    </S.ContentInfo>
                </S.InfoWrapper>

                <dl>
                    <dt><h3>Habilidades</h3></dt>
                    <S.List>
                        {abilities.map((abilityEntries, index) => (
                            <dd key={index}>
                                <h4>{pokemon.abilities[index].ability.name}</h4>
                                {abilityEntries.map((item, idx) => (
                                    <p key={idx}>{item.effect}</p>
                                ))}
                            </dd>
                        ))}
                    </S.List>
                </dl>
            </S.ContainerPokemonDetails>
        </>
    )
}

PokemonDetail.propTypes = {
    pokemon: PropTypes.object.isRequired,
    abilities: PropTypes.array.isRequired
};

import PropTypes from 'prop-types'
import * as S from './styles'

export const Card = ({ pokemon }) => {
    return (
        <S.Card >
            <S.CardIamge>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </S.CardIamge>

            <S.CardInfo>
                <h2>{pokemon.name}</h2>
            </S.CardInfo>
        </S.Card>
    )
}

Card.propTypes = {
    pokemon: PropTypes.object.isRequired
}
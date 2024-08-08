import PropTypes from 'prop-types'
import * as S from './styles'

export const Button = ({ children, onClick }) => {
    return (
        <S.ButtonContent onClick={onClick}>
            {children}
        </S.ButtonContent>
    )
}


Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};
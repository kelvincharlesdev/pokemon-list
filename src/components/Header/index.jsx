import { ToggleThemeButton } from '../ToggleThemeButton'
import * as S from './styles'

export const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.HeaderContainer>
                <S.ContentLogo>
                    <img src="logo.png" alt="logo" />
                </S.ContentLogo>
                <ToggleThemeButton />

            </S.HeaderContainer>
        </S.HeaderWrapper>
    )
}
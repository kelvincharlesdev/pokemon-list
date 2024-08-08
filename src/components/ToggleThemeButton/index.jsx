import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/ThemeContext"
import { CgSun } from "react-icons/cg";
import { IoMoonSharp } from "react-icons/io5";

import * as S from './styles'

export const ToggleThemeButton = () => {
    const { toggle, theme } = useContext(ThemeContext)

    return (
        <>
            <S.ToggleThemeButton onClick={toggle}>
                {theme === themes.light ? <CgSun /> : <IoMoonSharp />}
            </S.ToggleThemeButton>

        </>

    )
}
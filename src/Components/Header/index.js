import React from "react"

import * as S from "./styled"
import Logo from '../../assets/datopian-logo.png'


const Header = () => {
  
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.DatopianLogo src={Logo}/>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default Header

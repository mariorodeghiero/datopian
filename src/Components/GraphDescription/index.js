import React from "react"
import * as S from "./styled"

const GraphDescription = ({title, description}) => {
  
  return (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default GraphDescription


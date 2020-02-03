import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-size: 1.5rem;

  ${media.lessThan("medium")`
    font-size: 1.25rem;
  `}
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 5rem;
  color: var(--black);

  ${media.lessThan("medium")`
    font-size: 0.875rem;
    line-height: 4rem;
  `}
`

import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
    max-width: 60rem;
    width: 100%;
    margin: 5rem auto;

    ${media.lessThan("large")`
        max-width: 47.5rem;
    `}

    ${media.lessThan("medium")`
        max-width: 35rem;
    `}
`





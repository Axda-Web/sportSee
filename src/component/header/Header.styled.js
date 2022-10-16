import styled from "styled-components";


const StyledHeader = styled.header`

    .title {
        margin-top: 0;
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: .5em;

        &__name {
            color: red;
        }

        @media (min-width: 1200px) {
            font-size: 3rem;
        }
    }
    
    .subtitle {
        font-size: 1rem;

        @media (min-width: 1200px) {
            font-size: 1.125rem;
        }
    }
`

export default StyledHeader
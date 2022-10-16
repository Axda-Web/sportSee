import styled from "styled-components";

const StyledScore = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 5px;
    overflow: hidden;

    .title {
        font-size: .875rem;

        @media (min-width: 1200px) {
            font-size: .9375rem;
        }
    }

    .score {
        font-size: 1.375rem;

        @media (min-width: 1200px) {
            font-size: 1.625rem;
        }
    }

    .text {
        font-size: .875rem;

        @media (min-width: 1200px) {
            font-size: .9375rem;
        }
    }

    @media (min-width: 1200px) {
            width: 260px;
            height: 260px;
        }
`

export default StyledScore
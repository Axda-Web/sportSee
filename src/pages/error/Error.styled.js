import styled from "styled-components";

const StyledError = styled.main`
    height: 55vh;
    text-align: center;
    margin-left: -50vw;
    

    .number {
        color: red;
        font-size: 4.5rem;
        font-weight: 700;
        margin: 2em 0 0;
    }

    .text {
        font-size: 1rem;
        margin-bottom: 150px;
    }

    .link {

        font-size: .75rem;
        
        &:visited, &:active {
            color: black;
        }
    }

    @media (min-width: 992px) {
        .number {
            font-size: 10rem;
            margin-top: 140px;
        }

        .text {
            font-size: 1.5rem;
        }

        .link {
            font-size: 1.125rem;
        }
    }
`

export default StyledError
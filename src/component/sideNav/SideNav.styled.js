import styled from "styled-components";

const StyledSideNav = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;

    .nav img {
        display: block;
        margin: 0 auto;
        width: 75%;
        margin-bottom: 15px;

        &:hover {
            cursor: pointer; 
        }
    }
    
    .copyright {
        position: absolute;
        bottom: 100px;
        transform: rotate(-90deg);
        font-size: .625rem;
        white-space: nowrap;

        @media (min-width: 1200px) {
            font-size: .75rem;
        }
    }
`

export default StyledSideNav
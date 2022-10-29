 import styled from "styled-components";

const StyledTopNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: black;

    .logo {
        height: 90px;
        padding: 20px;

        @media (min-height: 940px) {
            height: 100px;
            padding: 20px;
        }
    }

    .nav {
        display: flex;
        width: 100%;
        justify-content: space-around;


        &__item {
            font-size: 1.25rem;
            font-weight: 500;
            text-decoration: none;
            color: inherit;

            @media (min-height: 940px) {
                font-size: 1.5rem;
            }
        }
    }
`

export default StyledTopNav
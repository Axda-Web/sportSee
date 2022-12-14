import styled from "styled-components";

const StyledApp = styled.div`
    height: 780px;
    display: grid;
    grid-template-areas:    'topNav topNav'
                            ' sideNav mainContent';

    .top-nav {
        grid-area: topNav;
        height: 80px;

        @media (min-height: 940px) {
            height: 90px;
        }
    }

    .side-nav {
        grid-area: sideNav;
        height: calc(100vh - 80px);
        width: 80px;

        @media (min-height: 940px) {
            height: calc(100vh - 90px);
            width: 100px;
        }
    }

    .main-content {
        grid-area: mainContent;
        height: calc(100vh - 80px);

        @media (min-height: 940px) {
            height: calc(100vh - 90px);
        }
    }
`

export default StyledApp
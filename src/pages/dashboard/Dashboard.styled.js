import styled from "styled-components";

const StyledDashboard = styled.section`
    overflow-y: hidden;
    padding: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-template-areas:   'header header header header'
                            'activity activity activity macro'
                            'square square square macro';
    grid-gap: 20px;

    .header {
        grid-area: header;
    }

    .activity {
        grid-area: activity;
    }

    .squares-container {
        height: 350px;
        width: 100%;
        grid-area: square;
        display: flex;
        justify-content: space-between;
        gap: 5px;
    }

    .macros-card-container {
        grid-area: macro;
    }

    @media (min-width: 1200px) {
        padding: 80px;
        }

`

export default StyledDashboard
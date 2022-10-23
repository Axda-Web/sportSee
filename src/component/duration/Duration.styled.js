import styled from "styled-components";

const StyledDuration = styled.div`
    width: 220px;
    height: 220px;
    background-color: red;
    border-radius: 5px;
    overflow: hidden;

    .customTooltip {
        background-color: white;
        width: 39px;
        height: 25px;
        border-style: none;
    }

    .tooltipData {
        color: #000000;
        font-weight: 500;
        font-size: 8px;
        text-align: center;
        line-height: 24px;
    } 

    .title {
        font-size: 14px;
    }

    @media (min-width: 1200px) {
            width: 260px;
            height: 260px;
        }
`

export default StyledDuration
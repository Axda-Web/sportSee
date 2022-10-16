import styled from "styled-components";

const StyledActivity = styled.div`
    height: 270px;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    margin-bottom: 28px;

    .customTooltip {
        background-color: #E60000;
        width: 39px;
        height: 63px;
        margin-left: 7px;
    }

    .tooltipData {
        font-weight: 500;
        font-size: 7px;
        line-height: 24px;
        color: #FFFFFF;
        text-align: center;
    }

    @media (min-width: 1200px) {
            height: 320px;
        }
`

export default StyledActivity
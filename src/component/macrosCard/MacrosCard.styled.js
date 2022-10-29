import styled from "styled-components";

const StyledMacrosCard = styled.article`
    height: 100px;
    background-color: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    display: flex;
    align-items: center;
	padding: 20px;
	gap: 20px; 

	.card-image {
		width: 60px;
		height: 60px;
		border-radius: 6px;
	}

	.card-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		gap: 5px;
	}

	.card-value {
		color: #282D30;
		font-size: 1rem;
		font-weight: 700;
		margin: 0;

		@media (min-height: 940px) {
            font-size: 1.25rem;
        }
	}
	.card-label{
		color: #74798C;
		font-size: .75rem;
		font-weight: 500;
		margin: 0;

		@media (min-height: 940px) {
            font-size: .875rem;
        }
	}

	@media (min-height: 940px) {
            width: 260px;
            height: 125px;
        }
`

export default StyledMacrosCard
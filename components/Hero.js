import Link from 'next/link'
import styled from 'styled-components'

const HeroSection = ({backgroundImage, heroText, subText, buttonText, backgroundHeight, buttonLink}) => {
	return (
		<>
			<Hero backgroundImage={backgroundImage}
						backgroundHeight={backgroundHeight}>
				<div className='content'>
					<h1>{heroText}</h1>
					<p>{subText}</p>
				</div>
			</Hero>
		</>
	)
}

const Hero = styled('div')`

	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.53)), url(${props => props.backgroundImage});
	background-position: center;
	height: ${props => props.backgroundHeight};
	background-size: cover;
	margin: 0 auto;
	margin-bottom: 1em;
	margin-top: -70px;
	max-width: 1140px;

	@media only screen 
  and (max-device-width: 320px) 
  and (orientation: landscape) { 
		height: 100vh;

		h1 {
		font-size: 2rem;
		font-weight: 200;
		margin-bottom: 1rem;
		}

		p {
			font-size: 1rem;
		}

	}

	h1 {
		font-size: 2rem;
		font-weight: 200;
		margin-bottom: 1rem;
	}
	

	@media (min-width: 375px) {

		h1 {
			font-size: 3rem;
		}

		p {
			font-size: 1.2rem;
		}
	}

	@media (min-width: 768px) {

		h1 {
			font-size: 5rem;
		}

		p {
			font-size: 2.5rem;
			line-height: 1.6;
		}
	}

	.content {
		max-width: 70%;
		text-align: center;
		font-weight: 400;
	}

`

export default HeroSection
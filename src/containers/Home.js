import React from 'react';
import {Redirect} from 'react-router-dom';
import history from '../history';
import DonationRoll from '../components/DonationRoll';
import DonationInput from '../components/DonationInput';
import Carousel from 'react-grid-carousel';
import HomeGallery from '../components/HomeGallery';


class Home extends React.Component {
	componentDidMount(){
		if (localStorage.getItem("userDidVisit") === null) {
		  history.push('/welcome');
		}
	}
	render() {
		return(
			<div>
				<div className="heroBanner">
					
				</div>
				<div className="subBanner">
					<div className="gridOneTwo">
						<div>
							<HomeGallery />
						</div>		
						<div className="gridCenter">
							<h2 className="flexCenter paddingTop white">5 Big Priorities:</h2>
							<ul className="white ">
								<li>Underpants</li>
								<li>????</li>
								<li>Profit?</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="heroImgContainer heroImg1">
					<div className="primaryLightOverlay">
						
					</div>
				</div>
				<div className="donationContainer ">
					<h2 className="grid justifyCenter marginTop marginBottom">Support Our Cause With A Donation</h2>
					<DonationRoll />
					<h2 className="grid justifyCenter marginTop marginBottom">Or Donate Your Own Amount</h2>
					<DonationInput />
				</div>
				<div className="heroImgContainer heroImg2">
					<div className="secondaryLightOverlay">
						
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
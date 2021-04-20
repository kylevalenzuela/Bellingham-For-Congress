import React from 'react';
import {Redirect} from 'react-router-dom';
import history from '../history';
import DonationRoll from '../components/DonationRoll';
import DonationInput from '../components/DonationInput';


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
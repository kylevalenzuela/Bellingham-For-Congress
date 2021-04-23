import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import history from '../history';
import DonationRoll from '../components/DonationRoll';
import DonationInput from '../components/DonationInput';
import Carousel from 'react-grid-carousel';
import HomeGallery from '../components/HomeGallery';
import Logo from '../img/logo.png';

class Home extends React.Component {
	componentDidMount(){
		if (localStorage.getItem("userDidVisit") === null) {
		  history.push('/welcome');
		}
	}
	render() {
		return(
			<div className="fixedHeaderAdjust">
				<div className="heroBanner">
					<div className="homeLogo gridCenterItem">
						<div className="gridCenterItem"><img className="perfectCircle logoImg" src={Logo} alt="Chris Bellingham Logo" /></div>
						
					</div>
					<div className="bottomBumper">
						<h1 className="white gridCenter marginBottom stroke">Help Make a Small Contribution</h1>
						<DonationRoll />
					</div>
				</div>
				<div className="subBanner">
					<div className="gridOneTwo contentPadding">
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
					<div className="secondaryLightOverlay gridCenter">
						<Link to="/volunteer">
							<div className="buttonWidth gridCenter primaryButton">
								Volunteer
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
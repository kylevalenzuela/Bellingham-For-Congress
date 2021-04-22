import React from 'react';
import DonationRoll from '../components/DonationRoll';
import DonationInput from '../components/DonationInput';
class Donate extends React.Component {
	render(){
		return(
			<div className="fixedHeaderAdjust ">
				<div className="donateHero ">
					<div className="secondaryLightOverlay gridCenter">
						<h1 className="white" >Help Contribute to Friends of Chris Bellingham</h1>
						
					</div>
				</div>
				<div>
					<h1 className="gridCenter marginTop marginBottom">Make a Quick Donation</h1>
					<DonationRoll />
					<h1 className="gridCenter marginTop marginBottom">Or Name Your Own Price!</h1>
					<DonationInput />
				</div>
			</div>
		);
	}
}

export default Donate;
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import VolunteerForm from '../components/VolunteerForm';

export const CustomForm = () => {
	return(
		 <form >
        	<input type="text" name="Name" id="" />
        	<input type="tel" name="Name" id="" />
        	<input type="email" name="Email" id="" />
    		<input type="text" name="Zip" id="" />
    		<button>Submit</button>
        </form>
	);
};

class Volunteer extends React.Component {

	formSubmit = (e) => {
		e.preventDefault();
	}

	renderInput = ({ subscribe, status, message }) => {
		return(
			<div>
				<div id="mc_embed_signup">
					
				</div>
	        </div>
		);
	}
	render(){
		const url = 'https://friendsofbellingham.us1.list-manage.com/subscribe/post?u=5d8e8be1bc4711020b1d2223e&amp;id=f03eec1df0';
					
		return(
			<div className="volunteerHero fixedHeaderAdjust">
				<div className="primaryLightOverlay">
					<div className="gridCenter">
						<h1 className="white">volunteer</h1>
						<div>
							<MailchimpSubscribe
							    url={url}
							  />
						</div>
					</div>					
				</div>
			</div>
		);
	}
}

export default Volunteer;
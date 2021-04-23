import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';
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
					
		return(
			<div className="volunteerHero fixedHeaderAdjust">
				<div className="primaryLightOverlay">
					<div className="fullWidth">
						<h1 className="white contentPadding gridCenter">volunteer</h1>
						<h2 className="gridCenter white" >Help Out Our Community</h2>
						<div className="contentPadding gridCenter">
							 <Mailchimp
							  action='https://friendsofbellingham.us1.list-manage.com/subscribe/post?u=5d8e8be1bc4711020b1d2223e&amp;id=f03eec1df0' 
							  
							  //Adding multiple fields:
							  fields={[
							    {
							      name: 'EMAIL',
							      placeholder: 'Email',
							      type: 'email',
							      required: true,
							    },
							    {
							      name: 'NAME',
							      placeholder: 'name',
							      type: 'text',
							      required: true
							    },
							     {
							      name: 'PHONE',
							      placeholder: 'phone',
							      type: 'tel',
							      required: true
							    },
							     {
							      name: 'ZIP',
							      placeholder: 'zip',
							      type: 'text',
							      required: true
							    },
							  ]}
							  // Change predetermined language
							  messages = {
							    {
							      sending: ">Sending...",
							      success: "Thank you for subscribing!",
							      error: "An unexpected internal error has occurred.",
							      empty: "You must write an e-mail.",
							      duplicate: "Too many subscribe attempts for this email address",
							      button: "Subscribe!"
							    }
							  }
							  // Add a personalized class
							  className='volunteerContainer buttonWidth '
							  />
						</div>
					</div>					
				</div>
			</div>
		);
	}
}

export default Volunteer;
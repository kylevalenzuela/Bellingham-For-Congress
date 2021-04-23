import React from 'react';
import {Link} from 'react-router-dom';
import Mailchimp from 'react-mailchimp-form';
import MailchimpSubscribe from 'react-mailchimp-subscribe';


class SplashEmail extends React.Component {
	componentDidMount(){
		localStorage.setItem('userDidVisit', true);
	}

	render() {

		return(
			
			<div id="mc_embed_signup">
				<label className="white marginBottomHalf">Email Address</label>
				<div className="splashEmailWrap">
					<Mailchimp
							  action='https://friendsofbellingham.us1.list-manage.com/subscribe/post?u=5d8e8be1bc4711020b1d2223e&amp;id=f3ebb2fd16' 
							  
							  //Adding multiple fields:
							  fields={[
							    {
							      name: 'EMAIL',
							      placeholder: 'Email',
							      type: 'email',
							      required: true,
							    },
							  ]}
							  // Change predetermined language
							  messages = {
							    {
							      sending: "Sending...",
							      success: "Thank you for subscribing!",
							      error: "An unexpected internal error has occurred.",
							      empty: "You must write an e-mail.",
							      duplicate: "Too many subscribe attempts for this email address",
							      button: "Subscribe!"
							    }
							  }
							  // Add a personalized class
							  className=''
				  	/>
						
				</div>
				<Link to="/" className="">
					<button  className=" fullWidth secondaryButton marginTop roundedCorners flexCenter">Enter Site</button>
				</Link>
			</div>

		);
	}
}

export default SplashEmail;
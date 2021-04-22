import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

/***
const CustomForm = () => {

	const url = 'https://friendsofbellingham.us1.list-manage.com/subscribe/post?u=5d8e8be1bc4711020b1d2223e&amp;id=f03eec1df0';
	return(

		  <MailchimpSubscribe
		    url={url}
		    render={({ subscribe, status, message }) => (
		      <div>
		        <SimpleForm onSubmitted={formData => subscribe(formData)} />
		        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
		        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
		        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
		      </div>
		    )}
		  />
		);
}
***/

class Volunteer extends React.Component {

	render(){
		return(
			<div className="volunteerHero fixedHeaderAdjust">
				<div className="primaryLightOverlay">
					<div className="gridCenter">
						<h1 className="white">volunteer</h1>
						<div>
							
						</div>
					</div>					
				</div>
			</div>
		);
	}
}

export default Volunteer;
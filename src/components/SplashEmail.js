import React from 'react';
import {Link} from 'react-router-dom';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const buttonClick = (e) => {
	e.preventDefault();
};
export const SubForm = () => {
	return(
		<form className="gridSingleVert validate" >
			<div id="mc_embed_signup_scroll">
				<div className="mc-field-group">
					<label className="white marginBottomHalf">Email Address</label>
					<input className="splashInput roundedCorners marginBottom" type="email" placeholder="Email*" />
				</div>
				<div id="mce-responses" className="clear">
					<div className="response" id="mce-error-response" className="displayBadHide"></div>
					<div className="response" id="mce-success-response" className="displayBadHide"></div>
				</div>  
				<div className="screen-reader-text" aria-hidden="true"><input type="text" name="b_5d8e8be1bc4711020b1d2223e_f3ebb2fd16" tabindex="-1" value="" /></div> 
					<div>
						<button onClick={buttonClick} className=" buttonWidth primaryButton roundedCorners marginBottom" >Join Our Community</button>
					</div>
				<Link to="/" className=" ">
					<button  className=" buttonWidth secondaryButton roundedCorners flexCenter ">Enter Site</button>
				</Link>
			</div>
		</form>
	);
};

class SplashEmail extends React.Component {
	componentDidMount(){
		localStorage.setItem('userDidVisit', true);
	}

	render() {
		const url = 'https://friendsofbellingham.us1.list-manage.com/subscribe/post?u=5d8e8be1bc4711020b1d2223e&amp;id=f3ebb2fd16';

		return(
			
			<div id="mc_embed_signup">
				<label className="white marginBottomHalf">Email Address</label>
				<div className="splashEmailWrap">
					<MailchimpSubscribe 
						url={url}
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
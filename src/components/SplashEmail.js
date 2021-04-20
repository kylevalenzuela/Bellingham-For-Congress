import React from 'react';
import {Link} from 'react-router-dom';

class SplashEmail extends React.Component {
	componentDidMount(){
		localStorage.setItem('userDidVisit', true);
	}
	render() {
		return(
			<div id="mc_embed_signup">
				<form className="gridSingleVert validate" action="https://friendsofbellingham.us1.list-manage.com/subscribe/post?u=5d8e8be1bc4711020b1d2223e&amp;id=f3ebb2fd16" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
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
							<div className="clear">
								<input className="primaryButton roundedCorners marginBottom" type="submit" value="Join Our Community" />
							</div>
						<Link to="/">
							<div className=" secondaryButton roundedCorners flexCenter">Enter Site</div>
						</Link>
					</div>
				</form>
			</div>

		);
	}
}

export default SplashEmail;
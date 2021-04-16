import React from 'react';
import SplashEmail from '../components/SplashEmail'

class SplashPage extends React.Component {
	render() {
		return(
			<div className="splashContainer noScroll">
				<div className="splashGradient">
					<div className="splashGrid">
						<div className="splashContent">
						<div className="grid">
							<div className="textLogo gridCenterItem">CHRIS <br/>BELLINGHAM</div>
						</div>
							<h1 className="white marginBottom">Being a patriot means building collation. Join us!</h1>
							<SplashEmail />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SplashPage;
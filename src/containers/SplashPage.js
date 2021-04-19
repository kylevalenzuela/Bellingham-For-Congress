import React from 'react';
import SplashEmail from '../components/SplashEmail'
import Logo from '../img/logo.png'

class SplashPage extends React.Component {
	render() {
		return(
			<div className="splashContainer noScroll">
				<div className="splashGradient">
					<div className="splashGrid">
						<div className="splashContent">
						<div className="grid">
							<div className="gridCenterItem marginBottom"><img className="perfectCircle logoImg" src={Logo} alt="Chris Bellingham Logo" /></div>
						</div>
							<h1 className="white marginBottom">To build a coalition of the people, is a patriotic act. Join us</h1>
							<SplashEmail />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default SplashPage;

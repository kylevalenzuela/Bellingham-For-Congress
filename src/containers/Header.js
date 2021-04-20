import React from 'react';
import Menu from '../svg/menu.svg';
import Logo from '../img/logo.png';

const Hamburger = () => {
	return(
		<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
			<title>menu</title>
			<path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
		</svg>
	);
};


class Header extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		navClicked: false,
    	};
  	}
  
	sideNav = () => {
		return(
			<div className="navContainer">
				<nav className={`navMain  ${this.state.navClicked ? 'navPop' : ''}`} >
					<img className="marginBottom logoImg" src={Logo} alt="" />
					<ul className=" white">
						<li>Home</li>
						<li>About</li>
						<li>Donate</li>
						<li>Volunteer</li>
					</ul>
				</nav>
			</div>
		);
	};
	onClick = () => {
		this.setState({navClicked: !this.state.navClicked})
	};
	render() {
		return(
			<div>
				<header className="chrisHeader verticalCenterFlex">
					<div  className="clickIt " onClick={this.onClick}>
						<Hamburger  />
					</div>
				</header>
				{this.sideNav()}
			</div>
		);
	}
}

export default Header;
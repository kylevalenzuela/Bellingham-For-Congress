import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '../svg/menu.svg';
import Logo from '../img/logo.png';
import Social from '../components/Social';
import Logo2 from '../img/logo2.png';

const Hamburger = () => {
	return(
		<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
			<title>menu</title>
			<path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
		</svg>
	);
};

const Close = () => {
	return(
		<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
			<title>close button</title>
			<path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
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
  	componentWillUnmount(){
  		this.setState({navClicked: false});
  	}
	sideNav = () => {
		return(
			<div className="navContainer ">
				<nav className={`navMain tothetop  ${this.state.navClicked ? 'navPop' : ''}`} >
					<div onClick={this.onClick} className="clickIt marginTop marginLeftHalf">
						<Close />
					</div>
					<Link to="/" className="logoImg " onClick={this.onClick} ><img className="marginBottom " src={Logo} alt="" /></Link>
					<div className=" white navLinks">
						<Link onClick={this.onClick} to="/"><div className="gridCenter marginTopHalf">Home</div></Link>
						<Link onClick={this.onClick} to="/about"><div className="gridCenter marginTopHalf">About</div></Link>
						<Link onClick={this.onClick} to="/donate"><div className="gridCenter marginTopHalf">Donate</div></Link>
						<Link onClick={this.onClick} to="/volunteer"><div className="gridCenter marginTopHalf">Volunteer</div></Link>
					</div>
					<div className="socialWrap">
						<Social />
					</div>
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
				<header className="tothetopish chrisHeader verticalCenterFlex">
					<div  className="clickIt marginLeftHalf" onClick={this.onClick}>
						<Hamburger  />
					</div>
					<div className="socialWrapHeader">
						<Social />
					</div>
				</header>
				{this.sideNav()}
			</div>
		);
	}
}

export default Header;
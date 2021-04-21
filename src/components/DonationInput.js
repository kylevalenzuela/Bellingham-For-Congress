import React from 'react';
import history from '../history';

class DonationInput extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		input: 0,
    		nan: false,
    	};
  	}
	onSubmit = (event) => {
		event.preventDefault();
		if (isNaN(this.state.input)) {
			this.setState({nan: true});
		}
		else {
			window.location.assign(`https://secure.actblue.com/donate/friends-of-bellingham-1?amount=${this.state.input}`);
		}
	};
	inputChange = (event) => {
		this.setState({input: event.target.value});
	};
	render() {
		return(
			<form className="gridCenter">
				<div className={`inputError ${this.state.nan ? '' : 'screen-reader-text'}`}>Input a Number Only</div>
				<input onChange={this.inputChange} className="donationInput marginBottom" type="text" placeholder={this.state.input} />
				<div className="buttonWidth">
					<button onClick={this.onSubmit} className="marginBottom primaryButton">
						Donate
					</button>
				</div>	
			</form>
		);
	}
}

export default DonationInput;
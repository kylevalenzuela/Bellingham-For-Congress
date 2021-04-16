import React from 'react';
import {Redirect} from 'react-router-dom';
import history from '../history';


class Home extends React.Component {
	componentDidMount(){
		if (localStorage.getItem("userDidVisit") === null) {
		  history.push('/welcome');
		}
	}
	render() {
		return(
			<div>
				Home Page
			</div>
		);
	}
}
export default Home;
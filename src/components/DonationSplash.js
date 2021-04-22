import React from 'react';
import {Link} from 'react-router-dom';

const DonationSplash = () => {
	return(
		<div>
			<Link to="/donate">
				<div className="primaryButton">
					Donate
				</div>
			</Link>
		</div>
	);
};
export default DonationSplash;
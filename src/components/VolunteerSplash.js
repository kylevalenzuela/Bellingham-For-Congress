import React from 'react';
import {Link} from 'react-router-dom';

const VolunteerSplash = () => {
	return(
		<div className="volunteerSplash ">
			<div className="gridCenter primaryLightOverlay">
				<Link to="/volunteer">
					<div className="buttonWidth gridCenter primaryButton">
						Volunteer
					</div>
				</Link>
			</div>
		</div>
	);
};
export default VolunteerSplash;
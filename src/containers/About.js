import React from 'react';
import about from '../img/aboutdetail.jpg'
import quote from '../img/aboutquote.jpg';
import VolunteerSplash from '../components/VolunteerSplash';
import DonationRoll from '../components/DonationRoll';
import DonationInput from '../components/DonationInput';

class About extends React.Component {
	render() {
		return(
			<div class="fixedHeaderAdjust ">
				<div className="aboutHero ">
					<div className="secondaryLightOverlay">
						<h1 className="gridCenter white">About Friends of Bellingham</h1>
					</div>
				</div>
				<div>
					<div className="aboutSub paddingTop paddingBottom">
						<h1 className="gridCenter marginBottomhalf primaryColor">Who is Chris Bellingham?</h1>
						<h6 className="gridCenter primaryColor ">A life of service and community</h6>
					</div>
				</div>
				<div className="aboutDetails gridoneTwo-thirds">
					<div className="gridCenter aboutPadding"><img src={about} alt="" /></div>
					<div className="aboutPadding">
						<h2 className="gridCenter paddingTop white marginBottom">Early Days</h2>
						<p className="white gridCenter ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar feugiat fermentum. Nullam auctor diam rhoncus tellus mattis pharetra. Donec vel consequat nisi. In non ornare nisi. Praesent hendrerit felis vel ligula placerat maximus. Vivamus eleifend faucibus quam, vel viverra ipsum iaculis a. In et fringilla ligula, non rutrum ante. Suspendisse id erat ut sem dignissim ultricies. Aenean cursus arcu eu lacus porta imperdiet ac eget dolor. Pellentesque semper malesuada urna quis vestibulum. Phasellus mattis sapien ut vehicula facilisis. Sed eu pulvinar lorem.
							Duis in lectus sagittis, interdum massa id, semper mi. Donec faucibus eleifend metus, at eleifend augue ultricies eu. Fusce maximus nulla quis accumsan porta. Donec eleifend nisl nec blandit ultricies. Fusce id lacus a odio fringilla aliquam. Vivamus non ante lorem. In congue maximus urna, a venenatis elit vestibulum a. Ut a tristique urna, sit amet condimentum nibh. Mauris eget orci nisi. Nullam sed sapien sit amet lorem aliquet commodo. Cras pretium mattis tortor id hendrerit. Curabitur eu felis ut purus sodales scelerisque. Donec lorem ex, tincidunt viverra est eget, aliquet commodo diam. Integer convallis a libero ut pharetra.
							Aenean tortor tortor, pharetra vel gravida ut, gravida sit amet magna. Proin sed dui accumsan, hendrerit dolor vitae, sollicitudin felis. Ut condimentum nisi fermentum tellus ullamcorper, vitae porttitor erat dapibus. Duis fringilla dui in neque hendrerit condimentum. Vestibulum ac ipsum interdum, pellentesque nunc ac, porttitor turpis. Proin congue convallis urna, sit amet cursus nisl consequat eu. Sed facilisis sapien nisl, sed sodales tellus viverra sit amet. Nulla lobortis ac augue id ultricies. Vestibulum ultrices aliquam lectus et scelerisque. Proin metus ex, malesuada eget porta nec, pharetra et arcu. Donec nec magna mauris. Nullam eu hendrerit tortor, sit amet aliquam sapien.
							Sed tristique tempus nibh, ac sagittis quam ultrices eu. Aenean dignissim, urna ac semper condimentum, odio ligula efficitur ipsum, vel ullamcorper nulla purus sit amet nulla. Nullam ac enim euismod massa lobortis faucibus. Nam vitae odio metus. Etiam vehicula sollicitudin porta. Donec vestibulum orci sed ligula vulputate ultricies. Nulla a posuere sem. Phasellus ut augue eget nibh pellentesque lacinia. Aenean ac velit lacinia, pharetra sem eget, tincidunt ipsum. Vestibulum massa nisi, volutpat vitae porttitor id, vehicula sit amet quam. Curabitur bibendum erat elit. Vestibulum libero metus, tristique at diam condimentum, gravida luctus nibh.
						</p>	
					</div>
				</div>
				<div className="aboutQuote gridOneTwo">
					<div className="aboutPadding gridCenter">
						<p> "Duis in lectus sagittis, interdum massa id, semper mi. Donec faucibus eleifend metus, at eleifend augue ultricies eu. Fusce maximus nulla quis accumsan porta. Donec eleifend nisl nec blandit ultricies. Fusce id lacus a odio fringilla aliquam. Vivamus non ante lorem. In congue maximus urna, a venenatis elit vestibulum a. Ut a tristique urna, sit amet condimentum nibh. Mauris eget orci nisi. Nullam sed sapien sit amet lorem aliquet commodo. Cras pretium mattis tortor id hendrerit." </p>
					</div>
					<div className="quoteimg">
					<div className="blackGradient">
					</div>
					</div>
				</div>
				<div>
					<div>
					<h1 className="gridCenter marginTop marginBottom">Make a Quick Donation</h1>
					<DonationRoll />
					<h1 className="gridCenter marginTop marginBottom">Or Name Your Own Price!</h1>
					<DonationInput />
				</div>
				</div>
				<VolunteerSplash />
			</div>
		);
	}	
}

export default About;
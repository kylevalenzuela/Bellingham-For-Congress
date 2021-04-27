import React from 'react';
import Social from '../components/Social';
class Footer extends React.Component {
	render(){
		return(
			<footer className="mainFooter">
				<div className="subFooter">©Paid by Bellingham for Congress </div>
				<div className="paddingTop">
					General Inquiries:
				</div>
				<div><a className="footerLink marginBottom" href="mailto:info@votebellingham.com">info@votebellingham.com</a></div>
				<div className="paddingTop">
					Press Contact:
				</div>
				<div className="paddingBottom"><a className="footerLink " href="mailto:press@votebellingham.com">press@votebellingham.com</a></div>
				<div className="footerSocial paddingBottom">
					<Social />
				</div>
			</footer>
		);
	}
}
export default Footer;
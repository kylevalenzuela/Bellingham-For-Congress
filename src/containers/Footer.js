import React from 'react';
class Footer extends React.Component {
	render(){
		return(
			<footer className="mainFooter">
				<div className="paddingTop">
					General Inquiries:
				</div>
				<div><a className="footerLink marginBottom" href="mailto:info@votebellingham.com">info@votebellingham.com</a></div>
				<div className="paddingTop">
					Press Contact:
				</div>
				<div className="paddingBottom"><a className="footerLink " href="mailto:press@votebellingham.com">press@votebellingham.com</a></div>
			</footer>
		);
	}
}
export default Footer;
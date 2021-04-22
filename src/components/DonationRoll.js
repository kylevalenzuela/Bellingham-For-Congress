const DonationRoll = () => {
	return(
		<div className="donationContainer gridCenter transparent">
			<div className=" gridTwoFour marginBottom maxWidthWrap">
				<div className="gridCenterItem">
					<a href={`https://secure.actblue.com/donate/friends-of-bellingham-1?amount=3.14`}><div className="donationButtons gridCenter white">$3.14</div></a>
				</div>
				<div className="gridCenterItem">
					<a href={`https://secure.actblue.com/donate/friends-of-bellingham-1?amount=27`}><div className="donationButtons gridCenter white">$27</div></a>
				</div>
				<div className="gridCenterItem">
					<a href={`https://secure.actblue.com/donate/friends-of-bellingham-1?amount=42`}><div className="donationButtons gridCenter white">$42</div></a>
				</div>
				<div className="gridCenterItem">
					<a href={`https://secure.actblue.com/donate/friends-of-bellingham-1?amount=710`}><div className="donationButtons gridCenter white">$710</div></a>
				</div>
			</div>
		</div>
	);
}
export default DonationRoll;
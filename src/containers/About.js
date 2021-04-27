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
				{/**<div className="aboutHero ">
					<div className="secondaryLightOverlay">
						<h1 className="gridCenter white">About Friends of Bellingham</h1>
					</div>
				</div> **/}
				<div>
					<div className="aboutSub paddingTop paddingBottom">
						<h1 className="gridCenter marginBottomhalf primaryColor">Who is Chris Bellingham?</h1>
						<h6 className="gridCenter primaryColor ">A life of service and community</h6>
					</div>
				</div>
				<div className="aboutDetails gridoneTwo-thirds">
					<div className="gridCenter aboutPadding"><img src={about} alt="" /></div>
					<div className="aboutPadding">
						<h2 className="gridCenter paddingTop white marginBottom">About Me</h2>
						<p className="white gridCenter marginBottom">
							Hello, my name is Chris Bellingham, I am running for Congress in the 25th district of California to further fulfill my drive to serve our community and this proud Nation. This drive to service has been a calling and purpose for my life for as long as I can remember. When I think back to the moments in my life that solidified service as the mission I would dedicate my life to, three key moments come to mind, first was 9/11 and enlisting in the U.S. Army as a combat medic, Then on October 13 2015 during the democratic debate where I saw Bernie Sanders embody the messages of heroes I have looked up to for so long and bring them into the modern political arena, and most recently during the start of this pandemic on March 19, 2020, the city of Lancaster called upon me an opportunity to join with Grace resources providing food to those in need. It is in these moments that the lessons I have learned over a lifetime, boiled down to one fundamental question. To serve or not to serve? And I chose to serve others every time. </p>

						<p className="white gridCenter marginBottom">When I saw the Twin Towers go down and the lives lost in the smoldering ash, my heart was broken, my mind filled with questions. How could this happen? Who could hate us this much? How should I respond to this tragedy? And at this same time, I watched 2 things happen at once one which filled me with hope and one with dread. On one hand, I saw people coming together, first responders working in dreadful conditions to save lives, people raising money for the victims, calls for justice from everyone in the nation regardless of party or political belief. On the other hand, I saw how this impacted my Muslim brothers and friends who were both appalled at the violence and tragedy, and now being blamed for it, targeted for their beliefs and identity in some sick form of constant trauma. So with this perspective, I decided to not only enlist and serve my country but to do so as a combat medic, I did not wish to participate in the spread of violence but rather be there to heal and save the lives of my brothers in arms. Over my time in service, I had 4 combat tours over 26 months and served as a Combat Medic to the 10th Mountain Division out of Fort Drum New York where we fought in the most intense combat for decades. Places like Korengal, Nuristan, and Helmand provinces. I lead a team of line medics in combat, earned the rank of sergeant, earned achievement and merit awards. Upon leaving the military I came home to my Nation, stricken by now global recession, and threw myself back into service immediately serving meals to the unhoused population at Santa Monica beach, working in a skid row, and bankrolling a documentary that focused on homelessness. While doing this I attended Santa Monica College and worked as a lab technician while helping the Chemistry Club's educational outreach program serving the inner-city schools in Los Angeles. I then transferred to UC Santa Barbara where I earned a bachelor's in chemistry. It was at UC Santa Barbara where tragedy struck again and I like so many students across the country experienced the horror of a school shooting. At this point in my life, I was taken back to those feelings after 9/11 and those same questions came back. How could this happen? Who could hate us this much? How should I respond to this tragedy? It was then I knew that my call to service had only just begun. </p>

						<p className="white gridCenter marginBottom">On that day of October in 2015, I came home from working as a chemist in my third research lab to turn on the democratic debate and watch in awe as I saw Bernie Sanders stand up on the national stage and speak truth to power. He identified climate change as the greatest threat to national security we face, the truth of which I saw every day at work looking at the data showing the loss of ecological life and then also seeing what this will mean to migration once parts of the earth become inhabitable. He spoke about the Injustice of economic disparity in our communities words I had not heard but so concretely since studying the speeches of Martin Luther King Jr. He spoke of patriotism in a way that reminded me of president John F.Kennedy, having an unshakable faith that America can do amazing and incredible things if we just put our mind and ambition to it. Yet despite the insurmountable odds and the many issues, Bernie was laying out he had a constant sense of optimism, that brought back the lessons taught to me by reading Hellen Keller. Within weeks of that debate, I found myself on the ground in Iowa as a field organizer for the Bernie Sanders campaign, traveling up and down America shaking hands, and having conversations with folk from all walks of life, and learning just how much we all have in common with one another. During my travels I saw even more truth to the realities that Bernie spoke from that stage in October, I saw Ferguson still damaged from the wake of civil unrest due to racial injustice, New Orleans incredibly still waiting on repairs from hurricane Katrina, and everywhere I went there were signs of destitute poverty throughout  America. After the primary, with a fellowship award from The Mission Continues I eventually founded a non-profit organization called Chosin Foundation whose purpose was to throw events raising money for scholarships that would go to children who have lost their parents in the Global War on Terror. Then after a brief stint in St. Croix doing hurricane recovery work, I had to leave Chosin Foundation To turn my focus back home to the Antelope Valley in helping my aging grandparents and parents maintain their wellbeing as much as possible.  </p>

						<p className="white gridCenter marginBottom">It was In this moment of coming home and embracing both my family and my community, that yet another catastrophe struck. Covid-19 was starting to rise, death tolls were coming in and businesses were starting to close, then on March 19, 2020, service to others was called again. When I answered the phone it was my city government offering me an opportunity to work with Grace Resources. While with Grace Resources we processed, packaged, and delivered groceries to homes in need throughout the Antelope Valley. I met so many amazing and beautiful people in our community and really got to see firsthand how our local government and representatives were not only not meeting our needs, but they weren't even speaking to us. Instead of focusing on the population of CA-25 Mike Garcia was voting against COVID relief and speaking to insurrectionists on January 5th, 2021 in Washington DC. During this work and seeing all of the same needs I have experienced throughout the country being echoed in my community, where I was raised, I knew that we needed better representation and I decided to run for Congress. </p>
						<p className="white gridCenter marginBottom">So as you can see my run for congress is a choice I made to continue my calling of service. To use my experience as a combat medic, scientist, and activist to not only lead but work alongside, hand in hand with each of you as we work together to heal and grow our community. I am so thankful that you are here and can't wait for you to join me in my campaign.</p>
						<p className="white gridCenter marginBottom">Chris Bellingham for Congress 2022</p>
					</div>
				</div>
				<div className="aboutQuote gridOneTwo">
					<div className="aboutPadding gridCenter">
						<p> "I am running for congress because as combat medic, scientist, and public spirited individual I will work every day to heal this district through sound, rational policies. Because I can think of no greater act of service than using the powers of the congressional office to pursue constituents' priorities with federal agencies, provide overwatch, and pass legislation." </p>
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
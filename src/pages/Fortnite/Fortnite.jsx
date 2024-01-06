import React from 'react'
import "./Fortnite.css"

const Fortnite = () => {
    return (
      <div className="main-container">
        <div className="first-container">
        <h1 className="main-heading">Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h1>
        <img
          className="main-image"
          src={require('./fortnite1.png')}
          alt="Epic Games Image"
        />
        <p className="main-text">
          Create, play, and battle with friends for free in Fortnite. Be the last
          player standing in Battle Royale and Zero Build, experience a concert or
          live event, or discover over a million creator-made games, including
          racing, parkour, zombie survival, and more. Each Fortnite island has an
          individual age rating so you can find the one that's right for you and
          your friends. Find it all in Fortnite... Drop In
        </p>
        <button className="visit-website-button">Visit Website</button>
        </div>

        <div className="first-container">
         <div className="column-container">
        <div className="column">
          <img
            className="column-image"
            src={require('./Fortnite2.png')}
            alt="Explore Image"
          />
          <p className="column-text">
            Explore large, destructible environments where no two games are
            ever the same.
          </p>
        </div>

        <div className="column">
          <img
            className="column-image"
            src={require('./Fortinite3.png')}
            alt="Team Up Image"
          />
          <p className="column-text">
            Team up with friends by sprinting, climbing, and smashing your way
            to earn your Victory Royale.
          </p>
        </div>

        <div className="column">
          <img
            className="column-image"
            src={require('./Fortinite4.png')}
            alt="Discover Image"
          />
          <p className="column-text">
            Discover even more ways to play across thousands of creator-made
            game genres.
          </p>
        </div>
        </div>
      </div>


    <div className="second-container">
      <div className="contribution-section">
        <h2 className="contribution-heading">Our Contribution</h2>
        <p className="contribution-paragraph">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
      </div>
      </div>

<div className="third-container">
      <div className="metrics-row">
        <div className="metric-column">
          <h3 className="metric-heading">5M</h3>
          <p className="metric-text">Daily User Engagements</p>
        </div>

        <div className="metric-column">
          <h3 className="metric-heading">$500K</h3>
          <p className="metric-text">Revenue Surge for an Platform</p>
        </div>

        <div className="metric-column">
          <h3 className="metric-heading">10X</h3>
          <p className="metric-text">ROAS on all our marketing campaigns</p>
        </div>
      </div>
      </div>

      <div className="contact-section">
        <h2 className="contact-heading">
          Interested in delving deeper into the project?
        </h2>
        <p className="contact-text">
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at <strong>hello@abc.com</strong> or give us a call at{' '}
          <strong>+91 480 20802730</strong>.
        </p>
        <div className="contact-buttons">
          <button className="skype-button">Ring us on Skype</button>
          <button className="contact-us-button">Contact Us</button>
        </div>
      </div>

      <p className="copyright-text">
        © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </p>

      </div>
    );
  };
  
export default Fortnite;
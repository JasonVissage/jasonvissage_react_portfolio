import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="">
        <img
          className="profile-pic"
          src={require('../../assets/images/Profile_pic.png')}
          alt="Jason"
        />
      </div>
      <div className="about-paragraph">
        <p>
          Full Stack Web Developer with a background in business management and
          VOIP systems. Recently completed the Full Stack Web Development
          bootcamp certification provided through The University of Texas at
          Austin that focused on HTML/CSS, Javascript, Node.js, React, Git and
          more. I am very passionate about learning new things and challenging
          myself. Being adaptable, self-motivated, resourceful, and driven,
          allow me to thrive in group and independent working environments. I
          find fulfillment in opportunities to sharpen my skills and grow with a
          team as well as contribute to the success of any project I’m given. I
          excel in leadership roles due to my appreciation for the value others
          can bring through unique ideas and more efficient ways of
          accomplishing goals.
        </p>
      </div>
    </div>
  );
}

export default About;

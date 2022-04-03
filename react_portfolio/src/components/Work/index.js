import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Work() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <section>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="{require('../../assets/images/RunBuddy-jpg.jpg')}"
          />
          <Card.Body>
            <Card.Title>Run Buddy</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Repo</Button>
          </Card.Body>
        </Card>
        <div className="runbuddy">
          {/* <img
            className="run-buddy"
            src={require('../../assets/images/RunBuddy.png')}
            alt="Run Buddy"
          /> */}
          <li>Run Buddy</li>
        </div>
      </section>
    </div>
  );
}

export default Work;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RunBuddy from '../../assets/images/RunBuddy.png';
import Tech from '../../assets/images/Just_Tech_News.png';
import Password from '../../assets/images/Password_Generator.png';
import Photo from '../../assets/images/Photo_Port.png';
import Taskinator from '../../assets/images/Taskinator_Pro.png';
import Zoo from '../../assets/images/Zoo_Keepr.png';
import Barber from '..//../assets/images/Barber.png';

function Work() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <section>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Barber} />
          <Card.Body>
            <Card.Title>Run Buddy</Card.Title>
            <a
              href="https://barber-shop-sidemerns.herokuapp.com/"
              target="_blank"
            >
              <Button variant="primary">View</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={RunBuddy} />
          <Card.Body>
            <Card.Title>Run Buddy</Card.Title>
            <a href="https://jasonvissage.github.io/run-buddy/" target="_blank">
              <Button variant="primary">View</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Tech} />
          <Card.Body>
            <Card.Title>Just Tech News</Card.Title>
            <a
              href="https://young-oasis-06911.herokuapp.com/login"
              target="_blank"
            >
              <Button variant="primary">View</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Password} />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <a
              href="https://jasonvissage.github.io/Password-Generator-1/"
              target="_blank"
            >
              <Button variant="primary">View</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Photo} />
          <Card.Body>
            <Card.Title>Photo Port</Card.Title>
            <a
              href="https://jasonvissage.github.io/photo-port/"
              target="_blank"
            >
              <Button variant="primary">View</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Taskinator} />
          <Card.Body>
            <Card.Title>Taskinator Pro</Card.Title>
            <a
              href="https://jasonvissage.github.io/taskmaster-pro/"
              target="_blank"
            >
              <Button variant="primary">View</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Zoo} />
          <Card.Body>
            <Card.Title>Zoo Keepr</Card.Title>
            <a
              href="https://intense-badlands-18720.herokuapp.com/"
              target="_blank"
            >
              <Button variant="primary">View</Button>
            </a>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default Work;

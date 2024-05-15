import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cardss= () => {
  return (
    <div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.lemde.fr/2018/10/16/0/0/5914/3942/4000/2666/30/0/35ec0c7_SLFjFsdUTEOXES7dUGFJwqFB.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://3.bp.blogspot.com/-yEoStiHc7nc/WEGycbeRYfI/AAAAAAAA9TM/0Gx0jmY-VooDtbMn_TUyXcAltRQrHNP8QCHM/s1600/48-spring-wallpapers-id1212.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images-6.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}




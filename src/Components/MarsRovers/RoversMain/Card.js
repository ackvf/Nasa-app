import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { useHistory } from 'react-router-dom';
import { Image, CardHead, TextStyle } from './styles';
import Icons from './Icons';
import RoverImagesCard from './RoverImagesCard';

export default function CardComponent({
  landingDate,
  launchDate,
  name,
  maxDate,
  maxSol,
  status,
  totalPhotos,
}) {
  const history = useHistory();

  const redirectToRoverPage = () => {
    return history.push({
      pathname: `/mars-rovers/rover/${name}`,
      state: { roverName: name },
    });
  };

  return (
    <Col md={4} className="mb-5">
      <Card className="border-black mt-3">
        <RoverImagesCard name={name} />
        <Card.Body>
          <CardHead>
            <Card.Title className="d-flex align-items-center">
              {name}
              <span className="ml-auto">
                {status === 'active' ? (
                  <>
                    <Icons.StatusActive data-tip data-for="active" />
                    <ReactTooltip id="active" place="top" effect="solid">
                      Status Active
                    </ReactTooltip>
                  </>
                ) : (
                  <>
                    <Icons.StatusNotActive data-tip data-for="not-active" />
                    <ReactTooltip id="not-active" place="top" effect="solid">
                      Status Not-Active
                    </ReactTooltip>
                  </>
                )}
              </span>
            </Card.Title>
          </CardHead>
          <Card.Body>
            <Card.Text className="d-flex align-items-center">
              <Image src={Icons.LaunchRocket} alt="icon" />
              <TextStyle className="ml-5">{launchDate}</TextStyle>
            </Card.Text>
            <Card.Text className="d-flex align-items-center">
              <Image src={Icons.LandRocket} alt="icon" />
              <TextStyle className="ml-5">{landingDate}</TextStyle>
            </Card.Text>
            <Card.Text className="d-flex align-items-center">
              <Image src={Icons.Calendar} alt="icon" />
              <TextStyle className="ml-5">{maxDate}</TextStyle>
            </Card.Text>
            <Card.Text className="d-flex align-items-center">
              <Icons.MarsSymbol />
              <TextStyle className="ml-5">{maxSol}</TextStyle>
            </Card.Text>
            <Card.Text className="d-flex align-items-center">
              <Icons.PhotoIcon />
              <TextStyle className="ml-5">{totalPhotos}</TextStyle>
            </Card.Text>
          </Card.Body>
          <Button variant="success" onClick={redirectToRoverPage}>
            ENTER
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

// import React from 'react'
// import { Button, Card } from 'react-bootstrap';

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard(props) {
  const [moreInfo, setMoreInfo] = useState(false);
  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };
  console.log(props);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        {/* <Card.Text>{props.email}</Card.Text> */}
        {moreInfo ? (
          <Card.Text>
            
              <p>{props.phone}</p>
              <p>{props.email}</p>
            
          </Card.Text>
        ) : null}

        {/* {moreInfo && <Card.Text>
            {props.phone}
        </Card.Text> } */}

        <Button
          variant="primary"
          onClick={handleMoreInfo}

          // onClick={() => props.moreInfo(props.name.split(' ').reverse().join(' '))}
        >
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;

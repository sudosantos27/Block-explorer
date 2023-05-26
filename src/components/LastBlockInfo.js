import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
function LastBlockInfo(props) {
  const { blockInfo } = props;
  const [detail, setDetail] = useState([]);
  const getDateFormat = (_date) => {
    const t = new Date(_date * 1000);
    return `${formatter(t.getDate())}/${formatter(t.getMonth() + 1)}/${formatter(t.getFullYear())} ${formatter(t.getHours())}:${formatter(t.getMinutes())}`
  }
  const formatter = (_data) => {
    return (_data < 10) ? `0${_data}` : `${_data}`;
  }
  const getNumber = (_hex) => {
    return _hex.toString();
  }
  const seeTxs = (e) => {
    e.preventDefault();
    setDetail(blockInfo.transactions);
  }
  const hideTxs = (e) => {
    e.preventDefault();
    setDetail([]);
  }
  return (
    <React.Fragment>
      <Card>
        <Card.Header>Last Block Info</Card.Header>
        <Card.Body>
          <Card.Title>Main Info</Card.Title>
          <div>
            <Row>
              <Col>
                {blockInfo ?
                  "Block Number :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {blockInfo ?
                  blockInfo.number :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {blockInfo ?
                  "Block Hash :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {blockInfo ?
                  blockInfo.hash :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {blockInfo ? "Time Stamp :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {blockInfo ? getDateFormat(blockInfo.timestamp) :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {blockInfo ? "Parent Hash :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {blockInfo ? blockInfo.parentHash :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {blockInfo ? "Miner :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {blockInfo ? blockInfo.miner :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>}
              </Col>
            </Row>
            <Row>
              <Col>
                {blockInfo ? "Base fee per gas :" :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>}
              </Col>
              <Col>
                {blockInfo ? getNumber(blockInfo.baseFeePerGas) :
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>}
              </Col>
            </Row>
          </div>
          {detail.length > 0 ?
            <Button className='button-card' variant="primary" onClick={(e) => hideTxs(e)}>
              Hide
            </Button> :
            <Button className='button-card' variant="primary" onClick={(e) => seeTxs(e)}>
              See Transactions
            </Button>}
        </Card.Body>
      </Card>
      {detail.length > 0 &&
        <Card>
          <Card.Header>{`Transactions (${detail.length} total)`}</Card.Header>
          <Card.Body>
            <Card.Title>List</Card.Title>
            <div>
              {detail.map((item, index) => {
                return (
                  <Row key={index}>
                    <Col>
                      {`TX # ${index + 1} Hash :`}
                    </Col>
                    <Col>
                      <a href={`/tx?tx=${item.hash}`}>
                        {item.hash}
                      </a>
                    </Col>
                  </Row>
                )
              })}
            </div>
            <Button className='button-card' variant="primary" onClick={(e) => hideTxs(e)}>
              Hide
            </Button>
          </Card.Body>
        </Card>}
    </React.Fragment>
  );
}

export default LastBlockInfo;